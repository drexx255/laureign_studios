/**
 * Laureign Studios - Apple Studio Theme Engine
 * Mode 1: Apple Studio Warm Light (Cream-to-Beige #F5EFE6 - #EDE4D3, Deep Green #0F5132, Warm Charcoal #3A3A38)
 * Mode 2: Apple Obsidian Dark Glass
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'apple_package_theme';

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function applyTheme(theme) {
    if (theme !== 'light') {
      theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);

    // Update meta theme-color for mobile browser address bars
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#000000' : '#F5F5F7');
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}

    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    var toggles = document.querySelectorAll('.apple-theme-toggle, [data-theme-toggle]');
    for (var i = 0; i < toggles.length; i++) {
      var btn = toggles[i];
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Apple Light Canvas' : 'Switch to Apple Obsidian Dark');
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = (current === 'dark') ? 'light' : 'dark';
    applyTheme(next);
  }

  // Set initial theme immediately to avoid flash
  var initialTheme = getSavedTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Expose global controller
  window.AppleTheme = {
    getTheme: function () {
      return document.documentElement.getAttribute('data-theme') || 'light';
    },
    setTheme: applyTheme,
    toggle: toggleTheme
  };

  function init() {
    applyTheme(getSavedTheme());

    // Delegate click events for any theme toggle button
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.apple-theme-toggle, [data-theme-toggle]');
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
