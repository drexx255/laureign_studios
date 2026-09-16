/**
 * Studio QR Smart Poster & Digital Rate Card Engine
 * Supports fixed A4 museum-grade printable posters, domain switching (Vercel, Official Domain),
 * live URL verification, on-screen scanning, direct PNG download, and desk standees.
 */

(function() {
  let qrCodeInstance = null;
  let currentQrUrl = "";
  let currentTargetKey = "full";
  let currentDomainMode = "auto";
  let customBaseUrl = "";

  const QR_DESTINATIONS = {
    full: {
      path: "/packages",
      title: "🌟 Full Studio Rate Card & Official Packages",
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
    const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
    const base = getBaseUrl();
    return base + item.path;
  }

  function renderQrCode(url) {
    const container = document.getElementById("qrCodeContainer");
    if (!container) return;

    container.innerHTML = "";

    if (typeof QRCode === "undefined") {
      container.innerHTML = `<div style="padding:20px; color:#ef4444; font-size:12px; text-align:center;">QR Library loading... Please check connection or refresh.</div>`;
      return;
    }

    try {
      qrCodeInstance = new QRCode(container, {
        text: url,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } catch (e) {
      console.error("Failed to render QR Code:", e);
    }
  }

  function updateDisplayDetails(key) {
    const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
    
    // Poster destination badge
    const badgeEl = document.getElementById("qrDestinationBadge");
    if (badgeEl) {
      badgeEl.textContent = item.badge;
    }

    // Poster destination subtext
    const destEl = document.getElementById("qrDestinationText");
    if (destEl) {
      destEl.textContent = item.sub;
    }

    // Live URL Verification strip
    const urlDisplay = document.getElementById("qrEncodedUrlDisplay");
    if (urlDisplay) {
      urlDisplay.textContent = currentQrUrl;
    }

    const testBtn = document.getElementById("qrTestLinkBtn");
    if (testBtn) {
      testBtn.href = currentQrUrl;
    }
  }

  function openQrModal(targetKey = "full") {
    const modal = document.getElementById("qrStandeeModal");
    if (!modal) return;

    currentTargetKey = targetKey;
    const select = document.getElementById("qrTargetSelect");
    if (select) {
      select.value = targetKey;
    }

    const domainSelect = document.getElementById("qrDomainSelect");
    if (domainSelect) {
      domainSelect.value = currentDomainMode;
    }

    currentQrUrl = computeTargetUrl(targetKey);
    updateDisplayDetails(targetKey);
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
    currentQrUrl = computeTargetUrl(targetKey);
    updateDisplayDetails(targetKey);
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

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `Laureign_Studios_A4_Poster_QR_${currentTargetKey}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function copyQrTargetUrl() {
    if (!currentQrUrl) currentQrUrl = computeTargetUrl(currentTargetKey);
    navigator.clipboard.writeText(currentQrUrl).then(() => {
      const toast = document.getElementById("invToastNotice");
      if (toast) {
        toast.textContent = "✓ Link copied! Ready to share or embed.";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3200);
      } else {
        alert("Link copied to clipboard: " + currentQrUrl);
      }
    }).catch(() => {
      prompt("Copy QR destination URL:", currentQrUrl);
    });
  }

  // Setup click-outside and escape listeners
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

    // If URL contains ?qr=true, auto-open QR modal
    if (window.location.search.includes("qr=true") || window.location.search.includes("standee=true")) {
      setTimeout(() => openQrModal("full"), 600);
    }
  });

  // Expose methods to global scope
  window.openQrModal = openQrModal;
  window.closeQrModal = closeQrModal;
  window.onQrTargetChange = onQrTargetChange;
  window.onQrDomainChange = onQrDomainChange;
  window.onCustomUrlInput = onCustomUrlInput;
  window.printQrStandee = printQrStandee;
  window.downloadQrPng = downloadQrPng;
  window.copyQrTargetUrl = copyQrTargetUrl;
})();
