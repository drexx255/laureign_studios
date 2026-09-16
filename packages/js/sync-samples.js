// ============================================================
//  sync-samples.js — Automated Sample Synchronizer for Laureign Studios
//  Automatically scans packages/samples/**, syncs packages-data.js,
//  fixes dead links, discovers new photos, and handles multi-albums.
// ============================================================

const fs = require('fs');
const path = require('path');

const PACKAGES_ROOT = path.resolve(__dirname, '..');
const SAMPLES_ROOT = path.join(PACKAGES_ROOT, 'samples');
const DATA_FILE = path.join(PACKAGES_ROOT, 'js', 'packages-data.js');

console.log('🔄 Running Laureign Studios Sample Synchronizer...');
console.log('📂 Packages root:', PACKAGES_ROOT);
console.log('📂 Samples root:', SAMPLES_ROOT);

// 1. Read existing packages-data.js
const originalCode = fs.readFileSync(DATA_FILE, 'utf8');

// Safely extract data structures
const sandbox = new Function(originalCode + '; return { PACKAGES_CONFIG, PATHWAYS, ADD_ONS_LIST, REEL_SAMPLES, PACKAGES_DATA };')();
const { PACKAGES_CONFIG, PATHWAYS, ADD_ONS_LIST, REEL_SAMPLES, PACKAGES_DATA } = sandbox;

// Helper: title casing and clean naming
function cleanTitle(name) {
  let base = path.basename(name, path.extname(name));
  base = base.replace(/[_-]+/g, ' ')
             .replace(/xxx+/gi, '')
             .replace(/status/gi, '')
             .replace(/\([0-9]+\)/g, '')
             .replace(/\s+/g, ' ')
             .trim();
  if (!base) base = 'Studio Highlight';
  return base.charAt(0).toUpperCase() + base.slice(1);
}

// Helper: slugify
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// 2. Ensure PATHWAYS has traditional in both studio and outdoor
const studioPathway = PATHWAYS.find(p => p.id === 'studio');
if (studioPathway) {
  const hasTrad = studioPathway.subcategories.some(s => s.id === 'traditional');
  if (!hasTrad) {
    studioPathway.subcategories.push({ id: "traditional", name: "👑 Traditional Cultural Shoot" });
  }
}

const outdoorPathway = PATHWAYS.find(p => p.id === 'outdoor');
if (outdoorPathway) {
  const hasTrad = outdoorPathway.subcategories.some(s => s.id === 'outdoor-traditional');
  if (!hasTrad) {
    outdoorPathway.subcategories.push({ id: "outdoor-traditional", name: "👑 Traditional Cultural (Outdoor)" });
  }
}

// 3. Fix traditional-creative package to be in STUDIO
let tradStudio = PACKAGES_DATA.find(p => p.id === 'traditional-creative');
if (tradStudio) {
  tradStudio.pathway = "studio";
  tradStudio.subcat = "traditional";
  tradStudio.catLabel = "Studio Cultural Regalia";
  tradStudio.title = "Traditional Creative Shoot (Studio)";
  tradStudio.tagline = "African heritage regalia, tribal beads & creative studio fine-art lighting";
  tradStudio.sampleFolder = "samples/studio/traditional-creative";
  tradStudio.badge = "👑 Cultural Heritage";
}

// 4. Ensure there is also an Outdoor Traditional package if outdoor folder exists
let tradOutdoor = PACKAGES_DATA.find(p => p.id === 'outdoor-traditional');
if (!tradOutdoor && fs.existsSync(path.join(SAMPLES_ROOT, 'outdoor', 'traditional-creative'))) {
  tradOutdoor = {
    id: "outdoor-traditional",
    pathway: "outdoor",
    subcat: "outdoor-traditional",
    catLabel: "Outdoor Cultural Heritage",
    title: "Traditional Cultural Shoot (Outdoor)",
    tagline: "Cultural attire, beadwork & heritage portraits captured in scenic natural gardens & golden hour light",
    image: "samples/outdoor/traditional-creative/cover_thumb.jpg",
    imageWebp: "samples/outdoor/traditional-creative/cover_thumb.webp",
    imageHighRes: "samples/outdoor/traditional-creative/cover.jpg",
    badge: "🌿 Natural Heritage",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 1,000 to KSh 2,500 (lock your slot)",
    sampleFolder: "samples/outdoor/traditional-creative",
    samples: [],
    options: [
      {
        id: "silver",
        name: "Silver Outdoor Cultural",
        price: 3500,
        deposit: 1000,
        summary: "7 retouched photos, 1 outfit, 1 hr session (outdoor garden)",
        inclusions: [
          "7 High-Res Magazine Retouched Photos",
          "1 Cultural Attire / Traditional Outfit",
          "1 Hour Outdoor Garden / Scenic Session",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      },
      {
        id: "gold",
        name: "Gold Outdoor Cultural",
        popular: true,
        price: 5500,
        deposit: 1500,
        summary: "12 retouched photos, 2 outfits, 1.5 hr session, cultural props",
        inclusions: [
          "12 High-Res Magazine Retouched Photos",
          "2 Cultural Attire Changes",
          "1.5 Hours Scenic Outdoor Session",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      },
      {
        id: "platinum",
        name: "Platinum Outdoor Cultural",
        price: 8500,
        deposit: 2500,
        summary: "20 retouched photos, 3 outfits, 2 hr session + 4K highlight reel",
        inclusions: [
          "20 High-Res Magazine Retouched Photos",
          "3 Cultural Attire Changes",
          "2 Hours Complete Outdoor Storytelling",
          "1 Cinematic 4K Highlight Reel Cut for Socials",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      }
    ]
  };
  PACKAGES_DATA.push(tradOutdoor);
}

// 5. Scan disk for each package and synchronize samples
let totalImagesFound = 0;
let totalAlbumsFound = 0;

PACKAGES_DATA.forEach(pkg => {
  // Folder resolution fallback
  if (!pkg.sampleFolder) {
    pkg.sampleFolder = `samples/${pkg.pathway}/${pkg.id}`;
  }
  
  const fullFolderPath = path.join(PACKAGES_ROOT, pkg.sampleFolder);
  if (!fs.existsSync(fullFolderPath)) {
    console.warn(`⚠️ Folder not found for ${pkg.id}: ${pkg.sampleFolder}`);
    return;
  }

  const entries = fs.readdirSync(fullFolderPath, { withFileTypes: true });
  const subdirs = entries.filter(e => e.isDirectory());
  
  // CASE A: Multi-album package (e.g. birthday-events with Andrew, Ariana, Daleyza, Divia, Imani)
  if (subdirs.length > 0) {
    const albums = [];
    const allFlatSamples = [];

    subdirs.forEach(sub => {
      const subDirPath = path.join(fullFolderPath, sub.name);
      const subEntries = fs.readdirSync(subDirPath, { withFileTypes: true });
      const imgFiles = subEntries
        .filter(f => f.isFile() && /\.(jpe?g|png|webp|mp4)$/i.test(f.name) && !f.name.includes('_thumb.'))
        .map(f => f.name)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

      if (imgFiles.length > 0) {
        const albumCoverRel = `${pkg.sampleFolder}/${sub.name}/${imgFiles[0]}`;
        const albumSamples = imgFiles.map(img => {
          const relUrl = `${pkg.sampleFolder}/${sub.name}/${img}`;
          return {
            url: relUrl,
            type: /\.mp4$/i.test(img) ? 'video' : 'image',
            title: `${sub.name} · ${cleanTitle(img)}`
          };
        });

        albums.push({
          id: slugify(sub.name),
          title: sub.name,
          count: imgFiles.length,
          cover: albumCoverRel,
          samples: albumSamples
        });

        allFlatSamples.push(...albumSamples);
      }
    });

    if (albums.length > 0) {
      pkg.albums = albums;
      pkg.samples = allFlatSamples;
      totalAlbumsFound += albums.length;
      totalImagesFound += allFlatSamples.length;

      // Set cover
      pkg.imageHighRes = albums[0].cover;
      pkg.image = albums[0].cover;
      console.log(`✅ [Multi-Album] ${pkg.id}: ${albums.length} albums, ${allFlatSamples.length} total photos`);
      return;
    }
  }

  // CASE B: Standard flat image folder
  const imgFiles = entries
    .filter(f => f.isFile() && /\.(jpe?g|png|webp|mp4)$/i.test(f.name) && !f.name.includes('_thumb.'))
    .map(f => f.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  if (imgFiles.length > 0) {
    // Check if cover images exist
    const hasCoverThumbJpg = entries.some(f => f.isFile() && f.name === 'cover_thumb.jpg');
    const hasCoverThumbWebp = entries.some(f => f.isFile() && f.name === 'cover_thumb.webp');
    const hasCoverJpg = entries.some(f => f.isFile() && f.name === 'cover.jpg');

    if (hasCoverThumbJpg) {
      pkg.image = `${pkg.sampleFolder}/cover_thumb.jpg`;
    } else {
      pkg.image = `${pkg.sampleFolder}/${imgFiles[0]}`;
    }

    if (hasCoverThumbWebp) {
      pkg.imageWebp = `${pkg.sampleFolder}/cover_thumb.webp`;
    } else {
      delete pkg.imageWebp;
    }

    if (hasCoverJpg) {
      pkg.imageHighRes = `${pkg.sampleFolder}/cover.jpg`;
    } else {
      pkg.imageHighRes = `${pkg.sampleFolder}/${imgFiles[0]}`;
    }

    // Build samples list preserving any existing rich titles if file matches
    const existingSamplesMap = new Map();
    if (Array.isArray(pkg.samples)) {
      pkg.samples.forEach(s => {
        if (s && s.url) {
          const fname = path.basename(s.url);
          existingSamplesMap.set(fname, s.title);
        }
      });
    }

    pkg.samples = imgFiles.map(img => {
      const relUrl = `${pkg.sampleFolder}/${img}`;
      const title = existingSamplesMap.get(img) || `${pkg.title} · ${cleanTitle(img)}`;
      return {
        url: relUrl,
        type: /\.mp4$/i.test(img) ? 'video' : 'image',
        title: title
      };
    });

    // Clean up albums property if present on flat folder
    if (pkg.albums) delete pkg.albums;

    totalImagesFound += pkg.samples.length;
    console.log(`✅ [Flat Folder] ${pkg.id}: ${pkg.samples.length} photos synced`);
  } else {
    console.warn(`⚠️ [Empty Folder] ${pkg.id}: 0 valid images in ${pkg.sampleFolder}`);
  }
});

console.log(`\n🎉 Sync complete! Total active photos across all packages: ${totalImagesFound}, Multi-albums: ${totalAlbumsFound}`);

// 6. Write back to packages/js/packages-data.js
const outputJs = `// ============================================================
//  packages-data.js — Official Studio Rate Card & Samples Architecture
//  Brand: Laureign Studios · Official WhatsApp: 0790048905
//  Auto-synchronized by sync-samples.js
// ============================================================

const PACKAGES_CONFIG = ${JSON.stringify(PACKAGES_CONFIG, null, 2)};

const PATHWAYS = ${JSON.stringify(PATHWAYS, null, 2)};

const ADD_ONS_LIST = ${JSON.stringify(ADD_ONS_LIST, null, 2)};

const REEL_SAMPLES = ${JSON.stringify(REEL_SAMPLES, null, 2)};

const PACKAGES_DATA = ${JSON.stringify(PACKAGES_DATA, null, 2)};
`;

fs.writeFileSync(DATA_FILE, outputJs, 'utf8');
console.log(`💾 Saved updated packages data to ${DATA_FILE}`);
