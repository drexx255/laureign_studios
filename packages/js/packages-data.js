// ============================================================
//  packages-data.js — Official Studio Rate Card & Samples Architecture
//  Brand: Laureign Studios · Official WhatsApp: 0790048905
// ============================================================

const PACKAGES_CONFIG = {
  studioName: "Laureign Studios",
  tagline: "Official Rates, Packages & Booking Platform",
  whatsappNumber: "254790048905",
  phoneDisplay: "+254 790 048 905",
  currency: "KSh ",
  locations: ["Nairobi", "Kakamega", "Eldoret", "Kisumu", "Across Kenya"],
  bookingPortalUrl: "index.html#book"
};

// High-Level Pathways (4 Distinct Experience Categories)
const PATHWAYS = [
  {
    id: "studio",
    title: "Studio & Portrait Sessions",
    tagline: "In-Studio Controlled Lighting & High-Fashion Styled Shoots",
    desc: "Graduation Milestones, Executive Headshots, White Shirt, Silk Wrap, Studio Birthdays, Maternity & Family.",
    icon: "📸",
    subcategories: [
      { id: "all", name: "🌟 All Studio Sessions" },
      { id: "graduation", name: "🎓 Graduation Shoots" },
      { id: "portraits", name: "👔 Headshots (Executive & Model)" },
      { id: "white-shirt", name: "👔 Crisp White Shirt" },
      { id: "silk-wrap", name: "✨ Luxury Silk Wrap" },
      { id: "traditional", name: "👑 Traditional & Creative" },
      { id: "maternity-kids", name: "🍼 Maternity, Kids & Birthdays" },
      { id: "couples-family", name: "👨‍👩‍👧 Couples & Family Studio" }
    ]
  },
  {
    id: "outdoor",
    title: "Outdoor & Natural Light Sessions",
    tagline: "Golden Hour, Gardens, Parks & On-Location Lifestyle Shoots",
    desc: "Natural light headshots, vibrant garden birthdays, golden hour maternity, outdoor family picnics, and romantic couple stories (Minimum 7 images · No single image for outdoor).",
    icon: "🌿",
    subcategories: [
      { id: "all", name: "🌟 All Outdoor Sessions" },
      { id: "outdoor-headshots", name: "🌿 Outdoor & Model Headshots" },
      { id: "outdoor-birthdays", name: "🎉 Outdoor Birthdays" },
      { id: "outdoor-maternity", name: "🍼 Outdoor Baby Bump" },
      { id: "outdoor-family", name: "👨‍👩‍👧 Outdoor Family & Kids" },
      { id: "outdoor-couples", name: "❤️ Outdoor Couples" }
    ]
  },
  {
    id: "events",
    title: "Weddings & Event Coverage",
    tagline: "On-Location Photography & Multi-Cam Cinematography",
    desc: "Full-day Weddings, Traditional Matrimony, Corporate Summits, Galas & Memorial Tributes.",
    icon: "💍",
    subcategories: [
      { id: "all", name: "🌟 All Event Coverage" },
      { id: "weddings", name: "💍 Weddings & Matrimony" },
      { id: "corporate-events", name: "🏢 Corporate Summits & Galas" },
      { id: "memorials", name: "🕊️ Burial & Memorial Tributes" },
      { id: "parties-galas", name: "🎉 Birthday & Graduation Events" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Brand Growth",
    tagline: "Business Assets, Products & Graphic Design",
    desc: "E-Commerce Product Shoots, Hotel/Hospitality & Full Corporate Brand Identity.",
    icon: "🚀",
    subcategories: [
      { id: "all", name: "🌟 All Commercial" },
      { id: "products-hospitality", name: "📦 Products & Hotels" },
      { id: "graphic-design", name: "🎨 Graphic Design & Branding" }
    ]
  }
];

const ADD_ONS_LIST = [
  { id: "unedited-proofs", name: "RAW Unedited Soft Copies", price: 150, unit: "per image", desc: "Original high-resolution unedited camera proofs at KSh 150 each" },
  { id: "extra-photo", name: "Extra Retouched Photo", price: 300, unit: "per image", desc: "Magazine-grade skin retouching & color grade" },
  { id: "simple-makeup", name: "Simple Makeup (Natural Glow)", price: 1500, unit: "per person", desc: "Clean camera skin prep, foundation & soft tint (20–25 mins)" },
  { id: "full-glam-makeup", name: "Full Studio Glam Makeup", price: 2500, unit: "per person", desc: "Full facial contour, luxury eyeshadow & mink lashes (40–50 mins)" },
  { id: "men-touchup", name: "Men & Executive Touch-Up", price: 500, unit: "per person", desc: "Anti-shine powder, hairline grooming & skin tone balancing (10 mins)" },
  { id: "wardrobe-wrap", name: "Studio Silk Wrap / Outfit Session", price: 800, unit: "per session", desc: "6-meter luxury satin wrap or studio styling piece during shoot" },
  { id: "white-shirt", name: "Studio Crisp White Shirt Session", price: 500, unit: "per session", desc: "Tailored or oversized boyfriend white shirt during shoot" },
  { id: "a4-mount", name: "A4 Photo Mount (21×30cm)", price: 1200, unit: "per mount", desc: "Solid MDF wooden mount, laminated print, ready to hang (Was KSh 1,500 · Save KSh 300)" },
  { id: "a3-mount", name: "A3 Photo Mount (30×42cm)", price: 2300, unit: "per mount", desc: "Statement living room wooden wall mount (Was KSh 2,500 · Save KSh 200)" },
  { id: "a2-mount", name: "A2 Grand Photo Mount (42×60cm)", price: 4000, unit: "per mount", desc: "Luxury centerpiece gallery wall mount (Was KSh 4,500 · Save KSh 500)" },
  { id: "cinematic-reel", name: "🎬 45s–60s Vertical Video Reel", price: 1500, unit: "per reel", desc: "Trending vertical 4K video reel cut to viral TikTok & IG audio (Top Client Add-on · Only KSh 1,500)" },
  { id: "luxury-album", name: "Luxury Layflat Photobook (30 pgs)", price: 8000, unit: "per album", desc: "Hardcover museum-quality printed keepsake" },
  { id: "rush-delivery", name: "Express 24–48hr Rush Turnaround", price: 3000, unit: "priority", desc: "Jump the queue for fast social posting" },
  { id: "drone-4k", name: "4K Aerial Drone Coverage", price: 8000, unit: "per event", desc: "Cinematic overhead views for events & venues" }
];

// Official Client Video Reel Samples (Optional KSh 1,500 Upsell for Any Shoot)
const REEL_SAMPLES = [
  {
    id: "reel-1",
    title: "Editorial Fashion & Glamour Reel",
    video: "samples/reels/C1261_1.mp4",
    poster: "samples/06-silk-wrap/BR2A0814.JPG",
    tag: "✨ Editorial Glamour",
    desc: "Slow-motion transitions, luxury studio lighting & viral audio sync"
  },
  {
    id: "reel-2",
    title: "Vibrant Portrait & Smile Reel",
    video: "samples/reels/camila.mp4",
    poster: "samples/01-indoor-headshots/DSC09594_(2).jpg",
    tag: "🔥 Viral TikTok Poses",
    desc: "High-energy rhythm, smile transitions & candid studio poses"
  }
];

const PACKAGES_DATA = [
  // ==========================================================================
  // PATHWAY 1: STUDIO & PORTRAIT SESSIONS (INDOOR CONTROLLED LIGHTING)
  // ==========================================================================

  // 1. GRADUATION SHOOT
  {
    id: "graduation-shoot",
    pathway: "studio",
    subcat: "graduation",
    catLabel: "Graduation Milestones",
    title: "Graduation Milestone Shoot",
    tagline: "Celebrate your academic degree in style with gown, cap, hood, scroll & proud family",
    image: "samples/13-graduation-shoot/cover.jpg",
    badge: "🎓 Academic Pride",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,700 (lock your slot)",
    sampleFolder: "samples/13-graduation-shoot",
    samples: [
      { url: "samples/13-graduation-shoot/cover.jpg", type: "image", title: "Graduate Milestone Achievement Cover" },
      { url: "samples/13-graduation-shoot/PRI_5912.jpg", type: "image", title: "Grand Convocation Regalia Portrait" },
      { url: "samples/13-graduation-shoot/PRI_5893.jpg", type: "image", title: "Golden Hour Outdoor Graduation Glow" },
      { url: "samples/13-graduation-shoot/DSC09941.JPG", type: "image", title: "Official Academic Graduation Portrait" },
      { url: "samples/13-graduation-shoot/DSC09938.JPG", type: "image", title: "Graduation Cap & Gown Posing" },
      { url: "samples/13-graduation-shoot/PRI_5363.jpg", type: "image", title: "Diploma & Celebration Flower Bouquet" },
      { url: "samples/13-graduation-shoot/DSC09939.JPG", type: "image", title: "Degree Scroll & Academic Pride" },
      { url: "samples/13-graduation-shoot/PRI_5013.jpg", type: "image", title: "Academic Hood & Honors Detail" },
      { url: "samples/13-graduation-shoot/DSC09940.JPG", type: "image", title: "Celebration Gown Studio Lighting" },
      { url: "samples/13-graduation-shoot/PRI_4998.jpg", type: "image", title: "Sunlit Campus Convocation Walk" },
      { url: "samples/13-graduation-shoot/DSC09942.JPG", type: "image", title: "Close-up Retouched Graduate Portrait" },
      { url: "samples/13-graduation-shoot/PRI_5895.jpg", type: "image", title: "Proud Graduate Natural Profile" },
      { url: "samples/13-graduation-shoot/DSC09943.JPG", type: "image", title: "Milestone Degree Academic Look" },
      { url: "samples/13-graduation-shoot/PRI_5412.jpg", type: "image", title: "Joyful Academic Milestone Smile" },
      { url: "samples/13-graduation-shoot/DSC09945.JPG", type: "image", title: "Full-Length Academic Regalia Session" },
      { url: "samples/13-graduation-shoot/graduation.jpg", type: "image", title: "Official Graduation Poster Rates & Guide" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Solo Graduate)",
        price: 350,
        deposit: 200,
        summary: "Single official academic regalia portrait (Pay per image)",
        inclusions: [
          "1 Premium Edited Regalia Portrait",
          "Gown, Cap, Hood & Scroll Setup",
          "Extra Edited Photos: KSh 350 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "10–15 Mins Studio Session",
          "Deliverables on Soft Copy (WhatsApp & Cloud)"
        ]
      },
      {
        id: "silver",
        name: "Silver (Solo Graduate)",
        price: 2000,
        deposit: 500,
        summary: "Essential solo academic portrait session from official rate booklet",
        inclusions: [
          "8 Premium Edited Images (Save KSh 800 vs single rate!)",
          "Gown + 1 Outfit",
          "Headshots, Cap Toss & 1 Group Photo",
          "30 Mins Studio Session",
          "Deliverables on Soft Copy (RAW proofs @ KSh 150 each)"
        ]
      },
      {
        id: "gold",
        name: "Gold (Graduate + Family)",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "Graduate solo plus proud family group portraits",
        inclusions: [
          "16 Premium Edited Images (Save KSh 2,100 vs single rate!)",
          "Gown + 1 Outfit",
          "Headshots, Solo Cap Poses & 2 Group Photos",
          "45 Mins Studio Session",
          "Deliverables on Soft Copy (24–48hr turnaround)"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP + Video Reel)",
        price: 6700,
        deposit: 1700,
        summary: "VIP celebration with mounted print & express delivery",
        inclusions: [
          "25 Premium Edited Images",
          "Gown + 1 Outfit",
          "Headshots, Individual & 3 Group Photos",
          "Dedicated Session (Ample Posing & Outfit Time)",
          "1 Mounted A4 Graduation Print Ready to Hang",
          "Deliverables on Soft Copy + Priority Delivery"
        ]
      }
    ]
  },

  // 2. INDOOR STUDIO HEADSHOTS
  {
    id: "indoor-headshots",
    pathway: "studio",
    subcat: "portraits",
    catLabel: "Headshots & Portfolios",
    title: "Executive & Commercial Headshots",
    tagline: "High-impact headshots for LinkedIn, corporate bios, modeling comp cards & casting calls",
    image: "samples/01-indoor-headshots/cover.jpg",
    badge: "💼 Executive & Model Casting",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/01-indoor-headshots",
    samples: [
      { url: "samples/01-indoor-headshots/DSC09594_(2).jpg", type: "image", title: "Polished Executive Studio Headshot" },
      { url: "samples/01-indoor-headshots/DSC09626_(2).jpg", type: "image", title: "Professional Leadership Portrait" },
      { url: "samples/01-indoor-headshots/DSC09765_(2).jpg", type: "image", title: "Corporate Board & LinkedIn Profile" },
      { url: "samples/01-indoor-headshots/DSC09795_(2).jpg", type: "image", title: "Modern Professional Studio Lighting" },
      { url: "samples/01-indoor-headshots/work-10.jpg", type: "image", title: "Editorial Studio Headshot Retouching" },
      { url: "images/ceo.jpg", type: "image", title: "Executive Lighting & Composition" },
      { url: "samples/01-indoor-headshots/INDOOR HEADSHOTS.jpg", type: "image", title: "Official Rates Poster & Guide" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Quick Headshot)",
        price: 300,
        deposit: 200,
        summary: "Single executive, model comp-card or LinkedIn headshot",
        inclusions: [
          "1 Magazine-Grade Retouched Headshot",
          "1 Outfit of Choice",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "10–15 Mins Studio Session",
          "White or Neutral Studio Backdrop",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit, 30 min session",
        inclusions: [
          "8 Magazine-Grade Retouched Headshots (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Neutral Grey / White Backdrop",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2-3 outfits, 45 min session",
        inclusions: [
          "16 Magazine-Grade Retouched Headshots (Save KSh 1,300 vs single rate!)",
          "2–3 Outfit Changes",
          "Multiple Lighting Setups & Backdrops",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP + Makeup)",
        price: 5500,
        deposit: 1400,
        summary: "22 retouched images, pro makeup artist included, 1 hr session",
        inclusions: [
          "22 Magazine-Grade Retouched Headshots",
          "Professional Studio Makeup Artist Included",
          "Unlimited Outfit Changes",
          "Full Lighting Suite & Creative Direction",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 3. INDOOR WHITE SHIRT SHOOT
  {
    id: "indoor-shirt-shoot",
    pathway: "studio",
    subcat: "white-shirt",
    catLabel: "Crisp White Shirt",
    title: "Crisp White Shirt Shoot (Studio)",
    tagline: "The viral, clean minimalist studio white shirt look with studio shirts provided",
    image: "samples/03-indoor-shirt-shoot/INDOOR SHIRT SHOOT PACKAHES.jpg",
    badge: "👔 Studio Shirts Provided",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/03-indoor-shirt-shoot",
    samples: [
      { url: "samples/03-indoor-shirt-shoot/INDOOR SHIRT SHOOT PACKAHES.jpg", type: "image", title: "Indoor White Shirt Shoot Rates & Guide" },
      { url: "images/work-3.jpg", type: "image", title: "Clean White Shirt Studio Styling" }
    ],
    options: [
      {
        id: "single-photo",
        name: "Single Image (Solo White Shirt · Dressing Included)",
        price: 350,
        deposit: 200,
        summary: "1 Masterpiece Retouched Photo with Studio White Shirt Wardrobe & Sizing Included",
        inclusions: [
          "1 Magazine-Grade Retouched White Shirt Portrait",
          "Studio Crisp White Shirt Wardrobe & Sizing Included",
          "High-Key Studio Lighting & High-End Skin Retouching",
          "Extra Retouched Photos: KSh 300 each",
          "10–15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        id: "starter-5",
        name: "Starter (5 Images · Studio Shirts Included)",
        price: 1500,
        deposit: 400,
        summary: "5 edited white shirt portraits with studio shirts included",
        inclusions: [
          "5 Premium Edited White Shirt Portraits",
          "Studio Button-Down Shirts Provided",
          "15–20 Mins Studio Session",
          "High-Key Clean White Backdrop",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 edited images, studio white shirts provided, 30 min session",
        inclusions: [
          "8 Premium Edited Images (Save KSh 800 vs single rate!)",
          "Studio White Shirts Provided",
          "Classic Button-Down or Oversized Styling",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 edited images, 2 looks (Denim + Formal), 45 min session",
        inclusions: [
          "16 Premium Edited Images (Save KSh 2,100 vs single rate!)",
          "2 Looks (Denim + Formal White Shirt)",
          "Studio Wardrobe Access Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "24 edited images + Pro Makeup or Trending Reel, 1 hr session",
        inclusions: [
          "24 Premium Edited Images",
          "Choice of Professional Makeup or Trending Reel",
          "Full Wardrobe Styling & Creative Direction",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 4. SHIRT SHOOT REELS
  {
    id: "shirt-reels",
    pathway: "studio",
    subcat: "white-shirt",
    catLabel: "Crisp White Shirt",
    title: "White Shirt Video Reels",
    tagline: "Trending short-form vertical video reels for TikTok & Instagram",
    image: "samples/05-shirt-reels/SHIRT SHOOT REELS PACKAGES.jpg",
    badge: "🎬 TikTok & Reels",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/05-shirt-reels",
    samples: [
      { url: "samples/05-shirt-reels/SHIRT SHOOT REELS PACKAGES.jpg", type: "image", title: "White Shirt Video Reels Rates & Production Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "2 vertical video reels (up to 45s each)",
        inclusions: [
          "2 Vertical Cinematic Video Reels (up to 45s each)",
          "Cut to Trending Audio",
          "Color Graded for Mobile Displays",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "3 vertical video reels (up to 60s each) with trending audio",
        inclusions: [
          "3 Vertical Cinematic Video Reels (up to 60s each)",
          "Dynamic Fast-Paced Editing to Trending Beats",
          "Color Graded & Formatted for IG & TikTok",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "5 vertical video reels (up to 60s each) + custom text motion",
        inclusions: [
          "5 Vertical Cinematic Video Reels (up to 60s each)",
          "Custom Motion Typography & Text Overlays",
          "Audio Sync & Sound Design",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 5. SILK WRAP SHOOT
  {
    id: "silk-wrap",
    pathway: "studio",
    subcat: "silk-wrap",
    catLabel: "Luxury Silk Wrap",
    title: "Luxury Silk Wrap Shoot",
    tagline: "Sculpted luxury silk drape sessions with studio drapery wardrobe provided",
    image: "samples/06-silk-wrap/cover.JPG",
    badge: "✨ Luxury Silk Wardrobe",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/06-silk-wrap",
    samples: [
      { url: "samples/06-silk-wrap/BR2A0814.JPG", type: "image", title: "Flowing Satin Drapery & Studio Silhouette" },
      { url: "samples/06-silk-wrap/BR2A0811.JPG", type: "image", title: "High-Key Silk Draping Portrait" },
      { url: "samples/06-silk-wrap/BR2A0797.JPG", type: "image", title: "Sculpted Silk Glow & Form" },
      { url: "samples/06-silk-wrap/BR2A0836.JPG", type: "image", title: "Editorial Satin Lighting & Posing" },
      { url: "samples/06-silk-wrap/BR2A1804.JPG", type: "image", title: "Dramatic Royal Silk Drapery" },
      { url: "samples/06-silk-wrap/BR2A1829.JPG", type: "image", title: "Graceful Studio Satin Texture" },
      { url: "samples/06-silk-wrap/INDOOR WRAP SHOOT PACKAGES.jpg", type: "image", title: "Indoor Wrap Shoot Rates & Guide" },
      { url: "samples/06-silk-wrap/SPECIAL WRAP BUMP SHOOT PACKAGES.jpg", type: "image", title: "Special Wrap Bump Shoot Rates & Guide" }
    ],
    options: [
      {
        id: "single-photo",
        name: "Single Image (Solo Silk Wrap · Dressing Included)",
        price: 350,
        deposit: 200,
        summary: "1 Masterpiece Retouched Photo with Luxury Silk Wardrobe & Studio Dressing Included",
        inclusions: [
          "1 Magazine-Grade Retouched Silk Wrap Portrait",
          "Studio 6-Meter Flowing Luxury Silk Drapery Wardrobe Provided",
          "Dedicated Studio Lighting & Sculpted Posing Direction",
          "Extra Retouched Photos: KSh 300 each",
          "15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        id: "starter-5",
        name: "Starter (5 Images · Silk Wardrobe Included)",
        price: 1500,
        deposit: 400,
        summary: "5 sculpted silk drape portraits with studio wardrobe included",
        inclusions: [
          "5 Magazine-Grade Retouched Silk Drape Portraits",
          "Studio 6-Meter Flowing Silk Drapery Wardrobe Provided",
          "20 Mins Dedicated Sculpted Posing Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 30 min session, silk drapery provided",
        inclusions: [
          "8 Premium Retouched Images (Save KSh 800 vs single rate!)",
          "Studio Silk Drapery Provided",
          "30 Mins Studio Session",
          "Classic High-Key or Low-Key Lighting",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 45 min session, multiple silk colors",
        inclusions: [
          "16 Premium Retouched Images (Save KSh 2,100 vs single rate!)",
          "Multiple Silk Drapery Colors (Gold, Red, Black, Emerald)",
          "Creative Studio Posing & Silhouette Direction",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP + Makeup)",
        price: 5500,
        deposit: 1400,
        summary: "24 retouched images, 1 hr session, pro makeup artist included",
        inclusions: [
          "24 Premium Retouched Images",
          "Professional Studio Makeup Artist Included",
          "Unlimited Drapery Color Styling Changes",
          "Full Lighting Suite & Direction",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 6. TRADITIONAL & CREATIVE SHOOT
  {
    id: "traditional-creative",
    pathway: "studio",
    subcat: "traditional",
    catLabel: "Traditional & Creative",
    title: "Portrait & Traditional Creative Shoot",
    tagline: "Celebrate African heritage, traditional cultural attire, and creative fine-art portraiture",
    image: "samples/07-traditional-creative/cover.jpg",
    badge: "👑 Cultural Heritage",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,100 (lock your slot)",
    sampleFolder: "samples/07-traditional-creative",
    samples: [
      { url: "samples/07-traditional-creative/O13A0286.jpg", type: "image", title: "Authentic African Heritage Attire" },
      { url: "samples/07-traditional-creative/O13A0309 (2).jpg", type: "image", title: "Regal Traditional Beadwork & Posing" },
      { url: "samples/07-traditional-creative/_R2A6166.jpg", type: "image", title: "Creative Studio Heritage Composition" },
      { url: "samples/07-traditional-creative/O13A0278.jpg", type: "image", title: "Cultural Pride & Vibrant Textures" },
      { url: "samples/07-traditional-creative/_R2A6168.jpg", type: "image", title: "Editorial Creative Studio Portrait" },
      { url: "samples/07-traditional-creative/O13A0317.jpg", type: "image", title: "Modern African Royalty Styling" },
      { url: "samples/07-traditional-creative/_INDOOR TRADITIONALCREATIVE  SHOOT.jpg", type: "image", title: "Indoor Traditional Shoot Rates & Guide" }
    ],
    options: [
      {
        id: "single-photo",
        name: "Single Image (Solo Traditional & Creative · Dressing Included)",
        price: 350,
        deposit: 200,
        summary: "1 Masterpiece Retouched Photo with Traditional Dressing & Cultural Styling",
        inclusions: [
          "1 Master Magazine-Grade Retouched Photo",
          "Studio Cultural Regalia, Tribal Beads & Ankara Fabric Styling Included",
          "Creative Studio Lighting & Heritage Backdrop",
          "Extra Retouched Photos: KSh 300 each",
          "15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 1100,
        deposit: 300,
        summary: "3 retouched images, 30 min session",
        inclusions: [
          "3 Retouched Traditional Images",
          "1 Traditional / Cultural Outfit",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 2500,
        deposit: 600,
        summary: "6 retouched images, 45 min session, cultural theme styling",
        inclusions: [
          "6 Retouched Traditional Images",
          "Cultural Theme Styling & Props Support",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 4500,
        deposit: 1100,
        summary: "10 retouched images, 1 hr session, full creative heritage setup",
        inclusions: [
          "10 Retouched Traditional Images",
          "Full Creative Heritage & Fine Art Lighting",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 7. INDOOR BABY BUMP / MATERNITY SHOOT
  {
    id: "baby-bump",
    pathway: "studio",
    subcat: "maternity-kids",
    catLabel: "Maternity & Baby Bump",
    title: "Maternity & Baby Bump Shoot (Studio)",
    tagline: "Celebrate expecting motherhood in cozy studio comfort with radiant lighting & wraps",
    image: "samples/08-baby-bump/cover.jpg",
    badge: "🍼 Motherhood Glow",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/08-baby-bump",
    samples: [
      { url: "samples/08-baby-bump/DSC07764_(2).jpg", type: "image", title: "Radiant Expectant Mother Studio Glow" },
      { url: "samples/08-baby-bump/DSC07893_(2).jpg", type: "image", title: "Intimate Belly Bump Silhouette & Retouching" },
      { url: "samples/08-baby-bump/DSC04963-2.jpg", type: "image", title: "Gentle Floral & Studio Maternity Portrait" },
      { url: "samples/08-baby-bump/DSC07790_(2).jpg", type: "image", title: "Couples Maternity Studio Connection" },
      { url: "samples/06-silk-wrap/SPECIAL WRAP BUMP SHOOT PACKAGES.jpg", type: "image", title: "Special Silk Wrap Bump Setup Guide" },
      { url: "samples/08-baby-bump/OUTDOOR BABY BUMP SHOOT.jpg", type: "image", title: "Official Rates Poster & Guide" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Starter)",
        price: 300,
        deposit: 200,
        summary: "1 retouched maternity portrait (Pay per image)",
        inclusions: [
          "1 Magazine-Grade Retouched Maternity Image",
          "Studio Lighting & Bump Posing Assistance",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit, 30 min session",
        inclusions: [
          "8 Retouched Maternity Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Comfortable Studio Session with Rest Breaks",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold (Mother + Partner)",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfits, partner included, 45 min session",
        inclusions: [
          "16 Retouched Maternity Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits (Studio Silk Wrap or Personal Gown)",
          "Partner & Sibling Shots Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP + Makeup)",
        price: 5500,
        deposit: 1400,
        summary: "25 retouched images, pro makeup included, up to 5 outfits, 1 hr session",
        inclusions: [
          "25 Retouched Maternity Images",
          "Professional Studio Makeup Artist Included",
          "Up to 5 Outfit & Drapery Changes",
          "Partner, Siblings & Full Family Inclusions",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 8. INDOOR BIRTHDAY CELEBRATION SHOOT
  {
    id: "birthday-shoot",
    pathway: "studio",
    subcat: "maternity-kids",
    catLabel: "Birthdays & Celebrations",
    title: "Birthday Studio Glamour Shoot",
    tagline: "Studio birthday glamour with cake, crown, numbered balloons, backdrops & confetti",
    image: "samples/09-birthday-shoot/cover.jpg",
    badge: "🎂 Studio Birthday Glam",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/09-birthday-shoot",
    samples: [
      { url: "samples/09-birthday-shoot/DSC05153.jpg", type: "image", title: "Birthday Celebrant Glamour with Crown" },
      { url: "samples/09-birthday-shoot/DSC05247.jpg", type: "image", title: "Celebratory Toast & Joyous Portrait" },
      { url: "samples/09-birthday-shoot/DSC07329-.jpgljuhv-b_status.jpg", type: "image", title: "Studio Birthday Milestone" },
      { url: "samples/09-birthday-shoot/DSC07479.jpgfh_status.jpg", type: "image", title: "Party Glamour & Balloons" },
      { url: "samples/09-birthday-shoot/indoor bd.jpg", type: "image", title: "Indoor Birthday Shoot Rates & Guide" },
      { url: "samples/09-birthday-shoot/BIRTHDAY REELS PACKAGE.mp4", type: "video", title: "Cinematic Birthday Video Reel Sample" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Starter)",
        price: 300,
        deposit: 200,
        summary: "1 retouched birthday glamour portrait",
        inclusions: [
          "1 Magazine-Grade Retouched Birthday Image",
          "Studio Birthday Set & Props Assistance",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit change, 30 min session",
        inclusions: [
          "8 Retouched Birthday Images (Save KSh 400 vs single rate!)",
          "1 Outfit Change",
          "Studio Birthday Props & Balloons Assistance",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfit changes, birthday setup & props, 45 min session",
        inclusions: [
          "16 Retouched Birthday Images (Save KSh 1,300 vs single rate!)",
          "2 Outfit Changes",
          "Full Birthday Studio Setup & Props",
          "Friends / Family Add-On Photos Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP + Video Reel)",
        price: 5500,
        deposit: 1400,
        summary: "26 retouched images + 45s birthday video reel, up to 5 outfits, 1 hr session",
        inclusions: [
          "26 Retouched Birthday Images",
          "1x 45s Cinematic Birthday Video Reel",
          "Up to 5 Outfit Changes",
          "Full VIP Party Glam & Balloon Setup",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 9. STANDARD KIDS INDOOR SHOOT
  {
    id: "kids-shoot",
    pathway: "studio",
    subcat: "maternity-kids",
    catLabel: "Kids & Milestones",
    title: "Kids & Infant Studio Shoot",
    tagline: "Patience-driven, kid-friendly studio photography with games and relaxed posing",
    image: "samples/10-kids-shoot/cover.jpg",
    badge: "🎈 Studio Kids Fun",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/10-kids-shoot",
    samples: [
      { url: "samples/10-kids-shoot/kids bithday shoot.jpeg", type: "image", title: "Studio Birthday Boy with Balloon Setup" },
      { url: "samples/10-kids-shoot/DSC07657_(2).jpg", type: "image", title: "Candid Little Explorer Smile" },
      { url: "samples/10-kids-shoot/DSC07662_(2).jpg", type: "image", title: "Playful Studio Portrait Lighting" },
      { url: "samples/10-kids-shoot/DSC07698_(2).jpg", type: "image", title: "Innocent Childhood Milestone" },
      { url: "samples/10-kids-shoot/standard kids INDOOR SHOOT.jpg", type: "image", title: "Standard Kids Indoor Rates & Guide" },
      { url: "samples/10-kids-shoot/Kids birthday reels.mp4", type: "video", title: "Kids Birthday Video Reel" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Starter)",
        price: 300,
        deposit: 200,
        summary: "1 retouched kids portrait (Pay per image)",
        inclusions: [
          "1 Magazine-Grade Retouched Kids Portrait",
          "Patient, Fun Studio Posing Guide",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit, 30 min session",
        inclusions: [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Kid-Friendly Studio Games & Toys",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfits, 45 min session",
        inclusions: [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Solo Kid & Parents/Siblings Inclusions",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "26 retouched images + BTS video clips, up to 5 outfits, 1 hr session",
        inclusions: [
          "26 Retouched Images",
          "Behind-The-Scenes Short Video Clips",
          "Up to 5 Outfits of Choice",
          "Full Family Inclusions",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 10. STUDIO COUPLE SHOOT
  {
    id: "couple-shoot",
    pathway: "studio",
    subcat: "couples-family",
    catLabel: "Couples & Romance",
    title: "Couple Studio Session",
    tagline: "Intimate couple storytelling for anniversaries, engagements, or celebrating love",
    image: "samples/11-couple-shoot/cover.JPG",
    badge: "❤️ Intimate Romance",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/11-couple-shoot",
    samples: [
      { url: "samples/11-couple-shoot/work-2.jpg", type: "image", title: "Magazine-Grade Studio Couple Portrait" },
      { url: "samples/11-couple-shoot/DSC07790_(2).jpg", type: "image", title: "Gentle Romantic Embrace" },
      { url: "samples/11-couple-shoot/IMG_5195.JPG", type: "image", title: "Connection & Studio Smiles" },
      { url: "samples/11-couple-shoot/COUPLE.jpg", type: "image", title: "Couple Shoot Rates & Guide" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Starter)",
        price: 300,
        deposit: 200,
        summary: "1 retouched couple portrait (Pay per image)",
        inclusions: [
          "1 Magazine-Grade Retouched Couple Image",
          "Couple Posing & Chemistry Guidance",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit, 30 min session",
        inclusions: [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Romantic Studio Lighting & Posing Guide",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfits, 45 min session",
        inclusions: [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Candid & Posed Romantic Sets",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "26 retouched images + 30s romantic mini reel, multiple outfits, 1 hr session",
        inclusions: [
          "26 Retouched Images",
          "30s Romantic Cinematic Video Reel",
          "Multiple Outfit Changes",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 11. INDOOR STUDIO FAMILY SHOOT
  {
    id: "family-shoot",
    pathway: "studio",
    subcat: "couples-family",
    catLabel: "Family Milestones",
    title: "Family Studio Session",
    tagline: "Timeless studio family portraits capturing the warmth of generations together",
    image: "samples/12-family-shoot/cover.jpg",
    badge: "👨‍👩‍👧 Family Legacy",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/12-family-shoot",
    samples: [
      { url: "samples/12-family-shoot/DSC07720_(2).jpg", type: "image", title: "Warm Family Studio Portrait" },
      { url: "samples/12-family-shoot/DSC07926_(2).jpg", type: "image", title: "Parent & Children Loving Moment" },
      { url: "samples/12-family-shoot/DSC07994_(2).jpg", type: "image", title: "Clean Backlit Studio Composition" },
      { url: "samples/12-family-shoot/FAMILY SHOOT PCKAGES.jpg", type: "image", title: "Family Shoot Rates & Guide" }
    ],
    options: [
      {
        id: "starter",
        name: "Single Image (Starter)",
        price: 300,
        deposit: 200,
        summary: "1 retouched family portrait (Pay per image)",
        inclusions: [
          "1 Retouched Studio Family Portrait",
          "Group Composition & Posing Guide",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "silver",
        name: "Silver (Small Family 3–4 Pax)",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images for up to 4 family members",
        inclusions: [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "Suitable for 3–4 Family Members",
          "Full Group + Solo Parent/Child Sub-shots",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold (Standard Family 5–8 Pax)",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images for 5-8 family members",
        inclusions: [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "Suitable for 5–8 Family Members",
          "Group, Sub-Group & Individual Portraits",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Extended Family up to 12 Pax)",
        price: 5500,
        deposit: 1400,
        summary: "26 retouched images + 45s family video reel + A4 mount print",
        inclusions: [
          "26 Retouched Images",
          "1x 45s Family Highlight Video Reel",
          "1 Mounted A4 Print Ready to Hang",
          "Up to 12 Family Members Included",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // ==========================================================================
  // PATHWAY 2: OUTDOOR & NATURAL LIGHT SESSIONS (GOLDEN HOUR & NATURE)
  // ==========================================================================

  // 12. OUTDOOR NATURAL LIGHT HEADSHOTS
  {
    id: "outdoor-headshots",
    pathway: "outdoor",
    subcat: "outdoor-headshots",
    catLabel: "Outdoor &amp; Model Headshots",
    title: "Outdoor Natural &amp; Model Headshots",
    tagline: "Approachable lifestyle and commercial model portraits under natural golden-hour daylight (Minimum 7 images · No single image for outdoor)",
    image: "samples/02-outdoor-headshots/cover.jpg",
    badge: "🌿 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/02-outdoor-headshots",
    samples: [
      { url: "samples/02-outdoor-headshots/O13A0383 (2).jpg", type: "image", title: "Crisp Natural Light Executive Portrait" },
      { url: "samples/02-outdoor-headshots/O13A0650.jpg", type: "image", title: "Warm Golden Hour Profile" },
      { url: "samples/02-outdoor-headshots/O13A0594.jpg", type: "image", title: "Fresh Outdoor Environmental Headshot" },
      { url: "samples/02-outdoor-headshots/O13A0611.jpg", type: "image", title: "Subtle Bokeh & Sharp Eye Focus" },
      { url: "samples/02-outdoor-headshots/O13A0524.jpg", type: "image", title: "Architectural Garden Backdrop" },
      { url: "samples/02-outdoor-headshots/O13A0600.jpg", type: "image", title: "Relaxed Lifestyle Leadership Look" },
      { url: "samples/02-outdoor-headshots/OUTDOOR HEADSHOTS PACKAGES.jpg", type: "image", title: "Outdoor Headshots Rates & Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 scenic location backdrop, 30 min session",
        inclusions: [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Scenic Location Backdrop",
          "Natural Light & Reflector Fill",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfits, multiple outdoor angles, 45 min session",
        inclusions: [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Multiple Outdoor Angles & Backgrounds",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "22 retouched images, pro makeup included, 1 hr session",
        inclusions: [
          "22 Retouched Images",
          "Professional Makeup Artist Included",
          "Multiple Outfit Changes & Golden Hour Lighting",
          "1 Hour Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 13. OUTDOOR BIRTHDAY SHOOT
  {
    id: "outdoor-birthday-shoot",
    pathway: "outdoor",
    subcat: "outdoor-birthdays",
    catLabel: "Outdoor Birthdays",
    title: "Outdoor Birthday Celebration",
    tagline: "Vibrant celebration shoot in natural sunshine, scenic gardens or resorts (Minimum 7 images · No single image for outdoor)",
    image: "samples/09-birthday-shoot/outdoor-cover.JPG",
    badge: "🎉 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/09-birthday-shoot",
    samples: [
      { url: "samples/09-birthday-shoot/IMG_0990.JPG", type: "image", title: "Golden-Hour Outdoor Birthday Glow" },
      { url: "samples/09-birthday-shoot/IMG_0975.JPG", type: "image", title: "Vibrant Garden Celebration Portrait" },
      { url: "samples/09-birthday-shoot/IMG_0982.JPG", type: "image", title: "Joyful Sunlit Posing" },
      { url: "samples/09-birthday-shoot/IMG_1074.JPG", type: "image", title: "Scenic Resort Outdoor Setup" },
      { url: "samples/09-birthday-shoot/IMG_0565.JPG", type: "image", title: "Lush Greenery Lifestyle Portrait" },
      { url: "samples/09-birthday-shoot/IMG_0566.JPG", type: "image", title: "Candid Celebration Happiness" },
      { url: "samples/09-birthday-shoot/OUTDOOR BIRTHDAY SHOOT.jpg", type: "image", title: "Official Rates Poster & Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "7 retouched outdoor images (Minimum 7 images for outdoor)",
        inclusions: [
          "7 Retouched Images in Natural Light (Minimum 7 Images)",
          "1 Outfit of Choice",
          "Garden or Park Setting Assistance",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "12 retouched outdoor images, 2 outfit changes",
        inclusions: [
          "12 Retouched Images in Golden Hour Light",
          "2 Outfit Changes",
          "Scenic Natural Backgrounds & Posing Guide",
          "45 Mins Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "20 retouched outdoor images, up to 5 outfit changes",
        inclusions: [
          "20 Retouched Images",
          "Up to 5 Outfit Changes",
          "Golden Hour Light & Sunset Portraits",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 14. OUTDOOR BABY BUMP SHOOT
  {
    id: "outdoor-baby-bump",
    pathway: "outdoor",
    subcat: "outdoor-maternity",
    catLabel: "Outdoor Maternity",
    title: "Outdoor Baby Bump Lifestyle",
    tagline: "Bespoke natural light maternity celebration in scenic nature (Minimum 7 images · No single image for outdoor)",
    image: "samples/08-baby-bump/OUTDOOR BABY BUMP SHOOT.jpg",
    badge: "🍼 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/08-baby-bump",
    samples: [
      { url: "samples/08-baby-bump/2N4A9118.jpg", type: "image", title: "Sunlit Outdoor Maternal Serenity" },
      { url: "samples/08-baby-bump/2N4A9177.jpg", type: "image", title: "Golden Hour Garden Maternity Glow" },
      { url: "samples/08-baby-bump/DSC_3613.JPG", type: "image", title: "Couples Outdoor Baby Bump Connection" },
      { url: "samples/08-baby-bump/DSC_3681.JPG", type: "image", title: "Soft Sunlight & Natural Textures" },
      { url: "samples/08-baby-bump/DSC_3684.jpg", type: "image", title: "Belly Bump Close-up with Nature Bokeh" },
      { url: "samples/08-baby-bump/2N4A9111.jpg", type: "image", title: "Scenic Outdoor Motherhood Radiance" },
      { url: "samples/08-baby-bump/OUTDOOR BABY BUMP SHOOT.jpg", type: "image", title: "Official Rates Poster & Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched images, 1 outfit, 30 min session",
        inclusions: [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Natural Light & Garden Setting",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold (Mother + Partner)",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched images, 2 outfits, partner/kids included, 45 min session",
        inclusions: [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Partner & Sibling Photos Included",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "25 retouched images, pro makeup included, up to 5 outfits, 1 hr session",
        inclusions: [
          "25 Retouched Images",
          "Professional Makeup Artist Included",
          "Up to 5 Outfit Changes",
          "Full Family Inclusions & Golden Hour Glow",
          "1 Hour Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 15. OUTDOOR FAMILY LIFESTYLE SHOOT
  {
    id: "outdoor-family-shoot",
    pathway: "outdoor",
    subcat: "outdoor-family",
    catLabel: "Outdoor Family",
    title: "Outdoor Family Lifestyle",
    tagline: "Relaxed on-location family session in lush gardens (Minimum 7 images · No single image for outdoor)",
    image: "samples/12-family-shoot/outdoor-cover.JPG",
    badge: "👨‍👩‍👧 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,500 (lock your slot)",
    sampleFolder: "samples/12-family-shoot",
    samples: [
      { url: "samples/12-family-shoot/IMG_5180.JPG", type: "image", title: "Heartwarming Sunlit Family Portrait" },
      { url: "samples/12-family-shoot/IMG_0015.JPG", type: "image", title: "Kids & Parents Candid Laughter in Park" },
      { url: "samples/12-family-shoot/IMG_5129.JPG", type: "image", title: "Natural Stroll Through Gardens" },
      { url: "samples/12-family-shoot/IMG_5145.JPG", type: "image", title: "Outdoor Family Hugs & Smiles" },
      { url: "samples/12-family-shoot/IMG_5143.JPG", type: "image", title: "Relaxed Compound Family Composition" },
      { url: "samples/12-family-shoot/IMG_5202.JPG", type: "image", title: "Golden Hour Multi-Generation Group" },
      { url: "samples/12-family-shoot/FAMILY OUTDOOR SHOOT PACKAGES.jpg", type: "image", title: "Family Outdoor Rates Poster & Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Small Family 3–4 Pax)",
        price: 2000,
        deposit: 500,
        summary: "7 retouched images for small family (Minimum 7 images for outdoor)",
        inclusions: [
          "7 Retouched Images in Natural Daylight (Minimum 7 Images)",
          "Suitable for 3–4 Family Members",
          "Relaxed Group Posing & Warm Interaction",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold (5–8 Pax)",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "12 retouched images for standard family",
        inclusions: [
          "12 Retouched Images in Natural Daylight",
          "Suitable for 5–8 Family Members",
          "Full Group + Parents & Kids Sub-shots",
          "45 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Up to 12 Pax)",
        price: 6000,
        deposit: 1500,
        summary: "22 retouched images for extended family",
        inclusions: [
          "22 Retouched Images",
          "Suitable for Up to 12 Family Members",
          "Generational Portraits & Candid Play Moments",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 16. KIDS OUTDOOR BIRTHDAY SHOOT
  {
    id: "kids-outdoor-shoot",
    pathway: "outdoor",
    subcat: "outdoor-family",
    catLabel: "Kids & Milestones",
    title: "Kids Outdoor Sunshine Shoot",
    tagline: "High-energy outdoor shoot capturing natural laughter and outdoor sunshine (Minimum 7 images · No single image for outdoor)",
    image: "samples/10-kids-shoot/Kids outdoor photoshoot.jpg",
    badge: "🎈 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/10-kids-shoot",
    samples: [
      { url: "samples/10-kids-shoot/Kids outdoor photoshoot.jpg", type: "image", title: "Outdoor Kids Rates Poster & Poses" },
      { url: "samples/10-kids-shoot/DSC07673_(2).jpg", type: "image", title: "Outdoor Sunlit Child Smile" },
      { url: "samples/10-kids-shoot/Kids birthday reels.mp4", type: "video", title: "Candid Outdoor Play Reel" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "7 solo kid retouched images (Minimum 7 images for outdoor)",
        inclusions: [
          "7 Solo Kid Retouched Images (Minimum 7 Images)",
          "Behind-The-Scenes Short Video Clips",
          "Natural Play & Bubble Machine Fun",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "12 retouched images (Solo Kid + Family)",
        inclusions: [
          "12 Retouched Images in Natural Light",
          "Solo Kid & Family Moments Included",
          "Candid Smiles & Cake Cutting Setup",
          "45 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 1400,
        summary: "20 retouched images, 2-3 outfit changes, complete birthday family album",
        inclusions: [
          "20 Retouched Images",
          "2–3 Outfit Changes",
          "Complete Birthday Family Memory Collection",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 17. OUTDOOR WHITE SHIRT SHOOT
  {
    id: "outdoor-shirt-shoot",
    pathway: "outdoor",
    subcat: "outdoor-headshots",
    catLabel: "Crisp White Shirt",
    title: "Outdoor White Shirt Shoot",
    tagline: "Chic outdoor white shirt lifestyle session (Minimum 7 images · No single image for outdoor)",
    image: "samples/04-outdoor-shirt-shoot/OUTDOOR SHIRT SHOOT PACKAGES.jpg",
    badge: "🌿 Min 7 Images (No Single Image)",
    turnaround: "2–3 Business Days",
    depositRate: "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    sampleFolder: "samples/04-outdoor-shirt-shoot",
    samples: [
      { url: "samples/04-outdoor-shirt-shoot/OUTDOOR SHIRT SHOOT PACKAGES.jpg", type: "image", title: "Outdoor White Shirt Rates & Guide" },
      { url: "images/work-7.jpg", type: "image", title: "Crisp White Shirt Lifestyle" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2000,
        deposit: 500,
        summary: "8 retouched outdoor images, 30 min session",
        inclusions: [
          "8 Retouched Outdoor Images (Save KSh 800 vs single rate!)",
          "1 Location Backdrop",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 3500,
        deposit: 900,
        summary: "16 retouched outdoor images, 2 outfits, 45 min session",
        inclusions: [
          "16 Retouched Outdoor Images (Save KSh 2,100 vs single rate!)",
          "2 Outfits (Casual / Semi-Formal)",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 5500,
        deposit: 900,
        summary: "24 retouched outdoor images, 3 outfits, 1 hr session",
        inclusions: [
          "24 Retouched Outdoor Images",
          "3 Outfits of Choice",
          "Multiple Outdoor Environmental Perspectives",
          "1 Hour Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },

  // 18. PRE-WEDDING & COUPLES STORY
  {
    id: "pre-wedding",
    pathway: "outdoor",
    subcat: "outdoor-couples",
    catLabel: "Pre-Wedding & Romance",
    title: "Pre-Wedding & Love Story",
    tagline: "Romantic scenic portrait sessions & save-the-dates (Minimum 7 images · No single image for outdoor)",
    image: "samples/15-pre-wedding/PRE WEDDING SHOOT.jpg",
    badge: "💍 Min 7 Images (No Single Image)",
    turnaround: "5–7 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/15-pre-wedding",
    samples: [
      { url: "samples/15-pre-wedding/work-3.jpg", type: "image", title: "Epic Golden-Hour Scenic Couple Portrait" },
      { url: "samples/15-pre-wedding/PRE WEDDING SHOOT.jpg", type: "image", title: "Pre-Wedding Shoot Rates & Guide" },
      { url: "samples/11-couple-shoot/IMG_5189.JPG", type: "image", title: "Candid Romantic Outdoor Connection" },
      { url: "samples/11-couple-shoot/IMG_5196.JPG", type: "image", title: "Scenic Outdoor Hug & Natural Smiles" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver",
        price: 2600,
        deposit: 2080,
        summary: "7 high-end retouched digital images (Minimum 7 images for outdoor)",
        inclusions: [
          "7 High-End Retouched Digital Images (Minimum 7 Images)",
          "30 Mins Dedicated Session",
          "1 Outfit of Choice",
          "Private Soft Copy Cloud Gallery"
        ]
      },
      {
        id: "gold",
        name: "Gold",
        popular: true,
        price: 4550,
        deposit: 3640,
        summary: "12 retouched images + Save-the-Date graphic + 45s cinematic reel",
        inclusions: [
          "12 High-End Retouched Digital Images",
          "45 Mins Dedicated Session",
          "2 Outfit Changes",
          "1 Save-the-Date Social Announcement Graphic Design",
          "1x 45s Vertical Cinematic Video Reel"
        ]
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 8450,
        deposit: 6760,
        summary: "18 retouched images + Save-the-Date suite + 3x 60s 4K video reels",
        inclusions: [
          "18 High-End Retouched Digital Images",
          "1 Hour Dedicated Session",
          "Unlimited Outfit Changes",
          "Custom Save-the-Date Graphic Design Suite",
          "3x 60s 4K Vertical Cinematic Video Reels for IG & TikTok"
        ]
      }
    ]
  },

  // ==========================================================================
  // PATHWAY 3: WEDDINGS & EVENT COVERAGE (ON-LOCATION PRODUCTION)
  // ==========================================================================

  // 19. FULL-DAY WEDDING COVERAGE
  {
    id: "wedding-coverage",
    pathway: "events",
    subcat: "weddings",
    catLabel: "Weddings & Matrimony",
    title: "Wedding Shoot (Full-Day Coverage)",
    tagline: "Complete photo and cinema production for your holy matrimony and reception",
    image: "samples/14-wedding-coverage/BASIC WEDDING PACKAGES.jpg",
    badge: "💍 Holy Matrimony",
    turnaround: "48hr Teaser · Full Gallery in 3 Weeks",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/14-wedding-coverage",
    samples: [
      { url: "samples/14-wedding-coverage/work-1.jpg", type: "image", title: "Luxury Wedding Matrimony Master Portrait" },
      { url: "samples/14-wedding-coverage/BASIC WEDDING PACKAGES.jpg", type: "image", title: "Basic Wedding Packages Rate Sheet" }
    ],
    options: [
      {
        id: "bronze",
        name: "Bronze (Civil & Intimate Vows)",
        price: 25000,
        deposit: 10000,
        summary: "1 dedicated senior photographer, up to 4 hrs coverage, 120+ retouched photos",
        inclusions: [
          "1 Dedicated Senior Lead Wedding Photographer",
          "Up to 4 Hours On-Site Coverage (Ceremony + Couple Session)",
          "120+ Magazine-Retouched High-Res Images",
          "Full Bridal Party & Family Combinations",
          "48hr Priority Social Media Teaser Pack (15 Photos)",
          "Private Cloud Master Gallery Link"
        ]
      },
      {
        id: "silver",
        name: "Silver (Classic Full-Day Coverage)",
        price: 45000,
        deposit: 18000,
        summary: "2 photographers, full-day photo coverage, 250+ retouched images, 48hr teasers",
        inclusions: [
          "2 Photographers (Lead Photographer + Assistant Shooter)",
          "Full-Day Coverage (Morning Prep to Evening Reception)",
          "250+ Magazine-Retouched High-Res Images",
          "Church Service, Vows, Ring Exchange & Full Reception",
          "48hr Priority Teaser Set for Socials",
          "Private Cloud Master Gallery + Soft Copies"
        ]
      },
      {
        id: "gold",
        name: "Gold (Gold Matrimony + 4K Cinema + Drone)",
        popular: true,
        price: 75000,
        deposit: 30000,
        summary: "3-person crew, 4K cinematic film + aerial drone, 400+ images, wooden USB",
        inclusions: [
          "3-Person Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Minute 4K Cinematic Highlight Film with Clean Audio",
          "4K Aerial Drone Cinematography for Venue & Convoy",
          "Full-Day Coverage from Makeup to Evening Dancing",
          "400+ Magazine-Retouched High-Res Images",
          "Custom Laser-Engraved Wooden USB Keepsake Box"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Royal Heirloom VIP Full Production)",
        price: 90000,
        deposit: 36000,
        summary: "4-person full crew, documentary film + reel, luxury layflat photobook + 2 canvas mounts",
        inclusions: [
          "4-Person Complete Production Crew (2 Photographers + 2 Cinematographers)",
          "Full 10–15 Min Wedding Documentary Film + 60s Social Reel",
          "Luxury Hardcover Layflat Printed Keepsake Photobook Album",
          "2 Mounted A3 Statement Canvas Wall Art Prints",
          "500+ Magazine-Retouched Master Images",
          "Custom Wooden USB Keepsake Box with All Raw & Edited Files"
        ]
      }
    ]
  },

  // 20. TRADITIONAL WEDDING (RURACIO)
  {
    id: "traditional-wedding",
    pathway: "events",
    subcat: "weddings",
    catLabel: "Weddings & Matrimony",
    title: "Traditional Wedding (Ruracio)",
    tagline: "Authentic cultural ceremony coverage honoring rich Kenyan marital customs",
    image: "samples/07-traditional-creative/OUTDOOR TRADITIONALCREATIVE  SHOOT.jpg",
    badge: "👑 Cultural Matrimony",
    turnaround: "48hr Teaser · Full Gallery in 3 Weeks",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/07-traditional-creative",
    samples: [
      { url: "samples/07-traditional-creative/OUTDOOR TRADITIONALCREATIVE  SHOOT.jpg", type: "image", title: "Outdoor Cultural Attire & Ceremony Setup" },
      { url: "samples/14-wedding-coverage/work-1.jpg", type: "image", title: "Ceremony & Couple Nuptials" },
      { url: "samples/07-traditional-creative/O13A0286.jpg", type: "image", title: "Traditional Regalia Portrait" }
    ],
    options: [
      {
        id: "bronze",
        name: "Bronze (Civil & Intimate Ceremony)",
        price: 25000,
        deposit: 10000,
        summary: "1 dedicated photographer, up to 4 hrs coverage, 120+ retouched photos",
        inclusions: [
          "1 Dedicated Senior Lead Wedding Photographer",
          "Up to 4 Hours On-Site Coverage (Ceremony + Dowry Session)",
          "120+ Magazine-Retouched High-Res Images",
          "Full Family Regalia Combinations",
          "48hr Priority Social Media Teaser Pack (15 Photos)",
          "Private Cloud Master Gallery Link"
        ]
      },
      {
        id: "silver",
        name: "Silver (Classic Full-Day Coverage)",
        price: 45000,
        deposit: 18000,
        summary: "2 photographers, full-day cultural ceremony coverage, 250+ retouched images",
        inclusions: [
          "2 Photographers (Lead Photographer + Cultural Assistant)",
          "Full-Day Coverage of Ruracio & Dowry Festivities",
          "250+ Magazine-Retouched High-Res Images",
          "Elders Blessings, Family Negotiations & Gift Presentations",
          "48hr Priority Teaser Set for Socials",
          "Private Cloud Master Gallery + Soft Copies"
        ]
      },
      {
        id: "gold",
        name: "Gold (Cultural Matrimony + 4K Cinema + Drone)",
        popular: true,
        price: 75000,
        deposit: 30000,
        summary: "3-person crew, 4K cultural documentary + drone, 400+ images, wooden USB",
        inclusions: [
          "3-Person Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Minute 4K Cinematic Highlight Film with Elder Speeches Audio",
          "4K Aerial Drone Cinematography for Rural / Venue Overhead",
          "Full-Day Coverage of All Cultural Rites",
          "400+ Magazine-Retouched High-Res Images",
          "Custom Laser-Engraved Wooden USB Keepsake Box"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Royal Heritage VIP Full Production)",
        price: 90000,
        deposit: 36000,
        summary: "4-person full crew, documentary film + reel, luxury layflat photobook + 2 canvas mounts",
        inclusions: [
          "4-Person Complete Production Crew (2 Photographers + 2 Cinematographers)",
          "Full 10–15 Min Cultural Documentary Film + 60s Social Reel",
          "Luxury Hardcover Layflat Printed Keepsake Photobook Album",
          "2 Mounted A3 Statement Canvas Wall Art Prints",
          "500+ Magazine-Retouched Master Images",
          "Custom Wooden USB Keepsake Box with All Raw & Edited Files"
        ]
      }
    ]
  },

  // 21. BURIAL & MEMORIAL TRIBUTES
  {
    id: "burial-coverage",
    pathway: "events",
    subcat: "memorials",
    catLabel: "Burials & Memorials",
    title: "Burials & Memorials Coverage",
    tagline: "Dignified, respectful, and unobtrusive photo & video coverage honoring loved ones",
    image: "samples/16-burial-coverage/BURIAL COVERAGE PACKAGES.jpg",
    badge: "🕊️ In Loving Memory",
    turnaround: "7–10 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/16-burial-coverage",
    samples: [
      { url: "samples/16-burial-coverage/BURIAL COVERAGE PACKAGES.jpg", type: "image", title: "Burial Coverage Packages Official Rates & Inclusions" },
      { url: "images/work-6.jpg", type: "image", title: "Respectful Family Tribute Documentation" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Respectful Half-Day Service)",
        price: 25000,
        deposit: 10000,
        summary: "Up to 4 hrs coverage, 100+ edited master photos, respectful documentation",
        inclusions: [
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "100+ Edited High-Resolution Master Photos",
          "Complete Family Tribute & Service Documentation",
          "Same-Day 10-Photo Teaser Set for Press / Socials",
          "Private Cloud Gallery Delivery"
        ]
      },
      {
        id: "gold",
        name: "Gold (Full-Day Memorial Photo + Film)",
        popular: true,
        price: 35000,
        deposit: 14000,
        summary: "Full-day photo + video, complete service & eulogy recording, 5-7 min highlight",
        inclusions: [
          "2-Person Photo & Video Production Crew",
          "Up to 8 Hours Full Celebration of Life Coverage",
          "Complete Service & Eulogy Recording with Clear Audio",
          "5–7 Min Memorial Tribute Video Highlight",
          "200+ Edited High-Resolution Master Photos",
          "Private Cloud Gallery Delivery"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Memorial Documentary Tribute)",
        price: 65000,
        deposit: 26000,
        summary: "Full 4-person crew, 4K documentary film, speeches recording, printed photobook album",
        inclusions: [
          "Full Production Crew (2 Photographers + 2 Videographers)",
          "4K Memorial Documentary Film + Complete Speeches Recording",
          "Hardcover Printed Memorial Tribute Photobook for the Family",
          "300+ Retouched Photographs",
          "Custom USB Box with All Raw Footage & High-Resolution Photos"
        ]
      }
    ]
  },

  // 22. CORPORATE EVENT COVERAGE
  {
    id: "corporate-event",
    pathway: "events",
    subcat: "corporate-events",
    catLabel: "Corporate & Summits",
    title: "Corporate Events & Summits",
    tagline: "High-level visual documentation for conferences, AGM summits, galas & brand activations",
    image: "samples/17-corporate-event/COPORATE EVENT COVERAGE.jpg",
    badge: "🏢 Conferences & Galas",
    turnaround: "3–5 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/17-corporate-event",
    samples: [
      { url: "samples/17-corporate-event/COPORATE EVENT COVERAGE.jpg", type: "image", title: "Corporate Event Coverage Official Rates & Guide" },
      { url: "samples/17-corporate-event/CORPORATE PORTRAIT SHOOT.jpg", type: "image", title: "Corporate Portrait & Board Showcase" },
      { url: "images/work-10.jpg", type: "image", title: "Keynote Speaker & Stage Lighting" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Half-Day Summit / Conference)",
        price: 25000,
        deposit: 10000,
        summary: "Up to 4 hours on-site coverage, 100+ PR-ready images",
        inclusions: [
          "Up to 4 Hours On-Site Photography Coverage",
          "1 Senior Lead Event Photographer",
          "Keynotes, Audience & Brand Step-and-Repeat",
          "100+ Color-Graded PR-Ready High-Res Images",
          "Same-Day Teaser Photos for Press & LinkedIn"
        ]
      },
      {
        id: "gold",
        name: "Gold (Full-Day Conference + Gala)",
        popular: true,
        price: 35000,
        deposit: 14000,
        summary: "Up to 8 hours full coverage (Photo + Video Highlights), 200+ images",
        inclusions: [
          "Up to 8 Hours Comprehensive Coverage",
          "2-Person Coverage Crew (Stills + 4K Reel Video)",
          "200+ High-Resolution Master Images",
          "Evening Gala & Award Dinner Documentation",
          "Next-Day PR Press Pack for Immediate Distribution"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (Multi-Day Summit Cinema & PR)",
        price: 65000,
        deposit: 26000,
        summary: "Multi-day summit coverage, full video documentary, dedicated PR editor on-site",
        inclusions: [
          "Multi-Day or Full Team Production Suite",
          "Dedicated On-Site Photo & Video Editors for Real-Time Press Delivery",
          "Executive Boardroom Stills & VIP Step-and-Repeat",
          "4K Corporate Highlight Film for Shareholders & Website",
          "Master Commercial Rights & High-Speed Cloud Delivery"
        ]
      }
    ]
  },

  // ==========================================================================
  // 22B. BIRTHDAY PARTY EVENTS COVERAGE
  {
    id: "birthday-events",
    pathway: "events",
    subcat: "parties-galas",
    catLabel: "Birthday Party Events",
    title: "Birthday Party Events Coverage",
    tagline: "Up to 8 hours on-site birthday party coverage: cake cutting, guest candids, decor details & 4K video reel",
    image: "samples/09-birthday-shoot/event-cover.JPG",
    badge: "🎉 Party Extravaganza",
    turnaround: "48hr Teasers · Full Gallery in 7 Days",
    depositRate: "Booking deposit: KSh 10,000 to KSh 22,000",
    sampleFolder: "samples/09-birthday-shoot",
    samples: [
      { url: "samples/09-birthday-shoot/DSC05153.jpg", type: "image", title: "Birthday Party Celebration Candids" },
      { url: "samples/09-birthday-shoot/DSC05247.jpg", type: "image", title: "Toast & Joyous Party Interaction" },
      { url: "samples/10-kids-shoot/Kids outdoor photoshoot.jpg", type: "image", title: "High-Energy Birthday Celebration" },
      { url: "samples/09-birthday-shoot/BIRTHDAY REELS PACKAGE.mp4", type: "video", title: "Party Video Reel Highlight" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Half-Day Party Celebration)",
        price: 25000,
        deposit: 10000,
        summary: "Up to 4 hours on-site birthday party coverage",
        inclusions: [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        id: "gold",
        name: "Gold (Full Party Stills + 4K Reel)",
        popular: true,
        price: 35000,
        deposit: 14000,
        summary: "Up to 8 hours full party celebration with 4K video reel",
        inclusions: [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Photographers",
          "Up to 8 Hours Full Party Extravaganza Coverage",
          "1x 60s 4K Vertical Highlight Reel for Instagram & TikTok",
          "Same-Day 15-Photo Teasers",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP Party + Cinema Film)",
        price: 55000,
        deposit: 22000,
        summary: "Full VIP celebration with 2 photographers + 1 cinematographer",
        inclusions: [
          "350+ Magazine Retouched Master Photos",
          "Full Production Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Min 4K Cinematic Party Highlight Film + 2x Viral Reels",
          "A4 Hardcover Keepsake Photobook (20 Pages)",
          "Custom Laser-Engraved Wooden USB Keepsake Box",
          "Complete RAW & Master Footage Included"
        ]
      }
    ]
  },

  // 22C. GRADUATION CEREMONIES & EVENTS COVERAGE
  {
    id: "graduation-events",
    pathway: "events",
    subcat: "parties-galas",
    catLabel: "Graduation Ceremonies",
    title: "Graduation Ceremonies & Events Coverage",
    tagline: "Full convocation walk, degree conferment, family banquet celebration & honorary portraits",
    image: "samples/13-graduation-shoot/cover.jpg",
    badge: "🎓 Convocation Walk",
    turnaround: "48hr Teasers · Full Gallery in 7 Days",
    depositRate: "Booking deposit: KSh 10,000 to KSh 22,000",
    sampleFolder: "samples/13-graduation-shoot",
    samples: [
      { url: "samples/13-graduation-shoot/cover.jpg", type: "image", title: "Convocation Milestone Hero Portrait" },
      { url: "samples/13-graduation-shoot/DSC09938.JPG", type: "image", title: "Cap Toss Moment of Pride" },
      { url: "samples/13-graduation-shoot/PRI_5912.jpg", type: "image", title: "Grand Convocation Regalia Portrait" },
      { url: "samples/13-graduation-shoot/PRI_5893.jpg", type: "image", title: "Golden Hour Campus Celebration" },
      { url: "samples/13-graduation-shoot/DSC09941.JPG", type: "image", title: "Honorary Graduate Regalia Walk" },
      { url: "samples/13-graduation-shoot/PRI_5363.jpg", type: "image", title: "Celebration Bouquet & Degree Scroll" },
      { url: "samples/13-graduation-shoot/DSC09940.JPG", type: "image", title: "Celebration Studio & Event Lighting" },
      { url: "samples/13-graduation-shoot/PRI_4998.jpg", type: "image", title: "Campus Convocation Walk" },
      { url: "samples/13-graduation-shoot/DSC09945.JPG", type: "image", title: "Family Convocation Banquet" },
      { url: "samples/13-graduation-shoot/PRI_5412.jpg", type: "image", title: "Graduate Joy & Laughter" },
      { url: "samples/13-graduation-shoot/graduation.jpg", type: "image", title: "Official Academic Graduation Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Convocation & Ceremony Walk)",
        price: 25000,
        deposit: 10000,
        summary: "Up to 4 hours on-site graduation celebration coverage",
        inclusions: [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        id: "gold",
        name: "Gold (Ceremony + Afterparty Feast)",
        popular: true,
        price: 35000,
        deposit: 14000,
        summary: "Up to 8 hours full day convocation & evening banquet coverage",
        inclusions: [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Event Photographers",
          "Up to 8 Hours Full Day Celebration Coverage",
          "1x 60s 4K Celebration Reel for TikTok & Instagram",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP Convocation Cinema + Album)",
        price: 55000,
        deposit: 22000,
        summary: "Full VIP production with 2 photographers, 1 cinematographer & printed photobook",
        inclusions: [
          "350+ Magazine Retouched Master Photos",
          "Full Production Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Min 4K Cinematic Milestone Film + 2x Social Reels",
          "A4 Hardcover Keepsake Photobook (20 Pages)",
          "Custom Laser-Engraved Wooden USB Keepsake Box",
          "Complete RAW & Master Footage Included"
        ]
      }
    ]
  },

  // 22D. HOTEL & GALA EVENTS COVERAGE
  {
    id: "hotel-events",
    pathway: "events",
    subcat: "corporate-events",
    catLabel: "Hotel & Gala Events",
    title: "Hotel & Gala Events Coverage",
    tagline: "Corporate gala dinners, luxury hotel launches, culinary showcases & VIP networking",
    image: "samples/18-hotel-hospitality/HOTEL AND HOSPITALITY SHOOT.jpg",
    badge: "🥂 Luxury Hospitality",
    turnaround: "48hr Teasers · Full Gallery in 7 Days",
    depositRate: "Booking deposit: KSh 10,000 to KSh 22,000",
    sampleFolder: "samples/18-hotel-hospitality",
    samples: [
      { url: "images/work-8.jpg", type: "image", title: "VIP Guest Lifestyle Candids" },
      { url: "images/work-7.jpg", type: "image", title: "Culinary Dinner Presentation" },
      { url: "samples/18-hotel-hospitality/HOTEL AND HOSPITALITY SHOOT.jpg", type: "image", title: "Hotel & Hospitality Official Rates" }
    ],
    options: [
      {
        id: "silver",
        name: "Silver (Half-Day Hospitality Showcase)",
        price: 25000,
        deposit: 10000,
        summary: "Up to 4 hours coverage documenting hotel events, launches & culinary dinners",
        inclusions: [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media & Press",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        id: "gold",
        name: "Gold (Full-Day Gala + Culinary Showcase)",
        popular: true,
        price: 35000,
        deposit: 14000,
        summary: "Up to 8 hours comprehensive hospitality event coverage + 4K reel",
        inclusions: [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Event Photographers",
          "Up to 8 Hours Comprehensive Event Coverage",
          "1x 60s 4K Vertical Social Reel showcasing venue & ambiance",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        id: "platinum",
        name: "Platinum (VIP Gala Cinema + Brand Suite)",
        price: 55000,
        deposit: 22000,
        summary: "Full VIP production crew (2 Photographers + 1 Cinematographer) & commercial licensing",
        inclusions: [
          "350+ Magazine Retouched Master Photos",
          "Full Production Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Min 4K Cinematic Venue Showcase Film + 2x Viral Reels",
          "Complete Commercial Marketing & PR Usage Rights",
          "Custom Laser-Engraved Wooden USB Keepsake Box",
          "Complete RAW & Master 4K Footage Included"
        ]
      }
    ]
  },

  // PATHWAY 4: COMMERCIAL & BRAND GROWTH (PRODUCTS, HOTELS & BRAND IDENTITY)
  // ==========================================================================

  // 23. PRODUCT & E-COMMERCE PHOTOGRAPHY
  {
    id: "product-shoot",
    pathway: "commercial",
    subcat: "products-hospitality",
    catLabel: "Products & E-Commerce",
    title: "Product Photography",
    tagline: "Studio lighting, pure white background e-commerce packs, and lifestyle brand imagery",
    image: "samples/19-product-shoot/PRODUCT SHOOT PACKAGES.jpg",
    badge: "📦 E-Commerce Catalog",
    turnaround: "3–5 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/19-product-shoot",
    samples: [
      { url: "samples/19-product-shoot/PRODUCT SHOOT PACKAGES.jpg", type: "image", title: "Product Shoot Packages Official Rates & Inclusions" },
      { url: "samples/19-product-shoot/Business 2 Business.jpg", type: "image", title: "B2B Brand Photography Showcase" }
    ],
    options: [
      {
        id: "silver",
        name: "Catalog Essentials (10 SKUs)",
        price: 4500,
        deposit: 3600,
        summary: "Pure white backdrop & transparent PNG cutouts for 10 items",
        inclusions: [
          "Up to 10 Product Items / SKUs (2 angles each = 20 photos)",
          "Pure White E-Commerce Backdrop (Amazon / Shopify Compliant)",
          "Transparent PNG Cutouts for Digital Ads Included",
          "Delivered via High-Res Cloud Gallery"
        ]
      },
      {
        id: "gold",
        name: "Brand Lifestyle (25 SKUs)",
        popular: true,
        price: 9500,
        deposit: 7600,
        summary: "White backdrop + textured lifestyle staging for 25 items",
        inclusions: [
          "Up to 25 Product Items / SKUs (75+ final photos)",
          "Combination of Pure White E-Commerce & Styled Lifestyle Staging",
          "Model Hand-Interactions & Prop Styling",
          "Commercial Print & Digital Usage Rights Included"
        ]
      },
      {
        id: "platinum",
        name: "Master Brand Suite",
        price: 18000,
        deposit: 14400,
        summary: "50+ SKUs with 360 spin animations & 3x 15s product video ads",
        inclusions: [
          "50+ Product Items / SKUs (Full Catalog Production)",
          "3x 15s High-Energy Vertical Product Video Ads for TikTok & IG",
          "Full Commercial Master Licensing",
          "Priority 48-Hour Turnaround Batch Delivery"
        ]
      }
    ]
  },

  // 24. HOTEL & HOSPITALITY SHOWCASE
  {
    id: "hotel-hospitality",
    pathway: "commercial",
    subcat: "products-hospitality",
    catLabel: "Hotels & Hospitality",
    title: "Hotel & Hospitality Showcase",
    tagline: "Architectural, interior, culinary, and experiential imagery for luxury hotels, Airbnbs & resorts",
    image: "samples/18-hotel-hospitality/HOTEL AND HOSPITALITY SHOOT.jpg",
    badge: "🏖️ Resorts & Luxury",
    turnaround: "4–6 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/18-hotel-hospitality",
    samples: [
      { url: "samples/18-hotel-hospitality/work-5.jpg", type: "image", title: "Luxury Suite Architectural Lighting & Detail" },
      { url: "samples/18-hotel-hospitality/HOTEL AND HOSPITALITY SHOOT.jpg", type: "image", title: "Hotel & Hospitality Shoot Rates & Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Airbnb / Boutique Suite",
        price: 8000,
        deposit: 6400,
        summary: "Up to 3 rooms/spaces, 20 high-res interior & exterior photos",
        inclusions: [
          "Up to 3 Key Spaces (Living, Master Bedroom, Balcony/Amenities)",
          "20 HDR Professionally Balanced Interior & Exterior Photos",
          "Flawless Window Views (No blown-out highlights)",
          "Airbnb & Booking.com Optimized Resolution"
        ]
      },
      {
        id: "gold",
        name: "Full Resort Showcase",
        popular: true,
        price: 18000,
        deposit: 14400,
        summary: "Full property walkthrough + restaurant/culinary + 60s reel",
        inclusions: [
          "Complete Property Coverage (Rooms, Dining, Pool, Grounds, Twilight)",
          "45+ Magazine-Grade Architectural & Hospitality Photos",
          "Culinary & Cocktail Gourmet Food Photography",
          "1x 60s 4K Walkthrough Video Reel with Drone Aerials"
        ]
      },
      {
        id: "platinum",
        name: "Commercial Brand Campaign",
        price: 35000,
        deposit: 28000,
        summary: "Complete visual asset overhaul with model lifestyle talents & 4K cinematic film",
        inclusions: [
          "2-Day Multi-Production Shoot (Architectural + Lifestyle)",
          "Curated Talent / Guest Experience Lifestyle Posing",
          "2-3 Min 4K Cinematic Promotional Venue Film",
          "Full International Commercial Billboard & Web Rights"
        ]
      }
    ]
  },

  // 25. CORPORATE BRANDING & PORTRAITS
  {
    id: "corporate-branding",
    pathway: "commercial",
    subcat: "graphic-design",
    catLabel: "Corporate & Branding",
    title: "Corporate & Brand Growth Suite",
    tagline: "Cohesive leadership headshots and annual report imagery for company teams",
    image: "samples/17-corporate-event/CORPORATE PORTRAIT SHOOT.jpg",
    badge: "🏢 Leadership Suite",
    turnaround: "3–5 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/17-corporate-event",
    samples: [
      { url: "samples/17-corporate-event/CORPORATE PORTRAIT SHOOT.jpg", type: "image", title: "Corporate Portrait Shoot Rates & Guide" },
      { url: "samples/01-indoor-headshots/DSC09594_(2).jpg", type: "image", title: "Board Member & Executive Bio Standard" },
      { url: "images/ceo.jpg", type: "image", title: "Chief Executive Leadership Style" }
    ],
    options: [
      {
        id: "silver",
        name: "Small Team (Up to 5 Execs)",
        price: 5000,
        deposit: 4000,
        summary: "5 executives, 2 retouched portraits each + 1 team group",
        inclusions: [
          "Up to 5 Executives / Board Members",
          "2 Magazine Retouched Headshots per Person",
          "1 Cohesive Team Group Portrait",
          "Delivered via High-Res Cloud Gallery"
        ]
      },
      {
        id: "gold",
        name: "Department Suite (Up to 15 Execs)",
        popular: true,
        price: 12000,
        deposit: 9600,
        summary: "15 executives with on-site studio lighting setup at your offices",
        inclusions: [
          "Up to 15 Team Members",
          "On-Site Studio Lighting Setup at Your Corporate Office",
          "2 Magazine Retouched Headshots per Person + Department Groups",
          "Custom Company Backdrop / Brand Color Match"
        ]
      },
      {
        id: "platinum",
        name: "Enterprise Firm (Up to 30 Execs)",
        price: 22000,
        deposit: 17600,
        summary: "Full firm photo day with executive grooming & PR media pack",
        inclusions: [
          "Up to 30 Team Members",
          "Executive Grooming & Anti-Shine Touch-Ups Included",
          "Individual Bio Shots, Working Action Candids & Board Portraits",
          "Expedited 48-Hour Turnaround for Press Releases"
        ]
      }
    ]
  },

  // 26. GRAPHIC DESIGN STARTER
  {
    id: "graphic-starter",
    pathway: "commercial",
    subcat: "graphic-design",
    catLabel: "Graphic Design & Branding",
    title: "Graphic Design Starter Package",
    tagline: "Essential visual branding assets for startups, small businesses & social campaigns",
    image: "samples/20-graphic-starter/GRAPHIC DESIGNING STARTER PACKAGE.jpg",
    badge: "🎨 Visual Identity",
    turnaround: "3 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/20-graphic-starter",
    samples: [
      { url: "samples/20-graphic-starter/GRAPHIC DESIGNING STARTER PACKAGE.jpg", type: "image", title: "Graphic Design Starter Package Rates & Inclusions Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Starter Pack",
        price: 2500,
        deposit: 2000,
        summary: "Logo design + business card layout",
        inclusions: [
          "Primary Logo Design (2 Initial Concepts, 2 Revisions)",
          "Double-Sided Business Card Print-Ready PDF",
          "Transparent PNG & Vector SVG Master Files",
          "3-Day Delivery"
        ]
      },
      {
        id: "gold",
        name: "Growth Kit",
        popular: true,
        price: 5500,
        deposit: 4400,
        summary: "Logo suite + marketing promotional flyers",
        inclusions: [
          "Full Logo Suite (Primary, Secondary, Monogram/Favicon)",
          "2x Marketing Event / Promo Flyer Designs",
          "Brand Color Palette & Typography Guidelines Card",
          "High-Res Print & Web Ready Formats"
        ]
      }
    ]
  },

  // 27. GRAPHIC DESIGN GROWTH
  {
    id: "graphic-growth",
    pathway: "commercial",
    subcat: "graphic-design",
    catLabel: "Graphic Design & Branding",
    title: "Graphic Design Growth Package",
    tagline: "Comprehensive corporate brand identity, company profile & marketing collateral",
    image: "samples/21-graphic-growth/GRAPHIC DESGINING GROWTH PACKAGE.jpg",
    badge: "Corporate Identity",
    turnaround: "5 Business Days",
    depositRate: "80% booking deposit required",
    sampleFolder: "samples/21-graphic-growth",
    samples: [
      { url: "samples/21-graphic-growth/GRAPHIC DESGINING GROWTH PACKAGE.jpg", type: "image", title: "Corporate Rebrand, Company Profile & Advertising Suite Guide" }
    ],
    options: [
      {
        id: "silver",
        name: "Corporate Standard",
        price: 8000,
        deposit: 6400,
        summary: "Multi-page corporate profile & marketing pack",
        inclusions: [
          "Full Brand Identity Guidelines System",
          "4-Page Corporate Company Profile (PDF + Print)",
          "Letterhead, Invoice & Official Email Signature",
          "3x Promotional Social Media Ad Templates"
        ]
      },
      {
        id: "gold",
        name: "Executive Scale",
        popular: true,
        price: 14000,
        deposit: 11200,
        summary: "Full company suite with 8-page profile & packaging design",
        inclusions: [
          "8-Page Complete Corporate Brochure / Company Profile",
          "Full Stationery System (Card, Letterhead, Envelope, Folders)",
          "Product Packaging / Label Mockups",
          "Editable Source Files (AI, PSD, PDF, SVG)"
        ]
      }
    ]
  }
];

// Frequently Asked Questions
const FAQS_DATA = [
  {
    q: "How do I book a session with Laureign Studios?",
    a: "Booking takes under 60 seconds! Browse our packages above, view our verified client samples to inspect our quality, select your preferred tier, and tap 'Book via WhatsApp'. You can choose a date and location, and our team will immediately confirm availability and send your deposit invoice."
  },
  {
    q: "Do you offer both Indoor Studio and Outdoor Natural Light sessions?",
    a: "Yes! We operate our fully equipped indoor studio with multiple lighting setups, backdrops, and silk/shirt wardrobes, as well as on-location outdoor sessions at scenic gardens, parks, resort compounds, and university campuses across Kakamega, Nairobi, Eldoret, and Western Kenya."
  },
  {
    q: "Can I inspect real sample photos before booking?",
    a: "Yes! Every single package above features a 'See Client Samples Before Booking' button. Tap it to browse our real client sample photos and video reels before paying any commitment deposit."
  },
  {
    q: "What deposit is required to confirm my booking?",
    a: "For In-Studio and Outdoor Portrait shoots (such as Graduation, Headshots, White Shirt, Silk Wrap, Birthdays, Maternity), a small commitment deposit of KSh 300 to KSh 1,400 (approx. 25%) secures your time slot. For Weddings, Memorials, and Corporate Events, an 80% deposit is required upon reservation to lock crew and backup gear."
  },
  {
    q: "Where is Laureign Studios located?",
    a: "Our main studio is located in Kakamega. We also operate regular studio sessions in Nairobi and travel across Kenya (Eldoret, Kisumu, Nakuru, Mombasa) for weddings, graduation events, and commercial assignments."
  },
  {
    q: "How and when will I receive my photos?",
    a: "Studio and outdoor lifestyle portrait sessions are delivered in 2 to 3 business days via a private, password-protected high-resolution cloud gallery. Wedding teasers are sent within 48 hours for immediate social sharing, with full master galleries delivered in 3 weeks."
  },
  {
    q: "Can I bring my own props, family members or outfit changes?",
    a: "Absolutely! Graduation clients are encouraged to bring their academic gown, cap, hood, degree scroll, and family members. Birthday clients are welcome to bring balloons and number props. Inclusions for each tier are clearly detailed under each package card above."
  }
];
