// ============================================================
//  watch-samples.js — Real-Time Sample Folder Watcher
//  Automatically re-runs sync-samples.js whenever files or folders
//  in packages/samples are added, deleted, or renamed.
// ============================================================

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const SAMPLES_ROOT = path.resolve(__dirname, '..', 'samples');
const SYNC_SCRIPT = path.join(__dirname, 'sync-samples.js');

console.log('👀 Watching for sample folder changes in:');
console.log('   ' + SAMPLES_ROOT);
console.log('⚡ Any adjustments you make will automatically update packages-data.js in real time!');
console.log('   (Press Ctrl+C to stop)\n');

let debounceTimer = null;

function triggerSync(eventType, filename) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(`\n🔔 Change detected: [${eventType}] ${filename || ''}`);
    console.log('🔄 Synchronizing packages-data.js...');
    exec(`node "${SYNC_SCRIPT}"`, (err, stdout, stderr) => {
      if (err) {
        console.error('❌ Sync error:', err.message);
        return;
      }
      console.log(stdout.trim());
      console.log('✨ All samples and multi-albums are now 100% in sync!\n');
    });
  }, 600);
}

// Watch recursively
fs.watch(SAMPLES_ROOT, { recursive: true }, (eventType, filename) => {
  if (!filename) return;
  // Ignore thumbs or text files that don't need re-index
  if (filename.includes('_thumb.') || filename.endsWith('.tmp')) return;
  triggerSync(eventType, filename);
});

// Run an initial sync on startup
triggerSync('initial', 'watcher started');
