/**
 * gallery-lightbox.js — Universal Interactive Image Gallery Lightbox
 * Laureign Studios · Visual Masterpieces
 * 
 * Features:
 * - Fluid Next (›) and Previous (‹) navigation
 * - Mobile Touch Swipe (smooth, natural sensitivity)
 * - Desktop Mouse Drag / Swipe
 * - Click Right Half (Next) / Left Half (Previous)
 * - Keyboard Arrow navigation (← / → / Esc / Space)
 * - Live photo counter (e.g. "3 / 16") and title caption
 * - Zoom in / out / reset (double-click to zoom)
 * - Seamless compatibility with all 33 showcase HTML pages
 */

(function () {
  'use strict';

  let gallerySlides = [];
  let currentIndex = 0;
  let currentZoom = 1;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // Collect all photos present in the page gallery
  function scanPageGallery() {
    gallerySlides = [];
    const items = document.querySelectorAll('.gallery-grid .gallery-item, .gallery-item');
    items.forEach((item, idx) => {
      const img = item.querySelector('img');
      const hint = item.querySelector('.gallery-zoom-hint span, .gallery-zoom-hint, p, span');
      if (img) {
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';
        const title = hint ? hint.textContent.replace(/^🔍\s*/, '').trim() : alt;
        gallerySlides.push({
          src: src,
          title: title || `Photo Sample ${idx + 1}`,
          alt: alt || title
        });

        // Attach direct index opener
        item.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          openGalleryLightbox(idx);
        };
      }
    });

    // Also scan any photo mount preview frames on the page
    document.querySelectorAll('.mount-preview-frame').forEach((frame) => {
      const img = frame.querySelector('img');
      if (img) {
        const src = img.getAttribute('src') || '';
        frame.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          openGalleryLightbox(src);
        };
      }
    });
  }

  // Ensure DOM container for the interactive lightbox
  function ensureLightboxContainer() {
    let modal = document.getElementById('lightboxModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lightboxModal';
      modal.className = 'lightbox-modal';
      document.body.appendChild(modal);
    }

    // Build or upgrade the internal structure
    modal.innerHTML = `
      <div class="lb-header">
        <div class="lb-counter" id="lbCounter">1 / 1</div>
        <div class="lb-actions">
          <button type="button" class="lb-btn" id="lbZoomOut" title="Zoom Out" aria-label="Zoom Out">−</button>
          <button type="button" class="lb-btn" id="lbZoomReset" title="Reset Zoom" aria-label="Reset Zoom">100%</button>
          <button type="button" class="lb-btn" id="lbZoomIn" title="Zoom In" aria-label="Zoom In">+</button>
          <button type="button" class="lb-btn lb-close" id="lbClose" title="Close Lightbox (Esc)" aria-label="Close">&times;</button>
        </div>
      </div>

      <!-- Left & Right Floating Navigation Arrows -->
      <button type="button" class="lb-nav-btn lb-prev" id="lbPrev" title="Previous Image (Left Arrow / Swipe Right)" aria-label="Previous">‹</button>
      <button type="button" class="lb-nav-btn lb-next" id="lbNext" title="Next Image (Right Arrow / Swipe Left)" aria-label="Next">›</button>

      <div class="lb-stage" id="lbStage">
        <div class="lb-img-wrap" id="lbImgWrap">
          <img src="" alt="Photo Preview" class="lightbox-content" id="lightboxImg" draggable="false">
        </div>
        <div class="lb-caption" id="lbCaption">
          <span class="lb-caption-title" id="lbCaptionTitle">Photo Sample</span>
        </div>
      </div>

      <div class="lb-swipe-indicator">‹ Swipe or tap sides to browse ›</div>
    `;

    bindLightboxEvents();
  }

  function bindLightboxEvents() {
    const modal = document.getElementById('lightboxModal');
    const prevBtn = document.getElementById('lbPrev');
    const nextBtn = document.getElementById('lbNext');
    const closeBtn = document.getElementById('lbClose');
    const zoomInBtn = document.getElementById('lbZoomIn');
    const zoomOutBtn = document.getElementById('lbZoomOut');
    const zoomResetBtn = document.getElementById('lbZoomReset');
    const stage = document.getElementById('lbStage');
    const img = document.getElementById('lightboxImg');

    if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); prevSlide(); };
    if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); nextSlide(); };
    if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); closeGalleryLightbox(); };

    if (zoomInBtn) zoomInBtn.onclick = (e) => { e.stopPropagation(); setZoom(currentZoom + 0.5); };
    if (zoomOutBtn) zoomOutBtn.onclick = (e) => { e.stopPropagation(); setZoom(currentZoom - 0.5); };
    if (zoomResetBtn) zoomResetBtn.onclick = (e) => { e.stopPropagation(); setZoom(1); };

    if (img) {
      img.ondblclick = (e) => {
        e.stopPropagation();
        setZoom(currentZoom === 1 ? 2 : 1);
      };

      // Tap left 35% of image for Prev, right 35% for Next
      img.onclick = (e) => {
        if (currentZoom > 1) return;
        const rect = img.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        if (clickX < width * 0.35) {
          prevSlide();
        } else if (clickX > width * 0.65) {
          nextSlide();
        }
      };
    }

    // Touch Swipe on mobile
    if (modal) {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchMoved = false;

      modal.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchMoved = false;
        }
      }, { passive: true });

      modal.addEventListener('touchmove', (e) => {
        touchMoved = true;
      }, { passive: true });

      modal.addEventListener('touchend', (e) => {
        if (currentZoom > 1 || !touchMoved) return;
        if (e.changedTouches.length === 1) {
          const dx = e.changedTouches[0].clientX - touchStartX;
          const dy = e.changedTouches[0].clientY - touchStartY;
          // Natural swipe: horizontal movement greater than vertical, at least 30px
          if (Math.abs(dx) > 30 && Math.abs(dx) > Math.abs(dy) * 0.6) {
            if (dx < 0) {
              nextSlide();
            } else {
              prevSlide();
            }
          }
        }
      }, { passive: true });

      // Mouse drag swipe on desktop
      modal.addEventListener('mousedown', (e) => {
        if (e.target.closest('.lb-btn') || e.target.closest('.lb-nav-btn')) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
      });

      window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        if (currentZoom > 1) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 0.6) {
          if (dx < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      });

      // Background click to close (outside image and buttons)
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === stage || e.target.id === 'lbImgWrap') {
          closeGalleryLightbox();
        }
      });
    }
  }

  function setZoom(level) {
    currentZoom = Math.max(1, Math.min(level, 3));
    const img = document.getElementById('lightboxImg');
    const resetBtn = document.getElementById('lbZoomReset');
    if (img) {
      img.style.transform = `scale(${currentZoom})`;
      if (currentZoom > 1) {
        img.classList.add('zoomed');
      } else {
        img.classList.remove('zoomed');
      }
    }
    if (resetBtn) {
      resetBtn.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  function updateSlideView() {
    if (!gallerySlides || gallerySlides.length === 0) return;
    const slide = gallerySlides[currentIndex];
    if (!slide) return;

    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lbCounter');
    const captionTitle = document.getElementById('lbCaptionTitle');
    const prevBtn = document.getElementById('lbPrev');
    const nextBtn = document.getElementById('lbNext');

    if (img) {
      img.src = slide.src;
      img.alt = slide.alt || slide.title || 'Photo Sample';
      setZoom(1);
    }

    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${gallerySlides.length}`;
    }

    if (captionTitle) {
      captionTitle.textContent = slide.title || '';
    }

    if (prevBtn) prevBtn.style.display = gallerySlides.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = gallerySlides.length > 1 ? 'flex' : 'none';
  }

  function nextSlide() {
    if (gallerySlides.length <= 1) return;
    currentIndex = (currentIndex + 1) % gallerySlides.length;
    updateSlideView();
  }

  function prevSlide() {
    if (gallerySlides.length <= 1) return;
    currentIndex = (currentIndex - 1 + gallerySlides.length) % gallerySlides.length;
    updateSlideView();
  }

  function openGalleryLightbox(target) {
    if (gallerySlides.length === 0) {
      scanPageGallery();
    }

    ensureLightboxContainer();

    if (typeof target === 'number') {
      currentIndex = Math.max(0, Math.min(target, gallerySlides.length - 1));
    } else if (typeof target === 'string') {
      const cleanTarget = target.split('?')[0].trim();
      const matchIdx = gallerySlides.findIndex(s => s.src.includes(cleanTarget) || cleanTarget.includes(s.src));
      if (matchIdx !== -1) {
        currentIndex = matchIdx;
      } else {
        gallerySlides.unshift({ src: target, title: 'Photo Sample', alt: 'Sample' });
        currentIndex = 0;
      }
    } else {
      currentIndex = 0;
    }

    const modal = document.getElementById('lightboxModal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateSlideView();
    }
  }

  function closeGalleryLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      setZoom(1);
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeGalleryLightbox();
    } else if (e.key === '+' || e.key === '=') {
      setZoom(currentZoom + 0.5);
    } else if (e.key === '-' || e.key === '_') {
      setZoom(currentZoom - 0.5);
    }
  });

  // Expose globally so existing inline onclick="openLightbox(...)" works instantly
  window.openLightbox = openGalleryLightbox;
  window.closeLightbox = closeGalleryLightbox;
  window.galleryLightboxNext = nextSlide;
  window.galleryLightboxPrev = prevSlide;
  window.scanPageGallery = scanPageGallery;

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      scanPageGallery();
      ensureLightboxContainer();
    });
  } else {
    scanPageGallery();
    ensureLightboxContainer();
  }
})();
