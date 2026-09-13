// ============================================================
//  packages.js — Pathway Controller & Native Booking Engine
//  Brand: Laureign Studios · Official WhatsApp: 0790048905
//  Designed for High-Conversion Client Bookings & Free Samples
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Read hash on load to check if a specific category was requested directly
  const initialHash = (window.location.hash || "").replace("#", "").toLowerCase();
  let currentPathway = ["studio", "outdoor", "events", "commercial"].includes(initialHash) ? initialHash : null;
  let currentSubcat = "all";
  let searchQuery = "";
  let currentSort = "recommended";
  let activeTiers = {}; // { [pkgId]: optionIndex }
  let activeReels = {}; // { [pkgId]: boolean }
  let selectedAddOns = new Set();
  let modalState = {
    pkgId: null,
    optionIndex: 0
  };

  // Initialize active tiers to popular option or first option
  PACKAGES_DATA.forEach(pkg => {
    const defaultIdx = pkg.options.findIndex(o => o.popular);
    activeTiers[pkg.id] = defaultIdx >= 0 ? defaultIdx : 0;
  });

  // DOM Elements
  const packagesGrid = document.getElementById("packagesGrid");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const sortSelect = document.getElementById("sortSelect");
  const controlsBar = document.getElementById("packagesBrowse");
  const metaCountBar = document.querySelector(".meta-count-bar");
  const pathwayCards = document.querySelectorAll(".pathway-card");
  const pathwayToggleBtns = document.querySelectorAll(".pathway-toggle-btn");
  const subcategoryPillsWrap = document.getElementById("subcategoryPillsWrap");
  const addonsGrid = document.getElementById("addonsGrid");
  const calcSelectedCount = document.getElementById("calcSelectedCount");
  const calcTotalAmount = document.getElementById("calcTotalAmount");
  const calcBookWaBtn = document.getElementById("calcBookWaBtn");
  const faqsList = document.getElementById("faqsList");

  // Booking Modal Elements
  const bookingModal = document.getElementById("bookingModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalPkgName = document.getElementById("modalPkgName");
  const modalPkgMeta = document.getElementById("modalPkgMeta");
  const modalAddReelCheckbox = document.getElementById("modalAddReelCheckbox");
  const modalDateInput = document.getElementById("modalDateInput");
  const modalNameInput = document.getElementById("modalNameInput");
  const modalLocationSelect = document.getElementById("modalLocationSelect");
  const modalWaPreview = document.getElementById("modalWaPreview");
  const modalLaunchWaBtn = document.getElementById("modalLaunchWaBtn");
  const modalQuickSkip = document.getElementById("modalQuickSkip");

  // Samples Viewer Modal Elements
  const samplesModal = document.getElementById("samplesModal");
  const samplesModalCloseBtn = document.getElementById("samplesModalCloseBtn");
  const samplesModalTitle = document.getElementById("samplesModalTitle");
  const samplesModalDesc = document.getElementById("samplesModalDesc");
  const samplesGalleryGrid = document.getElementById("samplesGalleryGrid");
  const samplesBookWaBtn = document.getElementById("samplesBookWaBtn");

  // Lightbox Elements
  const sampleLightbox = document.getElementById("sampleLightbox");
  const sampleLightboxClose = document.getElementById("sampleLightboxClose");
  const sampleLightboxImg = document.getElementById("sampleLightboxImg");
  const sampleLightboxCaption = document.getElementById("sampleLightboxCaption");

  const formatMoney = (n) => Number(n).toLocaleString();

  const getActiveOption = (pkg) => {
    const idx = activeTiers[pkg.id] !== undefined ? activeTiers[pkg.id] : 0;
    return pkg.options[idx] || pkg.options[0];
  };

  // ------------------------------------------------------------
  // Render Sub-Category Pills for Active Pathway
  // ------------------------------------------------------------
  // ------------------------------------------------------------
  // Render Sub-Category Pills for Active Pathway
  // ------------------------------------------------------------
  function renderSubcategories() {
    if (!subcategoryPillsWrap) return;
    if (!currentPathway) {
      subcategoryPillsWrap.innerHTML = "";
      subcategoryPillsWrap.style.display = "none";
      return;
    }
    subcategoryPillsWrap.style.display = "flex";
    if (currentPathway === "all") {
      subcategoryPillsWrap.innerHTML = `
        <button type="button" class="subcat-pill subcat-pill-back" onclick="window.setPathwayExternal(null)" title="Return to Explore by Category" style="background:rgba(234,179,8,0.18);border-color:rgba(234,179,8,0.45);color:var(--gold-soft);font-weight:700;">
          ‹ Explore by Category
        </button>
        <button type="button" class="subcat-pill active" onclick="window.setPathwayExternal('all')">
          🌟 All 30 Packages
        </button>
        <button type="button" class="subcat-pill" onclick="window.setPathwayExternal('studio')">
          📸 11 Studio Sessions
        </button>
        <button type="button" class="subcat-pill" onclick="window.setPathwayExternal('outdoor')">
          🌿 7 Outdoor Sessions
        </button>
        <button type="button" class="subcat-pill" onclick="window.setPathwayExternal('events')">
          💍 7 Weddings &amp; Events
        </button>
        <button type="button" class="subcat-pill" onclick="window.setPathwayExternal('commercial')">
          🚀 5 Commercial Suites
        </button>
      `;
      return;
    }
    const pathwayObj = PATHWAYS.find(p => p.id === currentPathway);
    if (!pathwayObj) return;

    const backBtn = `
      <button type="button" class="subcat-pill subcat-pill-back" onclick="window.setPathwayExternal(null)" title="Return to Explore by Category" style="background:rgba(234,179,8,0.22);border-color:rgba(234,179,8,0.6);color:var(--gold-soft);font-weight:700;">
        ‹ Return to Categories
      </button>
    `;

    const pillsHtml = pathwayObj.subcategories.map(sub => {
      const isAct = sub.id === currentSubcat ? 'active' : '';
      return `
        <button type="button" class="subcat-pill ${isAct}" data-subcat="${sub.id}">
          ${sub.name}
        </button>
      `;
    }).join("");

    subcategoryPillsWrap.innerHTML = backBtn + pillsHtml;

    subcategoryPillsWrap.querySelectorAll(".subcat-pill[data-subcat]").forEach(btn => {
      btn.addEventListener("click", () => {
        subcategoryPillsWrap.querySelectorAll(".subcat-pill[data-subcat]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentSubcat = btn.dataset.subcat;
        if (typeof btn.scrollIntoView === "function") {
          btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
        renderPackages();
      });
    });
  }

  // ------------------------------------------------------------
  // Switch Pathway (Studio / Outdoor / Events / Commercial / Hub)
  // ------------------------------------------------------------
  function setPathway(pathwayId, doScroll) {
    if (!pathwayId || pathwayId === "hub") {
      currentPathway = null;
    } else {
      currentPathway = pathwayId;
    }
    currentSubcat = "all";

    // Update Pathway Gateway Cards
    pathwayCards.forEach(c => {
      c.classList.toggle("active", Boolean(currentPathway && c.dataset.pathway === currentPathway));
    });

    // Update Sticky Switcher Buttons
    pathwayToggleBtns.forEach(b => {
      if (!currentPathway) {
        b.classList.toggle("active", b.dataset.pathway === "hub");
      } else {
        b.classList.toggle("active", b.dataset.pathway === currentPathway);
      }
    });

    // Smoothly center active button in horizontal scroll strip
    const activeToggleBtn = Array.from(pathwayToggleBtns).find(b =>
      !currentPathway ? b.dataset.pathway === "hub" : b.dataset.pathway === currentPathway
    );
    if (activeToggleBtn && typeof activeToggleBtn.scrollIntoView === "function") {
      activeToggleBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    renderSubcategories();
    renderPackages();

    if (doScroll) {
      const target = document.getElementById("packagesBrowse") || packagesGrid;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  // Global helper for gateway tiles and reset buttons
  window.setPathwayExternal = (pid) => {
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.style.display = "none";
    const targetPid = (!pid || pid === "hub") ? null : pid;
    setPathway(targetPid, Boolean(targetPid));
  };

  // ------------------------------------------------------------
  // Render Packages Grid
  // ------------------------------------------------------------
  function renderPackages() {
    if (controlsBar) controlsBar.style.display = "block";

    const hubBannerHtml = `
      <div class="gateway-hub-container" style="grid-column: 1 / -1; padding: 4px 0 20px;">
        <div class="gateway-hub-card">
          <div class="gateway-hub-badge">✨ Explore by Category</div>
          <h3 class="gateway-hub-title">What type of photoshoot are you planning?</h3>
          <p class="gateway-hub-sub">
            Tap any category below to filter instantly, or scroll down to browse our complete 30-package rate card:
          </p>

          <div class="gateway-hub-grid">

            <!-- 1. Studio Sessions -->
            <div class="gateway-hub-tile" onclick="window.setPathwayExternal('studio')">
              <div class="tile-top-row">
                <span class="tile-icon-bubble">📸</span>
                <span class="tile-badge">11 In-Studio Sessions</span>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">Studio &amp; Portrait Sessions</h4>
                <p class="tile-desc">Graduation Milestones, Executive Headshots, White Shirt, Silk Wrap, Studio Birthdays, Maternity &amp; Family.</p>
                <div class="tile-rate">From KSh 2,000 <span class="tile-rate-sub">· Solo from KSh 300</span></div>
              </div>
              <div class="tile-action">
                <span>Explore Studio Packages</span>
                <span class="apple-chevron">›</span>
              </div>
            </div>

            <!-- 2. Outdoor Sessions -->
            <div class="gateway-hub-tile highlight" onclick="window.setPathwayExternal('outdoor')">
              <div class="tile-top-row">
                <span class="tile-icon-bubble">🌿</span>
                <span class="tile-badge badge-gold">Golden Hour &amp; Nature</span>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">Outdoor &amp; Natural Light</h4>
                <p class="tile-desc">Natural Light Headshots, Garden Birthdays, Golden Hour Baby Bump, Family Picnics &amp; Pre-Wedding Stories.</p>
                <div class="tile-rate rate-gold">From KSh 1,500 <span class="tile-rate-sub">· On-Location Shoots</span></div>
              </div>
              <div class="tile-action">
                <span>Explore Outdoor Packages</span>
                <span class="apple-chevron">›</span>
              </div>
            </div>

            <!-- 3. Weddings & Events -->
            <div class="gateway-hub-tile" onclick="window.setPathwayExternal('events')">
              <div class="tile-top-row">
                <span class="tile-icon-bubble">💍</span>
                <span class="tile-badge">7 Event Coverages</span>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">Weddings &amp; Event Coverage</h4>
                <p class="tile-desc">Full-Day Holy Matrimony, Traditional Ruracio, Birthday Parties, Convocation Walk, Galas &amp; Memorials.</p>
                <div class="tile-rate">From KSh 25,000 <span class="tile-rate-sub">· Multi-Cam &amp; 4K Cinema</span></div>
              </div>
              <div class="tile-action">
                <span>Explore Event Packages</span>
                <span class="apple-chevron">›</span>
              </div>
            </div>

            <!-- 4. Commercial & Brand -->
            <div class="gateway-hub-tile" onclick="window.setPathwayExternal('commercial')">
              <div class="tile-top-row">
                <span class="tile-icon-bubble">🚀</span>
                <span class="tile-badge">5 Business Suites</span>
              </div>
              <div class="tile-content">
                <h4 class="tile-title">Commercial &amp; Brand Growth</h4>
                <p class="tile-desc">E-Commerce Product Photography, Luxury Hotels &amp; Resorts, Corporate Branding &amp; Graphic Design.</p>
                <div class="tile-rate">From KSh 2,500 <span class="tile-rate-sub">· Commercial Licensing</span></div>
              </div>
              <div class="tile-action">
                <span>Explore Commercial Packages</span>
                <span class="apple-chevron">›</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    // 1. Initial State / Hub Mode: No pathway chosen and not searching -> ONLY SHOW HUB
    if (!currentPathway && searchQuery.trim() === "") {
      if (metaCountBar) metaCountBar.style.display = "none";
      const floatingReturnBtn = document.getElementById("floatingCategoryReturn");
      if (floatingReturnBtn) floatingReturnBtn.style.display = "none";
      packagesGrid.innerHTML = hubBannerHtml;
      return;
    }

    // 2. Category Selected or Searching
    if (metaCountBar) metaCountBar.style.display = "flex";

    // Show either filtered category list or all packages
    let list = (currentPathway && currentPathway !== "all")
      ? PACKAGES_DATA.filter(pkg => pkg.pathway === currentPathway)
      : [...PACKAGES_DATA];

    // Filter by subcategory
    if (currentSubcat !== "all") {
      list = list.filter(pkg => pkg.subcat === currentSubcat);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(pkg => {
        const matchTitle = pkg.title.toLowerCase().includes(q);
        const matchTagline = pkg.tagline.toLowerCase().includes(q);
        const matchCat = (pkg.catLabel || "").toLowerCase().includes(q);
        const matchOptions = pkg.options.some(o =>
          o.name.toLowerCase().includes(q) ||
          o.summary.toLowerCase().includes(q) ||
          (o.inclusions && o.inclusions.some(inc => inc.toLowerCase().includes(q)))
        );
        return matchTitle || matchTagline || matchCat || matchOptions;
      });
    }

    if (currentSort === "price-low") {
      list.sort((a, b) => getActiveOption(a).price - getActiveOption(b).price);
    } else if (currentSort === "price-high") {
      list.sort((a, b) => getActiveOption(b).price - getActiveOption(a).price);
    }

    const pathwayName = (PATHWAYS.find(p => p.id === currentPathway) || {}).title || "Selected";
    if (resultsCount) {
      if (searchQuery.trim() !== "") {
        resultsCount.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span>Found <b>${list.length}</b> matching shoot${list.length === 1 ? '' : 's'} for "${searchQuery}"</span>
            <button type="button" class="btn-reset-category" onclick="document.getElementById('searchClearBtn').click()">‹ Clear Search</button>
            <button type="button" class="btn-reset-category" onclick="window.setPathwayExternal(null)">‹ Back to Explore by Category</button>
          </div>
          <span style="font-size:12.5px; color:var(--head-sub); font-weight:500;">Upfront Pricing · RAW Images @ KSh 150</span>
        `;
      } else if (currentPathway && currentPathway !== "all") {
        resultsCount.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span>Showing <b>${list.length}</b> ${pathwayName} Package${list.length === 1 ? '' : 's'}</span>
            <button type="button" class="btn-reset-category" onclick="window.setPathwayExternal(null)">‹ Back to Explore by Category</button>
          </div>
          <span style="font-size:12.5px; color:var(--head-sub); font-weight:500;">Upfront Pricing · RAW Images @ KSh 150</span>
        `;
      } else {
        resultsCount.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span>Showing all <b>${list.length}</b> official session packages</span>
            <button type="button" class="btn-reset-category" onclick="window.setPathwayExternal(null)">‹ Back to Explore by Category</button>
          </div>
          <span style="font-size:12.5px; color:var(--head-sub); font-weight:500;">Upfront Pricing · RAW Images @ KSh 150</span>
        `;
      }
    }

    if (list.length === 0) {
      packagesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <h3 style="font-family: var(--font-display); font-size: 24px; color: var(--head); margin-bottom: 8px;">No packages found</h3>
          <p style="color: var(--muted); margin-bottom: 20px;">No packages matched "${searchQuery}".</p>
          <div style="display:flex; justify-content:center; gap:10px;">
            <button type="button" class="btn-book-wa" style="max-width: 220px;" onclick="document.getElementById('searchClearBtn').click()">Clear Search</button>
            <button type="button" class="btn-reset-category" style="padding:10px 18px; font-size:14px;" onclick="window.setPathwayExternal(null)">‹ Back to Category Hub</button>
          </div>
        </div>
      `;
      return;
    }

    function getPackageShowcaseUrl(pkg) {
      if (pkg.id === "graduation-shoot") return "graduation-shoot.html";
      if (pkg.id === "indoor-headshots" || pkg.id === "outdoor-headshots") return "headshots.html";
      if (pkg.id === "indoor-shirt-shoot" || pkg.id === "outdoor-shirt-shoot" || pkg.id === "shirt-reels") return "shirt-shoot.html";
      if (pkg.id === "silk-wrap") return "wrap-shoot.html";
      if (pkg.id === "traditional-creative") return "portrait-shoot.html";
      if (pkg.id === "baby-bump" || pkg.id === "outdoor-baby-bump") return "maternity-shoot.html";
      if (pkg.id === "birthday-shoot" || pkg.id === "outdoor-birthday-shoot") return "birthday-shoots.html";
      if (pkg.id === "kids-photoshoot" || pkg.id === "kids-shoot" || pkg.id === "kids-outdoor-shoot") return "kids-shoot.html";
      if (pkg.id === "couple-shoot") return "couple-shoot.html";
      if (pkg.id === "family-shoot" || pkg.id === "outdoor-family-shoot") return "family-shoot.html";
      if (pkg.id === "pre-wedding") return "pre-wedding-shoot.html";
      if (pkg.id === "wedding-coverage") return "wedding-shoot.html";
      if (pkg.id === "traditional-wedding") return "traditional-wedding.html";
      if (pkg.id === "burial-coverage") return "burials.html";
      if (pkg.id === "birthday-events") return "birthday-events.html";
      if (pkg.id === "graduation-events") return "graduation-events.html";
      if (pkg.id === "corporate-event") return "corporate-events.html";
      if (pkg.id === "hotel-events") return "hotel-events.html";
      if (pkg.id === "product-shoot") return "product-shoot.html";
      if (pkg.id === "hotel-hospitality") return "hotel-shoot.html";
      if (pkg.id === "boudoir-shoot") return "boudoir-shoot.html";
      if (pkg.id === "model-portfolio") return "model-portfolio.html";
      if (pkg.id === "newborn-shoot") return "newborn-shoot.html";
      if (pkg.id === "club-events") return "club-events.html";
      if (pkg.id === "school-events") return "school-events.html";
      if (pkg.id === "fun-club-events") return "fun-club-events.html";
      if (pkg.id === "events") return "events.html";
      if (pkg.id === "corporate-branding") return "corporate-branding.html";
      if (pkg.id === "graphic-starter" || pkg.id === "graphic-growth") return "commercial-branding.html";
      return "graduation-shoot.html";
    }

    const cardsHtml = list.map(pkg => {
      const lowestOpt = pkg.options[0] || {};
      const targetUrl = getPackageShowcaseUrl(pkg);
      const isStudioOrOutdoor = pkg.pathway === "studio" || pkg.pathway === "outdoor";
      const hasReel = !!activeReels[pkg.id];
      const basePrice = lowestOpt.price || 0;
      const currentPrice = hasReel ? basePrice + 1500 : basePrice;

      const waText = hasReel
        ? `Hello Laureign Studios! 🎬 I want to book ${pkg.title} WITH the 45s–60s 4K Video Reel (+KSh 1,500). Total: KSh ${formatMoney(currentPrice)} 📸✨`
        : `Hello Laureign Studios! I want to inquire about ${pkg.title} 📸`;
      const waUrl = `https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

      return `
        <article class="pkg-card mount-card ${hasReel ? 'has-reel-selected' : ''}" id="pkg-${pkg.id}">
          <!-- Clean Meta Row: Prevents text overlap on mobile and all screen sizes -->
          <div class="pkg-top-meta-row">
            <span class="mount-tag-pill">${pkg.catLabel}</span>
            ${pkg.badge ? `<span class="mount-discount-pill">${pkg.badge}</span>` : ''}
          </div>
          <h4 class="mount-name"><a href="${targetUrl}">${pkg.title}</a></h4>
          <div class="mount-dimensions">
            <span>⏱️ ${pkg.turnaround}</span>
            <span>· RAW Proofs @ KSh 150</span>
          </div>

          <!-- Inset Photo Preview Frame with High-Res Zoom Lightbox Trigger -->
          <div class="mount-preview-frame js-card-zoom-trigger" data-pkg-id="${pkg.id}" style="cursor:pointer;" title="Click to enlarge & zoom photo for ${pkg.title}">
            <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
            <span class="mount-zoom-badge">🔍 Zoom Photo</span>
          </div>

          <!-- Inset Price Box matching Photo Mounts -->
          <div class="mount-price-box">
            <div class="mount-price-row">
              <span class="mount-price-lbl">Starting Package Rate</span>
              <div>
                <span style="font-size:12px;color:var(--muted);margin-right:4px;">From</span>
                <span class="mount-new-price" id="pkg-price-${pkg.id}">${PACKAGES_CONFIG.currency}${formatMoney(currentPrice)}</span>
              </div>
            </div>
            ${hasReel ? `<div class="mount-reel-included-badge">✨ Shoot + 4K Video Reel Included</div>` : ''}
          </div>

          <!-- DEDICATED REEL BOX FOR STUDIO & OUTDOOR PACKAGES -->
          ${isStudioOrOutdoor ? `
          <div class="card-reel-box ${hasReel ? 'reel-selected' : ''}" id="reel-box-${pkg.id}">
            <div class="reel-box-top">
              <div class="reel-box-title-group">
                <span class="reel-box-icon">🎬</span>
                <span class="reel-box-title">Optional 4K Video Reel</span>
              </div>
              <span class="reel-box-rate-badge">+KSh 1,500</span>
            </div>

            <p class="reel-box-text">
              45s–60s vertical video cut to trending audio for TikTok, Instagram &amp; Status.
            </p>

            <div class="reel-box-action-row">
              <label class="reel-box-checkbox-label" for="reel-toggle-${pkg.id}" title="Click to include 4K Video Reel">
                <input type="checkbox" class="reel-box-input js-card-reel-toggle" id="reel-toggle-${pkg.id}" data-pkg-id="${pkg.id}" ${hasReel ? 'checked' : ''}>
                <span class="reel-box-custom-check"></span>
                <span class="reel-box-toggle-text">${hasReel ? '✓ Reel Added (+1,500)' : '+ Add Reel to Shoot'}</span>
              </label>

              <button type="button" class="btn-reel-preview js-open-reels-modal" data-pkg-id="${pkg.id}" data-pkg-title="${pkg.title}" title="Watch sample vertical video reels">
                <span>▶ View Reel Samples</span>
              </button>
            </div>
          </div>
          ` : `
          <div class="mount-reel-option-strip" title="Optional 45s-60s Reel Add-on available for this shoot">
            <span>🎬</span>
            <span>Reel Option: <b>+KSh 1,500</b></span>
          </div>
          `}

          <p class="mount-sub-desc">${pkg.tagline}</p>

          <div class="pkg-card-actions" style="margin-top:auto;display:flex;flex-direction:column;gap:8px;">
            <a href="${targetUrl}${hasReel ? '?reel=1' : ''}" class="btn-open-package-main" style="margin-top:0;">
              <span>View Packages &amp; Rates</span>
              <span class="btn-arrow" style="font-size:16px; margin-left:3px;">›</span>
            </a>
            <a href="${waUrl}" id="wa-btn-${pkg.id}" target="_blank" rel="noopener" class="btn-card-wa-clean" style="margin-top:0;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c2.1.8 2.1.5 2.5.5a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.4-.3z"/></svg>
              <span id="wa-btn-text-${pkg.id}">${hasReel ? 'Book Shoot + Reel on WhatsApp' : 'Quick WhatsApp Inquiry'}</span>
            </a>
          </div>
        </article>
      `;
    }).join("");

    const pathwayObj = PATHWAYS.find(p => p.id === currentPathway);
    const pathwayIcon = pathwayObj ? pathwayObj.icon : "✨";

    let topBannerHtml = "";
    let bottomCardHtml = "";

    if (searchQuery.trim() !== "") {
      topBannerHtml = `
        <div class="category-header-banner">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn-return-prominent" onclick="document.getElementById('searchClearBtn').click()" title="Clear Search">
              <span style="font-size:18px; font-weight:700; line-height:1;">‹</span>
              <span>Clear Search</span>
            </button>
            <button type="button" class="btn-return-prominent" onclick="window.setPathwayExternal(null)" title="Return to Category Hub">
              <span style="font-size:18px; font-weight:700; line-height:1;">‹</span>
              <span>Return to Categories</span>
            </button>
            <div>
              <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:var(--gold-soft); font-weight:700;">Search Results</div>
              <h3 style="font-family:var(--font-display); font-size:22px; color:var(--head); margin:2px 0 0; line-height:1.2;">Found ${list.length} matching packages for "${searchQuery}"</h3>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button type="button" class="btn-reset-category" onclick="window.setPathwayExternal(null)">‹ Category Hub</button>
          </div>
        </div>
      `;

      bottomCardHtml = `
        <div class="category-bottom-return-card">
          <span style="display:inline-block; font-size:28px; margin-bottom:8px;">✨</span>
          <h3 style="font-family:var(--font-display); font-size:22px; color:var(--head); margin-bottom:6px;">Done with your search?</h3>
          <p style="font-size:13.5px; color:var(--muted); max-width:480px; margin-bottom:18px;">Return to our Category Hub to browse packages organized by category.</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="btn-return-prominent-large" onclick="window.setPathwayExternal(null)">
              <span style="font-size:18px; font-weight:700;">‹</span>
              <span>Return to Explore by Category</span>
            </button>
            <button type="button" class="btn-scroll-top-cat" onclick="document.getElementById('packagesBrowse').scrollIntoView({behavior:'smooth'})">
              <span>↑ Back to Top</span>
            </button>
          </div>
        </div>
      `;
    } else if (currentPathway) {
      topBannerHtml = `
        <div class="category-header-banner">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn-return-prominent" onclick="window.setPathwayExternal(null)" title="Return to Explore by Category">
              <span style="font-size:18px; font-weight:700; line-height:1;">‹</span>
              <span>Return to Categories</span>
            </button>
            <div>
              <div style="font-size:11px; text-transform:uppercase; letter-spacing:1px; color:var(--gold-soft); font-weight:700;">Explore Categories › ${pathwayName}</div>
              <h3 style="font-family:var(--font-display); font-size:22px; color:var(--head); margin:2px 0 0; line-height:1.2;">${pathwayIcon} ${pathwayName} (${list.length} Packages)</h3>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <span style="font-size:12px; color:var(--muted); font-weight:500;">Upfront Pricing · RAW Proofs @ KSh 150</span>
            <button type="button" class="btn-reset-category" onclick="window.setPathwayExternal(null)" title="Back to Category Hub">
              ‹ All Categories
            </button>
          </div>
        </div>
      `;

      bottomCardHtml = `
        <div class="category-bottom-return-card">
          <span style="display:inline-block; font-size:28px; margin-bottom:8px;">✨</span>
          <h3 style="font-family:var(--font-display); font-size:22px; color:var(--head); margin-bottom:6px;">Finished exploring ${pathwayName}?</h3>
          <p style="font-size:13.5px; color:var(--muted); max-width:480px; margin-bottom:18px;">You've viewed all ${list.length} packages in <b>${pathwayName}</b>. Return to our Category Hub to explore our other shoots and sessions.</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="btn-return-prominent-large" onclick="window.setPathwayExternal(null)">
              <span style="font-size:18px; font-weight:700;">‹</span>
              <span>Return to Explore by Category</span>
            </button>
            <button type="button" class="btn-scroll-top-cat" onclick="document.getElementById('packagesBrowse').scrollIntoView({behavior:'smooth'})">
              <span>↑ Back to Top of ${pathwayName}</span>
            </button>
          </div>
        </div>
      `;
    }

    packagesGrid.innerHTML = topBannerHtml + cardsHtml + bottomCardHtml;

    // Toggle floating return button on screen
    const floatingReturnBtn = document.getElementById("floatingCategoryReturn");
    if (floatingReturnBtn) {
      floatingReturnBtn.style.display = (currentPathway || searchQuery.trim() !== "") ? "inline-flex" : "none";
    }

    attachCardListeners();
  }

  let currentRenderedPackages = [];

  function attachCardListeners() {
    // Tier button clicks
    document.querySelectorAll(".pkg-tier-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const pkgId = e.currentTarget.dataset.pkgId;
        const optIdx = parseInt(e.currentTarget.dataset.optIdx, 10);
        activeTiers[pkgId] = optIdx;
        renderPackages();
      });
    });

    // Book via WhatsApp button clicks
    document.querySelectorAll(".js-book-wa").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const pkgId = e.currentTarget.dataset.pkgId;
        const optIdx = parseInt(e.currentTarget.dataset.optIdx, 10);
        openBookingModal(pkgId, optIdx);
      });
    });

    // See Free Samples button clicks
    document.querySelectorAll(".js-open-samples").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const pkgId = e.currentTarget.dataset.pkgId;
        openSamplesModal(pkgId);
      });
    });

    // Zoomable Image Preview Frame clicks
    document.querySelectorAll(".js-card-zoom-trigger").forEach(frame => {
      frame.addEventListener("click", (e) => {
        e.stopPropagation();
        const pkgId = frame.dataset.pkgId;
        const items = currentRenderedPackages.map(p => ({
          url: p.image,
          title: p.title,
          catLabel: p.catLabel,
          turnaround: p.turnaround,
          price: (p.options[0] || {}).price || 0,
          targetUrl: getPackageShowcaseUrl(p)
        }));
        const clickedIdx = currentRenderedPackages.findIndex(p => p.id === pkgId);
        openLightbox(items, clickedIdx !== -1 ? clickedIdx : 0);
      });
    });

    // Card Reel Checkbox Toggles
    document.querySelectorAll(".js-card-reel-toggle").forEach(chk => {
      chk.addEventListener("change", (e) => {
        const pkgId = e.target.dataset.pkgId;
        const isChecked = e.target.checked;
        setPackageReelOption(pkgId, isChecked);
      });
    });

    // Re-bind reel modal triggers if reels-modal.js loaded
    if (typeof window.bindReelsModalTriggers === "function") {
      window.bindReelsModalTriggers();
    }
  }

  // Live Reel Option Controller
  function setPackageReelOption(pkgId, isChecked) {
    activeReels[pkgId] = isChecked;
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    if (!pkg) return;

    const lowestOpt = pkg.options[0] || {};
    const basePrice = lowestOpt.price || 0;
    const currentPrice = isChecked ? basePrice + 1500 : basePrice;

    // Update Price display
    const priceEl = document.getElementById(`pkg-price-${pkgId}`);
    if (priceEl) {
      priceEl.textContent = `${PACKAGES_CONFIG.currency}${formatMoney(currentPrice)}`;
    }

    // Update Card & Box classes
    const reelBox = document.getElementById(`reel-box-${pkgId}`);
    const cardEl = document.getElementById(`pkg-${pkgId}`);
    const toggleInput = document.getElementById(`reel-toggle-${pkgId}`);

    if (cardEl) {
      cardEl.classList.toggle("has-reel-selected", isChecked);
    }

    if (toggleInput && toggleInput.checked !== isChecked) {
      toggleInput.checked = isChecked;
    }

    if (reelBox) {
      reelBox.classList.toggle("reel-selected", isChecked);
      const textEl = reelBox.querySelector(".reel-box-toggle-text");
      if (textEl) {
        textEl.textContent = isChecked ? "✓ Reel Added (+1,500)" : "+ Add Reel to Shoot";
      }
    }

    // Update WhatsApp Button
    const waBtn = document.getElementById(`wa-btn-${pkgId}`);
    const waBtnText = document.getElementById(`wa-btn-text-${pkgId}`);
    if (waBtn) {
      const waText = isChecked
        ? `Hello Laureign Studios! 🎬 I want to book ${pkg.title} WITH the 45s–60s 4K Video Reel (+KSh 1,500). Total: KSh ${formatMoney(currentPrice)} 📸✨`
        : `Hello Laureign Studios! I want to inquire about ${pkg.title} 📸`;
      waBtn.href = `https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    }
    if (waBtnText) {
      waBtnText.textContent = isChecked ? "Book Shoot + Reel on WhatsApp" : "Quick WhatsApp Inquiry";
    }

    // Add or remove Mount badge
    const priceBox = cardEl ? cardEl.querySelector(".mount-price-box") : null;
    if (priceBox) {
      let badge = priceBox.querySelector(".mount-reel-included-badge");
      if (isChecked && !badge) {
        badge = document.createElement("div");
        badge.className = "mount-reel-included-badge";
        badge.textContent = "✨ Shoot + 4K Video Reel Included";
        priceBox.appendChild(badge);
      } else if (!isChecked && badge) {
        badge.remove();
      }
    }
  }
  window.setPackageReelOption = setPackageReelOption;

  // ------------------------------------------------------------
  // Free Samples Viewer Modal & Lightbox
  // ------------------------------------------------------------
  function openSamplesModal(pkgId) {
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    if (!pkg) return;

    if (samplesModalTitle) {
      samplesModalTitle.textContent = `${pkg.title} · Photo Samples`;
    }
    if (samplesModalDesc) {
      samplesModalDesc.innerHTML = `Inspect real studio lighting, composition and skin retouching. Click any photo to view in full size; tap anywhere or ✕ to exit.`;
    }

    if (samplesGalleryGrid) {
      const samples = pkg.samples || [];
      if (samples.length === 0) {
        samplesGalleryGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--muted);">
            <div style="font-size: 32px; margin-bottom: 8px;">📷</div>
            <p>Photo samples available directly on WhatsApp.</p>
          </div>
        `;
      } else {
        const photoSamples = samples.filter(s => s.type !== 'video');
        const sampleItems = photoSamples.map((s, sIdx) => ({
          url: s.url,
          title: s.title || `${pkg.title} · Sample ${sIdx + 1}`,
          catLabel: pkg.catLabel,
          price: (pkg.options[0] || {}).price || 0,
          targetUrl: getPackageShowcaseUrl(pkg)
        }));

        if (samplesModalDesc) {
          samplesModalDesc.innerHTML = `
            <span>Inspect real studio lighting, composition and skin retouching. Tap any photo to swap and swipe through in full screen.</span>
            ${photoSamples.length > 0 ? `<button type="button" id="btnStartSlideshow" style="margin-top:6px; display:inline-flex; align-items:center; gap:6px; background:var(--gold-soft); color:#000000; border:none; padding:5px 14px; border-radius:999px; font-size:12px; font-weight:700; cursor:pointer;"><span>▶ Open Fullscreen Viewer (Swipe to Next)</span></button>` : ''}
          `;
          const btnSlideshow = document.getElementById("btnStartSlideshow");
          if (btnSlideshow) {
            btnSlideshow.onclick = () => {
              openLightbox(sampleItems, 0);
            };
          }
        }

        samplesGalleryGrid.innerHTML = samples.map((s, idx) => {
          if (s.type === 'video') {
            return `
              <div class="sample-item-card" data-idx="${idx}">
                <video src="${s.url}" class="sample-item-video" muted playsinline loop onmouseover="this.play()" onmouseout="this.pause()" controls></video>
                <div class="sample-item-overlay">
                  <span class="sample-item-title">Video Reel</span>
                </div>
              </div>
            `;
          }
          return `
            <div class="sample-item-card js-lightbox-trigger" data-url="${s.url}">
              <img src="${s.url}" alt="Photo Sample" class="sample-item-thumb" loading="lazy">
              <div class="sample-item-zoom-icon">🔍</div>
            </div>
          `;
        }).join("");

        // Attach lightbox zoom on click with exact matching photo index
        let pIdx = 0;
        samples.forEach((s) => {
          if (s.type !== 'video') {
            const currentPIdx = pIdx++;
            const itemEl = samplesGalleryGrid.querySelector(`.js-lightbox-trigger[data-url="${s.url}"]`);
            if (itemEl) {
              itemEl.onclick = (e) => {
                e.stopPropagation();
                openLightbox(sampleItems, currentPIdx);
              };
            }
          }
        });
      }
    }

    // Set WhatsApp Booking CTA inside the sample modal
    if (samplesBookWaBtn) {
      samplesBookWaBtn.onclick = () => {
        const text = `👋 Hello ${PACKAGES_CONFIG.studioName}!\n\nI just checked your client samples for "${pkg.title}" on your packages landing page, and I love the quality!\n\nI would like to inquire about booking availability and securing my date. 📸`;
        window.open(`https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      };
    }

    if (samplesModal) samplesModal.classList.add("open");
  }

  function closeSamplesModal() {
    if (samplesModal) samplesModal.classList.remove("open");
  }

  // ------------------------------------------------------------
  // Zoomable Lightbox with Next & Prev Navigation
  // ------------------------------------------------------------
  const sampleLightboxCounter = document.getElementById("sampleLightboxCounter");
  const sampleLightboxCtaBar = document.getElementById("sampleLightboxCtaBar");
  const sampleLightboxPrev = document.getElementById("sampleLightboxPrev");
  const sampleLightboxNext = document.getElementById("sampleLightboxNext");
  const sampleLightboxZoomIn = document.getElementById("sampleLightboxZoomIn");
  const sampleLightboxZoomOut = document.getElementById("sampleLightboxZoomOut");
  const sampleLightboxResetZoom = document.getElementById("sampleLightboxResetZoom");
  const sampleLightboxImgWrapper = document.getElementById("sampleLightboxImgWrapper");

  let lightboxItems = [];
  let lightboxIndex = 0;
  let lightboxZoom = 1;
  let isLightboxDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  function openLightbox(items, startIndex = 0) {
    if (!sampleLightbox || !items || items.length === 0) return;
    lightboxItems = items;
    lightboxIndex = Math.max(0, Math.min(startIndex, items.length - 1));
    lightboxZoom = 1;
    sampleLightbox.classList.add("open");
    sampleLightbox.setAttribute("aria-hidden", "false");
    updateLightboxView();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!sampleLightbox) return;
    sampleLightbox.classList.remove("open");
    sampleLightbox.setAttribute("aria-hidden", "true");
    lightboxZoom = 1;
    if (sampleLightboxImg) {
      sampleLightboxImg.style.transform = "scale(1)";
      sampleLightboxImg.classList.remove("zoomed");
    }
    document.body.style.overflow = "";
  }

  function updateLightboxView() {
    if (!lightboxItems || lightboxItems.length === 0) return;
    const current = lightboxItems[lightboxIndex];
    if (!current) return;

    if (sampleLightboxImg) {
      sampleLightboxImg.src = current.url;
      sampleLightboxImg.alt = current.title || "Photo Sample";
      setLightboxZoom(1);
    }

    if (sampleLightboxCounter) {
      sampleLightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
    }

    if (sampleLightboxCaption) {
      sampleLightboxCaption.innerHTML = `
        <div style="font-size:15.5px;font-weight:700;color:#ffffff;margin-bottom:2px;">${current.title || ""}</div>
        ${current.catLabel ? `<div style="font-size:12px;color:var(--gold-soft);">${current.catLabel} ${current.price ? `· From KSh ${Number(current.price).toLocaleString()}` : ''}</div>` : ''}
      `;
    }

    if (sampleLightboxCtaBar) {
      let ctaHtml = "";
      if (current.targetUrl) {
        ctaHtml += `
          <a href="${current.targetUrl}" class="lightbox-btn-view">
            <span>View Packages &amp; Rates</span>
            <span style="font-size:15px;margin-left:2px;">›</span>
          </a>
        `;
      }
      const waTitle = current.title || "photography packages";
      const waMsg = encodeURIComponent(`👋 Hello ${PACKAGES_CONFIG.studioName}!\n\nI am viewing your photo preview for "${waTitle}" and would like to inquire about booking availability and rates! 📸`);
      ctaHtml += `
        <a href="https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener" class="lightbox-btn-wa">
          <span>Book on WhatsApp</span>
        </a>
      `;
      sampleLightboxCtaBar.innerHTML = ctaHtml;
    }

    if (sampleLightboxPrev) sampleLightboxPrev.style.display = lightboxItems.length > 1 ? "flex" : "none";
    if (sampleLightboxNext) sampleLightboxNext.style.display = lightboxItems.length > 1 ? "flex" : "none";
  }

  function lightboxNext() {
    if (lightboxItems.length <= 1) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
    updateLightboxView();
  }

  function lightboxPrev() {
    if (lightboxItems.length <= 1) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightboxView();
  }

  function setLightboxZoom(level) {
    lightboxZoom = Math.max(1, Math.min(level, 3));
    if (!sampleLightboxImg) return;
    sampleLightboxImg.style.transform = `scale(${lightboxZoom})`;
    if (lightboxZoom > 1) {
      sampleLightboxImg.classList.add("zoomed");
    } else {
      sampleLightboxImg.classList.remove("zoomed");
    }
    if (sampleLightboxResetZoom) {
      sampleLightboxResetZoom.textContent = `${Math.round(lightboxZoom * 100)}%`;
    }
  }

  function toggleLightboxZoom() {
    setLightboxZoom(lightboxZoom === 1 ? 2 : 1);
  }

  if (sampleLightboxNext) sampleLightboxNext.addEventListener("click", (e) => { e.stopPropagation(); lightboxNext(); });
  if (sampleLightboxPrev) sampleLightboxPrev.addEventListener("click", (e) => { e.stopPropagation(); lightboxPrev(); });
  if (sampleLightboxClose) sampleLightboxClose.addEventListener("click", closeLightbox);

  if (sampleLightboxZoomIn) sampleLightboxZoomIn.addEventListener("click", (e) => { e.stopPropagation(); setLightboxZoom(lightboxZoom + 0.5); });
  if (sampleLightboxZoomOut) sampleLightboxZoomOut.addEventListener("click", (e) => { e.stopPropagation(); setLightboxZoom(lightboxZoom - 0.5); });
  if (sampleLightboxResetZoom) sampleLightboxResetZoom.addEventListener("click", (e) => { e.stopPropagation(); setLightboxZoom(1); });

  if (sampleLightboxImg) {
    sampleLightboxImg.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      toggleLightboxZoom();
    });

    // Tap left 35% of image for Prev, right 35% for Next
    sampleLightboxImg.addEventListener("click", (e) => {
      if (lightboxZoom > 1) return;
      const rect = sampleLightboxImg.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX < rect.width * 0.35) {
        lightboxPrev();
      } else if (clickX > rect.width * 0.65) {
        lightboxNext();
      }
    });
  }

  // Fluid Touch Swipe on Mobile for Lightbox
  if (sampleLightbox) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    sampleLightbox.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
      }
    }, { passive: true });

    sampleLightbox.addEventListener("touchmove", (e) => {
      touchMoved = true;
    }, { passive: true });

    sampleLightbox.addEventListener("touchend", (e) => {
      if (lightboxZoom > 1 || !touchMoved) return;
      if (e.changedTouches.length === 1) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        // Natural thumb swipe: horizontal movement greater than vertical, at least 30px
        if (Math.abs(dx) > 30 && Math.abs(dx) > Math.abs(dy) * 0.6) {
          if (dx < 0) {
            lightboxNext();
          } else {
            lightboxPrev();
          }
        }
      }
    }, { passive: true });

    // Mouse drag swipe on Desktop
    sampleLightbox.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      isLightboxDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    });

    window.addEventListener("mouseup", (e) => {
      if (!isLightboxDragging) return;
      isLightboxDragging = false;
      if (lightboxZoom > 1) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 0.6) {
        if (dx < 0) {
          lightboxNext();
        } else {
          lightboxPrev();
        }
      }
    });

    sampleLightbox.addEventListener("click", (e) => {
      if (e.target === sampleLightbox || e.target === sampleLightboxImgWrapper) {
        closeLightbox();
      }
    });
  }

  if (samplesModalCloseBtn) samplesModalCloseBtn.addEventListener("click", closeSamplesModal);
  if (samplesModal) {
    samplesModal.addEventListener("click", (e) => {
      if (e.target === samplesModal) closeSamplesModal();
    });
  }

  // Keyboard Navigation for Lightbox & Modals
  document.addEventListener("keydown", (e) => {
    if (sampleLightbox && sampleLightbox.classList.contains("open")) {
      if (e.key === "ArrowRight") {
        lightboxNext();
      } else if (e.key === "ArrowLeft") {
        lightboxPrev();
      } else if (e.key === "+" || e.key === "=") {
        setLightboxZoom(lightboxZoom + 0.5);
      } else if (e.key === "-") {
        setLightboxZoom(lightboxZoom - 0.5);
      } else if (e.key === "Escape") {
        closeLightbox();
      }
      return;
    }
    if (e.key === "Escape") {
      closeSamplesModal();
      closeModal();
    }
  });

  // ------------------------------------------------------------
  // Add-ons & Live Total Estimator
  // ------------------------------------------------------------
  function renderAddOns() {
    if (!addonsGrid) return;
    addonsGrid.innerHTML = ADD_ONS_LIST.map(item => {
      const isSelected = selectedAddOns.has(item.id);
      return `
        <div class="addon-card ${isSelected ? 'selected' : ''}" data-addon-id="${item.id}">
          <div class="addon-checkbox">
            <svg viewBox="0 0 12 10" width="12" height="10">
              <polyline points="1.5 5.5 4.5 8.5 10.5 1.5"></polyline>
            </svg>
          </div>
          <div class="addon-info">
            <div class="addon-title-row">
              <span class="addon-name">${item.name}</span>
              <span class="addon-price">+${PACKAGES_CONFIG.currency}${formatMoney(item.price)}</span>
            </div>
            <p class="addon-desc">${item.desc}</p>
          </div>
        </div>
      `;
    }).join("");

    document.querySelectorAll(".addon-card").forEach(card => {
      card.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.addonId;
        if (selectedAddOns.has(id)) {
          selectedAddOns.delete(id);
        } else {
          selectedAddOns.add(id);
        }
        renderAddOns();
        updateCalculatorTotal();
      });
    });
  }

  function updateCalculatorTotal() {
    let total = 0;
    const selectedNames = [];
    selectedAddOns.forEach(id => {
      const item = ADD_ONS_LIST.find(a => a.id === id);
      if (item) {
        total += item.price;
        selectedNames.push(item.name);
      }
    });

    if (calcSelectedCount) {
      calcSelectedCount.textContent = `${selectedAddOns.size} Add-on${selectedAddOns.size === 1 ? '' : 's'} selected`;
    }
    if (calcTotalAmount) {
      calcTotalAmount.innerHTML = `<span>${PACKAGES_CONFIG.currency}</span>${formatMoney(total)}`;
    }

    if (calcBookWaBtn) {
      calcBookWaBtn.onclick = () => {
        if (selectedAddOns.size === 0) {
          alert("Please select at least one add-on or choose a package above!");
          return;
        }
        const text = `👋 Hello ${PACKAGES_CONFIG.studioName}!\n\nI want to inquire about custom add-ons:\n━━━━━━━━━━━━━━━━━━━━━\n${selectedNames.map(n => `• ${n}`).join("\n")}\n\n💰 Estimated Add-ons Total: ${PACKAGES_CONFIG.currency}${formatMoney(total)}\n━━━━━━━━━━━━━━━━━━━━━\nPlease let me know your availability! 📸`;
        window.open(`https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      };
    }
  }

  // ------------------------------------------------------------
  // FAQs
  // ------------------------------------------------------------
  function renderFaqs() {
    if (!faqsList) return;
    const list = typeof FAQS_DATA !== 'undefined' ? FAQS_DATA : [];
    faqsList.innerHTML = list.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}">
        <button type="button" class="faq-question">
          <span>${faq.q}</span>
          <svg class="faq-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join("");

    document.querySelectorAll(".faq-question").forEach(qBtn => {
      qBtn.addEventListener("click", () => {
        qBtn.parentElement.classList.toggle("open");
      });
    });
  }

  // ------------------------------------------------------------
  // WhatsApp Message Composer
  // ------------------------------------------------------------
  function buildWhatsAppMessage(pkgId, optIdx, extras = {}) {
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    const opt = pkg ? (pkg.options[optIdx] || pkg.options[0]) : null;

    let addonsTotal = 0;
    let addonsLines = [];
    selectedAddOns.forEach(id => {
      const item = ADD_ONS_LIST.find(a => a.id === id);
      if (item) {
        addonsTotal += item.price;
        addonsLines.push(`  • ${item.name} (+${PACKAGES_CONFIG.currency}${formatMoney(item.price)})`);
      }
    });

    // Vertical Video Reel Upsell Checkbox
    const includeReel = modalAddReelCheckbox && modalAddReelCheckbox.checked;
    if (includeReel && !selectedAddOns.has("cinematic-reel")) {
      const reelItem = ADD_ONS_LIST.find(a => a.id === "cinematic-reel");
      const reelPrice = reelItem ? reelItem.price : 1500;
      addonsTotal += reelPrice;
      addonsLines.push(`  • 🎬 45s–60s Vertical Video Reel (+${PACKAGES_CONFIG.currency}${formatMoney(reelPrice)}) 🔥 Trending`);
    }

    const clientName = extras.clientName || (modalNameInput ? modalNameInput.value.trim() : "");
    const shootDate = extras.shootDate || (modalDateInput ? modalDateInput.value.trim() : "");
    const location = extras.location || (modalLocationSelect ? modalLocationSelect.value : "Nairobi");

    let msg = `👋 Hello ${PACKAGES_CONFIG.studioName}!\n\n`;
    msg += `I am viewing your Packages & Rates page and would like to book:\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;

    if (pkg && opt) {
      msg += `📦 Package: ${pkg.title} — ${opt.name}\n`;
      msg += `💰 Rate: ${PACKAGES_CONFIG.currency}${formatMoney(opt.price)}\n`;
      msg += `🔒 Required Deposit: ${PACKAGES_CONFIG.currency}${formatMoney(opt.deposit)}\n`;
      msg += `✨ Summary: ${opt.summary}\n`;

      if (addonsLines.length > 0) {
        msg += `➕ Selected Add-ons:\n${addonsLines.join("\n")}\n`;
        msg += `💵 Total Estimated: ${PACKAGES_CONFIG.currency}${formatMoney(opt.price + addonsTotal)}\n`;
      }
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📅 Preferred Date: ${shootDate || "[Please specify date]"}\n`;
    msg += `📍 Location: ${location}\n`;
    if (clientName) {
      msg += `👤 Client Name: ${clientName}\n`;
    }
    msg += `\nPlease confirm availability and details to reserve this booking! 📸`;

    return msg;
  }

  // ------------------------------------------------------------
  // Booking Modal Handlers
  // ------------------------------------------------------------
  function openBookingModal(pkgId, optIdx) {
    modalState.pkgId = pkgId;
    modalState.optionIndex = optIdx;

    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    const opt = pkg ? (pkg.options[optIdx] || pkg.options[0]) : null;

    // Pre-check reel if already selected in calculator or on package card
    if (modalAddReelCheckbox) {
      modalAddReelCheckbox.checked = selectedAddOns.has("cinematic-reel") || !!activeReels[pkgId];
    }

    updateModalPreview();

    if (bookingModal) bookingModal.classList.add("open");
  }

  function updateModalPreview() {
    if (!modalWaPreview || !modalState.pkgId) return;
    const pkg = PACKAGES_DATA.find(p => p.id === modalState.pkgId);
    const opt = pkg ? (pkg.options[modalState.optionIndex] || pkg.options[0]) : null;

    if (pkg && opt) {
      const reelChecked = modalAddReelCheckbox && modalAddReelCheckbox.checked;
      let extraAmt = 0;
      selectedAddOns.forEach(id => {
        const item = ADD_ONS_LIST.find(a => a.id === id);
        if (item) extraAmt += item.price;
      });
      if (reelChecked && !selectedAddOns.has("cinematic-reel")) {
        extraAmt += 1500;
      }

      if (modalPkgName) modalPkgName.textContent = `${pkg.title} — ${opt.name}`;
      if (modalPkgMeta) {
        const total = opt.price + extraAmt;
        const deposit = opt.deposit + (reelChecked ? 500 : 0);
        modalPkgMeta.textContent = `${PACKAGES_CONFIG.currency}${formatMoney(total)} · Deposit ${PACKAGES_CONFIG.currency}${formatMoney(deposit)}${reelChecked ? " (incl. 🎬 4K Reel)" : ""}`;
      }
    }

    modalWaPreview.textContent = buildWhatsAppMessage(modalState.pkgId, modalState.optionIndex);
  }

  function closeModal() {
    if (bookingModal) bookingModal.classList.remove("open");
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  [modalDateInput, modalNameInput, modalLocationSelect, modalAddReelCheckbox].forEach(input => {
    if (input) {
      input.addEventListener("input", updateModalPreview);
      input.addEventListener("change", updateModalPreview);
    }
  });

  if (modalLaunchWaBtn) {
    modalLaunchWaBtn.addEventListener("click", () => {
      const msg = buildWhatsAppMessage(modalState.pkgId, modalState.optionIndex);
      window.open(`https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
      closeModal();
    });
  }

  if (modalQuickSkip) {
    modalQuickSkip.addEventListener("click", () => {
      const msg = buildWhatsAppMessage(modalState.pkgId, modalState.optionIndex, { shootDate: "Flexible", clientName: "" });
      window.open(`https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
      closeModal();
    });
  }

  // ------------------------------------------------------------
  // Pathway Listeners
  // ------------------------------------------------------------
  pathwayCards.forEach(card => {
    card.addEventListener("click", () => {
      setPathway(card.dataset.pathway);
      const target = document.getElementById("packagesBrowse");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  pathwayToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const p = btn.dataset.pathway;
      if (p === "hub") {
        setPathway(null, false);
      } else {
        setPathway(p, true);
      }
    });
  });

  // ------------------------------------------------------------
  // Live Search Autocomplete & Similar Letters Reference Matching
  // ------------------------------------------------------------
  const searchSuggestionsBox = document.getElementById("searchSuggestionsBox");

  const POPULAR_SEARCH_REFERENCES = [
    { label: "💼 Executive Headshots", query: "headshot", category: "studio" },
    { label: "🎓 Graduation Shoots", query: "graduation", category: "studio" },
    { label: "✨ Silk Wrap Portraits", query: "wrap", category: "studio" },
    { label: "🤍 White Shirt Concepts", query: "shirt", category: "studio" },
    { label: "🌿 Outdoor Sessions", query: "outdoor", category: "outdoor" },
    { label: "🤰 Baby Bump & Maternity", query: "maternity", category: "studio" },
    { label: "🎂 Birthday Shoots", query: "birthday", category: "studio" },
    { label: "💍 Weddings & Matrimony", query: "wedding", category: "events" },
    { label: "👶 Kids & Family Picnics", query: "family", category: "outdoor" },
    { label: "❤️ Couple Love Stories", query: "couple", category: "studio" },
    { label: "🚀 Commercial & Products", query: "commercial", category: "commercial" },
    { label: "🎬 4K Vertical Video Reels", query: "reel", category: "studio" }
  ];

  function highlightMatch(str, q) {
    if (!q) return str;
    const idx = str.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return str;
    return str.slice(0, idx) + '<b style="color:#4ade80;font-weight:700;">' + str.slice(idx, idx + q.length) + '</b>' + str.slice(idx + q.length);
  }

  function renderSearchSuggestions(rawQuery) {
    if (!searchSuggestionsBox) return;
    const q = (rawQuery || "").trim().toLowerCase();

    if (q === "") {
      searchSuggestionsBox.innerHTML = `
        <div class="suggestion-group-title">
          <span>⚡ Quick References &amp; Popular Searches</span>
        </div>
        <div class="suggestion-chips-row">
          ${POPULAR_SEARCH_REFERENCES.map(ref => `
            <button type="button" class="suggestion-chip" data-search="${ref.query}">
              ${ref.label}
            </button>
          `).join("")}
        </div>
      `;
      searchSuggestionsBox.style.display = "block";
      bindSuggestionClicks();
      return;
    }

    // Match packages by title, category, tagline, badge, subcat (similar letters & substrings)
    const matches = PACKAGES_DATA.filter(p => {
      const hay = `${p.title} ${p.catLabel} ${p.tagline} ${p.badge || ''} ${p.subcat} ${p.pathway}`.toLowerCase();
      return hay.includes(q) || p.title.toLowerCase().split(/\s+/).some(w => w.startsWith(q));
    });

    const matchingChips = POPULAR_SEARCH_REFERENCES.filter(r =>
      r.query.includes(q) || r.label.toLowerCase().includes(q)
    );

    let html = "";

    if (matchingChips.length > 0) {
      html += `
        <div class="suggestion-group-title">
          <span>🔍 Related Shoot Types</span>
        </div>
        <div class="suggestion-chips-row">
          ${matchingChips.map(ref => `
            <button type="button" class="suggestion-chip" data-search="${ref.query}">
              ${ref.label}
            </button>
          `).join("")}
        </div>
      `;
    }

    if (matches.length > 0) {
      html += `
        <div class="suggestion-group-title">
          <span>📦 Matching Packages (${matches.length})</span>
        </div>
        <div class="suggestion-list">
          ${matches.slice(0, 6).map(p => `
            <div class="suggestion-item js-suggestion-pkg" data-pkg-id="${p.id}" data-pathway="${p.pathway}">
              <img src="${p.image}" alt="${p.title}" class="suggestion-thumb" loading="lazy">
              <div class="suggestion-info">
                <div class="suggestion-title">${highlightMatch(p.title, q)}</div>
                <div class="suggestion-sub">
                  <span>${p.catLabel}</span>
                  <span>· ⏱️ ${p.turnaround}</span>
                </div>
              </div>
              <div class="suggestion-price">
                <span style="font-size:10.5px;color:var(--muted);font-weight:normal;display:block;">From</span>
                KSh ${Number((p.options[0]||{}).price||0).toLocaleString()}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      html += `
        <div class="suggestion-empty">
          <p style="margin-bottom:6px;">No packages found with "<b>${q}</b>"</p>
          <span style="font-size:11.5px;color:var(--muted);">Try typing: headshot, graduation, maternity, wedding, birthday</span>
        </div>
      `;
    }

    searchSuggestionsBox.innerHTML = html;
    searchSuggestionsBox.style.display = "block";
    bindSuggestionClicks();
  }

  function bindSuggestionClicks() {
    if (!searchSuggestionsBox) return;

    // Chip click
    searchSuggestionsBox.querySelectorAll(".suggestion-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const sq = chip.dataset.search;
        if (searchInput) {
          searchInput.value = sq;
          searchQuery = sq;
          if (searchClearBtn) searchClearBtn.style.display = "flex";
        }
        searchSuggestionsBox.style.display = "none";
        renderPackages();
        const browse = document.getElementById("packagesBrowse");
        if (browse) browse.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Package item click
    searchSuggestionsBox.querySelectorAll(".js-suggestion-pkg").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const pkgId = item.dataset.pkgId;
        const pathway = item.dataset.pathway;

        searchSuggestionsBox.style.display = "none";
        if (searchClearBtn) searchClearBtn.style.display = "none";
        if (searchInput) searchInput.value = "";
        searchQuery = "";

        // Open that pathway and scroll to package
        currentPathway = pathway;
        currentSubcat = "all";
        renderSubcategories();
        renderPackages();

        setTimeout(() => {
          const targetCard = document.getElementById(`pkg-${pkgId}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
            targetCard.style.outline = "2px solid var(--gold-soft)";
            targetCard.style.boxShadow = "0 0 30px rgba(234, 179, 8, 0.4)";
            setTimeout(() => {
              targetCard.style.outline = "";
              targetCard.style.boxShadow = "";
            }, 2500);
          }
        }, 150);
      });
    });
  }

  function hideSearchSuggestions() {
    if (searchSuggestionsBox) searchSuggestionsBox.style.display = "none";
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? "flex" : "none";
      }
      renderSearchSuggestions(searchQuery);
      renderPackages();
    });

    searchInput.addEventListener("focus", () => {
      renderSearchSuggestions(searchInput.value);
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrap")) {
        hideSearchSuggestions();
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      searchClearBtn.style.display = "none";
      renderPackages();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderPackages();
    });
  }

  if (modalLocationSelect) {
    modalLocationSelect.innerHTML = PACKAGES_CONFIG.locations.map(loc => `<option value="${loc}">${loc}</option>`).join("");
  }

  // Mobile drawer navigation
  const packagesNavToggle = document.getElementById("packagesNavToggle");
  const packagesMobileDrawer = document.getElementById("packagesMobileDrawer");
  const packagesDrawerBackdrop = document.getElementById("packagesDrawerBackdrop");

  function togglePackagesDrawer(open) {
    if (!packagesMobileDrawer) return;
    const shouldOpen = open !== undefined ? open : !packagesMobileDrawer.classList.contains("open");
    if (packagesNavToggle) {
      packagesNavToggle.classList.toggle("open", shouldOpen);
      packagesNavToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    }
    packagesMobileDrawer.classList.toggle("open", shouldOpen);
    if (packagesDrawerBackdrop) {
      packagesDrawerBackdrop.classList.toggle("open", shouldOpen);
      packagesDrawerBackdrop.hidden = !shouldOpen;
    }
  }

  if (packagesNavToggle) {
    packagesNavToggle.addEventListener("click", () => togglePackagesDrawer());
  }
  if (packagesDrawerBackdrop) {
    packagesDrawerBackdrop.addEventListener("click", () => togglePackagesDrawer(false));
  }
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => togglePackagesDrawer(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      togglePackagesDrawer(false);
      closeModal();
      closeInvoiceModal();
    }
  });


  // Floating Back Up Arrow (Scroll to top) listener
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 280) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  // ------------------------------------------------------------
  // Touch & Pointer Smooth Drag-to-Scroll Engine
  // Enables effortless mobile touch swiping and desktop drag on pill scrollers
  // ------------------------------------------------------------
  function enableHorizontalDragScroll(el) {
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let hasMoved = false;
    let lastX = 0;
    let velocity = 0;
    let rafId = null;

    // Direct Touch Listeners for mobile touch gestures
    el.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      isDown = true;
      hasMoved = false;
      cancelAnimationFrame(rafId);
      startX = e.touches[0].clientX;
      scrollStart = el.scrollLeft;
      lastX = startX;
      velocity = 0;
    }, { passive: true });

    el.addEventListener("touchmove", (e) => {
      if (!isDown || e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      if (Math.abs(diff) > 4) {
        hasMoved = true;
        el.scrollLeft = scrollStart - diff;
        velocity = currentX - lastX;
        lastX = currentX;
      }
    }, { passive: true });

    const endTouch = () => {
      if (!isDown) return;
      isDown = false;
      if (hasMoved && Math.abs(velocity) > 1.5) {
        let curVel = velocity * 1.25;
        const glide = () => {
          if (Math.abs(curVel) < 0.5) return;
          el.scrollLeft -= curVel;
          curVel *= 0.92;
          rafId = requestAnimationFrame(glide);
        };
        rafId = requestAnimationFrame(glide);
      }
      setTimeout(() => {
        hasMoved = false;
      }, 120);
    };
    el.addEventListener("touchend", endTouch, { passive: true });
    el.addEventListener("touchcancel", endTouch, { passive: true });

    // Desktop Mouse & Pointer Drag
    el.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch" || (e.button !== undefined && e.button !== 0)) return;
      isDown = true;
      hasMoved = false;
      cancelAnimationFrame(rafId);
      startX = e.clientX;
      scrollStart = el.scrollLeft;
      lastX = startX;
      velocity = 0;
    });

    window.addEventListener("pointermove", (e) => {
      if (!isDown || e.pointerType === "touch") return;
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 4) {
        hasMoved = true;
        el.scrollLeft = scrollStart - diff;
        velocity = e.clientX - lastX;
        lastX = e.clientX;
      }
    });

    const endPointer = (e) => {
      if (!isDown || (e && e.pointerType === "touch")) return;
      isDown = false;
      if (hasMoved && Math.abs(velocity) > 1.5) {
        let curVel = velocity * 1.25;
        const glide = () => {
          if (Math.abs(curVel) < 0.5) return;
          el.scrollLeft -= curVel;
          curVel *= 0.92;
          rafId = requestAnimationFrame(glide);
        };
        rafId = requestAnimationFrame(glide);
      }
      setTimeout(() => {
        hasMoved = false;
      }, 120);
    };
    window.addEventListener("pointerup", endPointer);
    window.addEventListener("pointercancel", endPointer);

    // Suppress accidental button click if user was dragging/swiping
    el.addEventListener("click", (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        hasMoved = false;
      }
    }, true);
  }

  // Attach drag-scroll to both category switcher and subcategory pills
  enableHorizontalDragScroll(document.querySelector(".pathway-toggle-strip"));
  enableHorizontalDragScroll(subcategoryPillsWrap);

  // Initial runs
  if (currentPathway) {
    setPathway(currentPathway, false);
  } else {
    setPathway(null, false);
  }
  renderAddOns();
  updateCalculatorTotal();


  // ============================================================
  //  OFFICIAL PROFORMA INVOICE & QUOTATION WORKSTATION (PDF + WHATSAPP)
  // ============================================================

  const invoiceModal = document.getElementById("invoiceModal");
  const invPackageSelect = document.getElementById("invPackageSelect");
  const invTierSelect = document.getElementById("invTierSelect");
  const invClientInput = document.getElementById("invClientInput");
  const invPhoneInput = document.getElementById("invPhoneInput");
  const invEmailInput = document.getElementById("invEmailInput");
  const invDateInput = document.getElementById("invDateInput");
  const invTimeInput = document.getElementById("invTimeInput");
  const invLocationInput = document.getElementById("invLocationInput");
  const invCrewInput = document.getElementById("invCrewInput");
  const invDepositPercent = document.getElementById("invDepositPercent");
  const invDiscountInput = document.getElementById("invDiscountInput");
  const invNotesInput = document.getElementById("invNotesInput");
  const invAddonsPills = document.getElementById("invAddonsPills");
  const invCustomItemsList = document.getElementById("invCustomItemsList");

  let invoiceMode = "quotation"; // "quotation" | "receipt"
  let currentInvoiceRef = "";
  let invoiceDateIssued = "";
  let invoiceValidity = "";
  let customLineItems = [];

  function showInvoiceToast(msg) {
    const toast = document.getElementById("invToastNotice");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3400);
  }

  // Normalizes Kenyan phone numbers (07..., 01..., +254..., 254...) into international format: 254XXXXXXXXX
  function normalizeKenyanPhone(raw) {
    if (!raw) return "";
    let clean = String(raw).replace(/\D/g, "");
    // If 07... or 01... (10 digits)
    if (clean.length === 10 && clean.startsWith("0")) {
      return "254" + clean.slice(1);
    }
    // If 7... or 1... (9 digits)
    if (clean.length === 9 && (clean.startsWith("7") || clean.startsWith("1"))) {
      return "254" + clean;
    }
    // If already 254... (12 digits)
    if (clean.length === 12 && clean.startsWith("254")) {
      return clean;
    }
    // Fallback if international length
    if (clean.length >= 9) {
      return clean;
    }
    return "";
  }

  // Switch between Online Quotation mode and Walk-in / Official Receipt mode
  function setInvoiceMode(mode) {
    invoiceMode = mode === "receipt" ? "receipt" : "quotation";

    const btnQuote = document.getElementById("btnModeQuotation");
    const btnReceipt = document.getElementById("btnModeReceipt");
    const receiptSettings = document.getElementById("invReceiptSettings");
    const docBadge = document.getElementById("invDisplayDocType");
    const refLabel = document.getElementById("invDisplayRefLabel");
    const validityItem = document.getElementById("invValidityMetaItem");
    const verifiedBanner = document.getElementById("invReceiptVerifiedBanner");
    const sealStamp = document.getElementById("invSealStamp");
    const sealMid = document.getElementById("invSealMid");
    const sealBot = document.getElementById("invSealBot");
    const termsTitle = document.getElementById("invTermsTitle");
    const termsNote = document.getElementById("invTermsNote");
    const btnPdfText = document.getElementById("btnDownloadPdfText");
    const btnWaText = document.getElementById("btnSendWaText");

    if (invoiceMode === "receipt") {
      if (btnQuote) btnQuote.classList.remove("active", "mode-quote");
      if (btnReceipt) btnReceipt.classList.add("active");
      if (receiptSettings) receiptSettings.style.display = "block";

      // Flip reference prefix to LS-REC-
      if (currentInvoiceRef.startsWith("LS-QUO-")) {
        currentInvoiceRef = currentInvoiceRef.replace("LS-QUO-", "LS-REC-");
      } else if (!currentInvoiceRef.startsWith("LS-REC-")) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        currentInvoiceRef = `LS-REC-2026-${randNum}`;
      }

      if (docBadge) docBadge.textContent = "OFFICIAL PAYMENT RECEIPT & CONFIRMATION";
      if (refLabel) refLabel.textContent = "RECEIPT REF:";
      if (validityItem) validityItem.style.display = "none";
      if (verifiedBanner) verifiedBanner.style.display = "flex";
      if (sealStamp) sealStamp.classList.add("paid-stamp");
      if (sealMid) sealMid.textContent = "✓ OFFICIAL PAYMENT";
      if (sealBot) sealBot.textContent = "PAID & CONFIRMED";
      if (termsTitle) termsTitle.textContent = "Payment Verification & Delivery Terms";
      if (termsNote) termsNote.textContent = "* Official payment confirmed with thanks. Digital master files will be delivered within agreed timelines via high-speed cloud gallery and direct WhatsApp link. Thank you for choosing Laureign Studios!";
      if (btnPdfText) btnPdfText.textContent = "📥 Download Official Receipt (PDF)";
      if (btnWaText) btnWaText.textContent = "📲 Send Receipt to Client";
    } else {
      if (btnReceipt) btnReceipt.classList.remove("active");
      if (btnQuote) btnQuote.classList.add("active", "mode-quote");
      if (receiptSettings) receiptSettings.style.display = "none";

      // Flip reference prefix to LS-QUO-
      if (currentInvoiceRef.startsWith("LS-REC-")) {
        currentInvoiceRef = currentInvoiceRef.replace("LS-REC-", "LS-QUO-");
      } else if (!currentInvoiceRef.startsWith("LS-QUO-")) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        currentInvoiceRef = `LS-QUO-2026-${randNum}`;
      }

      if (docBadge) docBadge.textContent = "PROFORMA INVOICE & QUOTATION";
      if (refLabel) refLabel.textContent = "QUOTATION REF:";
      if (validityItem) validityItem.style.display = "flex";
      if (verifiedBanner) verifiedBanner.style.display = "none";
      if (sealStamp) sealStamp.classList.remove("paid-stamp");
      if (sealMid) sealMid.textContent = "VERIFIED & APPROVED";
      if (sealBot) sealBot.textContent = "2026 OFFICIAL";
      if (termsTitle) termsTitle.textContent = "Official Payment & M-Pesa Instructions";
      if (termsNote) termsNote.textContent = "* A booking commitment deposit locks your date on our production calendar. RAW unedited proofs available at KSh 150 per image. The remaining balance is payable upon delivery of your master high-resolution gallery and deliverables.";
      if (btnPdfText) btnPdfText.textContent = "📥 Download Official PDF";
      if (btnWaText) btnWaText.textContent = "📲 Send PDF via WhatsApp";
    }

    updateInvoiceDisplay();
  }

  // 1-Click Preset for Studio Walk-in Clients (auto-fills today's shoot details)
  function applyWalkinPreset() {
    setInvoiceMode("receipt");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;

    if (invDateInput) invDateInput.value = todayStr;
    if (invTimeInput) invTimeInput.value = "Walk-in Studio Session (Completed)";
    if (invLocationInput) invLocationInput.value = "Laureign Studios (In-Studio, Kakamega)";
    if (invCrewInput) invCrewInput.value = "Studio Lead Photographer + Lighting Assistant";

    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    if (payStatusSelect) payStatusSelect.value = "full";

    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    if (payMethodSelect) payMethodSelect.value = "M-Pesa Buy Goods Till (0790048905)";

    const payRefInput = document.getElementById("invPaymentRefInput");
    if (payRefInput && !payRefInput.value.trim()) {
      const mpesaChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "SL";
      for (let i = 0; i < 6; i++) {
        code += mpesaChars.charAt(Math.floor(Math.random() * mpesaChars.length));
      }
      payRefInput.value = code;
    }

    if (invNotesInput && (!invNotesInput.value.trim() || invNotesInput.value.includes("Includes high-end"))) {
      invNotesInput.value = "Walk-in studio shoot completed at Laureign Studios. Master retouched photos deliverable within 24–48 hours via secure Google Drive & WhatsApp link.";
    }

    updateInvoiceDisplay();
    showInvoiceToast("⚡ Walk-in session preset applied! Ready to print or send.");

    if (invClientInput) {
      invClientInput.focus();
      if (invClientInput.value === "Valued Client") invClientInput.value = "";
    }
  }

  function initInvoice() {
    if (!invPackageSelect) return;

    // Populate packages dropdown
    invPackageSelect.innerHTML = PACKAGES_DATA.map((pkg, idx) =>
      `<option value="${pkg.id}">${pkg.title}</option>`
    ).join("");

    // Populate Add-on pills with checkboxes
    if (invAddonsPills) {
      invAddonsPills.innerHTML = ADD_ONS_LIST.filter(a => a.price > 0).map(addon => `
        <label class="inv-addon-pill-lbl">
          <input type="checkbox" class="inv-addon-checkbox" value="${addon.id}" data-price="${addon.price}" data-name="${addon.name}" onchange="updateInvoiceDisplay()">
          <span>+${addon.name} (KSh ${addon.price.toLocaleString()})</span>
        </label>
      `).join("");
    }

    // Set Ref number & dates
    const randNum = Math.floor(1000 + Math.random() * 9000);
    currentInvoiceRef = `LS-QUO-2026-${randNum}`;

    const today = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    invoiceDateIssued = today.toLocaleDateString('en-GB', options);

    const validDate = new Date();
    validDate.setDate(today.getDate() + 14);
    invoiceValidity = `${validDate.toLocaleDateString('en-GB', options)} (14 Days)`;

    // Handle package change to update tiers and auto-fill defaults
    onInvoicePackageChange();
  }

  // Auto-fill assignment details whenever a package is selected
  function onInvoicePackageChange(forceAutofill = false) {
    if (!invPackageSelect || !invTierSelect) return;
    const pkgId = invPackageSelect.value;
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
    if (!pkg) return;

    invTierSelect.innerHTML = pkg.options.map((opt, idx) =>
      `<option value="${idx}">${opt.name} — KSh ${opt.price.toLocaleString()}</option>`
    ).join("");

    const isReceipt = invoiceMode === "receipt";
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    // Auto-fill Date if empty or in receipt mode
    if (invDateInput && (!invDateInput.value || isReceipt || forceAutofill)) {
      invDateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // Auto-fill Location based on package pathway
    if (invLocationInput) {
      const curLoc = invLocationInput.value.trim();
      if (!curLoc || forceAutofill || curLoc === "Nairobi / In-Studio" || curLoc.startsWith("Laureign Studios") || curLoc.startsWith("Kakamega")) {
        if (pkg.pathway === "studio" || pkg.id.includes("studio") || pkg.id.includes("headshot") || pkg.id.includes("white-shirt") || pkg.id.includes("silk-wrap")) {
          invLocationInput.value = "Laureign Studios (In-Studio, Kakamega)";
        } else if (pkg.pathway === "outdoor" || pkg.id.includes("outdoor")) {
          invLocationInput.value = "Kakamega / On-Location Shoot";
        } else if (pkg.pathway === "events" || pkg.id.includes("wedding")) {
          invLocationInput.value = "Client Event Venue / Nairobi & Across Kenya";
        } else {
          invLocationInput.value = "Client Premises / Studio Facility";
        }
      }
    }

    // Auto-fill Timing based on package pathway
    if (invTimeInput) {
      const curTime = invTimeInput.value.trim();
      if (!curTime || forceAutofill || curTime === "Standard Coverage Session" || curTime.includes("Session")) {
        if (isReceipt) {
          invTimeInput.value = "Walk-in Studio Session (Completed)";
        } else if (pkg.pathway === "studio") {
          invTimeInput.value = "Standard Studio Session (45–60 mins)";
        } else if (pkg.pathway === "outdoor") {
          invTimeInput.value = "Golden Hour Session (1.5–2 hrs)";
        } else if (pkg.pathway === "events") {
          invTimeInput.value = "Full Day Production Coverage";
        } else {
          invTimeInput.value = "Tailored Coverage Session";
        }
      }
    }

    // Auto-fill Crew based on package pathway
    if (invCrewInput) {
      const curCrew = invCrewInput.value.trim();
      if (!curCrew || forceAutofill || curCrew.includes("Lead Production")) {
        if (pkg.pathway === "studio") {
          invCrewInput.value = "Studio Lead Photographer + Lighting Assistant";
        } else if (pkg.pathway === "outdoor") {
          invCrewInput.value = "Lead Outdoor Photographer + Reflector Assistant";
        } else if (pkg.pathway === "events") {
          invCrewInput.value = "Senior Cinematographer + 2 Lead Photographers";
        } else {
          invCrewInput.value = "Commercial Director of Photography + Gear Tech";
        }
      }
    }

    // Auto-fill Delivery remarks / Notes
    if (invNotesInput) {
      const curNotes = invNotesInput.value.trim();
      if (!curNotes || forceAutofill || curNotes.includes("Includes high-end") || curNotes.includes("Walk-in studio shoot")) {
        if (isReceipt) {
          invNotesInput.value = `Walk-in session completed at Laureign Studios. Master retouched gallery deliverable within ${pkg.turnaround || "2–3 business days"} via private online gallery and WhatsApp link.`;
        } else {
          invNotesInput.value = `Includes high-end lighting, color grading and magazine-grade skin retouching. Expected delivery turnaround: ${pkg.turnaround || "2–3 business days"}. Booking confirmed upon receipt of deposit.`;
        }
      }
    }

    updateInvoiceDisplay();
  }

  function onInvoiceTierChange() {
    updateInvoiceDisplay();
  }

  // Custom Line Items Management
  function addCustomLineItem() {
    const newItem = {
      id: "cli_" + Date.now(),
      name: "Additional Service / Special Equipment",
      spec: "Custom on-demand requirement",
      rate: 0
    };
    customLineItems.push(newItem);
    renderCustomLineItems();
    updateInvoiceDisplay();
  }

  function removeCustomLineItem(id) {
    customLineItems = customLineItems.filter(item => item.id !== id);
    renderCustomLineItems();
    updateInvoiceDisplay();
  }

  function onCustomItemChange(id, field, value) {
    const item = customLineItems.find(it => it.id === id);
    if (!item) return;
    if (field === "rate") {
      item.rate = parseInt(value, 10) || 0;
    } else {
      item[field] = value;
    }
    updateInvoiceDisplay();
  }

  function renderCustomLineItems() {
    if (!invCustomItemsList) return;
    if (customLineItems.length === 0) {
      invCustomItemsList.innerHTML = `<div style="font-size:12px; color:rgba(255,255,255,0.4); font-style:italic; padding:4px 0;">No custom services added yet. Click above to add drone coverage, expedited editing, studio hire or travel logistics.</div>`;
      return;
    }

    invCustomItemsList.innerHTML = customLineItems.map((item, idx) => `
      <div class="inv-custom-item-row" style="display:grid; grid-template-columns: 2fr 2fr 1.2fr 34px; gap:8px; align-items:center; margin-bottom:8px; background:rgba(255,255,255,0.06); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.12);">
        <input type="text" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Service Name (e.g. Drone Pilot)" value="${item.name}" oninput="onCustomItemChange('${item.id}', 'name', this.value)">
        <input type="text" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Deliverable / Scope" value="${item.spec}" oninput="onCustomItemChange('${item.id}', 'spec', this.value)">
        <input type="number" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Rate (KSh)" value="${item.rate || ''}" oninput="onCustomItemChange('${item.id}', 'rate', this.value)">
        <button type="button" onclick="removeCustomLineItem('${item.id}')" title="Delete" style="background:#ef4444; color:#ffffff; border:none; border-radius:6px; height:32px; width:34px; font-size:14px; cursor:pointer; display:flex; align-items:center; justify-content:center;">✕</button>
      </div>
    `).join("");
  }

  function updateInvoiceDisplay() {
    if (!invPackageSelect || !invTierSelect) return;
    const pkgId = invPackageSelect.value;
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
    if (!pkg) return;
    const optIdx = parseInt(invTierSelect.value, 10) || 0;
    const opt = pkg.options[optIdx] || pkg.options[0];

    // Meta displays
    const elRef = document.getElementById("invDisplayRef");
    const elDate = document.getElementById("invDisplayDateIssued");
    const elVal = document.getElementById("invDisplayValidity");
    if (elRef) elRef.textContent = currentInvoiceRef;
    if (elDate) elDate.textContent = invoiceDateIssued;
    if (elVal) elVal.textContent = invoiceValidity;

    // Client & Assignment Details
    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const phoneVal = (invPhoneInput && invPhoneInput.value.trim()) || "";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "To Be Scheduled";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Coverage Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (In-Studio, Kakamega)";
    const crewVal = (invCrewInput && invCrewInput.value.trim()) || "Studio Lead Photographer + Lighting Assistant";
    const notesVal = (invNotesInput && invNotesInput.value.trim()) || "";

    const elClient = document.getElementById("invSheetClient");
    const elPhone = document.getElementById("invSheetPhone");
    const elEmail = document.getElementById("invSheetEmail");
    const elSDate = document.getElementById("invSheetDate");
    const elSTime = document.getElementById("invSheetTime");
    const elLoc = document.getElementById("invSheetLocation");
    const elCrew = document.getElementById("invSheetCrew");

    if (elClient) elClient.textContent = clientVal;
    if (elPhone) elPhone.textContent = phoneVal ? `Phone: ${phoneVal}` : "Phone: Not Specified";
    if (elEmail) {
      if (emailVal) {
        elEmail.textContent = `Email: ${emailVal}`;
        elEmail.style.display = "block";
      } else {
        elEmail.style.display = "none";
      }
    }
    if (elSDate) elSDate.textContent = dateVal;
    if (elSTime) elSTime.textContent = timeVal;
    if (elLoc) elLoc.textContent = locVal;
    if (elCrew) elCrew.textContent = crewVal;

    // Selected Add-ons
    const checkedAddons = [];
    document.querySelectorAll(".inv-addon-checkbox:checked").forEach(cb => {
      checkedAddons.push({
        id: cb.value,
        name: cb.dataset.name,
        price: parseInt(cb.dataset.price, 10) || 0
      });
    });

    const addonsTotal = checkedAddons.reduce((sum, a) => sum + a.price, 0);
    const customTotal = customLineItems.reduce((sum, item) => sum + (parseInt(item.rate, 10) || 0), 0);
    const basePrice = opt.price || 0;
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal + customTotal - discount);

    // Deposit calculation
    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 40, 10) || 40;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    // Render Table Rows
    const tbody = document.getElementById("invTableBody");
    if (tbody) {
      let rowsHtml = `
        <tr>
          <td>
            <div class="inv-item-title">${pkg.title} — ${opt.name}</div>
            <div class="inv-item-sub">${opt.summary || pkg.tagline}</div>
          </td>
          <td>
            <ul class="inv-inclusions-list">
              ${(opt.inclusions || []).map(inc => `<li>${inc}</li>`).join("")}
            </ul>
          </td>
          <td style="text-align:right; font-weight:600;">KSh ${basePrice.toLocaleString()}</td>
          <td style="text-align:right; font-weight:700;">KSh ${basePrice.toLocaleString()}</td>
        </tr>
      `;

      checkedAddons.forEach(a => {
        rowsHtml += `
          <tr>
            <td>
              <div class="inv-item-title">Add-On: ${a.name}</div>
              <div class="inv-item-sub">Selected Enhancement Upgrade</div>
            </td>
            <td>
              <div style="font-size:11.5px; color:#475569;">Optional session / event deliverable enhancement.</div>
            </td>
            <td style="text-align:right; font-weight:600;">KSh ${a.price.toLocaleString()}</td>
            <td style="text-align:right; font-weight:700;">KSh ${a.price.toLocaleString()}</td>
          </tr>
        `;
      });

      customLineItems.forEach(item => {
        const itemRate = parseInt(item.rate, 10) || 0;
        rowsHtml += `
          <tr>
            <td>
              <div class="inv-item-title">Custom Item: ${item.name || "Special Service"}</div>
              <div class="inv-item-sub">Client Tailored Production Item</div>
            </td>
            <td>
              <div style="font-size:11.5px; color:#475569;">${item.spec || "Custom scope item agreed with studio."}</div>
            </td>
            <td style="text-align:right; font-weight:600;">KSh ${itemRate.toLocaleString()}</td>
            <td style="text-align:right; font-weight:700;">KSh ${itemRate.toLocaleString()}</td>
          </tr>
        `;
      });

      tbody.innerHTML = rowsHtml;
    }

    // Special Assignment Notes Box
    const elNotesBox = document.getElementById("invDisplayNotesBox");
    const elNotesText = document.getElementById("invDisplayNotesText");
    if (elNotesBox && elNotesText) {
      if (notesVal) {
        elNotesText.textContent = notesVal;
        elNotesBox.style.display = "block";
      } else {
        elNotesBox.style.display = "none";
      }
    }

    // Special Discount Row
    const elDiscRow = document.getElementById("invDiscountRow");
    const elDiscAmt = document.getElementById("invDiscountAmt");
    if (elDiscRow && elDiscAmt) {
      if (discount > 0) {
        elDiscAmt.textContent = `- KSh ${discount.toLocaleString()}`;
        elDiscRow.style.display = "flex";
      } else {
        elDiscRow.style.display = "none";
      }
    }

    // Totals Elements
    const elBase = document.getElementById("invBaseAmt");
    const elAddons = document.getElementById("invAddonsAmt");
    const elGrand = document.getElementById("invGrandTotal");
    const elGrandLbl = document.getElementById("invGrandTotalLabel");

    if (elBase) elBase.textContent = `KSh ${basePrice.toLocaleString()}`;
    if (elAddons) elAddons.textContent = `KSh ${(addonsTotal + customTotal).toLocaleString()}`;
    if (elGrand) elGrand.textContent = `KSh ${grandTotal.toLocaleString()}`;
    if (elGrandLbl) elGrandLbl.textContent = invoiceMode === "receipt" ? "TOTAL SHOOT INVESTMENT:" : "TOTAL PROJECT INVESTMENT:";

    // Mode-Specific Financial Breakdown
    const isReceipt = invoiceMode === "receipt";
    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    const payRefInput = document.getElementById("invPaymentRefInput");

    const paymentStatus = payStatusSelect ? payStatusSelect.value : "full"; // "full" or "deposit"
    const paymentMethod = payMethodSelect ? payMethodSelect.value : "M-Pesa Buy Goods Till (0790048905)";
    const paymentRef = (payRefInput && payRefInput.value.trim()) || "M-Pesa Verified";

    const elStatusPill = document.getElementById("invDisplayStatusPill");
    const elPaidRow = document.getElementById("invPaidRow");
    const elPaidLabel = document.getElementById("invPaidLabel");
    const elPaidAmt = document.getElementById("invPaidAmt");
    const elDepositRow = document.getElementById("invDepositRow");
    const elDepositLabel = document.getElementById("invDepositLabel");
    const elDepositVal = document.getElementById("invDepositRequired");
    const elBalRow = document.getElementById("invBalanceRow");
    const elBalLabel = document.getElementById("invBalanceLabel");
    const elBalVal = document.getElementById("invBalanceDue");

    const elPayChannelLine = document.getElementById("invPayChannelLine");
    const elPayTillLine = document.getElementById("invPayTillLine");
    const elPayAccountLine = document.getElementById("invPayAccountLine");
    const elPayRefLine = document.getElementById("invPayRefLine");

    if (isReceipt) {
      if (paymentStatus === "full") {
        if (elStatusPill) {
          elStatusPill.className = "val status-paid";
          elStatusPill.textContent = "✓ PAID IN FULL (RECEIPT)";
        }
        if (elPaidRow) {
          elPaidRow.style.display = "flex";
          if (elPaidLabel) elPaidLabel.textContent = "AMOUNT RECEIVED IN FULL:";
          if (elPaidAmt) elPaidAmt.textContent = `KSh ${grandTotal.toLocaleString()}`;
        }
        if (elDepositRow) elDepositRow.style.display = "none";
        if (elBalRow) {
          elBalRow.style.display = "flex";
          if (elBalLabel) elBalLabel.textContent = "BALANCE REMAINING:";
          if (elBalVal) {
            elBalVal.textContent = "KSh 0 (CLEARED)";
            elBalVal.style.color = "#15803d";
            elBalVal.style.fontWeight = "800";
          }
        }
      } else {
        // Partial deposit received
        if (elStatusPill) {
          elStatusPill.className = "val status-deposit";
          elStatusPill.textContent = "✓ DEPOSIT RECEIVED";
        }
        if (elPaidRow) {
          elPaidRow.style.display = "flex";
          if (elPaidLabel) elPaidLabel.textContent = `DEPOSIT RECEIVED (${depPercent}%):`;
          if (elPaidAmt) elPaidAmt.textContent = `KSh ${deposit.toLocaleString()}`;
        }
        if (elDepositRow) elDepositRow.style.display = "none";
        if (elBalRow) {
          elBalRow.style.display = "flex";
          if (elBalLabel) elBalLabel.textContent = "BALANCE DUE ON DELIVERY:";
          if (elBalVal) {
            elBalVal.textContent = `KSh ${balance.toLocaleString()}`;
            elBalVal.style.color = "#dc2626";
            elBalVal.style.fontWeight = "800";
          }
        }
      }

      // Update payment box details to reflect verified payment
      if (elPayChannelLine) elPayChannelLine.innerHTML = `<b>Payment Channel:</b> <span style="font-weight:700; color:#15803d;">${paymentMethod}</span>`;
      if (elPayTillLine) elPayTillLine.innerHTML = `<b>Payment Ref / Code:</b> <span class="till-num" style="background:#dcfce7; color:#15803d; border-color:#86efac;">${paymentRef}</span>`;
      if (elPayAccountLine) elPayAccountLine.innerHTML = `<b>Account Verified:</b> Laureign Studios (Till: 0790048905)`;
      if (elPayRefLine) elPayRefLine.innerHTML = `<b>Receipt Clearance:</b> <span style="font-weight:700; color:#15803d;">✓ Validated &amp; Logged by Studio Reception</span>`;
    } else {
      // Quotation mode
      if (elStatusPill) {
        elStatusPill.className = "val status-proforma";
        elStatusPill.textContent = "PROFORMA / UNPAID";
      }
      if (elPaidRow) elPaidRow.style.display = "none";
      if (elDepositRow) {
        elDepositRow.style.display = "flex";
        if (elDepositLabel) elDepositLabel.textContent = `REQUIRED BOOKING DEPOSIT (${depPercent}%):`;
        if (elDepositVal) elDepositVal.textContent = `KSh ${deposit.toLocaleString()}`;
      }
      if (elBalRow) {
        elBalRow.style.display = "flex";
        if (elBalLabel) elBalLabel.textContent = "BALANCE DUE ON MASTER DELIVERY:";
        if (elBalVal) {
          elBalVal.textContent = `KSh ${balance.toLocaleString()}`;
          elBalVal.style.color = "";
          elBalVal.style.fontWeight = "";
        }
      }

      if (elPayChannelLine) elPayChannelLine.innerHTML = `<b>Payment Method:</b> <span id="invPayChannelVal">M-Pesa Buy Goods Till / Phone</span>`;
      if (elPayTillLine) elPayTillLine.innerHTML = `<b>Till / Phone Number:</b> <span class="till-num">0790048905</span>`;
      if (elPayAccountLine) elPayAccountLine.innerHTML = `<b>Account Name:</b> Laureign Studios`;
      if (elPayRefLine) elPayRefLine.innerHTML = `<b>Account Reference:</b> <span id="invPayRef">${clientVal ? `LS-${clientVal.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8)}` : "LS-BOOKING"}</span>`;
    }
  }

  function openInvoiceModal(pkgId, optIdx) {
    if (!invoiceModal) return;
    if (pkgId && invPackageSelect) {
      invPackageSelect.value = pkgId;
      onInvoicePackageChange();
      if (typeof optIdx === "number" && invTierSelect) {
        invTierSelect.value = optIdx;
        updateInvoiceDisplay();
      }
    } else {
      updateInvoiceDisplay();
    }
    invoiceModal.classList.add("open");
    invoiceModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeInvoiceModal() {
    if (!invoiceModal) return;
    invoiceModal.classList.remove("open");
    invoiceModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (invoiceModal) {
    invoiceModal.addEventListener("click", (e) => {
      if (e.target === invoiceModal) closeInvoiceModal();
    });
  }

  // Prepare the live invoice sheet for 100% crisp, non-blank PDF rendering
  function prepareInvoiceForExport() {
    const sourceSheet = document.getElementById("invoicePrintableSheet");
    if (!sourceSheet) return null;

    const screenOnly = Array.from(sourceSheet.querySelectorAll(".inv-addons-selector-box, button, .inv-btn-action, .screen-only"));
    screenOnly.forEach(el => {
      el.dataset.origDisplay = el.style.display;
      el.style.display = "none";
    });

    const origStyles = {
      overflow: sourceSheet.style.overflow,
      maxHeight: sourceSheet.style.maxHeight,
      height: sourceSheet.style.height,
      padding: sourceSheet.style.padding,
      background: sourceSheet.style.background
    };

    sourceSheet.style.overflow = "visible";
    sourceSheet.style.maxHeight = "none";
    sourceSheet.style.height = "auto";
    sourceSheet.style.padding = "32px 36px";
    sourceSheet.style.background = "#ffffff";

    return {
      element: sourceSheet,
      cleanup: () => {
        sourceSheet.style.overflow = origStyles.overflow;
        sourceSheet.style.maxHeight = origStyles.maxHeight;
        sourceSheet.style.height = origStyles.height;
        sourceSheet.style.padding = origStyles.padding;
        sourceSheet.style.background = origStyles.background;
        screenOnly.forEach(el => {
          el.style.display = el.dataset.origDisplay || "";
          delete el.dataset.origDisplay;
        });
      }
    };
  }

  // Generate Official PDF with html2pdf (Crisp, 100% Non-Blank Direct Rendering)
  function downloadInvoicePdf() {
    if (typeof html2pdf === "undefined") {
      showInvoiceToast("Printing document format...");
      window.print();
      return;
    }

    const exportContext = prepareInvoiceForExport();
    if (!exportContext) return;

    const isReceipt = invoiceMode === "receipt";
    const docName = isReceipt ? "Receipt" : "Quotation";
    showInvoiceToast(`⏳ Compiling official PDF ${docName}...`);

    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued_Client";
    const cleanClient = clientVal.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 20);
    const docPrefix = isReceipt ? "Laureign_Studios_Receipt" : "Laureign_Studios_Quotation";
    const filename = `${docPrefix}_${currentInvoiceRef}_${cleanClient}.pdf`;

    const opt = {
      margin: [10, 8, 10, 8],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(exportContext.element).save().then(() => {
      exportContext.cleanup();
      showInvoiceToast(`✓ Official PDF ${docName} downloaded successfully!`);
    }).catch(err => {
      exportContext.cleanup();
      console.error("PDF generation failed:", err);
      showInvoiceToast("Falling back to print dialog...");
      window.print();
    });
  }

  // Share PDF to WhatsApp via Web Share API or Auto-Download + WhatsApp Web fallback
  async function shareInvoicePdfWhatsApp() {
    if (typeof html2pdf === "undefined") {
      sendInvoiceWhatsApp();
      return;
    }

    const exportContext = prepareInvoiceForExport();
    if (!exportContext) return;

    const isReceipt = invoiceMode === "receipt";
    const docName = isReceipt ? "Receipt" : "Quotation";
    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const cleanClient = clientVal.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 20);
    const docPrefix = isReceipt ? "Laureign_Studios_Receipt" : "Laureign_Studios_Quotation";
    const filename = `${docPrefix}_${currentInvoiceRef}_${cleanClient}.pdf`;

    showInvoiceToast(`⏳ Generating PDF ${docName} for WhatsApp...`);

    const opt = {
      margin: [10, 8, 10, 8],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      const pdfWorker = html2pdf().set(opt).from(exportContext.element);
      const pdfBlob = await pdfWorker.outputPdf('blob');
      exportContext.cleanup();

      const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

      // If browser supports sharing files directly (iOS Safari, Android Chrome, mobile apps)
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: `Laureign Studios ${docName} ${currentInvoiceRef}`,
          text: `Official ${docName} from Laureign Studios for ${clientVal}`
        });
        showInvoiceToast(`✓ ${docName} sent via WhatsApp!`);
      } else {
        // Fallback for Desktop: Auto-download the PDF, then launch WhatsApp with prefilled message
        const downloadUrl = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);

        showInvoiceToast(`📥 PDF ${docName} downloaded! Opening WhatsApp to send...`);
        setTimeout(() => {
          sendInvoiceWhatsApp(true);
        }, 1000);
      }
    } catch (err) {
      exportContext.cleanup();
      console.warn("Share fallback:", err);
      sendInvoiceWhatsApp(true);
    }
  }

  // Builds formatted message and opens WhatsApp chat (Direct to client if phone is provided)
  function sendInvoiceWhatsApp(pdfDownloaded = false) {
    const isReceipt = invoiceMode === "receipt";
    const pkgId = invPackageSelect ? invPackageSelect.value : "";
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
    const optIdx = invTierSelect ? parseInt(invTierSelect.value, 10) || 0 : 0;
    const opt = pkg.options[optIdx] || pkg.options[0];

    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const rawPhone = (invPhoneInput && invPhoneInput.value.trim()) || "";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "TBD";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (In-Studio, Kakamega)";
    const crewVal = (invCrewInput && invCrewInput.value.trim()) || "Studio Lead Team";
    const notesVal = (invNotesInput && invNotesInput.value.trim()) || "";

    const checkedAddons = [];
    document.querySelectorAll(".inv-addon-checkbox:checked").forEach(cb => {
      checkedAddons.push({
        name: cb.dataset.name,
        price: parseInt(cb.dataset.price, 10) || 0
      });
    });

    const basePrice = opt.price || 0;
    const addonsTotal = checkedAddons.reduce((sum, a) => sum + a.price, 0);
    const customTotal = customLineItems.reduce((sum, item) => sum + (parseInt(item.rate, 10) || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal + customTotal - discount);

    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 40, 10) || 40;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    const payRefInput = document.getElementById("invPaymentRefInput");

    const paymentStatus = payStatusSelect ? payStatusSelect.value : "full";
    const paymentMethod = payMethodSelect ? payMethodSelect.value : "M-Pesa Buy Goods Till (0790048905)";
    const paymentRef = (payRefInput && payRefInput.value.trim()) || "SLD8927K";

    // Determine target WhatsApp number: Route directly to client if provided!
    const clientPhone = normalizeKenyanPhone(rawPhone);
    const targetPhone = clientPhone || "254790048905";

    let msg = "";

    if (isReceipt) {
      msg += `*LAUREIGN STUDIOS — OFFICIAL PAYMENT RECEIPT*\n`;
      msg += `🧾 *Receipt Ref:* ${currentInvoiceRef}\n`;
      msg += `📅 *Date:* ${invoiceDateIssued}\n\n`;

      msg += `👤 *Client / Customer:* ${clientVal}\n`;
      if (rawPhone) msg += `📞 *Phone / WhatsApp:* ${rawPhone}\n`;
      if (emailVal) msg += `✉️ *Email:* ${emailVal}\n`;
      msg += `🗓️ *Shoot Date:* ${dateVal} (${timeVal})\n`;
      msg += `📍 *Location:* ${locVal}\n`;
      msg += `🎥 *Assigned Crew:* ${crewVal}\n\n`;

      msg += `*SERVICE & DELIVERABLES:*\n`;
      msg += `📸 *${pkg.title}* — ${opt.name}\n`;
      msg += `💰 *Base Investment:* KSh ${basePrice.toLocaleString()}\n`;

      if (checkedAddons.length > 0) {
        msg += `\n*SELECTED ADD-ONS:*\n`;
        checkedAddons.forEach(a => {
          msg += `• ${a.name} (+KSh ${a.price.toLocaleString()})\n`;
        });
      }

      if (customLineItems.length > 0) {
        msg += `\n*CUSTOM SERVICES:*\n`;
        customLineItems.forEach(item => {
          msg += `• ${item.name}: KSh ${(parseInt(item.rate, 10) || 0).toLocaleString()}\n`;
        });
      }

      if (discount > 0) {
        msg += `\n🎁 *Special Discount:* - KSh ${discount.toLocaleString()}\n`;
      }

      msg += `\n*PAYMENT VERIFICATION:*\n`;
      msg += `💵 *Total Shoot Investment:* KSh ${grandTotal.toLocaleString()}\n`;

      if (paymentStatus === "full") {
        msg += `✅ *Amount Received:* KSh ${grandTotal.toLocaleString()} *(PAID IN FULL)*\n`;
        msg += `💳 *Payment Method:* ${paymentMethod}\n`;
        msg += `🏷️ *Transaction Code / Ref:* *${paymentRef}*\n`;
        msg += `🎉 *Balance Remaining:* *KSh 0 (CLEARED)*\n\n`;
      } else {
        msg += `✅ *Deposit Received:* KSh ${deposit.toLocaleString()} *(${depPercent}% PAID)*\n`;
        msg += `💳 *Payment Method:* ${paymentMethod}\n`;
        msg += `🏷️ *Transaction Code / Ref:* *${paymentRef}*\n`;
        msg += `💳 *Balance Due on Delivery:* *KSh ${balance.toLocaleString()}*\n\n`;
      }

      if (notesVal) {
        msg += `📝 *Studio Deliverable Notes:*\n_${notesVal}_\n\n`;
      }

      if (pdfDownloaded) {
        msg += `📥 *Official PDF Receipt Generated & Saved.* Please see attached PDF document.\n\n`;
      }

      msg += `✨ *Thank you for creating memories with Laureign Studios! Your master high-definition photographs will be delivered via private gallery link.* ✨\n`;
      msg += `📞 Studio Contact: 0790 048 905`;
    } else {
      msg += `*LAUREIGN STUDIOS — OFFICIAL PROFORMA INVOICE & QUOTATION*\n`;
      msg += `📄 *Quotation Ref:* ${currentInvoiceRef}\n`;
      msg += `📅 *Issued:* ${invoiceDateIssued} (Valid 14 Days)\n\n`;

      msg += `👤 *Client / Org:* ${clientVal}\n`;
      if (rawPhone) msg += `📞 *Phone / WhatsApp:* ${rawPhone}\n`;
      if (emailVal) msg += `✉️ *Email:* ${emailVal}\n`;
      msg += `🗓️ *Target Date:* ${dateVal} (${timeVal})\n`;
      msg += `📍 *Venue / Location:* ${locVal}\n`;
      msg += `🎥 *Assigned Crew:* ${crewVal}\n\n`;

      msg += `*CORE PACKAGE DELIVERABLE:*\n`;
      msg += `📸 *${pkg.title}* — ${opt.name}\n`;
      msg += `💰 *Base Investment:* KSh ${basePrice.toLocaleString()}\n`;

      if (checkedAddons.length > 0) {
        msg += `\n*SELECTED STUDIO ADD-ONS:*\n`;
        checkedAddons.forEach(a => {
          msg += `• ${a.name} (+KSh ${a.price.toLocaleString()})\n`;
        });
      }

      if (customLineItems.length > 0) {
        msg += `\n*CUSTOM PRODUCTION ITEMS:*\n`;
        customLineItems.forEach(item => {
          msg += `• ${item.name}: KSh ${(parseInt(item.rate, 10) || 0).toLocaleString()} (${item.spec})\n`;
        });
      }

      if (discount > 0) {
        msg += `\n🎁 *Special Client Discount:* - KSh ${discount.toLocaleString()}\n`;
      }

      if (notesVal) {
        msg += `\n📝 *Production Scope Notes:*\n_${notesVal}_\n`;
      }

      msg += `\n*FINANCIAL SUMMARY:*\n`;
      msg += `💵 *Total Project Investment:* KSh ${grandTotal.toLocaleString()}\n`;
      msg += `🔒 *Required Booking Deposit (${depPercent}%):* KSh ${deposit.toLocaleString()}\n`;
      msg += `💳 *Balance Due on Master Delivery:* KSh ${balance.toLocaleString()}\n\n`;

      msg += `*OFFICIAL PAYMENT TILL:*\n`;
      msg += `M-Pesa Buy Goods Till / Phone: *0790048905*\n`;
      msg += `Account Ref: *LS-${clientVal.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8) || "BOOKING"}*\n\n`;

      if (pdfDownloaded) {
        msg += `📥 *Official PDF Quotation Generated & Saved.* Please see attached PDF document.\n\n`;
      }

      msg += `_Please confirm date availability and issue deposit receipt to reserve your slot._`;
    }

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  }

  function copyInvoiceText() {
    const isReceipt = invoiceMode === "receipt";
    const pkgId = invPackageSelect ? invPackageSelect.value : "";
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
    const optIdx = invTierSelect ? parseInt(invTierSelect.value, 10) || 0 : 0;
    const opt = pkg.options[optIdx] || pkg.options[0];

    const clientVal = (invClientInput && invClientInput.value.trim()) || "Client";
    const phoneVal = (invPhoneInput && invPhoneInput.value.trim()) || "Not specified";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "TBD";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (In-Studio, Kakamega)";

    const checkedAddons = [];
    document.querySelectorAll(".inv-addon-checkbox:checked").forEach(cb => {
      checkedAddons.push({
        name: cb.dataset.name,
        price: parseInt(cb.dataset.price, 10) || 0
      });
    });

    const basePrice = opt.price || 0;
    const addonsTotal = checkedAddons.reduce((sum, a) => sum + a.price, 0);
    const customTotal = customLineItems.reduce((sum, item) => sum + (parseInt(item.rate, 10) || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal + customTotal - discount);

    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 40, 10) || 40;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    let text = isReceipt
      ? `LAUREIGN STUDIOS — OFFICIAL PAYMENT RECEIPT\n`
      : `LAUREIGN STUDIOS — OFFICIAL PROFORMA INVOICE\n`;
    text += `Ref: ${currentInvoiceRef}\n`;
    text += `Date: ${invoiceDateIssued}${isReceipt ? "" : " (Valid 14 Days)"}\n\n`;
    text += `Client: ${clientVal}\nPhone: ${phoneVal}\n`;
    if (emailVal) text += `Email: ${emailVal}\n`;
    text += `Shoot Date: ${dateVal} (${timeVal})\nLocation: ${locVal}\n\n`;
    text += `Package: ${pkg.title} — ${opt.name}\n`;
    text += `Base Rate: KSh ${basePrice.toLocaleString()}\n`;

    if (checkedAddons.length > 0) {
      text += `Add-Ons:\n`;
      checkedAddons.forEach(a => {
        text += `- ${a.name} (KSh ${a.price.toLocaleString()})\n`;
      });
    }

    if (customLineItems.length > 0) {
      text += `Custom Services:\n`;
      customLineItems.forEach(item => {
        text += `- ${item.name}: KSh ${(parseInt(item.rate, 10) || 0).toLocaleString()} (${item.spec})\n`;
      });
    }

    if (discount > 0) {
      text += `Special Discount: - KSh ${discount.toLocaleString()}\n`;
    }

    text += `\nTotal: KSh ${grandTotal.toLocaleString()}\n`;
    if (isReceipt) {
      text += `Amount Received: KSh ${grandTotal.toLocaleString()} (PAID IN FULL)\nBalance: KSh 0 (CLEARED)\n\n`;
      text += `Payment Channel: M-Pesa Buy Goods Till 0790048905\nStudio: Laureign Studios (Official Receipt)`;
    } else {
      text += `Deposit Required (${depPercent}%): KSh ${deposit.toLocaleString()}\nBalance Due: KSh ${balance.toLocaleString()}\n\n`;
      text += `M-Pesa Payment: 0790048905\nAccount Ref: LS-${clientVal.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8) || "BOOKING"}`;
    }

    navigator.clipboard.writeText(text).then(() => {
      showInvoiceToast(`✓ ${isReceipt ? "Official Receipt" : "Formal Quotation"} copied to clipboard!`);
    }).catch(() => {
      prompt("Copy below:", text);
    });
  }

  function openInvoiceFromBookingModal() {
    const reelChecked = modalAddReelCheckbox && modalAddReelCheckbox.checked;
    const clientName = modalNameInput ? modalNameInput.value.trim() : "";
    const shootDate = modalDateInput ? modalDateInput.value : "";
    const loc = modalLocationSelect ? modalLocationSelect.value : "";

    closeModal();
    openInvoiceModal(modalState.pkgId, modalState.optionIndex);

    if (clientName && invClientInput) invClientInput.value = clientName;
    if (shootDate && invDateInput) invDateInput.value = shootDate;
    if (loc && invLocationInput) invLocationInput.value = loc;

    if (reelChecked) {
      const invCb = document.querySelector(`.inv-addon-checkbox[value="cinematic-reel"]`);
      if (invCb) invCb.checked = true;
    }
    updateInvoiceDisplay();
  }

  function openInvoiceFromSamplesModal() {
    closeSamplesModal();
    openInvoiceModal(currentSamplesPkgId, 0);
  }

  function openInvoiceModalFromCalc() {
    openInvoiceModal();
    // Pre-check any add-ons currently selected in calculator
    document.querySelectorAll(".addon-checkbox:checked").forEach(cb => {
      const addonId = cb.dataset.addonId;
      const invCb = document.querySelector(`.inv-addon-checkbox[value="${addonId}"]`);
      if (invCb) invCb.checked = true;
    });
    updateInvoiceDisplay();
  }

  // Expose globally to window
  window.openInvoiceModal = openInvoiceModal;
  window.closeInvoiceModal = closeInvoiceModal;
  window.setInvoiceMode = setInvoiceMode;
  window.applyWalkinPreset = applyWalkinPreset;
  window.normalizeKenyanPhone = normalizeKenyanPhone;
  window.onInvoicePackageChange = onInvoicePackageChange;
  window.onInvoiceTierChange = onInvoiceTierChange;
  window.updateInvoiceDisplay = updateInvoiceDisplay;
  window.addCustomLineItem = addCustomLineItem;
  window.removeCustomLineItem = removeCustomLineItem;
  window.onCustomItemChange = onCustomItemChange;
  window.downloadInvoicePdf = downloadInvoicePdf;
  window.shareInvoicePdfWhatsApp = shareInvoicePdfWhatsApp;
  window.sendInvoiceWhatsApp = sendInvoiceWhatsApp;
  window.copyInvoiceText = copyInvoiceText;
  window.openInvoiceFromBookingModal = openInvoiceFromBookingModal;
  window.openInvoiceFromSamplesModal = openInvoiceFromSamplesModal;
  window.openInvoiceModalFromCalc = openInvoiceModalFromCalc;
  window.showInvoiceToast = showInvoiceToast;


    initInvoice();
  renderFaqs();
});
