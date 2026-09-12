// ============================================================
//  reels-modal.js — Official 4K Vertical Video Reel Showcase Modal
//  Brand: Laureign Studios · Official WhatsApp: +254 790 048 905
//  Showcases sample vertical 9:16 reels for all Studio & Outdoor shoots
// ============================================================

(function() {
  const REEL_SAMPLES = [
    {
      id: "glamour-reel",
      title: "Editorial Fashion & Glamour Reel",
      videoUrl: "samples/reels/C1261_1.mp4",
      posterUrl: "samples/06-silk-wrap/BR2A0814.JPG",
      badge: "✨ Editorial & Glamour",
      duration: "45 Seconds",
      style: "Slow-Mo & Studio Lighting",
      tags: ["Cinematic Slow-Motion", "Luxury Studio Lighting", "Magazine Retouch", "Viral Audio Sync"],
      desc: "Slow-motion cinematic transitions, luxury studio beauty lighting, high-fashion color grading, and viral TikTok / IG audio synchronization. Perfect for silk wrap, white shirt, portraits, and milestones."
    },
    {
      id: "smile-reel",
      title: "Vibrant Portrait & Smile Reel",
      videoUrl: "samples/reels/camila.mp4",
      posterUrl: "samples/01-indoor-headshots/DSC09594_(2).jpg",
      badge: "🔥 Viral TikTok Poses",
      duration: "60 Seconds",
      style: "Viral Rhythmic Cut",
      tags: ["Rhythmic Beat Cuts", "Candid Studio Smiles", "Multiple Poses", "Vertical 9:16 Format"],
      desc: "High-energy rhythm, candid smile transitions, and confident lifestyle posing cut to upbeat music. Ideal for birthdays, graduation celebrations, couples, and personal branding."
    }
  ];

  let currentReelIndex = 0;
  let activeTargetPkgId = null;
  let activeTargetPkgTitle = null;

  // Build or get modal elements
  function ensureModalMarkup() {
    if (document.getElementById("reelPlayerModal")) return;

    const modalHtml = `
      <div class="reel-modal-overlay" id="reelPlayerModal" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="reel-modal-container">
          <button type="button" class="reel-modal-close" id="reelModalCloseBtn" aria-label="Close Reel Preview">&times;</button>
          
          <div class="reel-modal-header">
            <span class="reel-modal-badge">🎬 Laureign Studios 4K Vertical Video Reels</span>
            <h3 class="reel-modal-title">Real Client Video Reel Samples</h3>
            <p class="reel-modal-subtitle">
              Add a trending 45s–60s vertical video reel to <b>any studio or outdoor photoshoot</b> for only <b>KSh 1,500</b>. Tap any sample below to preview:
            </p>
          </div>

          <!-- Tab Bar to Switch Between Videos -->
          <div class="reel-tabs-bar" id="reelTabsBar">
            ${REEL_SAMPLES.map((r, i) => `
              <button type="button" class="reel-tab-btn ${i === 0 ? 'active' : ''}" data-reel-idx="${i}">
                <span class="reel-tab-icon">${i === 0 ? '✨' : '🔥'}</span>
                <div class="reel-tab-info">
                  <span class="reel-tab-name">${r.title}</span>
                  <span class="reel-tab-meta">${r.duration} · ${r.style}</span>
                </div>
              </button>
            `).join('')}
          </div>

          <!-- Video Stage (Mockup & Details) -->
          <div class="reel-player-stage">
            <!-- 9:16 Smartphone Mockup -->
            <div class="reel-phone-frame">
              <div class="reel-phone-speaker"></div>
              <video id="reelActiveVideo" class="reel-video-element" controls playsinline preload="metadata" loop poster="${REEL_SAMPLES[0].posterUrl}">
                <source src="${REEL_SAMPLES[0].videoUrl}" type="video/mp4">
                Your browser does not support HTML5 MP4 video.
              </video>
              <div class="reel-video-overlay-badge" id="reelVideoBadge">${REEL_SAMPLES[0].badge}</div>
            </div>

            <!-- Reel Information & Perks -->
            <div class="reel-details-box">
              <div class="reel-details-tag" id="reelDetailsTag">${REEL_SAMPLES[0].badge}</div>
              <h4 class="reel-details-title" id="reelDetailsTitle">${REEL_SAMPLES[0].title}</h4>
              <p class="reel-details-desc" id="reelDetailsDesc">${REEL_SAMPLES[0].desc}</p>

              <div class="reel-perks-list">
                <div class="reel-perk-item">
                  <span class="reel-perk-icon">📱</span>
                  <div><b>Vertical 9:16 Format</b>: Ready for Instagram Reels, TikTok, and WhatsApp Status</div>
                </div>
                <div class="reel-perk-item">
                  <span class="reel-perk-icon">🎵</span>
                  <div><b>Trending Audio Sync</b>: Masterfully edited to popular beats and licensed audio</div>
                </div>
                <div class="reel-perk-item">
                  <span class="reel-perk-icon">🎨</span>
                  <div><b>Cinema Color Grade</b>: Flawless skin retouching &amp; professional lighting highlight</div>
                </div>
                <div class="reel-perk-item">
                  <span class="reel-perk-icon">⚡</span>
                  <div><b>Express Turnaround</b>: Delivered together with your retouched photos in 24–48hrs</div>
                </div>
              </div>

              <!-- Price Callout -->
              <div class="reel-price-callout">
                <div class="reel-price-row">
                  <span class="reel-price-label">Optional Add-On Rate:</span>
                  <span class="reel-price-val">+KSh 1,500</span>
                </div>
                <span class="reel-price-note">Client's choice · Available for all Studio &amp; Outdoor shoots</span>
              </div>

              <!-- Action Buttons -->
              <div class="reel-modal-actions">
                <a href="https://wa.me/254790048905" id="reelModalBookWaBtn" class="btn-reel-book-wa" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c2.1.8 2.1.5 2.5.5a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.4-.3z"/>
                  </svg>
                  <span id="reelModalWaBtnText">Book Shoot + This Reel on WhatsApp (+KSh 1,500)</span>
                </a>

                <button type="button" class="btn-reel-select" id="reelModalSelectBtn">
                  <span>✓ Select Reel for This Shoot</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  function setupReelModal() {
    ensureModalMarkup();

    const modal = document.getElementById("reelPlayerModal");
    const closeBtn = document.getElementById("reelModalCloseBtn");
    const video = document.getElementById("reelActiveVideo");
    const tabs = document.querySelectorAll(".reel-tab-btn");
    const selectBtn = document.getElementById("reelModalSelectBtn");

    if (!modal) return;

    // Switch video tab
    function setVideo(idx, autoPlay) {
      if (!REEL_SAMPLES[idx]) return;
      currentReelIndex = idx;
      const r = REEL_SAMPLES[idx];

      // Update active tab styles
      document.querySelectorAll(".reel-tab-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === idx);
      });

      // Update text & badge
      const badge = document.getElementById("reelVideoBadge");
      const tag = document.getElementById("reelDetailsTag");
      const title = document.getElementById("reelDetailsTitle");
      const desc = document.getElementById("reelDetailsDesc");

      if (badge) badge.textContent = r.badge;
      if (tag) tag.textContent = r.badge;
      if (title) title.textContent = r.title;
      if (desc) desc.textContent = r.desc;

      // Update video source & poster
      if (video) {
        video.pause();
        video.poster = r.posterUrl;
        video.src = r.videoUrl;
        video.load();
        if (autoPlay) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay with sound prevented by browser policy, user will click play
            });
          }
        }
      }

      updateWhatsAppBookingUrl();
    }

    // Update WhatsApp link based on active shoot & reel
    function updateWhatsAppBookingUrl() {
      const bookWaBtn = document.getElementById("reelModalBookWaBtn");
      const btnText = document.getElementById("reelModalWaBtnText");
      if (!bookWaBtn) return;

      const r = REEL_SAMPLES[currentReelIndex];
      const pkgName = activeTargetPkgTitle || "Studio / Outdoor Shoot";

      const msg = `Hello Laureign Studios! 🎬 I watched your sample reel ("${r.title}") and I want to book the ${pkgName} WITH the 4K Vertical Video Reel add-on (+KSh 1,500). Please guide me on booking! 📸✨`;

      bookWaBtn.href = `https://wa.me/254790048905?text=${encodeURIComponent(msg)}`;
      if (btnText) {
        btnText.textContent = `Book ${activeTargetPkgTitle ? activeTargetPkgTitle : 'Shoot'} + Reel (+KSh 1,500)`;
      }
    }

    // Tab buttons
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const idx = parseInt(tab.dataset.reelIdx, 10);
        setVideo(idx, true);
      });
    });

    // Close modal function
    function closeReelsModal() {
      if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
      if (video) {
        video.pause();
      }
    }

    if (closeBtn) closeBtn.addEventListener("click", closeReelsModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeReelsModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeReelsModal();
      }
    });

    // "Select Reel for This Shoot" button click
    if (selectBtn) {
      selectBtn.addEventListener("click", () => {
        if (activeTargetPkgId && typeof window.setPackageReelOption === "function") {
          window.setPackageReelOption(activeTargetPkgId, true);
        } else if (activeTargetPkgId) {
          const chk = document.getElementById(`reel-toggle-${activeTargetPkgId}`);
          if (chk) {
            chk.checked = true;
            chk.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
        closeReelsModal();
      });
    }

    // Bind triggers across the document
    bindReelsModalTriggers();
  }

  function bindReelsModalTriggers() {
    document.querySelectorAll(".js-open-reels-modal").forEach(btn => {
      if (btn.dataset.reelsBound === "true") return;
      btn.dataset.reelsBound = "true";

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pkgId = btn.dataset.pkgId || null;
        const pkgTitle = btn.dataset.pkgTitle || null;
        window.openReelsModal(pkgId, pkgTitle);
      });
    });
  }

  // Global trigger function
  window.openReelsModal = function(pkgId, pkgTitle) {
    ensureModalMarkup();
    const modal = document.getElementById("reelPlayerModal");
    const video = document.getElementById("reelActiveVideo");
    if (!modal) return;

    activeTargetPkgId = pkgId || null;
    activeTargetPkgTitle = pkgTitle || null;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    // Initialize or load video
    if (video) {
      const r = REEL_SAMPLES[currentReelIndex];
      if (!video.src || !video.src.includes(r.videoUrl)) {
        video.src = r.videoUrl;
        video.poster = r.posterUrl;
        video.load();
      }
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback requiring user click is normal
        });
      }
    }

    // Update WhatsApp link
    const bookWaBtn = document.getElementById("reelModalBookWaBtn");
    const btnText = document.getElementById("reelModalWaBtnText");
    if (bookWaBtn) {
      const r = REEL_SAMPLES[currentReelIndex];
      const name = activeTargetPkgTitle || "Photoshoot";
      const msg = `Hello Laureign Studios! 🎬 I watched your sample reel ("${r.title}") and I want to book ${name} WITH the 4K Vertical Video Reel add-on (+KSh 1,500). Please check date availability! 📸✨`;
      bookWaBtn.href = `https://wa.me/254790048905?text=${encodeURIComponent(msg)}`;
      if (btnText) {
        btnText.textContent = `Book ${activeTargetPkgTitle ? activeTargetPkgTitle : 'Shoot'} + Reel (+KSh 1,500)`;
      }
    }

    const selectBtn = document.getElementById("reelModalSelectBtn");
    if (selectBtn) {
      if (activeTargetPkgId) {
        selectBtn.style.display = "inline-flex";
        selectBtn.textContent = `✓ Add Reel to ${activeTargetPkgTitle || 'This Shoot'} (+KSh 1,500)`;
      } else {
        selectBtn.style.display = "none";
      }
    }
  };

  window.bindReelsModalTriggers = bindReelsModalTriggers;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupReelModal);
  } else {
    setupReelModal();
  }
})();
