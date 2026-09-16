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
  const modalPhoneInput = document.getElementById("modalPhoneInput");
  const modalEmailInput = document.getElementById("modalEmailInput");
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

    const cardsHtml = list.map((pkg, idx) => {
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

      const isAboveTheFold = idx < 4;
      const webpSource = pkg.imageWebp ? `<source srcset="${pkg.imageWebp}" type="image/webp">` : '';

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
            <picture>
              ${webpSource}
              <img src="${pkg.image}" alt="${pkg.title}" loading="${isAboveTheFold ? 'eager' : 'lazy'}" decoding="async" ${isAboveTheFold ? 'fetchpriority="high"' : ''}>
            </picture>
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
          url: p.imageHighRes || p.image,
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
  // Free Samples Viewer Modal & Lightbox (With Apple Multi-Album Explorer)
  // ------------------------------------------------------------
  function renderMultiAlbumSamplesModal(pkg, activeAlbumId = null) {
    if (!pkg || !pkg.albums || pkg.albums.length === 0) return;

    if (samplesModalTitle) {
      samplesModalTitle.innerHTML = `${escapeHtml(pkg.title)} <span class="samples-modal-badge" style="background:#047857; color:#ffffff; padding:3px 10px; border-radius:999px; font-size:11px; font-weight:800; margin-left:8px;">📁 ${pkg.albums.length} Event Albums</span>`;
    }

    const allSamples = pkg.samples || [];
    const totalCount = allSamples.length;

    // Build top album filter tabs
    let tabsHtml = `
      <div class="samples-album-tabs-wrap">
        <div class="samples-album-tabs">
          <button type="button" class="album-tab-pill ${activeAlbumId === null ? 'active' : ''}" data-target="overview">
            📁 All Albums (${pkg.albums.length})
          </button>
          ${pkg.albums.map(alb => `
            <button type="button" class="album-tab-pill ${activeAlbumId === alb.id ? 'active' : ''}" data-target="${alb.id}">
              ${escapeHtml(alb.title.replace(" Birthday Party", "").replace(" Birthday Celebration", "").replace(" Twin Birthday", "").replace(" 1st Birthday Milestone", "").replace(" Birthday Gala", "").replace(" Sunshine Birthday", ""))} (${alb.count})
            </button>
          `).join('')}
          <button type="button" class="album-tab-pill ${activeAlbumId === 'all-stream' ? 'active' : ''}" data-target="all-stream">
            📸 All Photos (${totalCount})
          </button>
        </div>
      </div>
    `;

    if (samplesModalDesc) {
      samplesModalDesc.innerHTML = `
        <div style="font-size:12.5px; color:var(--muted); margin-bottom:4px;"><b>Select an event album</b> to inspect authentic milestone lighting, guest candids &amp; celebration moments:</div>
        ${tabsHtml}
      `;

      // Attach tab click handlers
      const pillButtons = samplesModalDesc.querySelectorAll('.album-tab-pill');
      pillButtons.forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const target = btn.dataset.target;
          if (target === 'overview') {
            renderMultiAlbumSamplesModal(pkg, null);
          } else if (target === 'all-stream') {
            renderMultiAlbumSamplesModal(pkg, 'all-stream');
          } else {
            renderMultiAlbumSamplesModal(pkg, target);
          }
        };
      });
    }

    if (!samplesGalleryGrid) return;

    // View 1: Overview - Apple Album Folder Cards
    if (activeAlbumId === null) {
      samplesGalleryGrid.innerHTML = `
        <div class="samples-folders-grid" style="grid-column: 1 / -1;">
          ${pkg.albums.map(alb => `
            <div class="samples-folder-card" data-album-id="${alb.id}">
              <div class="folder-card-thumb-wrap">
                <img src="${alb.cover}" alt="${escapeHtml(alb.title)}" loading="lazy">
                <div class="folder-card-badge">📁 Event Collection</div>
                <div class="folder-card-count">📸 ${alb.count} Photos</div>
              </div>
              <div class="folder-card-body">
                <div class="folder-card-title">${escapeHtml(alb.title)}</div>
                <div class="folder-card-vibe">${escapeHtml(alb.vibe || 'Real client birthday celebration coverage')}</div>
                <div class="folder-card-cta">
                  <span>Open Album (${alb.count} Photos)</span>
                  <span style="font-size:16px;">➔</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      // Attach card click handlers
      const cards = samplesGalleryGrid.querySelectorAll('.samples-folder-card');
      cards.forEach(card => {
        card.onclick = (e) => {
          e.stopPropagation();
          const albId = card.dataset.albumId;
          renderMultiAlbumSamplesModal(pkg, albId);
        };
      });

    // View 2: Specific Album Photos View
    } else if (activeAlbumId !== 'all-stream') {
      const alb = pkg.albums.find(a => a.id === activeAlbumId) || pkg.albums[0];
      const albSamples = alb.samples || [];

      const sampleItems = albSamples.map((s, sIdx) => ({
        url: s.url,
        title: s.title || `${alb.title} · Photo ${sIdx + 1}`,
        catLabel: pkg.catLabel,
        price: (pkg.options[0] || {}).price || 0,
        targetUrl: getPackageShowcaseUrl(pkg)
      }));

      samplesGalleryGrid.innerHTML = `
        <div class="samples-album-breadcrumb-bar" style="grid-column: 1 / -1;">
          <button type="button" class="btn-album-back" id="btnAlbumBack">‹ Back to All Albums</button>
          <div class="album-breadcrumb-title">📁 <b>${escapeHtml(alb.title)}</b> (${alb.count} Curated Photos)</div>
          <button type="button" class="btn-album-slideshow" id="btnAlbumSlideshow">▶ Start Fullscreen Slideshow</button>
        </div>
        ${albSamples.map((s, idx) => `
          <div class="sample-item-card js-lightbox-trigger" data-url="${s.url}" data-idx="${idx}">
            <img src="${s.url}" alt="${escapeHtml(s.title || 'Photo Sample')}" class="sample-item-thumb" loading="lazy">
            <div class="sample-item-zoom-icon">🔍</div>
          </div>
        `).join('')}
      `;

      const btnBack = document.getElementById("btnAlbumBack");
      if (btnBack) {
        btnBack.onclick = (e) => {
          e.stopPropagation();
          renderMultiAlbumSamplesModal(pkg, null);
        };
      }

      const btnSlideshow = document.getElementById("btnAlbumSlideshow");
      if (btnSlideshow) {
        btnSlideshow.onclick = (e) => {
          e.stopPropagation();
          openLightbox(sampleItems, 0);
        };
      }

      const triggers = samplesGalleryGrid.querySelectorAll('.js-lightbox-trigger');
      triggers.forEach((el, idx) => {
        el.onclick = (e) => {
          e.stopPropagation();
          openLightbox(sampleItems, idx);
        };
      });

    // View 3: All Photos Stream View
    } else {
      const sampleItems = allSamples.map((s, sIdx) => ({
        url: s.url,
        title: s.title || `Birthday Event · Photo ${sIdx + 1}`,
        catLabel: pkg.catLabel,
        price: (pkg.options[0] || {}).price || 0,
        targetUrl: getPackageShowcaseUrl(pkg)
      }));

      samplesGalleryGrid.innerHTML = `
        <div class="samples-album-breadcrumb-bar" style="grid-column: 1 / -1;">
          <button type="button" class="btn-album-back" id="btnAlbumBack">‹ Switch to Folder Albums</button>
          <div class="album-breadcrumb-title">📸 <b>All Birthday Event Photos</b> (${totalCount} Total Images)</div>
          <button type="button" class="btn-album-slideshow" id="btnAlbumSlideshow">▶ Fullscreen Slideshow</button>
        </div>
        ${allSamples.map((s, idx) => `
          <div class="sample-item-card js-lightbox-trigger" data-url="${s.url}" data-idx="${idx}">
            <img src="${s.url}" alt="${escapeHtml(s.title || 'Photo Sample')}" class="sample-item-thumb" loading="lazy">
            <div class="sample-item-zoom-icon">🔍</div>
          </div>
        `).join('')}
      `;

      const btnBack = document.getElementById("btnAlbumBack");
      if (btnBack) {
        btnBack.onclick = (e) => {
          e.stopPropagation();
          renderMultiAlbumSamplesModal(pkg, null);
        };
      }

      const btnSlideshow = document.getElementById("btnAlbumSlideshow");
      if (btnSlideshow) {
        btnSlideshow.onclick = (e) => {
          e.stopPropagation();
          openLightbox(sampleItems, 0);
        };
      }

      const triggers = samplesGalleryGrid.querySelectorAll('.js-lightbox-trigger');
      triggers.forEach((el, idx) => {
        el.onclick = (e) => {
          e.stopPropagation();
          openLightbox(sampleItems, idx);
        };
      });
    }

    if (samplesBookWaBtn) {
      samplesBookWaBtn.onclick = () => {
        const text = `👋 Hello ${PACKAGES_CONFIG.studioName}!\n\nI just checked your client event albums for "${pkg.title}" on your packages landing page, and I love the quality!\n\nI would like to inquire about booking availability for a birthday celebration. 📸`;
        window.open(`https://wa.me/${PACKAGES_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      };
    }
  }

  function openSamplesModal(pkgId) {
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    if (!pkg) return;

    // Check if this package has curated event albums / subfolders
    if (pkg.albums && pkg.albums.length > 0) {
      renderMultiAlbumSamplesModal(pkg, null);
      if (samplesModal) samplesModal.classList.add("open");
      return;
    }

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
          const thumbSrc = s.thumbUrl || s.url.replace(/\.(jpg|jpeg|png)$/i, '_thumb.jpg');
          return `
            <div class="sample-item-card js-lightbox-trigger" data-url="${s.url}">
              <img src="${thumbSrc}" onerror="this.onerror=null;this.src='${s.url}';" alt="${s.title || 'Photo Sample'}" class="sample-item-thumb" loading="lazy" decoding="async">
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

  [modalDateInput, modalNameInput, modalPhoneInput, modalEmailInput, modalLocationSelect, modalAddReelCheckbox].forEach(input => {
    if (input) {
      input.addEventListener("input", updateModalPreview);
      input.addEventListener("change", updateModalPreview);
    }
  });

  if (modalLaunchWaBtn) {
    modalLaunchWaBtn.addEventListener("click", () => {
      const msg = buildWhatsAppMessage(modalState.pkgId, modalState.optionIndex);
      const pkg = PACKAGES_DATA.find(p => p.id === modalState.pkgId);
      const opt = pkg ? pkg.options[modalState.optionIndex] : null;

      saveClientLead({
        name: modalNameInput ? modalNameInput.value.trim() : "",
        phone: modalPhoneInput ? modalPhoneInput.value.trim() : "",
        email: modalEmailInput ? modalEmailInput.value.trim() : "",
        date: modalDateInput ? modalDateInput.value : "",
        location: modalLocationSelect ? modalLocationSelect.value : "",
        package: pkg && opt ? `${pkg.title} (${opt.name})` : "Studio Session",
        source: "Booking Modal (WhatsApp)"
      });

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

  let invoiceMode = "quotation"; // "quotation" | "receipt"
  let currentInvoiceRef = "";
  let invoiceDateIssued = "";
  let invoiceValidity = "";
  let invoiceSessions = []; // [{ id, pkgId, title, tierIdx, tierName, spec, rate, qty }]
  let invoiceAddons = [];   // [{ id, name, spec, price }]

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

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
    if (clean.length === 10 && clean.startsWith("0")) {
      return "254" + clean.slice(1);
    }
    if (clean.length === 9 && (clean.startsWith("7") || clean.startsWith("1"))) {
      return "254" + clean;
    }
    if (clean.length === 12 && clean.startsWith("254")) {
      return clean;
    }
    if (clean.length >= 9) {
      return clean;
    }
    return "";
  }

  // Primary Production Categories Architecture
  const INVOICE_CATEGORIES = {
    studio: {
      id: "studio",
      name: "STUDIO & PORTRAIT SESSIONS",
      quoteTitle: "STUDIO SESSION QUOTATION",
      receiptTitle: "OFFICIAL STUDIO SESSION RECEIPT",
      scope: "IN-STUDIO PRODUCTION",
      defaultLoc: "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)"
    },
    weddings: {
      id: "weddings",
      name: "WEDDINGS & MATRIMONY COVERAGE",
      quoteTitle: "WEDDING & MATRIMONY QUOTATION",
      receiptTitle: "OFFICIAL WEDDING PRODUCTION RECEIPT",
      scope: "MATRIMONY CINEMA & PHOTO",
      defaultLoc: "Windsor Golf Hotel & Country Club / Nairobi"
    },
    events: {
      id: "events",
      name: "CORPORATE SUMMITS, GALAS & EVENTS",
      quoteTitle: "EVENT & SUMMIT COVERAGE QUOTATION",
      receiptTitle: "OFFICIAL EVENT MEDIA RECEIPT",
      scope: "CONFERENCE & GALA MEDIA",
      defaultLoc: "Radisson Blu / Villa Rosa Kempinski / Nairobi"
    },
    outdoor: {
      id: "outdoor",
      name: "OUTDOOR & NATURAL LIGHT SESSIONS",
      quoteTitle: "OUTDOOR LIFESTYLE QUOTATION",
      receiptTitle: "OFFICIAL OUTDOOR SESSION RECEIPT",
      scope: "NATURAL LIGHT LIFESTYLE",
      defaultLoc: "Karura Forest / Botanical Gardens / On-Location"
    },
    commercial: {
      id: "commercial",
      name: "COMMERCIAL & BRAND PRODUCTION",
      quoteTitle: "COMMERCIAL BRAND PRODUCTION QUOTATION",
      receiptTitle: "OFFICIAL COMMERCIAL PRODUCTION RECEIPT",
      scope: "BRAND & COMMERCIAL ASSETS",
      defaultLoc: "Client Facility / Commercial Studio Setup"
    }
  };

  let currentInvoiceCategory = "studio";

  function setInvoiceCategory(catKey, force = false) {
    if (!INVOICE_CATEGORIES[catKey]) catKey = "studio";
    currentInvoiceCategory = catKey;

    const catSelect = document.getElementById("invCategorySelect");
    if (catSelect && (catSelect.value !== catKey || force)) {
      catSelect.value = catKey;
    }

    updateInvoiceDisplay();
  }

  function onCategorySelectChange() {
    const catSelect = document.getElementById("invCategorySelect");
    if (!catSelect) return;
    setInvoiceCategory(catSelect.value);
    const cat = INVOICE_CATEGORIES[currentInvoiceCategory];
    showInvoiceToast(`✓ Main Category set to "${cat.name}"`);
  }

  function detectCategoryFromPackage(pkgId) {
    if (!pkgId || pkgId === "custom") return currentInvoiceCategory || "studio";
    if (pkgId.includes("wedding") || pkgId === "pre-wedding") return "weddings";
    if (typeof PACKAGES_DATA !== "undefined") {
      const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
      if (pkg) {
        if (pkg.pathway === "events") {
          if (pkg.id.includes("wedding")) return "weddings";
          return "events";
        }
        if (pkg.pathway === "outdoor") return "outdoor";
        if (pkg.pathway === "commercial") return "commercial";
        return "studio";
      }
    }
    return "studio";
  }

  // Extracts client's first or primary name (stripping honorifics like Dr., Mr., Mrs.)
  function getClientFirstName(rawName) {
    const name = (rawName || (invClientInput ? invClientInput.value : "")).trim();
    if (!name || name.toLowerCase() === "valued client" || name.toLowerCase() === "studio walk-in guest") {
      return "";
    }
    const tokens = name.split(/\s+/).filter(Boolean);
    if (!tokens.length) return "";
    let first = tokens[0];
    if (/^(mr|mrs|ms|miss|dr|eng|hon|pastor|prof|rev|arch|bishop)\.?$/i.test(first)) {
      if (tokens.length > 1) {
        first = tokens[1];
        if (tokens.length > 2 && /^(and|&)$/i.test(tokens[2]) && tokens[3]) {
          return `${first} & ${tokens[3]}`;
        }
      }
    }
    if (tokens.length >= 3 && /^(and|&)$/i.test(tokens[1])) {
      return `${tokens[0]} & ${tokens[2]}`;
    }
    return first;
  }

  function getClientPossessive(rawName) {
    const first = getClientFirstName(rawName);
    if (!first) return "";
    if (first.includes("&")) return `${first}'s`;
    return (first.endsWith("s") || first.endsWith("S")) ? `${first}'` : `${first}'s`;
  }

  function onClientNameInput() {
    autoSuggestOccasionTitle(false);
    updateInvoiceDisplay();
  }

  // Generates a tailored, luxury production occasion title honoring the client
  function autoSuggestOccasionTitle(force = false) {
    const occInput = document.getElementById("invOccasionTitleInput");
    if (!occInput) return;

    if (!force && occInput.dataset.userEdited === "true" && occInput.value.trim().length > 0) {
      updateInvoiceDisplay();
      return;
    }

    const clientRaw = invClientInput ? invClientInput.value.trim() : "";
    const poss = getClientPossessive(clientRaw);
    const cat = INVOICE_CATEGORIES[currentInvoiceCategory] || INVOICE_CATEGORIES["studio"];

    const firstSession = invoiceSessions[0];
    const sTitle = firstSession ? firstSession.title.toLowerCase() : "";

    let suggested = "";

    if (currentInvoiceCategory === "weddings") {
      suggested = poss ? `${poss} Bespoke Wedding Celebration & Matrimony Cinema` : "Bespoke Wedding Celebration & Matrimony Cinema";
    } else if (currentInvoiceCategory === "events") {
      suggested = poss ? `${poss} Executive Corporate Summit & Gala Media Coverage` : "Executive Corporate Summit & Event Media Coverage";
    } else if (currentInvoiceCategory === "outdoor") {
      suggested = poss ? `${poss} Golden Hour Natural Light & Lifestyle Session` : "Golden Hour Natural Light & Lifestyle Session";
    } else if (currentInvoiceCategory === "commercial") {
      suggested = poss ? `${poss} Commercial Brand & High-Impact Visual Production` : "Commercial Brand & Product Visual Production";
    } else {
      // Studio category
      if (sTitle.includes("birthday")) {
        suggested = poss ? `${poss} Milestone Birthday Studio Portrait Session` : "Milestone Birthday Studio Portrait Session";
      } else if (sTitle.includes("graduation")) {
        suggested = poss ? `${poss} Commencement & Graduation Portrait Suite` : "Commencement & Graduation Portrait Suite";
      } else if (sTitle.includes("silk") || sTitle.includes("wrap")) {
        suggested = poss ? `${poss} Fine-Art Silk Wrap & Glamour Studio Session` : "Fine-Art Silk Wrap & Glamour Studio Session";
      } else if (sTitle.includes("white") || sTitle.includes("shirt")) {
        suggested = poss ? `${poss} Crisp White Shirt Minimalist Portrait Session` : "Crisp White Shirt Minimalist Portrait Session";
      } else if (sTitle.includes("maternity")) {
        suggested = poss ? `${poss} Bespoke Maternity & Motherhood Fine-Art Session` : "Bespoke Maternity & Motherhood Fine-Art Session";
      } else {
        suggested = poss ? `${poss} Bespoke Studio & Portrait Experience` : "Bespoke Studio & Portrait Experience";
      }
    }

    occInput.value = suggested;
    occInput.dataset.userEdited = "false";
    updateInvoiceDisplay();
  }

  function setOccasionPreset(presetKey) {
    const occInput = document.getElementById("invOccasionTitleInput");
    if (!occInput) return;

    const clientRaw = invClientInput ? invClientInput.value.trim() : "";
    const poss = getClientPossessive(clientRaw);

    let title = "";
    switch (presetKey) {
      case "birthday":
        setInvoiceCategory("studio");
        title = poss ? `${poss} Milestone Birthday Studio Portrait Session` : "Milestone Birthday Studio Portrait Session";
        break;
      case "graduation":
        setInvoiceCategory("studio");
        title = poss ? `${poss} Commencement & Graduation Portrait Suite` : "Commencement & Graduation Portrait Suite";
        break;
      case "wedding":
        setInvoiceCategory("weddings");
        title = poss ? `${poss} Royal Wedding Celebration & Matrimony Cinema` : "Royal Wedding Celebration & Matrimony Cinema";
        break;
      case "silk":
        setInvoiceCategory("studio");
        title = poss ? `${poss} Fine-Art Silk Wrap & Glamour Studio Session` : "Fine-Art Silk Wrap & Glamour Studio Session";
        break;
      case "outdoor":
        setInvoiceCategory("outdoor");
        title = poss ? `${poss} Golden Hour Natural Light & Lifestyle Session` : "Golden Hour Natural Light & Lifestyle Session";
        break;
      case "corporate":
        setInvoiceCategory("events");
        title = poss ? `${poss} Executive Corporate Summit & Media Production` : "Executive Corporate Summit & Media Production";
        break;
      default:
        autoSuggestOccasionTitle(true);
        return;
    }

    occInput.value = title;
    occInput.dataset.userEdited = "true";
    updateInvoiceDisplay();
    showInvoiceToast(`✓ Milestone Title set to "${title}"`);
  }

  function getPersonalizedWelcomeNote() {
    return "";
  }

  function applyWelcomeTemplate() {}

  // Live formatted date for authentic SVG studio rubber stamp (e.g. "DATE: 13 SEP 2026")
  function getFormattedStampDate(d = new Date()) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = String(d.getDate()).padStart(2, "0");
    const mon = months[d.getMonth()];
    const yr = d.getFullYear();
    return `DATE: ${day} ${mon} ${yr}`;
  }

  // Studio Document Mode: Quotation / Proforma Estimate vs Official Receipt
  function setInvoiceMode(mode) {
    invoiceMode = mode === "receipt" ? "receipt" : "quotation";

    const btnQuote = document.getElementById("btnModeQuotation");
    const btnReceipt = document.getElementById("btnModeReceipt");
    const receiptSettings = document.getElementById("invReceiptSettings");
    if (btnQuote) btnQuote.classList.toggle("active", invoiceMode === "quotation");
    if (btnReceipt) btnReceipt.classList.toggle("active", invoiceMode === "receipt");
    if (receiptSettings) receiptSettings.style.display = invoiceMode === "receipt" ? "block" : "none";

    const docBadge = document.getElementById("invDisplayDocType");
    const refLabel = document.getElementById("invDisplayRefLabel");
    const validityItem = document.getElementById("invValidityMetaItem");
    const sealStamp = document.getElementById("invSealStamp");
    const termsTitle = document.getElementById("invTermsTitle");
    const termsNote = document.getElementById("invTermsNote");
    const btnPdfText = document.getElementById("btnDownloadPdfText");
    const btnWaText = document.getElementById("btnSendWaText");

    if (invoiceMode === "receipt") {
      if (currentInvoiceRef.startsWith("LS-QUO-")) {
        currentInvoiceRef = currentInvoiceRef.replace("LS-QUO-", "LS-REC-");
      } else if (!currentInvoiceRef.startsWith("LS-REC-")) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        currentInvoiceRef = `LS-REC-2026-${randNum}`;
      }

      if (docBadge) docBadge.textContent = "OFFICIAL PAYMENT RECEIPT & TAX CLEARANCE";
      if (refLabel) refLabel.textContent = "RECEIPT REF:";
      if (validityItem) validityItem.style.display = "none";
      if (sealStamp) sealStamp.classList.add("paid-stamp");

      if (termsTitle) termsTitle.textContent = "Production Timeline & Delivery Policies";
      if (termsNote) termsNote.textContent = "* Official studio payment receipt. Payment verified via cashless M-Pesa / Bank remittance. High-resolution master deliverables processed per agreed schedule.";
      if (btnPdfText) btnPdfText.textContent = "📥 Download Official Receipt (PDF)";
      if (btnWaText) btnWaText.textContent = "📲 Send Receipt via WhatsApp";
    } else {
      if (currentInvoiceRef.startsWith("LS-REC-")) {
        currentInvoiceRef = currentInvoiceRef.replace("LS-REC-", "LS-QUO-");
      } else if (!currentInvoiceRef.startsWith("LS-QUO-")) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        currentInvoiceRef = `LS-QUO-2026-${randNum}`;
      }

      if (docBadge) docBadge.textContent = "OFFICIAL PROFORMA RATE CARD";
      if (refLabel) refLabel.textContent = "QUOTATION REF:";
      if (validityItem) validityItem.style.display = "flex";
      if (sealStamp) sealStamp.classList.remove("paid-stamp");

      if (termsTitle) termsTitle.textContent = "Studio Terms & Production Policies";
      if (termsNote) termsNote.textContent = "* Official studio quotation & rate proposal. Payment of the booking deposit confirms your session date and creative crew allocation. Remaining balance payable upon master delivery.";
      if (btnPdfText) btnPdfText.textContent = "📥 Download Quotation (PDF)";
      if (btnWaText) btnWaText.textContent = "📲 Send Quotation via WhatsApp";
    }

    updateInvoiceDisplay();
  }

  // 1-Click Preset for Studio Sessions (auto-fills today's shoot details)
  function applyWalkinPreset(status = "full") {
    setInvoiceMode("quotation");
    setInvoiceCategory("studio");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;

    if (invDateInput) invDateInput.value = todayStr;
    if (invTimeInput) invTimeInput.value = "Walk-in Instant Studio Shoot (Completed)";
    if (invLocationInput) invLocationInput.value = "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)";
    if (invCrewInput) invCrewInput.value = "Studio Lead Photographer + Lighting Assistant";

    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    if (payStatusSelect) {
      payStatusSelect.value = status === "deposit" ? "deposit" : "full";
    }

    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    if (payMethodSelect) payMethodSelect.value = "M-Pesa Paybill 542542 (Acc: 486197 - JANE AKOTH)";

    const payRefInput = document.getElementById("invPaymentRefInput");
    if (payRefInput && (!payRefInput.value.trim() || payRefInput.value === "M-Pesa Verified")) {
      const mpesaChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "SL";
      for (let i = 0; i < 6; i++) {
        code += mpesaChars.charAt(Math.floor(Math.random() * mpesaChars.length));
      }
      payRefInput.value = code;
    }

    if (invNotesInput && (!invNotesInput.value.trim() || invNotesInput.value.includes("Includes high-end") || invNotesInput.value.includes("Walk-in studio shoot"))) {
      invNotesInput.value = status === "deposit"
        ? "Walk-in studio shoot. 80% deposit received via M-Pesa. Master retouched gallery ready in 24–48 hours; final balance due on delivery."
        : "Walk-in studio shoot completed at Laureign Studios. Master retouched photos deliverable within 24–48 hours via secure Google Drive & WhatsApp link.";
    }

    // Ensure session exists
    if (invoiceSessions.length === 0) {
      addInvoiceSession("indoor-shirt-shoot", 0, false);
    }

    autoSuggestOccasionTitle(true);
    updateInvoiceDisplay();
    showInvoiceToast(`⚡ Walk-in session applied (${status === "deposit" ? "Deposit" : "100% Paid"})!`);

    if (invClientInput) {
      invClientInput.focus();
      if (invClientInput.value === "Valued Client") invClientInput.value = "";
    }
  }

  // 1-Click Event & Milestone Quotation Presets (Weddings, Events, Summits, Milestones)
  function applyQuotationPreset(presetKey) {
    if (presetKey === "walkin-today") {
      applyWalkinPreset("full");
      return;
    }

    setInvoiceMode("quotation");

    // Clear existing sessions & custom add-ons
    invoiceSessions = [];
    invoiceAddons = [];

    const today = new Date();
    const targetDate = new Date();

    if (presetKey === "wedding-gold") {
      setInvoiceCategory("weddings");
      targetDate.setDate(today.getDate() + 30);
      const yyyy = targetDate.getFullYear();
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const dd = String(targetDate.getDate()).padStart(2, "0");

      if (invClientInput) invClientInput.value = "Mr. & Mrs. (Wedding Couple)";
      if (invDateInput) invDateInput.value = `${yyyy}-${mm}-${dd}`;
      if (invTimeInput) invTimeInput.value = "Full-Day Wedding Coverage (7:00 AM – 8:00 PM)";
      if (invLocationInput) invLocationInput.value = "Windsor Golf Hotel & Country Club / Nairobi";
      if (invCrewInput) invCrewInput.value = "2 Senior Photographers, 1 Master Cinematographer, 4K Aerial Drone Unit";
      if (invNotesInput) {
        invNotesInput.value = "💍 Gold Wedding Production: Morning bridal & groom prep, church solemnization, creative bridal party location session, and evening reception coverage.\n• Deliverables: 400 retouched high-res master images, 4K cinematic film highlights (3–5 mins), 4K drone aerials, luxury layflat photobook album (30 pages), branded wooden flash drive & private cloud gallery.\n• All unedited high-resolution RAW camera proofs included.";
      }

      addInvoiceSession("wedding-coverage", 2, false); // Gold (75,000)
      if (invDepositPercent) invDepositPercent.value = "80";
      autoSuggestOccasionTitle(true);
      showInvoiceToast("💍 Full-Day Wedding Gold Collection applied (KSh 75,000)!");
    }
    else if (presetKey === "wedding-platinum") {
      setInvoiceCategory("weddings");
      targetDate.setDate(today.getDate() + 45);
      const yyyy = targetDate.getFullYear();
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const dd = String(targetDate.getDate()).padStart(2, "0");

      if (invClientInput) invClientInput.value = "Bride & Groom (Royal VIP Matrimony)";
      if (invDateInput) invDateInput.value = `${yyyy}-${mm}-${dd}`;
      if (invTimeInput) invTimeInput.value = "Multi-Location VIP Wedding Coverage (Full Day)";
      if (invLocationInput) invLocationInput.value = "Safari Park Hotel / Ciala Resort / Client Estate";
      if (invCrewInput) invCrewInput.value = "3 Senior Photographers, 2 Master Cinematographers, 4K Drone Aerial Pilot";
      if (invNotesInput) {
        invNotesInput.value = "👑 Royal VIP Platinum Matrimony: Complimentary pre-wedding love story session, multi-camera 4K cinematography, drone aerials, full ceremony documentation & cinematic documentary film (15–20 mins).\n• Deliverables: 600+ retouched master photographs, 1 Luxury 30-Page Master Photobook, 2 Parent Albums, A2 living room canvas mount & luxury wooden USB gift box.";
      }

      addInvoiceSession("wedding-coverage", 3, false); // Platinum (90,000)
      if (invDepositPercent) invDepositPercent.value = "80";
      autoSuggestOccasionTitle(true);
      showInvoiceToast("👑 Royal VIP Platinum Wedding applied (KSh 90,000)!");
    }
    else if (presetKey === "wedding-traditional") {
      setInvoiceCategory("weddings");
      targetDate.setDate(today.getDate() + 21);
      const yyyy = targetDate.getFullYear();
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const dd = String(targetDate.getDate()).padStart(2, "0");

      if (invClientInput) invClientInput.value = "Family & Couple (Traditional Wedding / Ruracio)";
      if (invDateInput) invDateInput.value = `${yyyy}-${mm}-${dd}`;
      if (invTimeInput) invTimeInput.value = "Full-Day Cultural Matrimony (8:00 AM – 6:00 PM)";
      if (invLocationInput) invLocationInput.value = "Family Country Estate / On-Location Grounds";
      if (invCrewInput) invCrewInput.value = "2 Senior Photographers + Master 4K Cinema Camera Unit";
      if (invNotesInput) {
        invNotesInput.value = "🥂 Traditional Matrimony (Ruracio / Dowry Celebration): Complete coverage of family negotiations, bridal entrance, elder blessings, gift presentation & cultural reception.\n• Deliverables: 350+ retouched high-resolution images, 4K cinematic video highlights, 4K drone aerials, luxury photobook album & all unedited original camera proofs.";
      }

      addInvoiceSession("traditional-wedding", 2, false); // Gold (75,000)
      if (invDepositPercent) invDepositPercent.value = "80";
      autoSuggestOccasionTitle(true);
      showInvoiceToast("🥂 Traditional Ruracio Collection applied (KSh 75,000)!");
    }
    else if (presetKey === "corporate-summit") {
      setInvoiceCategory("events");
      targetDate.setDate(today.getDate() + 14);
      const yyyy = targetDate.getFullYear();
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const dd = String(targetDate.getDate()).padStart(2, "0");

      if (invClientInput) invClientInput.value = "Corporate Organization / Summit Secretariat";
      if (invDateInput) invDateInput.value = `${yyyy}-${mm}-${dd}`;
      if (invTimeInput) invTimeInput.value = "Full-Day Conference & Evening Gala Dinner (8:00 AM – 9:00 PM)";
      if (invLocationInput) invLocationInput.value = "Radisson Blu / Villa Rosa Kempinski / Nairobi";
      if (invCrewInput) invCrewInput.value = "2 Commercial Photographers + 4K Cinema Documentarian";
      if (invNotesInput) {
        invNotesInput.value = "🏢 Full Corporate Summit & Gala: Keynote speakers, panel sessions, attendee networking, stage awards ceremony, executive team portraits, same-day digital PR press selects & complete corporate media repository.";
      }

      addInvoiceSession("corporate-event", 1, false); // Gold (35,000)
      invoiceAddons.push({
        id: "addon_summit_reel",
        name: "4K Executive Event Highlights Reel",
        spec: "60-second fast-paced corporate social media highlight cut for LinkedIn & Twitter",
        price: 3000
      });
      renderInvoiceAddons();
      if (invDepositPercent) invDepositPercent.value = "80";
      autoSuggestOccasionTitle(true);
      showInvoiceToast("🏢 Corporate Summit & Gala applied (KSh 38,000)!");
    }
    else if (presetKey === "graduation-vip") {
      setInvoiceCategory("studio");
      targetDate.setDate(today.getDate() + 7);
      const yyyy = targetDate.getFullYear();
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const dd = String(targetDate.getDate()).padStart(2, "0");

      if (invClientInput) invClientInput.value = "Graduate & Proud Family";
      if (invDateInput) invDateInput.value = `${yyyy}-${mm}-${dd}`;
      if (invTimeInput) invTimeInput.value = "Studio Regalia Session + Campus Location (2 Hours)";
      if (invLocationInput) invLocationInput.value = "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor) / Campus";
      if (invCrewInput) invCrewInput.value = "Studio Lead Photographer + Lighting Assistant";
      if (invNotesInput) {
        invNotesInput.value = "🎓 Graduation Milestone VIP: Solo academic regalia portraits, degree scroll, academic hood, cap toss, family and parents combination portraits.\n• Includes magazine-grade skin retouching, living room wooden A3 photo mount & complete high-speed cloud download.";
      }

      addInvoiceSession("graduation-shoot", 2, false); // Gold (3,500)
      invoiceAddons.push({
        id: "addon_a3_mount",
        name: "A3 Statement Photo Mount (30×42cm)",
        spec: "Solid MDF wooden living room wall mount, laminated print, ready to hang",
        price: 2300
      });
      renderInvoiceAddons();
      if (invDepositPercent) invDepositPercent.value = "80";
      autoSuggestOccasionTitle(true);
      showInvoiceToast("🎓 Graduation Milestone + Wall Mount applied (KSh 5,800)!");
    }

    updateInvoiceDisplay();
    if (invClientInput) invClientInput.focus();
  }

  // Smart Autocomplete & Predictive Helpers
  function applyFieldPrediction(inputId, textValue, append = false) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (append) {
      const current = input.value.trim();
      if (!current) {
        input.value = textValue;
      } else if (!current.toLowerCase().includes(textValue.toLowerCase().trim())) {
        input.value = textValue + current;
      }
    } else {
      input.value = textValue;
    }
    if (inputId === "invClientInput") {
      autoSuggestOccasionTitle(false);
    }
    updateInvoiceDisplay();
    input.focus();
    showInvoiceToast(`✓ Inserted "${textValue.trim()}"`);
  }

  function setQuickDate(daysAhead = 0) {
    if (!invDateInput) return;
    const target = new Date();
    target.setDate(target.getDate() + daysAhead);
    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, "0");
    const dd = String(target.getDate()).padStart(2, "0");
    invDateInput.value = `${yyyy}-${mm}-${dd}`;
    updateInvoiceDisplay();
    const labels = { 0: "Today", 1: "Tomorrow", 7: "Next Week", 30: "Next Month" };
    showInvoiceToast(`📅 Date set to ${labels[daysAhead] || `${daysAhead} days ahead`}`);
  }

  function applyNoteTemplate(type) {
    if (!invNotesInput) return;
    const templates = {
      studio: "Includes 2 outfit changes, professional studio lighting & backdrop setup, high-end skin frequency separation retouching, and secure private cloud gallery download.",
      rush: "⚡ Priority 24-Hour Expedited Turnaround: color-graded high-resolution master gallery delivered within 24 hours of session wrap.",
      wedding: "💍 Full-day coverage: morning bridal preparations, church ceremony, creative couple & bridal party location session, and evening reception coverage.",
      graduation: "🎓 Graduation milestone session: includes graduate solo portraits, ceremonial gown & hood props, parents, and extended family group combinations.",
      travel: "🚗 Local transport within town limits covered. Client facilitates venue entrance access, entry tickets, and photography clearances if required.",
      clear: ""
    };

    if (type === "clear") {
      invNotesInput.value = "";
      updateInvoiceDisplay();
      showInvoiceToast("Scope notes cleared.");
      return;
    }

    const tpl = templates[type];
    if (!tpl) return;

    if (!invNotesInput.value.trim()) {
      invNotesInput.value = tpl;
    } else {
      invNotesInput.value = invNotesInput.value.trim() + "\n" + tpl;
    }
    updateInvoiceDisplay();
    showInvoiceToast("✓ Production scope template inserted!");
  }

  // Auto-fill assignment details whenever a package is selected
  function autoFillLogisticsFromPackage(pkgId, forceAutofill = false) {
    if (pkgId === "custom") return;
    const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
    if (!pkg) return;

    // Detect and apply main production category
    const detectedCat = detectCategoryFromPackage(pkgId);
    setInvoiceCategory(detectedCat);
    autoSuggestOccasionTitle(false);

    const isReceipt = invoiceMode === "receipt";
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    if (invDateInput && (!invDateInput.value || isReceipt || forceAutofill)) {
      invDateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    if (invLocationInput) {
      const curLoc = invLocationInput.value.trim();
      if (!curLoc || forceAutofill || curLoc === "Nairobi / In-Studio" || curLoc.startsWith("Laureign Studios") || curLoc.startsWith("Kakamega")) {
        if (pkg.pathway === "studio" || pkg.id.includes("studio") || pkg.id.includes("headshot") || pkg.id.includes("white-shirt") || pkg.id.includes("silk-wrap")) {
          invLocationInput.value = "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)";
        } else if (pkg.pathway === "outdoor" || pkg.id.includes("outdoor")) {
          invLocationInput.value = "Kakamega / On-Location Shoot";
        } else if (pkg.pathway === "events" || pkg.id.includes("wedding")) {
          invLocationInput.value = "Client Event Venue / Nairobi & Across Kenya";
        } else {
          invLocationInput.value = "Client Premises / Studio Facility";
        }
      }
    }

    if (invTimeInput) {
      const curTime = invTimeInput.value.trim();
      if (!curTime || forceAutofill || curTime === "Standard Coverage Session" || curTime.includes("Session")) {
        if (isReceipt) {
          invTimeInput.value = "Walk-in Instant Studio Shoot (Completed)";
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
  }

  // ============================================================
  // MULTI-SESSION / SHOOT BUILDER (Dropdown + Manual Typing Everywhere)
  // ============================================================
  function addInvoiceSession(pkgId = "graduation", optIdx = 0, notify = true) {
    let newSess;
    if (pkgId === "custom") {
      newSess = {
        id: "sess_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
        pkgId: "custom",
        title: "Custom Studio Shoot",
        tierIdx: -1,
        tierName: "Tailored Package",
        spec: "Custom photography coverage, professional lighting, editorial skin retouching & high-resolution digital master gallery.",
        rate: 4500,
        qty: 1
      };
    } else {
      const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
      const opt = (pkg && pkg.options && pkg.options[optIdx]) ? pkg.options[optIdx] : (pkg ? pkg.options[0] : { name: "Standard", price: 3500 });
      const inclusionsText = (opt.inclusions && opt.inclusions.length)
        ? opt.inclusions.join(" • ")
        : (opt.summary || (pkg ? pkg.tagline : "") || "Professional photography session & master deliverables.");

      newSess = {
        id: "sess_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
        pkgId: pkg ? pkg.id : "custom",
        title: pkg ? pkg.title : "Studio Photography Session",
        tierIdx: typeof optIdx === "number" ? optIdx : 0,
        tierName: opt.name,
        spec: inclusionsText,
        rate: opt.price || 0,
        qty: 1
      };
    }

    invoiceSessions.push(newSess);

    if (invoiceSessions.length === 1) {
      autoFillLogisticsFromPackage(newSess.pkgId);
    }

    renderInvoiceSessions();
    updateInvoiceDisplay();

    if (notify) {
      showInvoiceToast(`➕ Added Shoot: ${newSess.title}`);
    }
  }

  function removeInvoiceSession(id) {
    invoiceSessions = invoiceSessions.filter(s => s.id !== id);
    if (invoiceSessions.length === 0) {
      addInvoiceSession("graduation", 0, false);
    } else {
      renderInvoiceSessions();
    }
    updateInvoiceDisplay();
    showInvoiceToast("Shoot session removed");
  }

  function onSessionPkgChange(id, pkgId, optIdx = 0) {
    const session = invoiceSessions.find(s => s.id === id);
    if (!session) return;

    if (pkgId === "custom") {
      session.pkgId = "custom";
      session.title = "Custom Studio / On-Location Shoot";
      session.tierIdx = -1;
      session.tierName = "Tailored Scope";
      session.spec = "Tailored photography session, custom lighting setup, high-end skin retouching and cloud delivery.";
      session.rate = 4500;
    } else {
      const pkg = PACKAGES_DATA.find(p => p.id === pkgId) || PACKAGES_DATA[0];
      session.pkgId = pkg.id;
      session.title = pkg.title;
      const opt = pkg.options[optIdx] || pkg.options[0];
      session.tierIdx = optIdx;
      session.tierName = opt.name;
      session.spec = (opt.inclusions && opt.inclusions.length)
        ? opt.inclusions.join(" • ")
        : (opt.summary || pkg.tagline || "Professional photography deliverables");
      session.rate = opt.price || 0;
    }

    if (invoiceSessions[0] && invoiceSessions[0].id === id) {
      autoFillLogisticsFromPackage(session.pkgId);
    }

    renderInvoiceSessions();
    updateInvoiceDisplay();
  }

  function onSessionTierChange(id, tierVal) {
    const session = invoiceSessions.find(s => s.id === id);
    if (!session) return;

    if (tierVal === "custom") {
      session.tierIdx = -1;
      session.tierName = "Custom Scope";
    } else {
      const optIdx = parseInt(tierVal, 10) || 0;
      const pkg = PACKAGES_DATA.find(p => p.id === session.pkgId);
      if (pkg && pkg.options && pkg.options[optIdx]) {
        const opt = pkg.options[optIdx];
        session.tierIdx = optIdx;
        session.tierName = opt.name;
        session.spec = (opt.inclusions && opt.inclusions.length)
          ? opt.inclusions.join(" • ")
          : (opt.summary || pkg.tagline || "");
        session.rate = opt.price || 0;
      }
    }

    renderInvoiceSessions();
    updateInvoiceDisplay();
  }

  function onSessionFieldChange(id, field, value) {
    const session = invoiceSessions.find(s => s.id === id);
    if (!session) return;

    if (field === "rate") {
      session.rate = parseInt(value, 10) || 0;
    } else if (field === "qty") {
      session.qty = Math.max(1, parseInt(value, 10) || 1);
    } else {
      session[field] = value;
    }

    const card = document.querySelector(`.inv-session-card[data-session-id="${id}"]`);
    if (card && field === "title") {
      const badge = card.querySelector(".inv-session-badge");
      if (badge) {
        const idx = invoiceSessions.indexOf(session) + 1;
        badge.innerHTML = `📸 Shoot #${idx}: ${escapeHtml(session.title || "Custom Shoot")}`;
      }
    }

    updateInvoiceDisplay();
  }

  function renderInvoiceSessions() {
    const container = document.getElementById("invSessionsContainer");
    if (!container) return;

    if (invoiceSessions.length === 0) {
      container.innerHTML = `<div style="font-size:12px; color:#94a3b8; font-style:italic; padding:6px 0;">No sessions added. Click "➕ Add Another Session" to add a shoot.</div>`;
      return;
    }

    const studioPkgs = PACKAGES_DATA.filter(p => p.pathway === "studio");
    const outdoorPkgs = PACKAGES_DATA.filter(p => p.pathway === "outdoor");
    const eventPkgs = PACKAGES_DATA.filter(p => p.pathway === "events");
    const commercialPkgs = PACKAGES_DATA.filter(p => p.pathway === "commercial");

    const html = invoiceSessions.map((s, idx) => {
      const currentPkg = PACKAGES_DATA.find(p => p.id === s.pkgId);

      const pkgOptionsHtml = `
        <option value="custom" ${s.pkgId === "custom" ? "selected" : ""}>-- ✏️ Custom / Tailored Shoot (Manual Type) --</option>
        <optgroup label="📸 Studio &amp; Portrait Sessions">
          ${studioPkgs.map(p => `<option value="${p.id}" ${s.pkgId === p.id ? "selected" : ""}>${escapeHtml(p.title)}</option>`).join("")}
        </optgroup>
        <optgroup label="🌿 Outdoor Sessions">
          ${outdoorPkgs.map(p => `<option value="${p.id}" ${s.pkgId === p.id ? "selected" : ""}>${escapeHtml(p.title)}</option>`).join("")}
        </optgroup>
        <optgroup label="💍 Events &amp; Weddings">
          ${eventPkgs.map(p => `<option value="${p.id}" ${s.pkgId === p.id ? "selected" : ""}>${escapeHtml(p.title)}</option>`).join("")}
        </optgroup>
        <optgroup label="🏢 Commercial &amp; Brand">
          ${commercialPkgs.map(p => `<option value="${p.id}" ${s.pkgId === p.id ? "selected" : ""}>${escapeHtml(p.title)}</option>`).join("")}
        </optgroup>
      `;

      let tierOptionsHtml = "";
      if (currentPkg && currentPkg.options) {
        tierOptionsHtml = currentPkg.options.map((opt, oIdx) => `
          <option value="${oIdx}" ${s.tierIdx === oIdx ? "selected" : ""}>
            ${escapeHtml(opt.name)} — KSh ${opt.price.toLocaleString()}
          </option>
        `).join("") + `<option value="custom" ${s.tierIdx === -1 ? "selected" : ""}>-- ✏️ Custom Tier / Scope (Manual Type) --</option>`;
      } else {
        tierOptionsHtml = `<option value="custom" selected>-- ✏️ Custom Tier / Scope (Manual Type) --</option>`;
      }

      return `
        <div class="inv-session-card" data-session-id="${s.id}">
          <div class="inv-session-header">
            <span class="inv-session-badge">📸 Shoot #${idx + 1}: ${escapeHtml(s.title || "Custom Shoot")}</span>
            ${invoiceSessions.length > 1 ? `<button type="button" class="inv-btn-del-line" onclick="removeInvoiceSession('${s.id}')" title="Remove this session">✕ Remove Shoot</button>` : ''}
          </div>

          <div class="inv-tools-grid">
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Shoot Type Preset:</label>
                <span class="inv-helper-hint">Dropdown</span>
              </div>
              <select class="inv-select inv-session-pkg-select" onchange="onSessionPkgChange('${s.id}', this.value)">
                ${pkgOptionsHtml}
              </select>
            </div>
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Shoot Title (Editable):</label>
                <span class="inv-helper-hint">Type freely</span>
              </div>
              <input type="text" class="inv-input" placeholder="e.g. Graduation Milestone Shoot" value="${escapeHtml(s.title)}" oninput="onSessionFieldChange('${s.id}', 'title', this.value)">
            </div>
          </div>

          <div class="inv-tools-grid" style="margin-top:2px;">
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Tier / Package Preset:</label>
                <span class="inv-helper-hint">Select option</span>
              </div>
              <select class="inv-select inv-session-tier-select" onchange="onSessionTierChange('${s.id}', this.value)">
                ${tierOptionsHtml}
              </select>
            </div>
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Tier Name (Editable):</label>
                <span class="inv-helper-hint">Type freely</span>
              </div>
              <input type="text" class="inv-input" placeholder="e.g. Solo Gold / Executive" value="${escapeHtml(s.tierName)}" oninput="onSessionFieldChange('${s.id}', 'tierName', this.value)">
            </div>
          </div>

          <div class="inv-tool-group" style="margin-top:2px;">
            <div class="inv-label-row">
              <label>Deliverables &amp; Inclusions Scope (Editable):</label>
              <span class="inv-helper-hint">Type or edit deliverables</span>
            </div>
            <textarea class="inv-input" rows="2" placeholder="e.g. 15 retouched images, 2 outfit changes, studio lighting &amp; gown props..." oninput="onSessionFieldChange('${s.id}', 'spec', this.value)">${escapeHtml(s.spec)}</textarea>
          </div>

          <div class="inv-tools-grid" style="grid-template-columns: 2fr 1fr; margin-top:2px;">
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Investment Rate (KSh):</label>
                <span class="inv-helper-hint">Editable rate</span>
              </div>
              <input type="number" class="inv-input" placeholder="e.g. 5500" value="${s.rate || ''}" oninput="onSessionFieldChange('${s.id}', 'rate', this.value)">
            </div>
            <div class="inv-tool-group">
              <div class="inv-label-row">
                <label>Sessions / Qty:</label>
              </div>
              <input type="number" min="1" class="inv-input" value="${s.qty || 1}" oninput="onSessionFieldChange('${s.id}', 'qty', this.value)">
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
  }

  // ============================================================
  // DYNAMIC ADD-ONS & ENHANCEMENTS BUILDER (Unlimited & Flexible)
  // ============================================================
  function addInvoiceAddon(presetName, presetSpec, presetPrice) {
    const newAddon = {
      id: "addon_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
      name: presetName || "Custom Studio Add-On",
      spec: presetSpec || "Deliverable enhancement upgrade agreed with studio",
      price: typeof presetPrice === "number" ? presetPrice : (parseInt(presetPrice, 10) || 0)
    };
    invoiceAddons.push(newAddon);
    renderInvoiceAddons();
    updateInvoiceDisplay();
    if (presetName) {
      showInvoiceToast(`✓ Added "${presetName}" (+KSh ${(newAddon.price || 0).toLocaleString()})`);
    } else {
      showInvoiceToast("➕ Added custom add-on row");
    }
  }

  function removeInvoiceAddon(id) {
    invoiceAddons = invoiceAddons.filter(a => a.id !== id);
    renderInvoiceAddons();
    updateInvoiceDisplay();
    showInvoiceToast("Add-on removed");
  }

  function onAddonFieldChange(id, field, value) {
    const addon = invoiceAddons.find(a => a.id === id);
    if (!addon) return;
    if (field === "price") {
      addon.price = parseInt(value, 10) || 0;
    } else {
      addon[field] = value;
    }
    updateInvoiceDisplay();
  }

  function renderInvoiceAddons() {
    const container = document.getElementById("invAddonsContainer");
    if (!container) return;

    if (invoiceAddons.length === 0) {
      container.innerHTML = `<div style="font-size:11.5px; color:#94a3b8; font-style:italic; padding:6px 0;">No add-ons selected yet. Click the 1-click upgrade chips above (🎬 Reel, 💄 Makeup, 🛸 Drone, etc.) or click "➕ Add Custom Add-On / Reel" to type your own!</div>`;
      return;
    }

    container.innerHTML = invoiceAddons.map(a => `
      <div class="inv-addon-row" data-addon-id="${a.id}">
        <div>
          <input type="text" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Add-on / Service Name" value="${escapeHtml(a.name)}" oninput="onAddonFieldChange('${a.id}', 'name', this.value)">
        </div>
        <div>
          <input type="text" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Deliverable / Scope" value="${escapeHtml(a.spec)}" oninput="onAddonFieldChange('${a.id}', 'spec', this.value)">
        </div>
        <div>
          <input type="number" class="inv-input" style="padding:6px 10px; font-size:12px;" placeholder="Price (KSh)" value="${a.price || ''}" oninput="onAddonFieldChange('${a.id}', 'price', this.value)">
        </div>
        <div>
          <button type="button" class="inv-btn-del-line" onclick="removeInvoiceAddon('${a.id}')" title="Delete" style="height:32px; width:32px; display:flex; align-items:center; justify-content:center; padding:0; font-size:13px;">✕</button>
        </div>
      </div>
    `).join("");
  }

  // ============================================================
  // LIVE A4 INVOICE SHEET DISPLAY UPDATES & TOTALS
  // ============================================================
  function updateInvoiceDisplay() {
    // Meta displays
    const elRef = document.getElementById("invDisplayRef");
    const elDate = document.getElementById("invDisplayDateIssued");
    const elVal = document.getElementById("invDisplayValidity");
    if (elRef) elRef.textContent = currentInvoiceRef;
    if (elDate) elDate.textContent = invoiceDateIssued;
    const invValInput = document.getElementById("invValidityInput");
    const userValidity = invValInput && invValInput.value.trim();
    if (elVal) elVal.textContent = userValidity || invoiceValidity || "14 Days";

    // Client & Assignment Details
    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const phoneVal = (invPhoneInput && invPhoneInput.value.trim()) || "";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "To Be Scheduled";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Coverage Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)";
    const crewVal = (invCrewInput && invCrewInput.value.trim()) || "Studio Lead Photographer + Lighting Assistant";
    const notesVal = (invNotesInput && invNotesInput.value.trim()) || "";

    // Main Production Category Document Title & Scope
    const isReceipt = invoiceMode === "receipt";
    const cat = INVOICE_CATEGORIES[currentInvoiceCategory] || INVOICE_CATEGORIES["studio"];
    const elCatSelect = document.getElementById("invCategorySelect");
    if (elCatSelect && elCatSelect.value !== cat.id) {
      elCatSelect.value = cat.id;
    }

    const elCatMainTitle = document.getElementById("invDisplayCategoryTitle");
    const elScopePill = document.getElementById("invDisplayScopePill");
    const elSheetCatVal = document.getElementById("invSheetCategoryVal");
    const elHonorName = document.getElementById("invDisplayHonorName");
    const elTargetDate = document.getElementById("invDisplayTargetDate");

    if (elCatMainTitle) {
      elCatMainTitle.textContent = isReceipt ? cat.receiptTitle : cat.quoteTitle;
    }
    if (elScopePill) {
      elScopePill.textContent = cat.scope;
    }
    if (elSheetCatVal) {
      elSheetCatVal.textContent = cat.name;
    }
    // Occasion / Event Title for specifications box
    const occInput = document.getElementById("invOccasionTitleInput");
    let occTitle = (occInput && occInput.value.trim()) || "";
    if (!occTitle) {
      occTitle = invoiceSessions.length > 0 ? invoiceSessions.map(s => s.title).join(" + ") : cat.name;
    }

    const elClientSub = document.getElementById("invDisplayClientSub");
    if (elClientSub) {
      const honorText = (clientVal && clientVal !== "Valued Client") ? clientVal.toUpperCase() : "VALUED CLIENT";
      const occBadge = (occTitle && occTitle !== cat.name)
        ? ` &nbsp;·&nbsp; Commission: <span style="color:#047857; font-weight:700;">${escapeHtml(occTitle)}</span>`
        : "";
      elClientSub.innerHTML = `Curated Exclusively For: <b id="invDisplayHonorName" style="color:#047857; font-weight:800;">${escapeHtml(honorText)}</b>${occBadge} &nbsp;·&nbsp; Shoot Date: <span id="invDisplayTargetDate" style="font-weight:700; color:#0f172a;">${escapeHtml(dateVal)}</span>`;
    } else {
      if (elHonorName) {
        elHonorName.textContent = (clientVal && clientVal !== "Valued Client") ? clientVal.toUpperCase() : "VALUED CLIENT";
      }
      if (elTargetDate) {
        elTargetDate.textContent = dateVal;
      }
    }

    const elClient = document.getElementById("invSheetClient");
    const elPhone = document.getElementById("invSheetPhone");
    const elEmail = document.getElementById("invSheetEmail");
    const elSDate = document.getElementById("invSheetDate");
    const elSTime = document.getElementById("invSheetTime");
    const elLoc = document.getElementById("invSheetLocation");
    const elCrew = document.getElementById("invSheetCrew");
    const elBillingLoc = document.getElementById("invSheetBillingLoc");
    const elEventTitle = document.getElementById("invSheetEventTitle");

    if (elClient) elClient.textContent = clientVal;
    if (elPhone) elPhone.textContent = phoneVal ? `📞 Phone: ${phoneVal}` : "📞 Phone: Not Specified";
    if (elEmail) {
      if (emailVal) {
        elEmail.textContent = `✉️ Email: ${emailVal}`;
        elEmail.style.display = "block";
      } else {
        elEmail.style.display = "none";
      }
    }
    if (elBillingLoc) {
      elBillingLoc.textContent = `📍 Destination: ${locVal || "Studio / On-Location"}`;
    }
    if (elEventTitle) {
      elEventTitle.textContent = occTitle;
    }
    if (elSDate) elSDate.textContent = dateVal;
    if (elSTime) elSTime.textContent = timeVal;
    if (elLoc) elLoc.textContent = locVal;
    if (elCrew) elCrew.textContent = crewVal;

    // Financial calculations
    const basePrice = invoiceSessions.reduce((sum, s) => sum + ((s.rate || 0) * (s.qty || 1)), 0);
    const addonsTotal = invoiceAddons.reduce((sum, a) => sum + (a.price || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal - discount);

    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 80, 10) || 80;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    // Render Table Rows in Live Sheet (Sample 5 & Sample 4: 5-Column Precision)
    const tbody = document.getElementById("invTableBody");
    if (tbody) {
      let rowsHtml = "";

      invoiceSessions.forEach((s, idx) => {
        const qty = s.qty || 1;
        const rate = s.rate || 0;
        const lineTotal = rate * qty;
        const numStr = String(idx + 1).padStart(2, '0');

        let specHtml = "";
        if (s.spec) {
          const parts = s.spec.split(/[•\n]/).map(p => p.trim()).filter(Boolean);
          if (parts.length > 1) {
            specHtml = `<ul class="inv-inclusions-list">${parts.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>`;
          } else {
            specHtml = `<div style="font-size:11px; color:#475569; line-height:1.4; margin-top:2px;">${escapeHtml(s.spec)}</div>`;
          }
        } else {
          specHtml = `<div style="font-size:11px; color:#475569; margin-top:2px;">Standard studio photography session &amp; digital master deliverables.</div>`;
        }

        rowsHtml += `
          <tr>
            <td class="col-num">${numStr}</td>
            <td class="col-desc">
              <div class="inv-item-title">${escapeHtml(s.title || "Studio Session")}</div>
              <div class="inv-item-sub">${escapeHtml(s.tierName || "Selected Package Tier")}</div>
              ${specHtml}
            </td>
            <td class="col-qty">${qty > 1 ? `${qty} Sessions` : "1 Session"}</td>
            <td class="col-rate">KSh ${rate.toLocaleString()}</td>
            <td class="col-amount">KSh ${lineTotal.toLocaleString()}</td>
          </tr>
        `;
      });

      invoiceAddons.forEach((a, aIdx) => {
        const price = a.price || 0;
        const numStr = String(invoiceSessions.length + aIdx + 1).padStart(2, '0');
        rowsHtml += `
          <tr>
            <td class="col-num">${numStr}</td>
            <td class="col-desc">
              <div class="inv-item-title">Add-On: ${escapeHtml(a.name || "Creative Enhancement")}</div>
              <div class="inv-item-sub">Selected Enhancement Upgrade</div>
              <div style="font-size:11px; color:#475569; line-height:1.4; margin-top:2px;">${escapeHtml(a.spec || "Optional session / event deliverable enhancement.")}</div>
            </td>
            <td class="col-qty">1 Unit</td>
            <td class="col-rate">KSh ${price.toLocaleString()}</td>
            <td class="col-amount">KSh ${price.toLocaleString()}</td>
          </tr>
        `;
      });

      if (invoiceSessions.length === 0 && invoiceAddons.length === 0) {
        rowsHtml = `<tr><td colspan="5" style="text-align:center; padding:24px; color:#64748b;">No shoot sessions or add-ons configured yet.</td></tr>`;
      }

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
    if (elAddons) elAddons.textContent = `KSh ${addonsTotal.toLocaleString()}`;
    if (elGrand) elGrand.textContent = `KSh ${grandTotal.toLocaleString()}`;
    if (elGrandLbl) elGrandLbl.textContent = invoiceMode === "receipt" ? "TOTAL SHOOT INVESTMENT:" : "TOTAL PROJECT INVESTMENT:";

    // Mode-Specific Financial Breakdown & Deposit Highlight Card
    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    const payRefInput = document.getElementById("invPaymentRefInput");

    const paymentStatus = payStatusSelect ? payStatusSelect.value : "full";
    const paymentMethod = payMethodSelect ? payMethodSelect.value : "M-Pesa Till 0790048905 (Laureign Studios)";
    const paymentRef = (payRefInput && payRefInput.value.trim()) || "M-Pesa Verified";

    const elStatusPill = document.getElementById("invDisplayStatusPill");
    const elWordmark = document.getElementById("invSheetMainWordmark");
    const elDocType = document.getElementById("invDisplayDocType");
    const elPaidRow = document.getElementById("invPaidRow");
    const elPaidLabel = document.getElementById("invPaidLabel");
    const elPaidAmt = document.getElementById("invPaidAmt");
    const elDepositRow = document.getElementById("invDepositRow");
    const elDepositLabel = document.getElementById("invDepositLabel");
    const elDepositVal = document.getElementById("invDepositRequired");
    const elBalRow = document.getElementById("invBalanceRow");
    const elBalLabel = document.getElementById("invBalanceLabel");
    const elBalVal = document.getElementById("invBalanceDue");

    // Deposit Highlight Card (Left Side, Sample 5 Style)
    const elDepAmt = document.getElementById("invDepDisplayAmt");
    const elDepHeaderBadge = document.getElementById("invDepHeaderBadge");
    const elDepPercentLabel = document.getElementById("invDepPercentLabel");
    const elDepBalSub = document.getElementById("invDepBalanceSub");
    const elDepBalSubAmt = document.getElementById("invDepBalanceSubAmt");

    const elPayChannelLine = document.getElementById("invPayChannelLine");
    const elPayTillLine = document.getElementById("invPayTillLine");
    const elPayAccountLine = document.getElementById("invPayAccountLine");
    const elPayRefLine = document.getElementById("invPayRefLine");
    const elTermsNote = document.getElementById("invTermsNote");

    if (isReceipt) {
      if (elWordmark) elWordmark.textContent = "RECEIPT";
      if (elDocType) elDocType.textContent = "OFFICIAL PAYMENT RECEIPT";

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

        // Highlight card in full receipt mode
        if (elDepHeaderBadge) elDepHeaderBadge.textContent = "✓ PAYMENT CONFIRMED IN FULL";
        if (elDepAmt) elDepAmt.textContent = `KSh ${grandTotal.toLocaleString()}`;
        if (elDepPercentLabel) elDepPercentLabel.textContent = "Official studio payment confirmation. Cashless record verified.";
        if (elDepBalSub) elDepBalSub.innerHTML = `Account balance: <b style="color:#15803d;">KSh 0 (CLEARED)</b>. Master cloud delivery initiated.`;

      } else {
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

        // Highlight card in deposit receipt mode
        if (elDepHeaderBadge) elDepHeaderBadge.textContent = `✓ BOOKING DEPOSIT RECEIVED (${depPercent}%)`;
        if (elDepAmt) elDepAmt.textContent = `KSh ${deposit.toLocaleString()}`;
        if (elDepPercentLabel) elDepPercentLabel.textContent = `${depPercent}% deposit received and logged into studio accounting.`;
        if (elDepBalSub) elDepBalSub.innerHTML = `Balance due on master delivery: <b style="color:#dc2626;">KSh ${balance.toLocaleString()}</b>.`;
      }

      if (elPayChannelLine) elPayChannelLine.innerHTML = `<b>Payment Channel:</b> <span style="font-weight:700; color:#0f172a;">${escapeHtml(paymentMethod)}</span>`;
      if (elPayTillLine) elPayTillLine.innerHTML = `<b>Payment Ref / Code:</b> <span class="till-num" style="background:#f1f5f9; color:#0f172a; border-color:#cbd5e1; font-weight:800;">${escapeHtml(paymentRef)}</span> &nbsp;<b>Bank:</b> I&amp;M Bank`;
      if (elPayAccountLine) elPayAccountLine.innerHTML = `<b>Account Name Verified:</b> <span style="font-weight:800; color:#0f172a;">JANE AKOTH</span> (Acc: 486197)`;
      if (elPayRefLine) elPayRefLine.innerHTML = `<b>Receipt Clearance:</b> <span style="font-weight:700; color:#0f172a;">✓ Validated &amp; Logged by Studio Reception (Strictly Cashless)</span>`;
      if (elTermsNote) elTermsNote.textContent = "* Official studio receipt. Cashless payment verified. High-resolution master files and deliverables are processed per the agreed production timeline.";
    } else {
      // Quotation mode
      if (elWordmark) elWordmark.textContent = "QUOTATION";
      if (elDocType) elDocType.textContent = "OFFICIAL PROFORMA RATE CARD";

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
        if (elBalLabel) elBalLabel.textContent = `BALANCE DUE ON MASTER DELIVERY (${100 - depPercent}%):`;
        if (elBalVal) {
          elBalVal.textContent = `KSh ${balance.toLocaleString()}`;
          elBalVal.style.color = "";
          elBalVal.style.fontWeight = "";
        }
      }

      // Highlight card in quotation mode (Sample 5 Style)
      if (elDepHeaderBadge) elDepHeaderBadge.textContent = `BOOKING DEPOSIT REQUIRED (${depPercent}%)`;
      if (elDepAmt) elDepAmt.textContent = `KSh ${deposit.toLocaleString()}`;
      if (elDepPercentLabel) elDepPercentLabel.textContent = `${depPercent}% commitment required to secure shoot date &amp; creative crew allocation.`;
      if (elDepBalSub) elDepBalSub.innerHTML = `Remaining balance of <b id="invDepBalanceSubAmt">KSh ${balance.toLocaleString()}</b> payable upon master high-res delivery.`;

      if (elPayChannelLine) elPayChannelLine.innerHTML = `<b>Remittance Channel:</b> <span id="invPayChannelVal">M-Pesa Till &amp; Paybill / Direct Bank Transfer</span>`;
      if (elPayTillLine) elPayTillLine.innerHTML = `<b>Buy Goods Till:</b> <span class="till-num">0790048905</span> &nbsp;<b>Paybill:</b> <span class="till-num">542542</span> Acc: <span class="till-num">486197</span>`;
      if (elPayAccountLine) elPayAccountLine.innerHTML = `<b>Account Name to Verify:</b> <span style="font-weight:800; color:#0f172a;">JANE AKOTH</span> (Laureign Studios)`;
      const elBankLine = document.getElementById("invPayBankLine");
      if (elBankLine) elBankLine.innerHTML = `<b>Direct Bank Remittance:</b> <span>I&amp;M Bank Kenya · Account No: <b>486197</b></span>`;
      if (elTermsNote) elTermsNote.textContent = `* An ${depPercent}% commitment deposit confirms your booking and reserves our creative crew on your event date. The remaining ${100 - depPercent}% balance is payable upon delivery of your master high-resolution deliverables.`;
    }

    // Dynamic Rubber Stamp Content & Live Up-To-Date Dates
    const elStampDate = document.getElementById("stampSvgDate");
    if (elStampDate) {
      elStampDate.textContent = getFormattedStampDate(new Date());
    }
    const elStampRef = document.getElementById("stampSvgRef");
    if (elStampRef) {
      elStampRef.textContent = `REF: ${currentInvoiceRef}`;
    }
    const elStampTitle = document.getElementById("stampSvgTitle");
    if (elStampTitle) {
      if (isReceipt) {
        elStampTitle.textContent = paymentStatus === "deposit" ? "DEPOSIT CONFIRMED" : "PAID & CONFIRMED";
      } else {
        elStampTitle.textContent = "OFFICIAL QUOTE";
      }
    }
  }

  // App-Like Mobile & Desktop Tab Switcher (Full Quotation Display vs Editor)
  function switchInvoiceTab(tab) {
    const btnEdit = document.getElementById("tabBtnEdit");
    const btnPrev = document.getElementById("tabBtnPreview");
    const paneEdit = document.getElementById("invEditorPane");
    const panePrev = document.getElementById("invPreviewPane");
    const dockBtn = document.getElementById("dockToggleEditText");

    if (tab === "edit") {
      if (btnEdit) btnEdit.classList.add("active");
      if (btnPrev) btnPrev.classList.remove("active");
      if (paneEdit) {
        paneEdit.classList.remove("tab-hidden", "hide-mobile");
        paneEdit.style.display = "flex";
      }
      if (panePrev) {
        panePrev.classList.add("tab-hidden", "hide-mobile");
        panePrev.style.display = "none";
      }
      if (dockBtn) dockBtn.textContent = "📄 View Quotation Sheet";
    } else {
      // Default: preview (Full Display)
      if (btnPrev) btnPrev.classList.add("active");
      if (btnEdit) btnEdit.classList.remove("active");
      if (panePrev) {
        panePrev.classList.remove("tab-hidden", "hide-mobile");
        panePrev.style.display = "flex";
      }
      if (paneEdit) {
        paneEdit.classList.add("tab-hidden", "hide-mobile");
        paneEdit.style.display = "none";
      }
      if (dockBtn) dockBtn.textContent = "✏️ Edit Shoot & Add-Ons";
    }
  }

  function toggleInvoiceEditTab() {
    const paneEdit = document.getElementById("invEditorPane");
    const isEditHidden = !paneEdit || paneEdit.classList.contains("tab-hidden") || paneEdit.classList.contains("hide-mobile") || paneEdit.style.display === "none";
    switchInvoiceTab(isEditHidden ? "edit" : "preview");
  }

  // Staff Portal & Protected Internal Tools Control
  function applyStaffModeVisibility(visible) {
    const headerStaff = document.getElementById("headerStaffTools");
    const drawerStaff = document.getElementById("drawerStaffTools");
    if (headerStaff) headerStaff.style.display = visible ? "flex" : "none";
    if (drawerStaff) drawerStaff.style.display = visible ? "block" : "none";
  }

  function initStaffMode() {
    const isStaffUrl = new URLSearchParams(window.location.search).get("staff") === "true";
    const isStaffStorage = localStorage.getItem("laureign_staff_mode") === "true";
    const isStaff = isStaffUrl || isStaffStorage;
    applyStaffModeVisibility(isStaff);
  }

  function toggleStaffMode() {
    const current = localStorage.getItem("laureign_staff_mode") === "true";
    if (current) {
      localStorage.removeItem("laureign_staff_mode");
      applyStaffModeVisibility(false);
      showInvoiceToast("🔒 Staff Portal locked. Internal desk tools hidden.");
    } else {
      const pin = prompt("Enter Studio Staff PIN to unlock internal desk tools:");
      if (pin === "2026" || pin === "admin") {
        localStorage.setItem("laureign_staff_mode", "true");
        applyStaffModeVisibility(true);
        showInvoiceToast("🔓 Staff Mode unlocked! Walk-in Desk and Leads CRM are now accessible.");
      } else if (pin !== null) {
        alert("Incorrect Staff PIN.");
      }
    }
  }

  function formatExecutiveDate(d) {
    const day = String(d.getDate()).padStart(2, '0');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function initInvoice() {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    currentInvoiceRef = `LS-QUO-2026-${randNum}`;

    const today = new Date();
    invoiceDateIssued = formatExecutiveDate(today);

    const validDate = new Date();
    validDate.setDate(today.getDate() + 14);
    invoiceValidity = `${formatExecutiveDate(validDate)} (14 Days)`;
    const elValInput = document.getElementById("invValidityInput");
    if (elValInput && !elValInput.value) {
      elValInput.value = "14 Days (Standard Offer)";
    }

    if (invoiceSessions.length === 0) {
      addInvoiceSession("graduation", 0, false);
    } else {
      renderInvoiceSessions();
    }

    renderInvoiceAddons();
    updateInvoiceDisplay();
  }

  function openInvoiceModal(pkgId, optIdx) {
    if (!invoiceModal) return;

    if (pkgId) {
      if (invoiceSessions.length === 0) {
        addInvoiceSession(pkgId, typeof optIdx === "number" ? optIdx : 0, false);
      } else {
        const s = invoiceSessions[0];
        onSessionPkgChange(s.id, pkgId, typeof optIdx === "number" ? optIdx : 0);
      }
    } else if (invoiceSessions.length === 0) {
      addInvoiceSession("graduation", 0, false);
    }

    updateInvoiceDisplay();
    switchInvoiceTab("preview");
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

    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const rawPhone = (invPhoneInput && invPhoneInput.value.trim()) || "";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "TBD";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)";
    const crewVal = (invCrewInput && invCrewInput.value.trim()) || "Studio Lead Team";
    const notesVal = (invNotesInput && invNotesInput.value.trim()) || "";

    const catData = INVOICE_CATEGORIES[currentInvoiceCategory] || INVOICE_CATEGORIES["studio"];
    const occInput = document.getElementById("invOccasionTitleInput");
    const occTitle = (occInput && occInput.value.trim()) || (getClientPossessive(clientVal) ? `${getClientPossessive(clientVal)} ${catData.name}` : `Bespoke ${catData.name}`);

    const basePrice = invoiceSessions.reduce((sum, s) => sum + ((s.rate || 0) * (s.qty || 1)), 0);
    const addonsTotal = invoiceAddons.reduce((sum, a) => sum + (a.price || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal - discount);

    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 80, 10) || 80;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    const payStatusSelect = document.getElementById("invPaymentStatusSelect");
    const payMethodSelect = document.getElementById("invPaymentMethodSelect");
    const payRefInput = document.getElementById("invPaymentRefInput");

    const paymentStatus = payStatusSelect ? payStatusSelect.value : "full";
    const paymentMethod = payMethodSelect ? payMethodSelect.value : "M-Pesa Paybill 542542 (Acc: 486197 - JANE AKOTH)";
    const paymentRef = (payRefInput && payRefInput.value.trim()) || "SLD8927K";

    const clientPhone = normalizeKenyanPhone(rawPhone);
    const targetPhone = clientPhone || "254790048905";

    let msg = "";

    if (isReceipt) {
      msg += `*LAUREIGN STUDIOS*\n`;
      msg += `🧾 *${catData.receiptTitle}*\n`;
      msg += `🔖 *Receipt Ref:* ${currentInvoiceRef}\n`;
      msg += `📅 *Date:* ${invoiceDateIssued}\n\n`;

      msg += `👤 *Client / Invoiced To:* *${clientVal}*\n`;
      msg += `🎯 *Occasion / Session:* *${occTitle}*\n`;
      msg += `🏷️ *Production Scope:* *${catData.scope}*\n\n`;

      if (rawPhone) msg += `📞 *Phone / WhatsApp:* ${rawPhone}\n`;
      if (emailVal) msg += `✉️ *Email:* ${emailVal}\n`;
      msg += `🗓️ *Shoot Date:* ${dateVal} (${timeVal})\n`;
      msg += `📍 *Location:* ${locVal}\n`;
      msg += `🎥 *Assigned Crew:* ${crewVal}\n\n`;

      msg += `*SHOOTS & SESSIONS COMPLETED:*\n`;
      invoiceSessions.forEach((s, idx) => {
        const qty = s.qty || 1;
        const rate = s.rate || 0;
        msg += `📸 *Shoot #${idx + 1}: ${s.title}* (${s.tierName})${qty > 1 ? ` ×${qty}` : ""}\n`;
        msg += `   💰 Amount: KSh ${(rate * qty).toLocaleString()}\n`;
        if (s.spec) {
          msg += `   📋 Inclusions: ${s.spec.replace(/\n+/g, " • ")}\n`;
        }
      });

      if (invoiceAddons.length > 0) {
        msg += `\n*SELECTED ADD-ONS & REELS:*\n`;
        invoiceAddons.forEach(a => {
          msg += `• ${a.name} (+KSh ${(a.price || 0).toLocaleString()})\n`;
          if (a.spec) msg += `  _${a.spec}_\n`;
        });
      }

      if (discount > 0) {
        msg += `\n🎁 *Special Discount:* - KSh ${discount.toLocaleString()}\n`;
      }

      msg += `\n*PAYMENT VERIFICATION (CASHLESS RECEIPT):*\n`;
      msg += `💵 *Total Shoot Investment:* KSh ${grandTotal.toLocaleString()}\n`;

      if (paymentStatus === "full") {
        msg += `✅ *Amount Received:* KSh ${grandTotal.toLocaleString()} *(PAID IN FULL)*\n`;
        msg += `💳 *Payment Channel:* ${paymentMethod}\n`;
        msg += `🏷️ *Transaction Code / Ref:* *${paymentRef}*\n`;
        msg += `🏦 *Bank / Account:* I&M Bank · Paybill 542542 (Acc: 486197 - JANE AKOTH)\n`;
        msg += `🎉 *Balance Remaining:* *KSh 0 (CLEARED)*\n\n`;
      } else {
        msg += `✅ *Deposit Received:* KSh ${deposit.toLocaleString()} *(${depPercent}% PAID)*\n`;
        msg += `💳 *Payment Channel:* ${paymentMethod}\n`;
        msg += `🏷️ *Transaction Code / Ref:* *${paymentRef}*\n`;
        msg += `🏦 *Bank / Account:* I&M Bank · Paybill 542542 (Acc: 486197 - JANE AKOTH)\n`;
        msg += `💳 *Balance Due on Delivery:* *KSh ${balance.toLocaleString()}*\n\n`;
      }

      if (notesVal) {
        msg += `📝 *Studio Deliverable Notes:*\n_${notesVal}_\n\n`;
      }

      if (pdfDownloaded) {
        msg += `📥 *Official PDF Receipt Generated & Saved.* Please see attached PDF document.\n\n`;
      }

      msg += `✨ *Thank you for choosing Laureign Studios! Your master high-definition photographs will be delivered via private gallery link.* ✨\n`;
      msg += `📞 Studio Contact: 0790 048 905`;
    } else {
      msg += `*LAUREIGN STUDIOS*\n`;
      msg += `✨ *${catData.quoteTitle}*\n`;
      msg += `📄 *Quotation Ref:* ${currentInvoiceRef}\n`;
      msg += `📅 *Issued:* ${invoiceDateIssued} (Valid 14 Days)\n\n`;

      msg += `👤 *Prepared For:* *${clientVal}*\n`;
      msg += `🎯 *Occasion / Session:* *${occTitle}*\n`;
      msg += `🏷️ *Production Scope:* *${catData.scope}*\n\n`;

      if (rawPhone) msg += `📞 *Phone / WhatsApp:* ${rawPhone}\n`;
      if (emailVal) msg += `✉️ *Email:* ${emailVal}\n`;
      msg += `🗓️ *Event / Shoot Date:* ${dateVal} (${timeVal})\n`;
      msg += `📍 *Venue / Destination:* ${locVal}\n`;
      msg += `🎥 *Assigned Production Unit:* ${crewVal}\n\n`;

      msg += `*PRODUCTION DELIVERABLES & SERVICES:*\n`;
      invoiceSessions.forEach((s, idx) => {
        const qty = s.qty || 1;
        const rate = s.rate || 0;
        msg += `📸 *${s.title}* (${s.tierName})${qty > 1 ? ` ×${qty}` : ""}\n`;
        msg += `   💰 Amount: KSh ${(rate * qty).toLocaleString()}\n`;
        if (s.spec) {
          msg += `   📋 Inclusions: ${s.spec.replace(/\n+/g, " • ")}\n`;
        }
      });

      if (invoiceAddons.length > 0) {
        msg += `\n*SELECTED ENHANCEMENTS & ADD-ONS:*\n`;
        invoiceAddons.forEach(a => {
          msg += `• ${a.name} (+KSh ${(a.price || 0).toLocaleString()})\n`;
          if (a.spec) msg += `  _${a.spec}_\n`;
        });
      }

      if (discount > 0) {
        msg += `\n🎁 *Special Client Courtesy Discount:* - KSh ${discount.toLocaleString()}\n`;
      }

      if (notesVal) {
        msg += `\n📝 *Production Scope & Details:*\n_${notesVal}_\n`;
      }

      msg += `\n*FINANCIAL SUMMARY & BOOKING:*\n`;
      msg += `💵 *Total Project Investment:* KSh ${grandTotal.toLocaleString()}\n`;
      msg += `🔒 *Commitment Deposit to Lock Date (${depPercent}%):* KSh ${deposit.toLocaleString()}\n`;
      msg += `💳 *Balance Due on Master Delivery (${100 - depPercent}%):* KSh ${balance.toLocaleString()}\n\n`;

      msg += `*OFFICIAL REMITTANCE DETAILS:*\n`;
      msg += `📲 *M-Pesa Paybill:* *542542*\n`;
      msg += `🔢 *Account Number:* *486197*\n`;
      msg += `👤 *Account Name to Verify:* *JANE AKOTH* (Laureign Studios)\n`;
      msg += `🏦 *Direct Bank Transfer:* I&M Bank Kenya (Acc: 486197)\n\n`;

      if (pdfDownloaded) {
        msg += `📥 *Official PDF Quotation Generated & Saved.* Please see attached PDF document.\n\n`;
      }

      msg += `_To confirm booking and lock your date on our production calendar, please remit the commitment deposit and share confirmation._\n`;
      msg += `✨ *Laureign Studios · Kakamega Town along Mumias Rd, Opp. Jamia Mosque (Bukura Pharmacy Bldg, 1st Floor) · Nationwide Across Kenya*`;
    }

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  }

  function copyInvoiceText() {
    const isReceipt = invoiceMode === "receipt";

    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const phoneVal = (invPhoneInput && invPhoneInput.value.trim()) || "Not specified";
    const emailVal = (invEmailInput && invEmailInput.value.trim()) || "";
    const dateVal = (invDateInput && invDateInput.value) || "To Be Scheduled";
    const timeVal = (invTimeInput && invTimeInput.value.trim()) || "Standard Session";
    const locVal = (invLocationInput && invLocationInput.value.trim()) || "Laureign Studios (Kakamega Town, Mumias Rd, Opp. Jamia Mosque, Bukura Pharmacy Bldg, 1st Floor)";

    const catData = INVOICE_CATEGORIES[currentInvoiceCategory] || INVOICE_CATEGORIES["studio"];
    const occInput = document.getElementById("invOccasionTitleInput");
    const occTitle = (occInput && occInput.value.trim()) || (getClientPossessive(clientVal) ? `${getClientPossessive(clientVal)} ${catData.name}` : `Bespoke ${catData.name}`);

    const payRefInput = document.getElementById("invPaymentRefInput");
    const paymentRef = (payRefInput && payRefInput.value.trim()) || currentInvoiceRef;

    const basePrice = invoiceSessions.reduce((sum, s) => sum + ((s.rate || 0) * (s.qty || 1)), 0);
    const addonsTotal = invoiceAddons.reduce((sum, a) => sum + (a.price || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal - discount);

    const depPercent = parseInt(invDepositPercent ? invDepositPercent.value : 80, 10) || 80;
    const deposit = Math.round(grandTotal * (depPercent / 100));
    const balance = Math.max(0, grandTotal - deposit);

    let text = isReceipt
      ? `LAUREIGN STUDIOS — ${catData.receiptTitle}\n`
      : `LAUREIGN STUDIOS — ${catData.quoteTitle}\n`;
    text += `Quotation Ref: ${currentInvoiceRef}\n`;
    text += `Date: ${invoiceDateIssued}${isReceipt ? "" : " (Valid 14 Days)"}\n\n`;
    text += `PREPARED FOR: ${clientVal}\n`;
    text += `OCCASION / SESSION: ${occTitle}\n`;
    text += `PRODUCTION CATEGORY: ${catData.name} (${catData.scope})\n\n`;
    text += `Phone: ${phoneVal}\n`;
    if (emailVal) text += `Email: ${emailVal}\n`;
    text += `Shoot Date: ${dateVal} (${timeVal})\nLocation: ${locVal}\n\n`;

    text += `PRODUCTION DELIVERABLES:\n`;
    invoiceSessions.forEach((s, idx) => {
      const qty = s.qty || 1;
      const rate = s.rate || 0;
      text += `${idx + 1}. ${s.title} — ${s.tierName}${qty > 1 ? ` (×${qty})` : ""}: KSh ${(rate * qty).toLocaleString()}\n`;
    });

    if (invoiceAddons.length > 0) {
      text += `\nADD-ONS & ENHANCEMENTS:\n`;
      invoiceAddons.forEach(a => {
        text += `- ${a.name}: KSh ${(a.price || 0).toLocaleString()}\n`;
      });
    }

    if (discount > 0) {
      text += `\nSpecial Client Discount: - KSh ${discount.toLocaleString()}\n`;
    }

    text += `\nTotal Project Investment: KSh ${grandTotal.toLocaleString()}\n`;
    if (isReceipt) {
      text += `Amount Received: KSh ${grandTotal.toLocaleString()} (PAID IN FULL)\nBalance: KSh 0 (CLEARED)\n\n`;
      text += `Payment Channel: I&M Bank · M-Pesa Paybill 542542 (Acc: 486197 - JANE AKOTH)\nReceipt Ref: ${paymentRef}\nStatus: Cashless Verified · Laureign Studios`;
    } else {
      text += `Official Booking Deposit Required (${depPercent}%): KSh ${deposit.toLocaleString()}\nBalance Due on Master Delivery (${100 - depPercent}%): KSh ${balance.toLocaleString()}\n\n`;
      text += `OFFICIAL REMITTANCE:\nBank: I&M Bank Kenya (Acc: 486197)\nM-Pesa Paybill: 542542\nAccount No: 486197\nAccount Name: JANE AKOTH (Laureign Studios)\nStudio Direct Line: +254 790 048 905\nStudio Email: laureignstudios25@gmail.com\nStudio Location: Kakamega Town along Mumias Rd, Opp. Jamia Mosque (Bukura Pharmacy Bldg, 1st Floor)`;
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
    const clientPhone = modalPhoneInput ? modalPhoneInput.value.trim() : "";
    const clientEmail = modalEmailInput ? modalEmailInput.value.trim() : "";
    const shootDate = modalDateInput ? modalDateInput.value : "";
    const loc = modalLocationSelect ? modalLocationSelect.value : "";

    const pkg = PACKAGES_DATA.find(p => p.id === modalState.pkgId);
    const opt = pkg ? pkg.options[modalState.optionIndex] : null;

    saveClientLead({
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      date: shootDate,
      location: loc,
      package: pkg && opt ? `${pkg.title} (${opt.name})` : "Studio Session",
      source: "Booking Modal (Quote Request)"
    });

    closeModal();

    // Auto-detect category & set category from selected package
    const detectedCat = detectCategoryFromPackage(modalState.pkgId);
    setInvoiceCategory(detectedCat);

    // Reset sessions and add this selected package as Session #1
    invoiceSessions = [];
    addInvoiceSession(modalState.pkgId, modalState.optionIndex, false);

    if (reelChecked) {
      addInvoiceAddon("🎬 4K Vertical Video Reel", "Trending 45s-60s 4K vertical video cut to viral TikTok & IG audio", 1500);
    }

    openInvoiceModal();

    if (clientName && invClientInput) invClientInput.value = clientName;
    if (clientPhone && invPhoneInput) invPhoneInput.value = clientPhone;
    if (clientEmail && invEmailInput) invEmailInput.value = clientEmail;
    if (shootDate && invDateInput) invDateInput.value = shootDate;
    if (loc && invLocationInput) invLocationInput.value = loc;

    autoSuggestOccasionTitle(true);
    updateInvoiceDisplay();
  }

  function openInvoiceFromSamplesModal() {
    closeSamplesModal();
    invoiceSessions = [];
    addInvoiceSession(currentSamplesPkgId, 0, false);
    openInvoiceModal();
  }

  function openInvoiceModalFromCalc() {
    openInvoiceModal();
    document.querySelectorAll(".addon-checkbox:checked").forEach(cb => {
      const addonId = cb.dataset.addonId;
      const foundAddon = ADD_ONS_LIST.find(a => a.id === addonId);
      if (foundAddon && !invoiceAddons.some(a => a.name === foundAddon.name)) {
        addInvoiceAddon(foundAddon.name, foundAddon.desc || "Deliverable enhancement", foundAddon.price);
      }
    });
    updateInvoiceDisplay();
  }

  // ============================================================
  // CLIENT LEADS CRM, EMAIL VAULT & MARKETING SUITE
  // ============================================================
  const LEADS_STORAGE_KEY = "laureign_studio_client_leads";

  function getClientLeads() {
    try {
      const raw = localStorage.getItem(LEADS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveClientLead(lead) {
    if (!lead) return;
    const name = (lead.name || "").trim();
    const cleanEmail = (lead.email || "").trim().toLowerCase();
    const cleanPhone = (lead.phone || "").trim().replace(/[^\d+]/g, "");

    // Require at least name, email, or phone
    if (!cleanEmail && !cleanPhone && !name) return;

    const leads = getClientLeads();
    const existingIdx = leads.findIndex(l => {
      const lEmail = (l.email || "").trim().toLowerCase();
      const lPhone = (l.phone || "").trim().replace(/[^\d+]/g, "");
      return (cleanEmail && lEmail === cleanEmail) || (cleanPhone && lPhone === cleanPhone);
    });

    const newLeadObj = {
      id: "lead_" + Date.now(),
      name: name || "Valued Client",
      email: cleanEmail,
      phone: cleanPhone || (lead.phone || "").trim(),
      package: lead.package || "Studio Session Inquiry",
      location: lead.location || "Kakamega Studio",
      date: lead.date || new Date().toISOString().split("T")[0],
      source: lead.source || "Website Booking",
      capturedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    };

    if (existingIdx >= 0) {
      leads[existingIdx] = {
        ...leads[existingIdx],
        ...newLeadObj,
        id: leads[existingIdx].id,
        capturedAt: leads[existingIdx].capturedAt || newLeadObj.capturedAt
      };
    } else {
      leads.unshift(newLeadObj);
    }

    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {}

    updateLeadsBadge();
  }

  function updateLeadsBadge() {
    const leads = getClientLeads();
    const count = leads.length;
    const badge = document.getElementById("leadsCountBadge");
    const drawerBadge = document.getElementById("drawerLeadsCountBadge");
    if (badge) badge.textContent = count;
    if (drawerBadge) drawerBadge.textContent = count;
  }

  function openLeadsModal() {
    const modal = document.getElementById("leadsModal");
    if (!modal) return;
    renderLeadsTable();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLeadsModal() {
    const modal = document.getElementById("leadsModal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderLeadsTable(searchQuery = "") {
    const leads = getClientLeads();
    const tbody = document.getElementById("leadsTableBody");
    const emptyBox = document.getElementById("leadsEmptyNotice");
    const statTotal = document.getElementById("statTotalContacts");
    const statEmails = document.getElementById("statValidEmails");
    const statPhones = document.getElementById("statWhatsAppPhones");
    const statVip = document.getElementById("statVipMembers");

    const validEmails = leads.filter(l => l.email && l.email.includes("@"));
    const validPhones = leads.filter(l => l.phone && l.phone.length >= 8);
    const vipLeads = leads.filter(l => (l.source && l.source.includes("VIP")) || (l.package && l.package.includes("VIP")));

    if (statTotal) statTotal.textContent = leads.length;
    if (statEmails) statEmails.textContent = validEmails.length;
    if (statPhones) statPhones.textContent = validPhones.length;
    if (statVip) statVip.textContent = vipLeads.length;

    if (!tbody) return;

    let filtered = leads;
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = leads.filter(l =>
        (l.name && l.name.toLowerCase().includes(q)) ||
        (l.email && l.email.toLowerCase().includes(q)) ||
        (l.phone && l.phone.toLowerCase().includes(q)) ||
        (l.package && l.package.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = "";
      if (emptyBox) emptyBox.style.display = "block";
      return;
    }

    if (emptyBox) emptyBox.style.display = "none";

    tbody.innerHTML = filtered.map(lead => {
      const waLink = lead.phone ? `https://wa.me/${lead.phone.replace(/[^\d]/g, "")}?text=Hello%20${encodeURIComponent(lead.name)}%2C%20thank%20you%20for%20contacting%20Laureign%20Studios%21` : null;
      return `
        <tr>
          <td><b>${lead.name}</b></td>
          <td>${lead.email ? `<a href="mailto:${lead.email}" style="color:#38bdf8;text-decoration:none;">${lead.email}</a>` : `<span style="color:var(--muted);">—</span>`}</td>
          <td>${lead.phone ? `<code>${lead.phone}</code>` : `<span style="color:var(--muted);">—</span>`}</td>
          <td>${lead.package}</td>
          <td><span class="leads-source-pill">${lead.source}</span></td>
          <td><span style="font-size:12px; color:var(--muted);">${lead.capturedAt}</span></td>
          <td style="white-space:nowrap;">
            ${waLink ? `<a href="${waLink}" target="_blank" rel="noopener" class="leads-action-btn copy" style="padding:4px 10px; font-size:11px; text-decoration:none; margin-right:4px;">💬 Chat</a>` : ""}
            <button type="button" onclick="deleteLead('${lead.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:15px; padding:2px 6px;" title="Delete Lead">&times;</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  function filterLeadsTable(query) {
    renderLeadsTable(query);
  }

  function deleteLead(id) {
    if (!confirm("Are you sure you want to remove this client contact?")) return;
    let leads = getClientLeads();
    leads = leads.filter(l => l.id !== id);
    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {}
    renderLeadsTable(document.getElementById("leadsSearchInput")?.value || "");
    updateLeadsBadge();
  }

  function clearLeadsDatabase() {
    if (!confirm("WARNING: Are you sure you want to clear all stored client leads? This cannot be undone.")) return;
    try {
      localStorage.removeItem(LEADS_STORAGE_KEY);
    } catch (e) {}
    renderLeadsTable();
    updateLeadsBadge();
  }

  function exportLeadsCSV() {
    const leads = getClientLeads();
    if (leads.length === 0) {
      alert("No client leads captured yet! Add a demo lead or book a package to generate contacts.");
      return;
    }
    const headers = ["Full Name", "Email Address", "Phone / WhatsApp", "Package Interest", "Location", "Preferred Date", "Lead Source", "Date Captured"];
    const rows = leads.map(l => [
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.email || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.package || "").replace(/"/g, '""')}"`,
      `"${(l.location || "").replace(/"/g, '""')}"`,
      `"${(l.date || "").replace(/"/g, '""')}"`,
      `"${(l.source || "").replace(/"/g, '""')}"`,
      `"${(l.capturedAt || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `laureign_client_leads_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function copyAllEmailsBcc() {
    const leads = getClientLeads();
    const emails = leads.map(l => (l.email || "").trim()).filter(e => e && e.includes("@"));
    if (emails.length === 0) {
      alert("No client email addresses found in CRM yet.");
      return;
    }
    const unique = Array.from(new Set(emails));
    const text = unique.join(", ");
    navigator.clipboard.writeText(text).then(() => {
      alert(`✓ Copied ${unique.length} client email(s)!\n\nOpen Gmail, paste into the 'BCC' field, and send your offer update.`);
    }).catch(() => {
      prompt("Copy emails below:", text);
    });
  }

  function copyAllPhonesWa() {
    const leads = getClientLeads();
    const phones = leads.map(l => (l.phone || "").trim()).filter(p => p.length >= 8);
    if (phones.length === 0) {
      alert("No phone numbers found in CRM yet.");
      return;
    }
    const unique = Array.from(new Set(phones));
    const text = unique.join(", ");
    navigator.clipboard.writeText(text).then(() => {
      alert(`✓ Copied ${unique.length} phone number(s) for WhatsApp broadcast list!`);
    }).catch(() => {
      prompt("Copy phone numbers below:", text);
    });
  }

  function seedSampleLeads() {
    const sampleList = [
      { name: "Dr. Evelyn Mwangi", email: "evelyn.mwangi@gmail.com", phone: "+254712345678", package: "Executive Headshots (Platinum)", source: "Quotation Engine", location: "Kakamega Studio", date: "2026-09-20" },
      { name: "Grace Wanjiku", email: "grace.wanjiku@yahoo.com", phone: "+254722987654", package: "Traditional Cultural Shoot", source: "VIP Offers Club", location: "Nairobi Studio", date: "2026-09-25" },
      { name: "Brian Otieno & Brenda", email: "otieno.brian@outlook.com", phone: "+254733456789", package: "Wedding Matrimony (Grand Platinum)", source: "Booking Modal (WhatsApp)", location: "Eldoret", date: "2026-10-15" },
      { name: "Faith Chebet", email: "faith.chebet@gmail.com", phone: "+254790112233", package: "Graduation Milestone Shoot", source: "Walk-in Reception", location: "Kakamega Studio", date: "2026-09-18" }
    ];
    sampleList.forEach(lead => saveClientLead(lead));
    renderLeadsTable();
  }

  // Handle VIP Club Form Submission
  function handleVipClubSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("vipNameInput");
    const emailInput = document.getElementById("vipEmailInput");
    const phoneInput = document.getElementById("vipPhoneInput");
    const feedback = document.getElementById("vipClubFeedback");

    const name = nameInput ? nameInput.value.trim() : "Valued Creator";
    const email = emailInput ? emailInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    saveClientLead({
      name: name,
      email: email,
      phone: phone,
      package: "VIP Club Member (Promo: LAUREIGN500)",
      source: "VIP Offers Club"
    });

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        🎉 <b>Welcome to the Laureign VIP Club, ${name}!</b><br>
        Your exclusive voucher code is: <code style="background:#064e3b; color:#34d399; padding:3px 8px; border-radius:6px; font-weight:800; font-size:15px;">LAUREIGN500</code> (KSh 500 Off Any Package).<br>
        We have logged your email (<b>${email}</b>) for upcoming flash sales, graduation mini-sessions, and holiday discounts!
      `;
    }

    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (phoneInput) phoneInput.value = "";
  }

  // Send Quotation or Receipt via Email
  function sendInvoiceEmail() {
    const emailInput = document.getElementById("invEmailInput");
    const clientEmail = emailInput ? emailInput.value.trim() : "";
    const clientVal = (invClientInput && invClientInput.value.trim()) || "Valued Client";
    const isReceipt = invoiceMode === "receipt";

    const basePrice = invoiceSessions.reduce((sum, s) => sum + ((s.rate || 0) * (s.qty || 1)), 0);
    const addonsTotal = invoiceAddons.reduce((sum, a) => sum + (a.price || 0), 0);
    const discount = parseInt(invDiscountInput ? invDiscountInput.value : 0, 10) || 0;
    const grandTotal = Math.max(0, basePrice + addonsTotal - discount);

    const subject = isReceipt
      ? `Official Payment Receipt — Laureign Studios (${currentInvoiceRef})`
      : `Official Photography Quotation & Proposal — Laureign Studios (${currentInvoiceRef})`;

    let body = isReceipt
      ? `Dear ${clientVal},\n\nThank you for choosing Laureign Studios! Here is your official payment receipt for your recent shoot.\n\n`
      : `Dear ${clientVal},\n\nThank you for reaching out to Laureign Studios! Below is your official quotation and booking proposal.\n\n`;

    body += `==========================================\n`;
    body += `DOCUMENT REF: ${currentInvoiceRef}\n`;
    body += `DATE: ${invoiceDateIssued}\n`;
    body += `CLIENT: ${clientVal}\n`;
    body += `==========================================\n\n`;

    body += `SHOOTS & DELIVERABLES:\n`;
    invoiceSessions.forEach((s, idx) => {
      const qty = s.qty || 1;
      const rate = s.rate || 0;
      body += `${idx + 1}. ${s.title} (${s.tierName})${qty > 1 ? ` ×${qty}` : ""}: KSh ${(rate * qty).toLocaleString()}\n`;
      if (s.spec) body += `   Scope: ${s.spec}\n`;
    });

    if (invoiceAddons.length > 0) {
      body += `\nADD-ONS & ENHANCEMENTS:\n`;
      invoiceAddons.forEach(a => {
        body += `- ${a.name}: KSh ${(a.price || 0).toLocaleString()}\n`;
      });
    }

    if (discount > 0) {
      body += `\nSpecial Discount: - KSh ${discount.toLocaleString()}\n`;
    }

    body += `\nTOTAL INVESTMENT: KSh ${grandTotal.toLocaleString()}\n\n`;

    if (isReceipt) {
      body += `PAYMENT VERIFICATION (CASHLESS RECEIPT):\n`;
      body += `Channel: I&M Bank · M-Pesa Paybill 542542 (Acc: 486197 - JANE AKOTH)\n`;
      body += `Status: PAID & VERIFIED BY STUDIO DESK\n`;
      body += `Deliverables: Master retouched photographs deliverable via private cloud link.\n\n`;
    } else {
      body += `OFFICIAL PAYMENT INSTRUCTIONS (STRICTLY NO CASH):\n`;
      body += `Bank: I&M Bank\n`;
      body += `M-Pesa Paybill: 542542\n`;
      body += `Account No: 486197\n`;
      body += `Account Name on M-Pesa: JANE AKOTH\n\n`;
      body += `* To secure your slot on our production calendar, kindly remit your booking deposit via the Paybill above and reply with the M-Pesa confirmation message.*\n\n`;
    }

    body += `Studio Phone / WhatsApp: +254 790 048 905\n`;
    body += `Studio Email: laureignstudios25@gmail.com\n`;
    body += `Studio Location: Kakamega Town along Mumias Rd, Opp. Jamia Mosque / Kakamega Furniture (Bukura Pharmacy Bldg, 1st Floor) · Nationwide Across Kenya\n`;
    body += `Laureign Studios — Luxury Photography & Cinematography\n`;

    // Save lead
    saveClientLead({
      name: clientVal,
      email: clientEmail,
      phone: (invPhoneInput && invPhoneInput.value) || "",
      package: invoiceSessions.map(s => s.title).join(" + ") || "Studio Session",
      source: isReceipt ? "Receipt Emailed" : "Quotation Emailed"
    });

    const mailtoUrl = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    showInvoiceToast(`✓ Opening email draft for ${clientEmail || clientVal}...`);
  }

  // Expose globally to window
  window.openInvoiceModal = openInvoiceModal;
  window.closeInvoiceModal = closeInvoiceModal;
  window.setInvoiceMode = setInvoiceMode;
  window.applyWalkinPreset = applyWalkinPreset;
  window.applyQuotationPreset = applyQuotationPreset;
  window.normalizeKenyanPhone = normalizeKenyanPhone;
  window.updateInvoiceDisplay = updateInvoiceDisplay;

  // Category & Client Personalization
  window.setInvoiceCategory = setInvoiceCategory;
  window.onCategorySelectChange = onCategorySelectChange;
  window.onClientNameInput = onClientNameInput;
  window.autoSuggestOccasionTitle = autoSuggestOccasionTitle;
  window.setOccasionPreset = setOccasionPreset;
  window.applyWelcomeTemplate = applyWelcomeTemplate;
  window.getPersonalizedWelcomeNote = getPersonalizedWelcomeNote;

  // Multi-Session & Dynamic Add-Ons
  window.addInvoiceSession = addInvoiceSession;
  window.removeInvoiceSession = removeInvoiceSession;
  window.onSessionPkgChange = onSessionPkgChange;
  window.onSessionTierChange = onSessionTierChange;
  window.onSessionFieldChange = onSessionFieldChange;
  window.renderInvoiceSessions = renderInvoiceSessions;

  window.addInvoiceAddon = addInvoiceAddon;
  window.removeInvoiceAddon = removeInvoiceAddon;
  window.onAddonFieldChange = onAddonFieldChange;
  window.renderInvoiceAddons = renderInvoiceAddons;

  // Tab & Staff Mode
  window.switchInvoiceTab = switchInvoiceTab;
  window.toggleInvoiceEditTab = toggleInvoiceEditTab;
  window.toggleStaffMode = toggleStaffMode;
  window.initStaffMode = initStaffMode;

  // Export & Utilities
  window.prepareInvoiceForExport = prepareInvoiceForExport;
  window.downloadInvoicePdf = downloadInvoicePdf;
  window.shareInvoicePdfWhatsApp = shareInvoicePdfWhatsApp;
  window.sendInvoiceWhatsApp = sendInvoiceWhatsApp;
  window.copyInvoiceText = copyInvoiceText;
  window.sendInvoiceEmail = sendInvoiceEmail;
  window.openInvoiceFromBookingModal = openInvoiceFromBookingModal;
  window.openInvoiceFromSamplesModal = openInvoiceFromSamplesModal;
  window.openInvoiceModalFromCalc = openInvoiceModalFromCalc;
  window.openBookingModal = openBookingModal;
  window.showInvoiceToast = showInvoiceToast;
  window.applyFieldPrediction = applyFieldPrediction;
  window.setQuickDate = setQuickDate;
  window.applyNoteTemplate = applyNoteTemplate;

  // CRM Exports
  window.saveClientLead = saveClientLead;
  window.getClientLeads = getClientLeads;
  window.openLeadsModal = openLeadsModal;
  window.closeLeadsModal = closeLeadsModal;
  window.renderLeadsTable = renderLeadsTable;
  window.filterLeadsTable = filterLeadsTable;
  window.deleteLead = deleteLead;
  window.clearLeadsDatabase = clearLeadsDatabase;
  window.exportLeadsCSV = exportLeadsCSV;
  window.copyAllEmailsBcc = copyAllEmailsBcc;
  window.copyAllPhonesWa = copyAllPhonesWa;
  window.seedSampleLeads = seedSampleLeads;
  window.handleVipClubSubmit = handleVipClubSubmit;

  initInvoice();
  renderFaqs();
  updateLeadsBadge();
  initStaffMode();

  // Handle direct navigation to quotation (?quote=open or #quotation)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("quote") === "open" || urlParams.get("quotation") === "open" || window.location.hash === "#quotation") {
    setTimeout(() => {
      openInvoiceModal();
    }, 250);
  }
});
