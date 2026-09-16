/**
 * Studio QR Smart Poster & Digital Rate Card Engine
 * Supports fixed A4 museum-grade printable posters, domain switching (Vercel, Official Domain),
 * live URL verification, on-screen scanning, direct PNG download, custom link builder,
 * permanent localStorage saving, and desk standees.
 */

(function() {
  const STORAGE_KEY_CUSTOM_LINKS = "laureign_custom_qr_links";
  const STORAGE_KEY_ACTIVE_KEY = "laureign_active_qr_key";
  const STORAGE_KEY_CUSTOM_BASE = "laureign_custom_base_url";

  let qrCodeInstance = null;
  let currentQrUrl = "";
  let currentTargetKey = "full";
  let currentDomainMode = "auto";
  let customBaseUrl = "";

  const QR_DESTINATIONS = {
    full: {
      path: "/packages",
      title: "🌟 Full Studio Rate Card & Official Packages (Homepage)",
      badge: "🌟 FULL STUDIO RATE CARD & ALL PACKAGES",
      sub: "Instant Rates · Deliverable Specs · Book Direct on WhatsApp"
    },
    graduation: {
      path: "/packages/graduation-shoot.html",
      title: "🎓 Graduation Milestone Shoots & Regalia",
      badge: "🎓 GRADUATION MILESTONE PORTAL",
      sub: "Solo Gowns, Mortarboards, Scrolls & Family Portraits"
    },
    weddings: {
      path: "/packages/wedding-shoot.html",
      title: "💍 Matrimony Cinema & Wedding Photography",
      badge: "💍 WEDDINGS & MATRIMONY COVERAGE",
      sub: "Full-Day Coverage, 4K Drone, Keepsake Photobooks & Teasers"
    },
    birthdays: {
      path: "/packages/birthday-shoots.html",
      title: "🎂 Milestone Birthday Studio Shoots",
      badge: "🎂 BIRTHDAY & MILESTONE GLAM",
      sub: "Luxury Studio Lighting, Outfit Changes & High-End Edits"
    },
    headshots: {
      path: "/packages/headshots.html",
      title: "💼 Executive Headshots & Corporate Profiles",
      badge: "💼 EXECUTIVE & CORPORATE HEADSHOTS",
      sub: "LinkedIn, Company Boardrooms, CVs & Personal Branding"
    },
    walkin: {
      path: "/packages/index.html?desk=walkin",
      title: "⚡ Walk-in Reception Desk Portal",
      badge: "⚡ INSTANT RECEPTION WALK-IN DESK",
      sub: "Instant Walk-in Sessions & Cashless Digital Receipts"
    }
  };

  // Safe localStorage helpers
  function loadSavedCustomLinks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_LINKS);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn("Could not parse saved QR links:", e);
      return [];
    }
  }

  function saveCustomLinksToStorage(links) {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_LINKS, JSON.stringify(links));
      return true;
    } catch (e) {
      console.error("Could not save QR links to localStorage:", e);
      return false;
    }
  }

  function getSavedLinkById(id) {
    const list = loadSavedCustomLinks();
    return list.find(item => item.id === id) || null;
  }

  function showQrToast(msg) {
    const toast = document.getElementById("invToastNotice");
    if (toast) {
      toast.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3400);
    } else {
      alert(msg);
    }
  }

  function getBaseUrl() {
    if (currentDomainMode === "official") {
      return "https://laureignstudios.co.ke";
    }
    if (currentDomainMode === "vercel") {
      if (window.location.hostname.includes("vercel.app")) {
        return window.location.origin;
      }
      return "https://laureign-studios.vercel.app";
    }
    if (currentDomainMode === "custom" && customBaseUrl) {
      return customBaseUrl.replace(/\/$/, "");
    }
    // Auto-detect
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.protocol === "file:") {
      // When testing locally, default to live domain so physical phone scans work!
      return "https://laureignstudios.co.ke";
    }
    return window.location.origin;
  }

  function computeTargetUrl(key) {
    // Custom saved link
    if (key && key.startsWith("saved_")) {
      const id = key.replace("saved_", "");
      const saved = getSavedLinkById(id);
      if (saved && saved.url) {
        return saved.url;
      }
    }

    // New custom draft
    if (key === "custom_new") {
      const directInput = document.getElementById("qrCustomDirectUrl");
      let val = (directInput && directInput.value.trim()) || "";
      if (val && !/^https?:\/\//i.test(val)) {
        val = "https://" + val;
      }
      return val || (getBaseUrl() + "/packages");
    }

    // Standard preset
    const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
    const base = getBaseUrl();
    return base + item.path;
  }

  function renderQrCode(url) {
    const container = document.getElementById("qrCodeContainer");
    if (!container) return;

    container.innerHTML = "";

    if (!url) {
      url = "https://laureignstudios.co.ke/packages";
    }

    if (typeof QRCode === "undefined") {
      container.innerHTML = `<div style="padding:20px; color:#ef4444; font-size:12px; text-align:center;">QR Library loading... Please check connection or refresh.</div>`;
      return;
    }

    // Use Level M for longer URLs to ensure phone cameras scan quickly and easily
    const correctLevel = url.length > 70 ? QRCode.CorrectLevel.M : QRCode.CorrectLevel.H;

    try {
      qrCodeInstance = new QRCode(container, {
        text: url,
        width: 350,
        height: 350,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: correctLevel
      });
    } catch (e) {
      console.error("Failed to render QR Code:", e);
      container.innerHTML = `<div style="padding:20px; color:#ef4444; font-size:12px; text-align:center;">Could not generate QR. Please check link format.</div>`;
    }
  }

  function populateDestinationsDropdown(activeKey) {
    const select = document.getElementById("qrTargetSelect");
    if (!select) return;

    const savedOptgroup = document.getElementById("qrSavedOptgroup");
    if (savedOptgroup) {
      savedOptgroup.innerHTML = "";
      const savedLinks = loadSavedCustomLinks();

      if (savedLinks.length === 0) {
        const emptyOpt = document.createElement("option");
        emptyOpt.disabled = true;
        emptyOpt.textContent = "— No saved custom links yet —";
        savedOptgroup.appendChild(emptyOpt);
      } else {
        savedLinks.forEach(item => {
          const opt = document.createElement("option");
          opt.value = `saved_${item.id}`;
          opt.textContent = `📌 ${item.title || item.badge || item.url}`;
          savedOptgroup.appendChild(opt);
        });
      }
    }

    if (activeKey) {
      select.value = activeKey;
    }
  }

  function updateDisplayDetails(key) {
    let badgeText = "";
    let subText = "";
    const isCustomSaved = key && key.startsWith("saved_");
    const isCustomNew = key === "custom_new";
    const customCard = document.getElementById("qrCustomLinkCard");
    const domainSelect = document.getElementById("qrDomainSelect");

    if (isCustomSaved) {
      const id = key.replace("saved_", "");
      const saved = getSavedLinkById(id);
      if (saved) {
        badgeText = saved.badge || saved.title || "🔗 CUSTOM DESTINATION";
        subText = saved.sub || "Point phone camera to scan & open link directly";

        if (customCard) {
          customCard.style.display = "flex";
          const titleEl = document.getElementById("qrCustomCardTitle");
          if (titleEl) titleEl.textContent = `✏️ Edit Saved Link: ${saved.title || 'Custom Destination'}`;
          const chipEl = document.getElementById("qrCustomModeChip");
          if (chipEl) chipEl.textContent = "Saved Link Active";

          const directUrlInput = document.getElementById("qrCustomDirectUrl");
          if (directUrlInput && document.activeElement !== directUrlInput) {
            directUrlInput.value = saved.url;
          }

          const badgeInput = document.getElementById("qrCustomBadgeTitle");
          if (badgeInput && document.activeElement !== badgeInput) {
            badgeInput.value = saved.badge || saved.title;
          }

          const subInput = document.getElementById("qrCustomSubtext");
          if (subInput && document.activeElement !== subInput) {
            subInput.value = saved.sub || "";
          }

          const deleteBtn = document.getElementById("qrDeleteSavedLinkBtn");
          if (deleteBtn) deleteBtn.style.display = "inline-flex";

          const saveBtnText = document.getElementById("qrSaveLinkBtnText");
          if (saveBtnText) saveBtnText.textContent = "💾 Update Saved Link";
        }
      }
    } else if (isCustomNew) {
      const badgeInput = document.getElementById("qrCustomBadgeTitle");
      const subInput = document.getElementById("qrCustomSubtext");

      const userBadge = badgeInput && badgeInput.value.trim();
      const userSub = subInput && subInput.value.trim();

      badgeText = userBadge ? userBadge.toUpperCase() : "🔗 CUSTOM DIRECT DESTINATION";
      subText = userSub || "Point phone camera to scan & open link directly";

      if (customCard) {
        customCard.style.display = "flex";
        const titleEl = document.getElementById("qrCustomCardTitle");
        if (titleEl) titleEl.textContent = "🔗 Add Custom Link to QR Code";
        const chipEl = document.getElementById("qrCustomModeChip");
        if (chipEl) chipEl.textContent = "Live Draft";

        const deleteBtn = document.getElementById("qrDeleteSavedLinkBtn");
        if (deleteBtn) deleteBtn.style.display = "none";

        const saveBtnText = document.getElementById("qrSaveLinkBtnText");
        if (saveBtnText) saveBtnText.textContent = "💾 Save Link to Destinations";
      }
    } else {
      // Standard preset
      const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
      badgeText = item.badge;
      subText = item.sub;

      if (customCard) {
        customCard.style.display = "none";
      }
    }

    // Update Poster centerpiece badge
    const badgeEl = document.getElementById("qrDestinationBadge");
    if (badgeEl) {
      badgeEl.textContent = badgeText;
    }

    // Update Poster centerpiece subtext
    const destEl = document.getElementById("qrDestinationText");
    if (destEl) {
      destEl.textContent = subText;
    }

    // Real-Time URL Verification strip
    const urlDisplay = document.getElementById("qrEncodedUrlDisplay");
    if (urlDisplay) {
      urlDisplay.textContent = currentQrUrl;
    }

    const testBtn = document.getElementById("qrTestLinkBtn");
    if (testBtn) {
      testBtn.href = currentQrUrl;
    }

    // Toggle domain selector state when direct link is active
    if (domainSelect) {
      if (isCustomSaved || isCustomNew) {
        domainSelect.title = "Direct custom links use their full exact URL.";
        domainSelect.style.opacity = "0.65";
      } else {
        domainSelect.title = "";
        domainSelect.style.opacity = "1";
      }
    }
  }

  function openQrModal(targetKey = null) {
    const modal = document.getElementById("qrStandeeModal");
    if (!modal) return;

    // Load active key from memory or storage
    if (!targetKey) {
      try {
        targetKey = localStorage.getItem(STORAGE_KEY_ACTIVE_KEY) || "full";
      } catch (e) {
        targetKey = "full";
      }
    }

    // Check if targetKey exists (in presets or saved links)
    if (targetKey.startsWith("saved_")) {
      const id = targetKey.replace("saved_", "");
      if (!getSavedLinkById(id)) {
        targetKey = "full";
      }
    } else if (targetKey !== "custom_new" && !QR_DESTINATIONS[targetKey]) {
      targetKey = "full";
    }

    currentTargetKey = targetKey;

    // Load custom base URL if previously saved
    try {
      const savedBase = localStorage.getItem(STORAGE_KEY_CUSTOM_BASE);
      if (savedBase) {
        customBaseUrl = savedBase;
        const customInput = document.getElementById("qrCustomUrlInput");
        if (customInput) customInput.value = customBaseUrl;
      }
    } catch (e) {}

    populateDestinationsDropdown(currentTargetKey);

    const domainSelect = document.getElementById("qrDomainSelect");
    if (domainSelect) {
      domainSelect.value = currentDomainMode;
    }

    currentQrUrl = computeTargetUrl(currentTargetKey);
    updateDisplayDetails(currentTargetKey);
    renderQrCode(currentQrUrl);

    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeQrModal() {
    const modal = document.getElementById("qrStandeeModal");
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!modal.classList.contains("open")) {
        modal.style.display = "none";
      }
    }, 250);
  }

  function onQrTargetChange(targetKey) {
    currentTargetKey = targetKey;
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_KEY, targetKey);
    } catch (e) {}

    currentQrUrl = computeTargetUrl(targetKey);
    updateDisplayDetails(targetKey);
    renderQrCode(currentQrUrl);

    if (targetKey === "custom_new") {
      const input = document.getElementById("qrCustomDirectUrl");
      if (input) {
        input.focus();
        input.select();
      }
    }
  }

  function startNewCustomLink() {
    currentTargetKey = "custom_new";
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_KEY, "custom_new");
    } catch (e) {}

    populateDestinationsDropdown("custom_new");

    const directInput = document.getElementById("qrCustomDirectUrl");
    if (directInput && !directInput.value) {
      directInput.value = "https://";
    }

    currentQrUrl = computeTargetUrl("custom_new");
    updateDisplayDetails("custom_new");
    renderQrCode(currentQrUrl);

    if (directInput) {
      directInput.focus();
      // place cursor at end
      const len = directInput.value.length;
      directInput.setSelectionRange(len, len);
    }
  }

  function onCustomDirectUrlInput(val) {
    let clean = val.trim();
    if (clean && !/^https?:\/\//i.test(clean)) {
      clean = "https://" + clean;
    }

    currentQrUrl = clean || (getBaseUrl() + "/packages");

    // Real-Time URL Verification strip
    const urlDisplay = document.getElementById("qrEncodedUrlDisplay");
    if (urlDisplay) urlDisplay.textContent = currentQrUrl;

    const testBtn = document.getElementById("qrTestLinkBtn");
    if (testBtn) testBtn.href = currentQrUrl;

    renderQrCode(currentQrUrl);
  }

  function onCustomBadgeInput(val) {
    const badgeEl = document.getElementById("qrDestinationBadge");
    if (badgeEl) {
      badgeEl.textContent = val.trim().toUpperCase() || "🔗 CUSTOM DESTINATION";
    }
  }

  function onCustomSubtextInput(val) {
    const destEl = document.getElementById("qrDestinationText");
    if (destEl) {
      destEl.textContent = val.trim() || "Point phone camera to scan & open link directly";
    }
  }

  function pasteFromClipboardToCustomUrl() {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(text => {
        if (!text) {
          showQrToast("Clipboard is empty.");
          return;
        }
        const input = document.getElementById("qrCustomDirectUrl");
        if (input) {
          input.value = text.trim();
          onCustomDirectUrlInput(input.value);
          showQrToast("✓ Link pasted from clipboard!");
        }
      }).catch(() => {
        promptPasteFallback();
      });
    } else {
      promptPasteFallback();
    }
  }

  function promptPasteFallback() {
    const input = document.getElementById("qrCustomDirectUrl");
    const entered = prompt("Paste your link or URL here:", input ? input.value : "https://");
    if (entered !== null && input) {
      input.value = entered.trim();
      onCustomDirectUrlInput(input.value);
    }
  }

  function saveCurrentCustomLink() {
    const directInput = document.getElementById("qrCustomDirectUrl");
    let url = (directInput && directInput.value.trim()) || "";

    if (!url || url === "https://" || url === "http://") {
      alert("Please enter a destination URL or link for the QR code.");
      if (directInput) directInput.focus();
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
      if (directInput) directInput.value = url;
    }

    const badgeInput = document.getElementById("qrCustomBadgeTitle");
    let badgeVal = (badgeInput && badgeInput.value.trim()) || "";

    const subInput = document.getElementById("qrCustomSubtext");
    let subVal = (subInput && subInput.value.trim()) || "";

    let defaultTitle = url.replace(/^https?:\/\//i, "").split("/")[0];
    if (url.includes("wa.me") || url.includes("whatsapp.com")) {
      defaultTitle = "Direct WhatsApp VIP";
    } else if (url.includes("instagram.com")) {
      defaultTitle = "Instagram Portfolio";
    } else if (url.includes("drive.google.com")) {
      defaultTitle = "Client Photo Gallery";
    }

    let title = badgeVal || defaultTitle || "Custom QR Link";
    let badge = badgeVal ? badgeVal.toUpperCase() : `🌟 ${title.toUpperCase()}`;
    let sub = subVal || "Point phone camera to scan & open link directly";

    const savedLinks = loadSavedCustomLinks();
    let newTargetKey = currentTargetKey;

    if (currentTargetKey.startsWith("saved_")) {
      // Update existing saved link
      const id = currentTargetKey.replace("saved_", "");
      const idx = savedLinks.findIndex(l => l.id === id);
      if (idx !== -1) {
        savedLinks[idx].url = url;
        savedLinks[idx].title = title;
        savedLinks[idx].badge = badge;
        savedLinks[idx].sub = sub;
        savedLinks[idx].updatedAt = Date.now();
      }
    } else {
      // Add new saved link
      const newId = "qr_" + Date.now().toString(36);
      savedLinks.push({
        id: newId,
        title: title,
        url: url,
        badge: badge,
        sub: sub,
        createdAt: Date.now()
      });
      newTargetKey = `saved_${newId}`;
    }

    saveCustomLinksToStorage(savedLinks);
    currentTargetKey = newTargetKey;

    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_KEY, newTargetKey);
    } catch (e) {}

    populateDestinationsDropdown(newTargetKey);
    currentQrUrl = computeTargetUrl(newTargetKey);
    updateDisplayDetails(newTargetKey);
    renderQrCode(currentQrUrl);

    showQrToast(`✓ Link "${title}" saved to your destinations!`);
  }

  function deleteCurrentSavedLink() {
    if (!currentTargetKey.startsWith("saved_")) return;

    const id = currentTargetKey.replace("saved_", "");
    const saved = getSavedLinkById(id);
    const label = (saved && (saved.title || saved.badge)) || "this custom link";

    if (!confirm(`Are you sure you want to remove "${label}" from your saved destinations?`)) {
      return;
    }

    let savedLinks = loadSavedCustomLinks();
    savedLinks = savedLinks.filter(l => l.id !== id);
    saveCustomLinksToStorage(savedLinks);

    currentTargetKey = "full";
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_KEY, "full");
    } catch (e) {}

    populateDestinationsDropdown("full");
    currentQrUrl = computeTargetUrl("full");
    updateDisplayDetails("full");
    renderQrCode(currentQrUrl);

    showQrToast("🗑️ Saved destination removed.");
  }

  function cancelCustomLinkEdit() {
    currentTargetKey = "full";
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_KEY, "full");
    } catch (e) {}

    populateDestinationsDropdown("full");
    currentQrUrl = computeTargetUrl("full");
    updateDisplayDetails("full");
    renderQrCode(currentQrUrl);
  }

  function onQrDomainChange(domainKey) {
    currentDomainMode = domainKey;
    const customBox = document.getElementById("qrCustomUrlBox");
    if (customBox) {
      customBox.style.display = domainKey === "custom" ? "block" : "none";
    }

    currentQrUrl = computeTargetUrl(currentTargetKey);
    updateDisplayDetails(currentTargetKey);
    renderQrCode(currentQrUrl);
  }

  function onCustomUrlInput(val) {
    customBaseUrl = val.trim();
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_BASE, customBaseUrl);
    } catch (e) {}

    currentQrUrl = computeTargetUrl(currentTargetKey);
    updateDisplayDetails(currentTargetKey);
    renderQrCode(currentQrUrl);
  }

  function printQrStandee() {
    document.body.classList.add("printing-qr");
    window.print();
    window.addEventListener("afterprint", function cleanup() {
      document.body.classList.remove("printing-qr");
      window.removeEventListener("afterprint", cleanup);
    });
    setTimeout(() => {
      document.body.classList.remove("printing-qr");
    }, 1500);
  }

  function downloadPosterPdf() {
    const poster = document.getElementById("printableQrStandeeCard");
    if (!poster) return;

    if (typeof html2pdf === "undefined") {
      alert("PDF compiler is initializing. Opening standard print dialog...");
      printQrStandee();
      return;
    }

    showQrToast("⏳ Compiling museum-grade A4 Poster PDF...");

    const safeSlug = currentTargetKey.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `Laureign_Studios_A4_Smart_Poster_${safeSlug}.pdf`;

    const opt = {
      margin: [0, 0, 0, 0],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#06080d'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(poster).save().then(() => {
      showQrToast("✓ Official A4 Poster PDF downloaded successfully!");
    }).catch(err => {
      console.error("Poster PDF generation error:", err);
      showQrToast("PDF compile failed, opening print dialog...");
      printQrStandee();
    });
  }

  function downloadPosterPng() {
    const poster = document.getElementById("printableQrStandeeCard");
    if (!poster) return;

    showQrToast("⏳ Rendering high-resolution A4 Poster image...");

    const safeSlug = currentTargetKey.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `Laureign_Studios_A4_Smart_Poster_${safeSlug}.png`;

    if (typeof html2pdf !== "undefined") {
      const opt = {
        margin: 0,
        image: { type: 'png', quality: 1.0 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#06080d'
        }
      };

      try {
        html2pdf().set(opt).from(poster).outputImg('datauristring').then(dataUri => {
          if (dataUri && dataUri.startsWith("data:image")) {
            const a = document.createElement("a");
            a.href = dataUri;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showQrToast("✓ High-Res A4 Poster PNG image downloaded!");
          } else {
            downloadQrPng();
          }
        }).catch(err => {
          console.error("Poster image export failed:", err);
          downloadQrPng();
          showQrToast("Poster render fallback: standalone QR Code downloaded.");
        });
      } catch (e) {
        console.error("Poster image render exception:", e);
        downloadQrPng();
      }
    } else {
      downloadQrPng();
    }
  }

  function downloadQrPng() {
    const container = document.getElementById("qrCodeContainer");
    if (!container) return;

    const img = container.querySelector("img");
    const canvas = container.querySelector("canvas");

    let dataUrl = "";
    if (img && img.src && img.src.startsWith("data:image")) {
      dataUrl = img.src;
    } else if (canvas) {
      dataUrl = canvas.toDataURL("image/png");
    }

    if (!dataUrl) {
      alert("QR image is still preparing. Please wait 1 second and try again.");
      return;
    }

    const safeSlug = currentTargetKey.replace(/[^a-zA-Z0-9_-]/g, "_");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `Laureign_Studios_QR_Code_${safeSlug}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showQrToast("✓ Standalone QR code downloaded!");
  }

  function copyQrTargetUrl() {
    if (!currentQrUrl) currentQrUrl = computeTargetUrl(currentTargetKey);
    navigator.clipboard.writeText(currentQrUrl).then(() => {
      showQrToast("✓ Link copied! Ready to share or embed.");
    }).catch(() => {
      prompt("Copy QR destination URL:", currentQrUrl);
    });
  }

  // Setup click-outside, escape listeners and initial dropdown state
  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("qrStandeeModal");
    if (modal) {
      modal.addEventListener("click", function(e) {
        if (e.target === modal) closeQrModal();
      });
    }

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        const modal = document.getElementById("qrStandeeModal");
        if (modal && modal.classList.contains("open")) {
          closeQrModal();
        }
      }
    });

    // Populate dropdown with initial saved links
    populateDestinationsDropdown("full");

    // If URL contains ?qr=true or ?standee=true, auto-open QR modal
    if (window.location.search.includes("qr=true") || window.location.search.includes("standee=true")) {
      setTimeout(() => openQrModal(), 600);
    }
  });

  // Expose methods to global scope
  window.openQrModal = openQrModal;
  window.closeQrModal = closeQrModal;
  window.onQrTargetChange = onQrTargetChange;
  window.startNewCustomLink = startNewCustomLink;
  window.onCustomDirectUrlInput = onCustomDirectUrlInput;
  window.onCustomBadgeInput = onCustomBadgeInput;
  window.onCustomSubtextInput = onCustomSubtextInput;
  window.pasteFromClipboardToCustomUrl = pasteFromClipboardToCustomUrl;
  window.saveCurrentCustomLink = saveCurrentCustomLink;
  window.deleteCurrentSavedLink = deleteCurrentSavedLink;
  window.cancelCustomLinkEdit = cancelCustomLinkEdit;
  window.onQrDomainChange = onQrDomainChange;
  window.onCustomUrlInput = onCustomUrlInput;
  window.printQrStandee = printQrStandee;
  window.downloadPosterPdf = downloadPosterPdf;
  window.downloadPosterPng = downloadPosterPng;
  window.downloadQrPng = downloadQrPng;
  window.copyQrTargetUrl = copyQrTargetUrl;
  window.showQrToast = showQrToast;
})();
