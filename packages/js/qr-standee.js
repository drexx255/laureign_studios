/**
 * Studio QR Standee & Digital Counter Pass Engine
 * Supports multi-destination QR codes, on-screen scanning, direct PNG download,
 * and boardroom/counter printable standee cards.
 */

(function() {
  let qrCodeInstance = null;
  let currentQrUrl = "";
  let currentTargetKey = "full";

  function getBaseUrl() {
    return window.location.origin;
  }

  const QR_DESTINATIONS = {
    full: {
      path: "/packages",
      title: "🌟 Full Studio Rate Card & Official Packages",
      sub: "Instant Rates · Deliverable Specs · Book Direct on WhatsApp"
    },
    graduation: {
      path: "/packages/graduation-shoot.html",
      title: "🎓 Graduation Milestone Shoots & Regalia",
      sub: "Solo Gowns, Mortarboards, Scrolls & Family Portraits"
    },
    weddings: {
      path: "/packages/wedding-shoot.html",
      title: "💍 Matrimony Cinema & Wedding Photography",
      sub: "Full-Day Coverage, 4K Drone, Keepsake Photobooks & Teasers"
    },
    birthdays: {
      path: "/packages/birthday-shoots.html",
      title: "🎂 Milestone Birthday Studio Shoots",
      sub: "Luxury Studio Lighting, Outfit Changes & High-End Edits"
    },
    headshots: {
      path: "/packages/headshots.html",
      title: "💼 Executive Headshots & Corporate Profiles",
      sub: "LinkedIn, Company Boardrooms, CVs & Personal Branding"
    },
    walkin: {
      path: "/packages/index.html?desk=walkin",
      title: "⚡ Walk-in Reception Desk Portal",
      sub: "Instant Walk-in Sessions & Cashless Digital Receipts"
    }
  };

  function computeTargetUrl(key) {
    const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
    return getBaseUrl() + item.path;
  }

  function renderQrCode(url) {
    const container = document.getElementById("qrCodeContainer");
    if (!container) return;

    container.innerHTML = "";

    if (typeof QRCode === "undefined") {
      container.innerHTML = `<div style="padding:20px; color:#ef4444; font-size:12px;">QR Library loading... Please check internet or refresh.</div>`;
      return;
    }

    try {
      qrCodeInstance = new QRCode(container, {
        text: url,
        width: 176,
        height: 176,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } catch (e) {
      console.error("Failed to render QR Code:", e);
    }
  }

  function updateDestinationText(key) {
    const item = QR_DESTINATIONS[key] || QR_DESTINATIONS.full;
    const destEl = document.getElementById("qrDestinationText");
    if (destEl) {
      destEl.textContent = item.sub;
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

    currentQrUrl = computeTargetUrl(targetKey);
    updateDestinationText(targetKey);
    renderQrCode(currentQrUrl);

    modal.style.display = "flex";
    // Trigger reflow for transition
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
    updateDestinationText(targetKey);
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
    a.download = `Laureign_Studios_QR_${currentTargetKey}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function copyQrTargetUrl() {
    if (!currentQrUrl) currentQrUrl = computeTargetUrl(currentTargetKey);
    navigator.clipboard.writeText(currentQrUrl).then(() => {
      const toast = document.getElementById("invToastNotice");
      if (toast) {
        toast.textContent = "✓ Link copied! Ready to share or embed in print.";
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
  window.printQrStandee = printQrStandee;
  window.downloadQrPng = downloadQrPng;
  window.copyQrTargetUrl = copyQrTargetUrl;
})();
