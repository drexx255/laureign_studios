// ============================================================
//  packages-data.js — Official Studio Rate Card & Samples Architecture
//  Brand: Laureign Studios · Official WhatsApp: 0790048905
//  Auto-synchronized by sync-samples.js
// ============================================================

const PACKAGES_CONFIG = {
  "studioName": "Laureign Studios",
  "tagline": "Official Rates, Packages & Booking Platform",
  "whatsappNumber": "254790048905",
  "phoneDisplay": "+254 790 048 905",
  "currency": "KSh ",
  "locations": [
    "Nairobi",
    "Kakamega",
    "Eldoret",
    "Kisumu",
    "Across Kenya"
  ],
  "bookingPortalUrl": "index.html#book"
};

const PATHWAYS = [
  {
    "id": "studio",
    "title": "Studio & Portrait Sessions",
    "tagline": "In-Studio Controlled Lighting & High-Fashion Styled Shoots",
    "desc": "Graduation Milestones, Executive Headshots, White Shirt, Silk Wrap, Studio Birthdays, Maternity & Family.",
    "icon": "📸",
    "subcategories": [
      {
        "id": "all",
        "name": "🌟 All Studio Sessions"
      },
      {
        "id": "graduation",
        "name": "🎓 Graduation Shoots"
      },
      {
        "id": "portraits",
        "name": "👔 Executive Headshots"
      },
      {
        "id": "white-shirt",
        "name": "👔 Crisp White Shirt"
      },
      {
        "id": "silk-wrap",
        "name": "✨ Luxury Silk Wrap"
      },
      {
        "id": "boudoir",
        "name": "🌹 Luxury Boudoir Shoot"
      },
      {
        "id": "traditional",
        "name": "👑 Traditional Cultural Shoot"
      },
      {
        "id": "maternity-kids",
        "name": "🍼 Maternity, Newborn & Kids"
      },
      {
        "id": "couples-family",
        "name": "👨‍👩‍👧 Couples & Family Studio"
      }
    ]
  },
  {
    "id": "outdoor",
    "title": "Outdoor & Natural Light Sessions",
    "tagline": "Golden Hour, Gardens, Parks & On-Location Lifestyle Shoots",
    "desc": "Natural light headshots, vibrant garden birthdays, golden hour maternity, outdoor family picnics, and romantic couple stories (Minimum 7 images · No single image for outdoor).",
    "icon": "🌿",
    "subcategories": [
      {
        "id": "all",
        "name": "🌟 All Outdoor Sessions"
      },
      {
        "id": "outdoor-headshots",
        "name": "🌿 Outdoor & Model Headshots"
      },
      {
        "id": "outdoor-birthdays",
        "name": "🎉 Outdoor Birthdays"
      },
      {
        "id": "outdoor-maternity",
        "name": "🍼 Outdoor Baby Bump"
      },
      {
        "id": "outdoor-family",
        "name": "👨‍👩‍👧 Outdoor Family & Kids"
      },
      {
        "id": "outdoor-couples",
        "name": "❤️ Outdoor Couples"
      },
      {
        "id": "outdoor-traditional",
        "name": "👑 Traditional Cultural (Outdoor)"
      }
    ]
  },
  {
    "id": "events",
    "title": "Weddings & Event Coverage",
    "tagline": "On-Location Photography & Multi-Cam Cinematography",
    "desc": "Full-day Weddings, Traditional Matrimony, Corporate Summits, Galas & Memorial Tributes.",
    "icon": "💍",
    "subcategories": [
      {
        "id": "all",
        "name": "🌟 All Event Coverage"
      },
      {
        "id": "weddings",
        "name": "💍 Weddings & Matrimony"
      },
      {
        "id": "corporate-events",
        "name": "🏢 Corporate Summits & Galas"
      },
      {
        "id": "memorials",
        "name": "🕊️ Burial & Memorial Tributes"
      },
      {
        "id": "parties-galas",
        "name": "🎉 Birthday & Graduation Events"
      },
      {
        "id": "school-club-events",
        "name": "🏫 Schools, Nightlife & Clubs"
      }
    ]
  },
  {
    "id": "commercial",
    "title": "Commercial & Brand Growth",
    "tagline": "Business Assets, Products & Graphic Design",
    "desc": "E-Commerce Product Shoots, Hotel/Hospitality & Full Corporate Brand Identity.",
    "icon": "🚀",
    "subcategories": [
      {
        "id": "all",
        "name": "🌟 All Commercial"
      },
      {
        "id": "products-hospitality",
        "name": "📦 Products & Hotels"
      },
      {
        "id": "graphic-design",
        "name": "🎨 Graphic Design & Branding"
      }
    ]
  }
];

const ADD_ONS_LIST = [
  {
    "id": "unedited-proofs",
    "name": "RAW Unedited Soft Copies",
    "price": 150,
    "unit": "per image",
    "desc": "Original high-resolution unedited camera proofs at KSh 150 each"
  },
  {
    "id": "extra-photo",
    "name": "Extra Retouched Photo",
    "price": 300,
    "unit": "per image",
    "desc": "Magazine-grade skin retouching & color grade"
  },
  {
    "id": "simple-makeup",
    "name": "Simple Makeup (Natural Glow)",
    "price": 1500,
    "unit": "per person",
    "desc": "Clean camera skin prep, foundation & soft tint (20–25 mins)"
  },
  {
    "id": "full-glam-makeup",
    "name": "Full Studio Glam Makeup",
    "price": 2500,
    "unit": "per person",
    "desc": "Full facial contour, luxury eyeshadow & mink lashes (40–50 mins)"
  },
  {
    "id": "men-touchup",
    "name": "Men & Executive Touch-Up",
    "price": 500,
    "unit": "per person",
    "desc": "Anti-shine powder, hairline grooming & skin tone balancing (10 mins)"
  },
  {
    "id": "wardrobe-wrap",
    "name": "Studio Silk Wrap / Outfit Session",
    "price": 800,
    "unit": "per session",
    "desc": "6-meter luxury satin wrap or studio styling piece during shoot"
  },
  {
    "id": "white-shirt",
    "name": "Studio Crisp White Shirt Session",
    "price": 500,
    "unit": "per session",
    "desc": "Tailored or oversized boyfriend white shirt during shoot"
  },
  {
    "id": "a4-mount",
    "name": "A4 Photo Mount (21×30cm)",
    "price": 1200,
    "unit": "per mount",
    "desc": "Solid MDF wooden mount, laminated print, ready to hang (Was KSh 1,500 · Save KSh 300)"
  },
  {
    "id": "a3-mount",
    "name": "A3 Photo Mount (30×42cm)",
    "price": 2300,
    "unit": "per mount",
    "desc": "Statement living room wooden wall mount (Was KSh 2,500 · Save KSh 200)"
  },
  {
    "id": "a2-mount",
    "name": "A2 Grand Photo Mount (42×60cm)",
    "price": 4000,
    "unit": "per mount",
    "desc": "Luxury centerpiece gallery wall mount (Was KSh 4,500 · Save KSh 500)"
  },
  {
    "id": "cinematic-reel",
    "name": "🎬 45s–60s Vertical Video Reel",
    "price": 1500,
    "unit": "per reel",
    "desc": "Trending vertical 4K video reel cut to viral TikTok & IG audio (Top Client Add-on · Only KSh 1,500)"
  },
  {
    "id": "luxury-album",
    "name": "Luxury Layflat Photobook (30 pgs)",
    "price": 8000,
    "unit": "per album",
    "desc": "Hardcover museum-quality printed keepsake"
  },
  {
    "id": "rush-delivery",
    "name": "Express 24–48hr Rush Turnaround",
    "price": 3000,
    "unit": "priority",
    "desc": "Jump the queue for fast social posting"
  },
  {
    "id": "drone-4k",
    "name": "4K Aerial Drone Coverage",
    "price": 8000,
    "unit": "per event",
    "desc": "Cinematic overhead views for events & venues"
  }
];

const REEL_SAMPLES = [
  {
    "id": "reel-1",
    "title": "Editorial Fashion & Glamour Reel",
    "video": "samples/reels/C1261_1.mp4",
    "poster": "samples/studio/silk-wrap/BR2A0814.JPG",
    "tag": "✨ Editorial Glamour",
    "desc": "Slow-motion transitions, luxury studio lighting & viral audio sync"
  },
  {
    "id": "reel-2",
    "title": "Vibrant Portrait & Smile Reel",
    "video": "samples/studio/shirt-reels/camila.mp4",
    "poster": "samples/studio/indoor-headshots/DSC09594_(2).jpg",
    "tag": "🔥 Viral TikTok Poses",
    "desc": "High-energy rhythm, smile transitions & candid studio poses"
  }
];

const PACKAGES_DATA = [
  {
    "id": "graduation-shoot",
    "pathway": "studio",
    "subcat": "graduation",
    "catLabel": "Graduation Milestones",
    "title": "Graduation Milestone Shoot",
    "tagline": "Celebrate your academic degree in style with gown, cap, hood, scroll & proud family",
    "image": "samples/studio/graduation-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/graduation-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/graduation-shoot/cover.jpg",
    "badge": "🎓 Academic Pride",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,700 (lock your slot)",
    "sampleFolder": "samples/studio/graduation-shoot",
    "samples": [
      {
        "url": "samples/studio/graduation-shoot/cover.jpg",
        "type": "image",
        "title": "Graduate Milestone Achievement Cover"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_4998.jpg",
        "type": "image",
        "title": "Sunlit Campus Convocation Walk"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5013.jpg",
        "type": "image",
        "title": "Academic Hood & Honors Detail"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5363.jpg",
        "type": "image",
        "title": "Diploma & Celebration Flower Bouquet"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5412.jpg",
        "type": "image",
        "title": "Joyful Academic Milestone Smile"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5893.jpg",
        "type": "image",
        "title": "Golden Hour Outdoor Graduation Glow"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5895.jpg",
        "type": "image",
        "title": "Proud Graduate Natural Profile"
      },
      {
        "url": "samples/studio/graduation-shoot/PRI_5912.jpg",
        "type": "image",
        "title": "Grand Convocation Regalia Portrait"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Solo Graduate)",
        "price": 350,
        "deposit": 200,
        "summary": "Single official academic regalia portrait (Pay per image)",
        "inclusions": [
          "1 Premium Edited Regalia Portrait",
          "Gown, Cap, Hood & Scroll Setup",
          "Extra Edited Photos: KSh 350 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "10–15 Mins Studio Session",
          "Deliverables on Soft Copy (WhatsApp & Cloud)"
        ]
      },
      {
        "id": "silver",
        "name": "Silver (Solo Graduate)",
        "price": 2000,
        "deposit": 500,
        "summary": "Essential solo academic portrait session from official rate booklet",
        "inclusions": [
          "8 Premium Edited Images (Save KSh 800 vs single rate!)",
          "Gown + 1 Outfit",
          "Headshots, Cap Toss & 1 Group Photo",
          "30 Mins Studio Session",
          "Deliverables on Soft Copy (RAW proofs @ KSh 150 each)"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Graduate + Family)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "Graduate solo plus proud family group portraits",
        "inclusions": [
          "16 Premium Edited Images (Save KSh 2,100 vs single rate!)",
          "Gown + 1 Outfit",
          "Headshots, Solo Cap Poses & 2 Group Photos",
          "45 Mins Studio Session",
          "Deliverables on Soft Copy (24–48hr turnaround)"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP + Video Reel)",
        "price": 6700,
        "deposit": 1700,
        "summary": "VIP celebration with mounted print & express delivery",
        "inclusions": [
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
  {
    "id": "indoor-headshots",
    "pathway": "studio",
    "subcat": "portraits",
    "catLabel": "Executive Headshots",
    "title": "Executive Headshots",
    "tagline": "High-impact headshots for LinkedIn, corporate bios, modeling comp cards & casting calls",
    "image": "samples/studio/indoor-headshots/cover_thumb.jpg",
    "imageWebp": "samples/studio/indoor-headshots/cover_thumb.webp",
    "imageHighRes": "samples/studio/indoor-headshots/cover.jpg",
    "badge": "💼 Executive & Model Casting",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/indoor-headshots",
    "samples": [
      {
        "url": "samples/studio/indoor-headshots/cover.jpg",
        "type": "image",
        "title": "Executive Headshots · Cover"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00034.JPG_(2).jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00034.JPG"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00047.JPG_(2).jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00047.JPG"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00061.JPG_(2).jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00061.JPG"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00662.jpgxxxxx.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00662.jpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00664.jpgxxxx.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00664.jpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00672.jpgxxxxc.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00672.jpgc"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00719.jpgxxxxxxxxx.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00719.jpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00725.jpgaaaaaa.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00725.jpgaaaaaa"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00731.jpgxxxxxx.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00731.jpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC00759.jpgnnnn.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC00759.jpgnnnn"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC02822.jpgj_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC02822.jpgj"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC02827.jpgj_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC02827.jpgj"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC02891.jpgj_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC02891.jpgj"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07116-7_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07116 7"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07116.ghgfjpg.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07116.ghgfjpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07119ggggggg_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07119ggggggg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07302.hjghthjpg_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07302.hjghthjpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07302.hjghthjpg.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07302.hjghthjpg"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07306.jpgpo_status.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07306.jpgpo"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC07306.jpgpo.jpg",
        "type": "image",
        "title": "Executive Headshots · DSC07306.jpgpo"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC09428.JPG_(2).jpg",
        "type": "image",
        "title": "Executive Headshots · DSC09428.JPG"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC09594_(2).jpg",
        "type": "image",
        "title": "Polished Executive Studio Headshot"
      },
      {
        "url": "samples/studio/indoor-headshots/DSC09626_(2).jpg",
        "type": "image",
        "title": "Professional Leadership Portrait"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Quick Headshot)",
        "price": 300,
        "deposit": 200,
        "summary": "Single executive, model comp-card or LinkedIn headshot",
        "inclusions": [
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
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit, 30 min session",
        "inclusions": [
          "8 Magazine-Grade Retouched Headshots (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Neutral Grey / White Backdrop",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2-3 outfits, 45 min session",
        "inclusions": [
          "16 Magazine-Grade Retouched Headshots (Save KSh 1,300 vs single rate!)",
          "2–3 Outfit Changes",
          "Multiple Lighting Setups & Backdrops",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP + Makeup)",
        "price": 5500,
        "deposit": 1400,
        "summary": "22 retouched images, pro makeup artist included, 1 hr session",
        "inclusions": [
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
  {
    "id": "indoor-shirt-shoot",
    "pathway": "studio",
    "subcat": "white-shirt",
    "catLabel": "Crisp White Shirt",
    "title": "Crisp White Shirt Shoot (Studio)",
    "tagline": "The viral, clean minimalist studio white shirt look with studio shirts provided",
    "image": "samples/studio/indoor-shirt-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/indoor-shirt-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/indoor-shirt-shoot/cover.jpg",
    "badge": "👔 Studio Shirts Provided",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/indoor-shirt-shoot",
    "samples": [
      {
        "url": "samples/studio/indoor-shirt-shoot/cover.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · Cover"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00005.jpgcccscc.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00005.jpgcccscc"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00014.jpgxxxxxx.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00014.jpg"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00016.jpgggg.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00016.jpgggg"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00016.jpgghhy.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00016.jpgghhy"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00016.jpgsssss.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00016.jpgsssss"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00078.jpgxxxx.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00078.jpg"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC00101.JPG",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC00101"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC04319.jpgfffff.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC04319.jpgfffff"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC07027.JPG",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC07027"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC07043.jpgddd.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC07043.jpgddd"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC07051.jpggggt.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC07051.jpggggt"
      },
      {
        "url": "samples/studio/indoor-shirt-shoot/DSC07051.jpgvaaaa.jpg",
        "type": "image",
        "title": "Crisp White Shirt Shoot (Studio) · DSC07051.jpgvaaaa"
      }
    ],
    "options": [
      {
        "id": "single-photo",
        "name": "Single Image (Solo White Shirt · Dressing Included)",
        "price": 350,
        "deposit": 200,
        "summary": "1 Masterpiece Retouched Photo with Studio White Shirt Wardrobe & Sizing Included",
        "inclusions": [
          "1 Magazine-Grade Retouched White Shirt Portrait",
          "Studio Crisp White Shirt Wardrobe & Sizing Included",
          "High-Key Studio Lighting & High-End Skin Retouching",
          "Extra Retouched Photos: KSh 300 each",
          "10–15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        "id": "starter-5",
        "name": "Starter (5 Images · Studio Shirts Included)",
        "price": 1500,
        "deposit": 400,
        "summary": "5 edited white shirt portraits with studio shirts included",
        "inclusions": [
          "5 Premium Edited White Shirt Portraits",
          "Studio Button-Down Shirts Provided",
          "15–20 Mins Studio Session",
          "High-Key Clean White Backdrop",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 edited images, studio white shirts provided, 30 min session",
        "inclusions": [
          "8 Premium Edited Images (Save KSh 800 vs single rate!)",
          "Studio White Shirts Provided",
          "Classic Button-Down or Oversized Styling",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 edited images, 2 looks (Denim + Formal), 45 min session",
        "inclusions": [
          "16 Premium Edited Images (Save KSh 2,100 vs single rate!)",
          "2 Looks (Denim + Formal White Shirt)",
          "Studio Wardrobe Access Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "24 edited images + Pro Makeup or Trending Reel, 1 hr session",
        "inclusions": [
          "24 Premium Edited Images",
          "Choice of Professional Makeup or Trending Reel",
          "Full Wardrobe Styling & Creative Direction",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "shirt-reels",
    "pathway": "studio",
    "subcat": "white-shirt",
    "catLabel": "Crisp White Shirt",
    "title": "White Shirt Video Reels",
    "tagline": "Trending short-form vertical video reels for TikTok & Instagram",
    "image": "samples/studio/shirt-reels/camila.mp4",
    "imageHighRes": "samples/studio/shirt-reels/camila.mp4",
    "badge": "🎬 TikTok & Reels",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/shirt-reels",
    "samples": [
      {
        "url": "samples/studio/shirt-reels/camila.mp4",
        "type": "video",
        "title": "White Shirt Video Reels · Camila"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "2 vertical video reels (up to 45s each)",
        "inclusions": [
          "2 Vertical Cinematic Video Reels (up to 45s each)",
          "Cut to Trending Audio",
          "Color Graded for Mobile Displays",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "3 vertical video reels (up to 60s each) with trending audio",
        "inclusions": [
          "3 Vertical Cinematic Video Reels (up to 60s each)",
          "Dynamic Fast-Paced Editing to Trending Beats",
          "Color Graded & Formatted for IG & TikTok",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "5 vertical video reels (up to 60s each) + custom text motion",
        "inclusions": [
          "5 Vertical Cinematic Video Reels (up to 60s each)",
          "Custom Motion Typography & Text Overlays",
          "Audio Sync & Sound Design",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "silk-wrap",
    "pathway": "studio",
    "subcat": "silk-wrap",
    "catLabel": "Luxury Silk Wrap",
    "title": "Luxury Silk Wrap Shoot",
    "tagline": "Sculpted luxury silk drape sessions with studio drapery wardrobe provided",
    "image": "samples/studio/silk-wrap/cover_thumb.jpg",
    "imageWebp": "samples/studio/silk-wrap/cover_thumb.webp",
    "imageHighRes": "samples/studio/silk-wrap/_R2A6339.jpg",
    "badge": "✨ Luxury Silk Wardrobe",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/silk-wrap",
    "samples": [
      {
        "url": "samples/studio/silk-wrap/_R2A6339.jpg",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · R2A6339"
      },
      {
        "url": "samples/studio/silk-wrap/_R2A6346.jpg",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · R2A6346"
      },
      {
        "url": "samples/studio/silk-wrap/_R2A6356.jpg",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · R2A6356"
      },
      {
        "url": "samples/studio/silk-wrap/_R2A6367.jpg",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · R2A6367"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A0797.JPG",
        "type": "image",
        "title": "Sculpted Silk Glow & Form"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A0811.JPG",
        "type": "image",
        "title": "High-Key Silk Draping Portrait"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A0814.JPG",
        "type": "image",
        "title": "Flowing Satin Drapery & Studio Silhouette"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A0819.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A0819"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A0836.JPG",
        "type": "image",
        "title": "Editorial Satin Lighting & Posing"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1798.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1798"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1804.JPG",
        "type": "image",
        "title": "Dramatic Royal Silk Drapery"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1806.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1806"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1818.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1818"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1820.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1820"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1827.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1827"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1829.JPG",
        "type": "image",
        "title": "Graceful Studio Satin Texture"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1831.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1831"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1834.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1834"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1835.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1835"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1852.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1852"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1873.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1873"
      },
      {
        "url": "samples/studio/silk-wrap/BR2A1875.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · BR2A1875"
      },
      {
        "url": "samples/studio/silk-wrap/cover.JPG",
        "type": "image",
        "title": "Luxury Silk Wrap Shoot · Cover"
      }
    ],
    "options": [
      {
        "id": "single-photo",
        "name": "Single Image (Solo Silk Wrap · Dressing Included)",
        "price": 350,
        "deposit": 200,
        "summary": "1 Masterpiece Retouched Photo with Luxury Silk Wardrobe & Studio Dressing Included",
        "inclusions": [
          "1 Magazine-Grade Retouched Silk Wrap Portrait",
          "Studio 6-Meter Flowing Luxury Silk Drapery Wardrobe Provided",
          "Dedicated Studio Lighting & Sculpted Posing Direction",
          "Extra Retouched Photos: KSh 300 each",
          "15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        "id": "starter-5",
        "name": "Starter (5 Images · Silk Wardrobe Included)",
        "price": 1500,
        "deposit": 400,
        "summary": "5 sculpted silk drape portraits with studio wardrobe included",
        "inclusions": [
          "5 Magazine-Grade Retouched Silk Drape Portraits",
          "Studio 6-Meter Flowing Silk Drapery Wardrobe Provided",
          "20 Mins Dedicated Sculpted Posing Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 30 min session, silk drapery provided",
        "inclusions": [
          "8 Premium Retouched Images (Save KSh 800 vs single rate!)",
          "Studio Silk Drapery Provided",
          "30 Mins Studio Session",
          "Classic High-Key or Low-Key Lighting",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 45 min session, multiple silk colors",
        "inclusions": [
          "16 Premium Retouched Images (Save KSh 2,100 vs single rate!)",
          "Multiple Silk Drapery Colors (Gold, Red, Black, Emerald)",
          "Creative Studio Posing & Silhouette Direction",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP + Makeup)",
        "price": 5500,
        "deposit": 1400,
        "summary": "24 retouched images, 1 hr session, pro makeup artist included",
        "inclusions": [
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
  {
    "id": "traditional-creative",
    "pathway": "studio",
    "subcat": "traditional",
    "catLabel": "Studio Cultural Regalia",
    "title": "Traditional Creative Shoot (Studio)",
    "tagline": "African heritage regalia, tribal beads & creative studio fine-art lighting",
    "image": "samples/studio/traditional-creative/cover_thumb.jpg",
    "imageWebp": "samples/studio/traditional-creative/cover_thumb.webp",
    "imageHighRes": "samples/studio/traditional-creative/cover.jpg",
    "badge": "👑 Cultural Heritage",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,100 (lock your slot)",
    "sampleFolder": "samples/studio/traditional-creative",
    "samples": [
      {
        "url": "samples/studio/traditional-creative/BRA (2).jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · BRA"
      },
      {
        "url": "samples/studio/traditional-creative/BRA (17).jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · BRA"
      },
      {
        "url": "samples/studio/traditional-creative/BRA (22).jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · BRA"
      },
      {
        "url": "samples/studio/traditional-creative/cover.jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · Cover"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0278.jpg",
        "type": "image",
        "title": "Cultural Pride & Vibrant Textures"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0280.jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · O13A0280"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0281.jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · O13A0281"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0286.jpg",
        "type": "image",
        "title": "Authentic African Heritage Attire"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0297.jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · O13A0297"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0309 (2).jpg",
        "type": "image",
        "title": "Regal Traditional Beadwork & Posing"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0313.jpg",
        "type": "image",
        "title": "Traditional Creative Shoot (Studio) · O13A0313"
      },
      {
        "url": "samples/studio/traditional-creative/O13A0317.jpg",
        "type": "image",
        "title": "Modern African Royalty Styling"
      }
    ],
    "options": [
      {
        "id": "single-photo",
        "name": "Single Image (Solo Cultural Attire · Dressing Included)",
        "price": 350,
        "deposit": 200,
        "summary": "1 Masterpiece Retouched Photo with Traditional Dressing & Cultural Styling",
        "inclusions": [
          "1 Master Magazine-Grade Retouched Photo",
          "Studio Cultural Regalia, Tribal Beads & Ankara Fabric Styling Included",
          "Creative Studio Lighting & Heritage Backdrop",
          "Extra Retouched Photos: KSh 300 each",
          "15 Mins Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud within 24 Hours"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 1100,
        "deposit": 300,
        "summary": "3 retouched images, 30 min session",
        "inclusions": [
          "3 Retouched Traditional Images",
          "1 Traditional / Cultural Outfit",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 2500,
        "deposit": 600,
        "summary": "6 retouched images, 45 min session, cultural theme styling",
        "inclusions": [
          "6 Retouched Traditional Images",
          "Cultural Theme Styling & Props Support",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 4500,
        "deposit": 1100,
        "summary": "10 retouched images, 1 hr session, full creative heritage setup",
        "inclusions": [
          "10 Retouched Traditional Images",
          "Full Creative Heritage & Fine Art Lighting",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "baby-bump",
    "pathway": "studio",
    "subcat": "maternity-kids",
    "catLabel": "Maternity & Baby Bump",
    "title": "Maternity & Baby Bump Shoot (Studio)",
    "tagline": "Celebrate expecting motherhood in cozy studio comfort with radiant lighting & wraps",
    "image": "samples/studio/baby-bump/cover_thumb.jpg",
    "imageWebp": "samples/studio/baby-bump/cover_thumb.webp",
    "imageHighRes": "samples/studio/baby-bump/cover.jpg",
    "badge": "🍼 Motherhood Glow",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/baby-bump",
    "samples": [
      {
        "url": "samples/studio/baby-bump/cover.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · Cover"
      },
      {
        "url": "samples/studio/baby-bump/DSC04462.jpgjuhb.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC04462.jpgjuhb"
      },
      {
        "url": "samples/studio/baby-bump/DSC04472.jpgbh,kj.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC04472.jpgbh,kj"
      },
      {
        "url": "samples/studio/baby-bump/DSC04485.jpgb-,lkihj.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC04485.jpgb ,lkihj"
      },
      {
        "url": "samples/studio/baby-bump/DSC04494.jpgj-n.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC04494.jpgj n"
      },
      {
        "url": "samples/studio/baby-bump/DSC04526.jpgin-ik.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC04526.jpgin ik"
      },
      {
        "url": "samples/studio/baby-bump/DSC04963-2.jpg",
        "type": "image",
        "title": "Gentle Floral & Studio Maternity Portrait"
      },
      {
        "url": "samples/studio/baby-bump/DSC07764_(2).jpg",
        "type": "image",
        "title": "Radiant Expectant Mother Studio Glow"
      },
      {
        "url": "samples/studio/baby-bump/DSC07790_(2).jpg",
        "type": "image",
        "title": "Couples Maternity Studio Connection"
      },
      {
        "url": "samples/studio/baby-bump/DSC07849_(2).jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC07849"
      },
      {
        "url": "samples/studio/baby-bump/DSC07849.jpgvvf'.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC07849.jpgvvf'"
      },
      {
        "url": "samples/studio/baby-bump/DSC07872.jpgnj.jpg",
        "type": "image",
        "title": "Maternity & Baby Bump Shoot (Studio) · DSC07872.jpgnj"
      },
      {
        "url": "samples/studio/baby-bump/DSC07893_(2).jpg",
        "type": "image",
        "title": "Intimate Belly Bump Silhouette & Retouching"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Starter)",
        "price": 300,
        "deposit": 200,
        "summary": "1 retouched maternity portrait (Pay per image)",
        "inclusions": [
          "1 Magazine-Grade Retouched Maternity Image",
          "Studio Lighting & Bump Posing Assistance",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit, 30 min session",
        "inclusions": [
          "8 Retouched Maternity Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Comfortable Studio Session with Rest Breaks",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Mother + Partner)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfits, partner included, 45 min session",
        "inclusions": [
          "16 Retouched Maternity Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits (Studio Silk Wrap or Personal Gown)",
          "Partner & Sibling Shots Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP + Makeup)",
        "price": 5500,
        "deposit": 1400,
        "summary": "25 retouched images, pro makeup included, up to 5 outfits, 1 hr session",
        "inclusions": [
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
  {
    "id": "birthday-shoot",
    "pathway": "studio",
    "subcat": "maternity-kids",
    "catLabel": "Birthdays & Celebrations",
    "title": "Birthday Studio Glamour Shoot",
    "tagline": "Studio birthday glamour with cake, crown, numbered balloons, backdrops & confetti",
    "image": "samples/studio/birthday-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/birthday-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/birthday-shoot/cover.jpg",
    "badge": "🎂 Studio Birthday Glam",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/birthday-shoot",
    "samples": [
      {
        "url": "samples/studio/birthday-shoot/cover.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · Cover"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00094.jpgsss.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00094.jpgsss"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00133.jpgsssss.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00133.jpgsssss"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00633.jpgdddddd.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00633.jpgdddddd"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00633.jpgxxxx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00633.jpg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00662.jpgxxxxx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00662.jpg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00664.jpgxxxx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00664.jpg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00672.jpgxxxxc.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00672.jpgc"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00719.jpgxxxxxxxxx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00719.jpg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00725.jpgaaaaaa.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00725.jpgaaaaaa"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00731.jpgxxxxxx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00731.jpg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC00759.jpgnnnn.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC00759.jpgnnnn"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC05153.jpg",
        "type": "image",
        "title": "Birthday Celebrant Glamour with Crown"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC05247.jpg",
        "type": "image",
        "title": "Celebratory Toast & Joyous Portrait"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC07430-.jpg-k-gv.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC07430 .jpg k gv"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC07469.jpghx_status.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC07469.jpghx"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC07469.jpghx.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC07469.jpghx"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC07485.jpg,l.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC07485.jpg,l"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC07536.jpgl.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC07536.jpgl"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC09443.jpggggg.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC09443.jpggggg"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC09465.jpgjjj.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC09465.jpgjjj"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC09471.jpgsss.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC09471.jpgsss"
      },
      {
        "url": "samples/studio/birthday-shoot/DSC09479.jpgsssssssss.jpg",
        "type": "image",
        "title": "Birthday Studio Glamour Shoot · DSC09479.jpgsssssssss"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Starter)",
        "price": 300,
        "deposit": 200,
        "summary": "1 retouched birthday glamour portrait",
        "inclusions": [
          "1 Magazine-Grade Retouched Birthday Image",
          "Studio Birthday Set & Props Assistance",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit change, 30 min session",
        "inclusions": [
          "8 Retouched Birthday Images (Save KSh 400 vs single rate!)",
          "1 Outfit Change",
          "Studio Birthday Props & Balloons Assistance",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfit changes, birthday setup & props, 45 min session",
        "inclusions": [
          "16 Retouched Birthday Images (Save KSh 1,300 vs single rate!)",
          "2 Outfit Changes",
          "Full Birthday Studio Setup & Props",
          "Friends / Family Add-On Photos Included",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP + Video Reel)",
        "price": 5500,
        "deposit": 1400,
        "summary": "26 retouched images + 45s birthday video reel, up to 5 outfits, 1 hr session",
        "inclusions": [
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
  {
    "id": "kids-shoot",
    "pathway": "studio",
    "subcat": "maternity-kids",
    "catLabel": "Kids & Milestones",
    "title": "Kids & Infant Studio Shoot",
    "tagline": "Patience-driven, kid-friendly studio photography with games and relaxed posing",
    "image": "samples/studio/kids-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/kids-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/kids-shoot/cover.jpg",
    "badge": "🎈 Studio Kids Fun",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/kids-shoot",
    "samples": [
      {
        "url": "samples/studio/kids-shoot/cover.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · Cover"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00006.jpgssssg.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00006.jpgssssg"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00019.jpgddddd.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00019.jpgddddd"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00020.jpgssss.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00020.jpgssss"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00028.jpgdfdf.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00028.jpgdfdf"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00037.jpgdddddd.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00037.jpgdddddd"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00042.jpgssss.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00042.jpgssss"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00189.jpgdddddd.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00189.jpgdddddd"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00238.jpgsssss.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00238.jpgsssss"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00241.jpgfgd.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00241.jpgfgd"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00462.jpgxxxxx.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00462.jpg"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00498.jpgxxx.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00498.jpg"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00566.jpgxx.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00566.jpgxx"
      },
      {
        "url": "samples/studio/kids-shoot/DSC00658.jpgxxxx.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC00658.jpg"
      },
      {
        "url": "samples/studio/kids-shoot/DSC02461.JPG",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC02461"
      },
      {
        "url": "samples/studio/kids-shoot/DSC02482_1.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC02482 1"
      },
      {
        "url": "samples/studio/kids-shoot/DSC07657_(2).jpg",
        "type": "image",
        "title": "Candid Little Explorer Smile"
      },
      {
        "url": "samples/studio/kids-shoot/DSC07662_(2).jpg",
        "type": "image",
        "title": "Playful Studio Portrait Lighting"
      },
      {
        "url": "samples/studio/kids-shoot/DSC07673_(2).jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC07673"
      },
      {
        "url": "samples/studio/kids-shoot/DSC07698_(2).jpg",
        "type": "image",
        "title": "Innocent Childhood Milestone"
      },
      {
        "url": "samples/studio/kids-shoot/DSC09374.jpgssss.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC09374.jpgssss"
      },
      {
        "url": "samples/studio/kids-shoot/DSC09393.jpsgh.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC09393.jpsgh"
      },
      {
        "url": "samples/studio/kids-shoot/DSC09493.jpgffffd.jpg",
        "type": "image",
        "title": "Kids & Infant Studio Shoot · DSC09493.jpgffffd"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Starter)",
        "price": 300,
        "deposit": 200,
        "summary": "1 retouched kids portrait (Pay per image)",
        "inclusions": [
          "1 Magazine-Grade Retouched Kids Portrait",
          "Patient, Fun Studio Posing Guide",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit, 30 min session",
        "inclusions": [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Kid-Friendly Studio Games & Toys",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfits, 45 min session",
        "inclusions": [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Solo Kid & Parents/Siblings Inclusions",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "26 retouched images + BTS video clips, up to 5 outfits, 1 hr session",
        "inclusions": [
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
  {
    "id": "couple-shoot",
    "pathway": "outdoor",
    "subcat": "outdoor-couples",
    "catLabel": "Outdoor Couples",
    "title": "Outdoor Couple Lifestyle & Date Session",
    "tagline": "Intimate golden hour romance, park picnics, sunset walks & candid connection for dating, married & anniversary couples",
    "image": "samples/outdoor/couple-shoot/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/couple-shoot/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/couple-shoot/cover.JPG",
    "badge": "❤️ Intimate Romance",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/couple-shoot",
    "samples": [
      {
        "url": "samples/outdoor/couple-shoot/cover.JPG",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · Cover"
      },
      {
        "url": "samples/outdoor/couple-shoot/DSC05894_(2).jpg",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · DSC05894"
      },
      {
        "url": "samples/outdoor/couple-shoot/DSC06110_(2).jpg",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · DSC06110"
      },
      {
        "url": "samples/outdoor/couple-shoot/DSC07790_(2).jpg",
        "type": "image",
        "title": "Gentle Romantic Embrace"
      },
      {
        "url": "samples/outdoor/couple-shoot/IMG_5186.JPG",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · IMG 5186"
      },
      {
        "url": "samples/outdoor/couple-shoot/IMG_5189.JPG",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · IMG 5189"
      },
      {
        "url": "samples/outdoor/couple-shoot/IMG_5195.JPG",
        "type": "image",
        "title": "Connection & Studio Smiles"
      },
      {
        "url": "samples/outdoor/couple-shoot/IMG_5196.JPG",
        "type": "image",
        "title": "Outdoor Couple Lifestyle & Date Session · IMG 5196"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit, 30 min outdoor session (Minimum 8 images for outdoor)",
        "inclusions": [
          "8 Magazine-Grade Retouched Outdoor Images",
          "1 Coordinated Couple Outfit",
          "Natural Light Romantic Posing & Chemistry Direction",
          "30 Mins Outdoor Session",
          "Extra Retouched Images: KSh 300 each",
          "Unedited / RAW Proofs: KSh 150 each",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfits, 45 min session",
        "inclusions": [
          "16 Retouched Outdoor Images",
          "2 Outfits of Choice",
          "Candid & Posed Romantic Scenic Sets",
          "45 Mins Dedicated Outdoor Session",
          "Extra Retouched Images: KSh 300 each",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "26 retouched images + 30s romantic mini reel, multiple outfits, 1 hr session",
        "inclusions": [
          "26 Retouched Images",
          "30s Romantic Cinematic Video Reel",
          "Multiple Outfit Changes",
          "1 Hour Dedicated Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "family-shoot",
    "pathway": "studio",
    "subcat": "couples-family",
    "catLabel": "Family Milestones",
    "title": "Family Studio Session",
    "tagline": "Timeless studio family portraits capturing the warmth of generations together",
    "image": "samples/studio/family-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/family-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/family-shoot/cover.jpg",
    "badge": "👨‍👩‍👧 Family Legacy",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 200 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/studio/family-shoot",
    "samples": [
      {
        "url": "samples/studio/family-shoot/cover.jpg",
        "type": "image",
        "title": "Family Studio Session · Cover"
      },
      {
        "url": "samples/studio/family-shoot/DSC07720_(2).jpg",
        "type": "image",
        "title": "Warm Family Studio Portrait"
      },
      {
        "url": "samples/studio/family-shoot/DSC07926_(2).jpg",
        "type": "image",
        "title": "Parent & Children Loving Moment"
      },
      {
        "url": "samples/studio/family-shoot/DSC07994_(2).jpg",
        "type": "image",
        "title": "Clean Backlit Studio Composition"
      },
      {
        "url": "samples/studio/family-shoot/DSC09416.jpgxxxx.jpg",
        "type": "image",
        "title": "Family Studio Session · DSC09416.jpg"
      },
      {
        "url": "samples/studio/family-shoot/DSC09422.jpgffffffjfffff.jpg",
        "type": "image",
        "title": "Family Studio Session · DSC09422.jpgffffffjfffff"
      },
      {
        "url": "samples/studio/family-shoot/DSC09422.jpgm.jpg",
        "type": "image",
        "title": "Family Studio Session · DSC09422.jpgm"
      },
      {
        "url": "samples/studio/family-shoot/outdoor-cover.JPG",
        "type": "image",
        "title": "Family Studio Session · Outdoor cover"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Single Image (Starter)",
        "price": 300,
        "deposit": 200,
        "summary": "1 retouched family portrait (Pay per image)",
        "inclusions": [
          "1 Retouched Studio Family Portrait",
          "Group Composition & Posing Guide",
          "Extra Retouched Photos: KSh 300 each",
          "Unedited / RAW Soft Copies: KSh 150 each",
          "15 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Silver (Small Family 3–4 Pax)",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images for up to 4 family members",
        "inclusions": [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "Suitable for 3–4 Family Members",
          "Full Group + Solo Parent/Child Sub-shots",
          "30 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Standard Family 5–8 Pax)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images for 5-8 family members",
        "inclusions": [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "Suitable for 5–8 Family Members",
          "Group, Sub-Group & Individual Portraits",
          "45 Mins Studio Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Extended Family up to 12 Pax)",
        "price": 5500,
        "deposit": 1400,
        "summary": "26 retouched images + 45s family video reel + A4 mount print",
        "inclusions": [
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
  {
    "id": "outdoor-headshots",
    "pathway": "outdoor",
    "subcat": "outdoor-headshots",
    "catLabel": "Outdoor &amp; Model Headshots",
    "title": "Outdoor Natural &amp; Model Headshots",
    "tagline": "Approachable lifestyle and commercial model portraits under natural golden-hour daylight (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/outdoor-headshots/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/outdoor-headshots/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/outdoor-headshots/cover.jpg",
    "badge": "🌿 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-headshots",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-headshots/_R2A2757.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · R2A2757"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/_R2A2829.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · R2A2829"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/cover.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · Cover"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/DSC08912_(2) 2.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · DSC08912 2"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/DSC08912_(2).JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · DSC08912"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/FAITH-6.jpg",
        "type": "image",
        "title": "Fresh Outdoor Daylight Expression"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/FAITH-9.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · FAITH 9"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/FAITH-10.jpg",
        "type": "image",
        "title": "Casual Chic Lifestyle Posing"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0565.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0565"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0566.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0566"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0568.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0568"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0598.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0598"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0601.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0601"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0609.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0609"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0627.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0627"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0635.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0635"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0643.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0643"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0646.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0646"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/IMG_0658.JPG",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · IMG 0658"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0383 (2).jpg",
        "type": "image",
        "title": "Crisp Executive Outdoor Headshot"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0383.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0383"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0499.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0499"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0524.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0524"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0577.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0577"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0591.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0591"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0594.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0594"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0600.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0600"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0611.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0611"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0650.jpg",
        "type": "image",
        "title": "Warm Golden Hour Leadership Look"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/O13A0651 (2).jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · O13A0651"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1255.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1255"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1257.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1257"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1261.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1261"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1270.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1270"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1276.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1276"
      },
      {
        "url": "samples/outdoor/outdoor-headshots/SAG_1288.jpg",
        "type": "image",
        "title": "Outdoor Natural &amp; Model Headshots · SAG 1288"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 scenic location backdrop, 30 min session",
        "inclusions": [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Scenic Location Backdrop",
          "Natural Light & Reflector Fill",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfits, multiple outdoor angles, 45 min session",
        "inclusions": [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Multiple Outdoor Angles & Backgrounds",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "22 retouched images, pro makeup included, 1 hr session",
        "inclusions": [
          "22 Retouched Images",
          "Professional Makeup Artist Included",
          "Multiple Outfit Changes & Golden Hour Lighting",
          "1 Hour Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "outdoor-birthday-shoot",
    "pathway": "outdoor",
    "subcat": "outdoor-birthdays",
    "catLabel": "Outdoor Birthdays",
    "title": "Outdoor Birthday Celebration",
    "tagline": "Vibrant celebration shoot in natural sunshine, scenic gardens or resorts (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/outdoor-birthday-shoot/IMG_0545.JPG",
    "imageHighRes": "samples/outdoor/outdoor-birthday-shoot/IMG_0545.JPG",
    "badge": "🎉 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-birthday-shoot",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0545.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0545"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0556.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0556"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0565.JPG",
        "type": "image",
        "title": "Lush Greenery Lifestyle Portrait"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0566.JPG",
        "type": "image",
        "title": "Candid Celebration Happiness"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0568.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0568"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0570.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0570"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0573.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0573"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0581.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0581"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0583.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0583"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0593.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0593"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0597.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0597"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0598.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0598"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0601.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0601"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0604.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0604"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0605.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0605"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0609.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0609"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0610.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0610"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0614.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0614"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0619.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0619"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0627.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0627"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0635.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0635"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0640.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0640"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0643.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0643"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0646.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0646"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0651.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0651"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0658.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0658"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0665.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0665"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0696.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0696"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0702.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0702"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0703.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0703"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0716.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0716"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0730.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0730"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0740.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0740"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0749.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0749"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0758.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0758"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0763.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0763"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0783.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0783"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0786.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0786"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0802.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0802"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0852.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0852"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0860.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0860"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0879.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0879"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0894.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0894"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0899.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0899"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0909.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0909"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0912.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0912"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0963.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0963"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0964.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0964"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0969.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0969"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0975.JPG",
        "type": "image",
        "title": "Vibrant Garden Celebration Portrait"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0982.JPG",
        "type": "image",
        "title": "Joyful Sunlit Posing"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0990.JPG",
        "type": "image",
        "title": "Golden-Hour Outdoor Birthday Glow"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_0997.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 0997"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_1055.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 1055"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_1072.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 1072"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_1074.JPG",
        "type": "image",
        "title": "Scenic Resort Outdoor Setup"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_2460.jpg",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 2460"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_2467.jpg",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 2467"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_2760.jpg",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 2760"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/IMG_2854.jpg",
        "type": "image",
        "title": "Outdoor Birthday Celebration · IMG 2854"
      },
      {
        "url": "samples/outdoor/outdoor-birthday-shoot/outdoor-cover.JPG",
        "type": "image",
        "title": "Outdoor Birthday Celebration · Outdoor cover"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "7 retouched outdoor images (Minimum 7 images for outdoor)",
        "inclusions": [
          "7 Retouched Images in Natural Light (Minimum 7 Images)",
          "1 Outfit of Choice",
          "Garden or Park Setting Assistance",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "12 retouched outdoor images, 2 outfit changes",
        "inclusions": [
          "12 Retouched Images in Golden Hour Light",
          "2 Outfit Changes",
          "Scenic Natural Backgrounds & Posing Guide",
          "45 Mins Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "20 retouched outdoor images, up to 5 outfit changes",
        "inclusions": [
          "20 Retouched Images",
          "Up to 5 Outfit Changes",
          "Golden Hour Light & Sunset Portraits",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "outdoor-baby-bump",
    "pathway": "outdoor",
    "subcat": "outdoor-maternity",
    "catLabel": "Outdoor Maternity",
    "title": "Outdoor Baby Bump Lifestyle",
    "tagline": "Bespoke natural light maternity celebration in scenic nature (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/outdoor-baby-bump/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/outdoor-baby-bump/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/outdoor-baby-bump/cover.jpg",
    "badge": "🍼 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-baby-bump",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9111.jpg",
        "type": "image",
        "title": "Scenic Outdoor Motherhood Radiance"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9118.jpg",
        "type": "image",
        "title": "Sunlit Outdoor Maternal Serenity"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9142.jpg",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · 2N4A9142"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9167.jpg",
        "type": "image",
        "title": "Natural Sunlight Expecting Grace"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9168.jpg",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · 2N4A9168"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9172.jpg",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · 2N4A9172"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9177.jpg",
        "type": "image",
        "title": "Golden Hour Garden Maternity Glow"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/2N4A9266.jpg",
        "type": "image",
        "title": "Lush Park Maternity Composition"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/cover.jpg",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · Cover"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3590.JPG",
        "type": "image",
        "title": "Peaceful Motherhood Milestone"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3613.JPG",
        "type": "image",
        "title": "Couples Outdoor Baby Bump Connection"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3620.JPG",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3620"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3679.JPG",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3679"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3681.JPG",
        "type": "image",
        "title": "Soft Sunlight and Natural Textures"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3684.jpg",
        "type": "image",
        "title": "Belly Bump Close-up with Nature Bokeh"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3686.JPG",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3686"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3688.JPG",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3688"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3698.JPG",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3698"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3698f.jpg",
        "type": "image",
        "title": "Outdoor Baby Bump Lifestyle · DSC 3698f"
      },
      {
        "url": "samples/outdoor/outdoor-baby-bump/DSC_3709.JPG",
        "type": "image",
        "title": "Radiant Sunset Maternity Stroll"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 outfit, 30 min session",
        "inclusions": [
          "8 Retouched Images (Save KSh 400 vs single rate!)",
          "1 Outfit of Choice",
          "Natural Light & Garden Setting",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Mother + Partner)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched images, 2 outfits, partner/kids included, 45 min session",
        "inclusions": [
          "16 Retouched Images (Save KSh 1,300 vs single rate!)",
          "2 Outfits of Choice",
          "Partner & Sibling Photos Included",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "25 retouched images, pro makeup included, up to 5 outfits, 1 hr session",
        "inclusions": [
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
  {
    "id": "outdoor-family-shoot",
    "pathway": "outdoor",
    "subcat": "outdoor-family",
    "catLabel": "Outdoor Family",
    "title": "Outdoor Family Lifestyle",
    "tagline": "Relaxed on-location family session in lush gardens (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/outdoor-family-shoot/IMG_0010.JPG",
    "imageHighRes": "samples/outdoor/outdoor-family-shoot/IMG_0010.JPG",
    "badge": "👨‍👩‍👧 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,500 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-family-shoot",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0010.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0010"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0015.JPG",
        "type": "image",
        "title": "Kids & Parents Candid Laughter in Park"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0036.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0036"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0107.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0107"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0131.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0131"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0154.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0154"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_0156.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 0156"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5036.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5036"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5041.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5041"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5061.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5061"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5072.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5072"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5074.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5074"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5097.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5097"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5116.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5116"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5119.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5119"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5122.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5122"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5127.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5127"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5128.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5128"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5129.JPG",
        "type": "image",
        "title": "Natural Stroll Through Gardens"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5136.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5136"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5143.JPG",
        "type": "image",
        "title": "Relaxed Compound Family Composition"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5145.JPG",
        "type": "image",
        "title": "Outdoor Family Hugs & Smiles"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5151.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5151"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5152.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5152"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5153.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5153"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5163.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5163"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5165.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5165"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5170.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5170"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5180.JPG",
        "type": "image",
        "title": "Heartwarming Sunlit Family Portrait"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5185.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5185"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5186.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5186"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5189.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5189"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5190.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5190"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5192.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5192"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5195.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · IMG 5195"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/IMG_5202.JPG",
        "type": "image",
        "title": "Golden Hour Multi-Generation Group"
      },
      {
        "url": "samples/outdoor/outdoor-family-shoot/outdoor-cover.JPG",
        "type": "image",
        "title": "Outdoor Family Lifestyle · Outdoor cover"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Small Family 3–4 Pax)",
        "price": 2000,
        "deposit": 500,
        "summary": "7 retouched images for small family (Minimum 7 images for outdoor)",
        "inclusions": [
          "7 Retouched Images in Natural Daylight (Minimum 7 Images)",
          "Suitable for 3–4 Family Members",
          "Relaxed Group Posing & Warm Interaction",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (5–8 Pax)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "12 retouched images for standard family",
        "inclusions": [
          "12 Retouched Images in Natural Daylight",
          "Suitable for 5–8 Family Members",
          "Full Group + Parents & Kids Sub-shots",
          "45 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Up to 12 Pax)",
        "price": 6000,
        "deposit": 1500,
        "summary": "22 retouched images for extended family",
        "inclusions": [
          "22 Retouched Images",
          "Suitable for Up to 12 Family Members",
          "Generational Portraits & Candid Play Moments",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "kids-outdoor-shoot",
    "pathway": "outdoor",
    "subcat": "outdoor-family",
    "catLabel": "Kids & Milestones",
    "title": "Kids Outdoor Sunshine Shoot",
    "tagline": "High-energy outdoor shoot capturing natural laughter and outdoor sunshine (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/kids-outdoor-shoot/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/kids-outdoor-shoot/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/kids-outdoor-shoot/cover.jpg",
    "badge": "🎈 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/kids-outdoor-shoot",
    "samples": [
      {
        "url": "samples/outdoor/kids-outdoor-shoot/cover.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · Cover"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7790.jpg",
        "type": "image",
        "title": "Vibrant Summer Day Posing"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7796.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7796"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7804.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7804"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7807.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7807"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7817.jpg",
        "type": "image",
        "title": "Sunlit Golden Smile Portrait"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7818.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7818"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7820.jpg",
        "type": "image",
        "title": "Joyful Outdoor Garden Play"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7825.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7825"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7826.jpg",
        "type": "image",
        "title": "Outdoor Milestones and Playtime"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7829.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7829"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7831.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7831"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7833.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7833"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7837.jpg",
        "type": "image",
        "title": "Authentic Garden Smiles"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7838.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7838"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7872.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7872"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7873.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7873"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7876.jpg",
        "type": "image",
        "title": "Heartwarming Kids Outdoor Charm"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7877.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7877"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7883.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7883"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7884.jpg",
        "type": "image",
        "title": "High-Energy Birthday Joy"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7885.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7885"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7887.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7887"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7905.jpg",
        "type": "image",
        "title": "Natural Childhood Sunshine Glow"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7915.jpg",
        "type": "image",
        "title": "Candid Park Laughter Moment"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7929.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7929"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7944.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7944"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7951.jpg",
        "type": "image",
        "title": "Sunny Outdoor Playful Portrait"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7953.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7953"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7954.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7954"
      },
      {
        "url": "samples/outdoor/kids-outdoor-shoot/MAK_7957.jpg",
        "type": "image",
        "title": "Kids Outdoor Sunshine Shoot · MAK 7957"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "7 solo kid retouched images (Minimum 7 images for outdoor)",
        "inclusions": [
          "7 Solo Kid Retouched Images (Minimum 7 Images)",
          "Behind-The-Scenes Short Video Clips",
          "Natural Play & Bubble Machine Fun",
          "30 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "12 retouched images (Solo Kid + Family)",
        "inclusions": [
          "12 Retouched Images in Natural Light",
          "Solo Kid & Family Moments Included",
          "Candid Smiles & Cake Cutting Setup",
          "45 Mins Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 1400,
        "summary": "20 retouched images, 2-3 outfit changes, complete birthday family album",
        "inclusions": [
          "20 Retouched Images",
          "2–3 Outfit Changes",
          "Complete Birthday Family Memory Collection",
          "1 Hour Dedicated Outdoor Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "outdoor-shirt-shoot",
    "pathway": "outdoor",
    "subcat": "outdoor-headshots",
    "catLabel": "Crisp White Shirt",
    "title": "Outdoor White Shirt Shoot",
    "tagline": "Chic outdoor white shirt lifestyle session (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/outdoor-shirt-shoot/DSC00014.jpgxxxxxx.jpg",
    "imageHighRes": "samples/outdoor/outdoor-shirt-shoot/DSC00014.jpgxxxxxx.jpg",
    "badge": "🌿 Min 7 Images (No Single Image)",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-shirt-shoot",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-shirt-shoot/DSC00014.jpgxxxxxx.jpg",
        "type": "image",
        "title": "Outdoor White Shirt Shoot · DSC00014.jpg"
      },
      {
        "url": "samples/outdoor/outdoor-shirt-shoot/DSC00078.jpgxxxx.jpg",
        "type": "image",
        "title": "Outdoor White Shirt Shoot · DSC00078.jpg"
      },
      {
        "url": "samples/outdoor/outdoor-shirt-shoot/DSC00101.JPG",
        "type": "image",
        "title": "Outdoor White Shirt Shoot · DSC00101"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched outdoor images, 30 min session",
        "inclusions": [
          "8 Retouched Outdoor Images (Save KSh 800 vs single rate!)",
          "1 Location Backdrop",
          "30 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "16 retouched outdoor images, 2 outfits, 45 min session",
        "inclusions": [
          "16 Retouched Outdoor Images (Save KSh 2,100 vs single rate!)",
          "2 Outfits (Casual / Semi-Formal)",
          "45 Mins Session",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 5500,
        "deposit": 900,
        "summary": "24 retouched outdoor images, 3 outfits, 1 hr session",
        "inclusions": [
          "24 Retouched Outdoor Images",
          "3 Outfits of Choice",
          "Multiple Outdoor Environmental Perspectives",
          "1 Hour Dedicated Session",
          "Delivered via WhatsApp & Cloud"
        ]
      }
    ]
  },
  {
    "id": "pre-wedding",
    "pathway": "outdoor",
    "subcat": "outdoor-couples",
    "catLabel": "Pre-Wedding & Romance",
    "title": "Pre-Wedding & Love Story",
    "tagline": "Romantic scenic portrait sessions & save-the-dates (Minimum 7 images · No single image for outdoor)",
    "image": "samples/outdoor/pre-wedding/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/pre-wedding/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/pre-wedding/cover.jpg",
    "badge": "💍 Min 7 Images (No Single Image)",
    "turnaround": "5–7 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/outdoor/pre-wedding",
    "samples": [
      {
        "url": "samples/outdoor/pre-wedding/cover.jpg",
        "type": "image",
        "title": "Pre-Wedding & Love Story · Cover"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_0131.JPG",
        "type": "image",
        "title": "Modern Pre-Wedding Aesthetic"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_0154.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 0154"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_0156.JPG",
        "type": "image",
        "title": "Editorial Romantic Posing"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5072.JPG",
        "type": "image",
        "title": "Save-The-Date Stroll and Whispers"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5097.JPG",
        "type": "image",
        "title": "Intimate Couple Love Story Session"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5116.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5116"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5119.JPG",
        "type": "image",
        "title": "Warm Evening Sunset Embrace"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5122.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5122"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5127.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5127"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5128.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5128"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5129.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5129"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5136.JPG",
        "type": "image",
        "title": "Tender Outdoor Couple Portrait"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5143.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5143"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5145.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5145"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5151.JPG",
        "type": "image",
        "title": "Scenic Outdoor Promenade"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5152.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5152"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5163.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5163"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5165.JPG",
        "type": "image",
        "title": "Joyful Candid Engagement Laughs"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5185.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5185"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5186.JPG",
        "type": "image",
        "title": "Epic Romantic Golden Hour Connection"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5189.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5189"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5190.JPG",
        "type": "image",
        "title": "Natural Sunlight Couple Glow"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5192.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5192"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5195.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5195"
      },
      {
        "url": "samples/outdoor/pre-wedding/IMG_5202.JPG",
        "type": "image",
        "title": "Pre-Wedding & Love Story · IMG 5202"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver",
        "price": 2600,
        "deposit": 2080,
        "summary": "7 high-end retouched digital images (Minimum 7 images for outdoor)",
        "inclusions": [
          "7 High-End Retouched Digital Images (Minimum 7 Images)",
          "30 Mins Dedicated Session",
          "1 Outfit of Choice",
          "Private Soft Copy Cloud Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold",
        "popular": true,
        "price": 4550,
        "deposit": 3640,
        "summary": "12 retouched images + Save-the-Date graphic + 45s cinematic reel",
        "inclusions": [
          "12 High-End Retouched Digital Images",
          "45 Mins Dedicated Session",
          "2 Outfit Changes",
          "1 Save-the-Date Social Announcement Graphic Design",
          "1x 45s Vertical Cinematic Video Reel"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum",
        "price": 8450,
        "deposit": 6760,
        "summary": "18 retouched images + Save-the-Date suite + 3x 60s 4K video reels",
        "inclusions": [
          "18 High-End Retouched Digital Images",
          "1 Hour Dedicated Session",
          "Unlimited Outfit Changes",
          "Custom Save-the-Date Graphic Design Suite",
          "3x 60s 4K Vertical Cinematic Video Reels for IG & TikTok"
        ]
      }
    ]
  },
  {
    "id": "wedding-coverage",
    "pathway": "events",
    "subcat": "weddings",
    "catLabel": "Weddings & Matrimony",
    "title": "Wedding Shoot (Full-Day Coverage)",
    "tagline": "Complete photo and cinema production for your holy matrimony and reception",
    "image": "samples/events/wedding-coverage/BASIC WEDDING PACKAGES.jpg",
    "imageHighRes": "samples/events/wedding-coverage/BASIC WEDDING PACKAGES.jpg",
    "badge": "💍 Holy Matrimony",
    "turnaround": "48hr Teaser · Full Gallery in 3 Weeks",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/events/wedding-coverage",
    "samples": [
      {
        "url": "samples/events/wedding-coverage/BASIC WEDDING PACKAGES.jpg",
        "type": "image",
        "title": "Basic Wedding Packages Rate Sheet"
      }
    ],
    "options": [
      {
        "id": "bronze",
        "name": "Bronze (Civil & Intimate Vows)",
        "price": 25000,
        "deposit": 10000,
        "summary": "1 dedicated senior photographer, up to 4 hrs coverage, 120+ retouched photos",
        "inclusions": [
          "1 Dedicated Senior Lead Wedding Photographer",
          "Up to 4 Hours On-Site Coverage (Ceremony + Couple Session)",
          "120+ Magazine-Retouched High-Res Images",
          "Full Bridal Party & Family Combinations",
          "48hr Priority Social Media Teaser Pack (15 Photos)",
          "Private Cloud Master Gallery Link"
        ]
      },
      {
        "id": "silver",
        "name": "Silver (Classic Full-Day Coverage)",
        "price": 45000,
        "deposit": 18000,
        "summary": "2 photographers, full-day photo coverage, 250+ retouched images, 48hr teasers",
        "inclusions": [
          "2 Photographers (Lead Photographer + Assistant Shooter)",
          "Full-Day Coverage (Morning Prep to Evening Reception)",
          "250+ Magazine-Retouched High-Res Images",
          "Church Service, Vows, Ring Exchange & Full Reception",
          "48hr Priority Teaser Set for Socials",
          "Private Cloud Master Gallery + Soft Copies"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Gold Matrimony + 4K Cinema + Drone)",
        "popular": true,
        "price": 75000,
        "deposit": 30000,
        "summary": "3-person crew, 4K cinematic film + aerial drone, 400+ images, wooden USB",
        "inclusions": [
          "3-Person Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Minute 4K Cinematic Highlight Film with Clean Audio",
          "4K Aerial Drone Cinematography for Venue & Convoy",
          "Full-Day Coverage from Makeup to Evening Dancing",
          "400+ Magazine-Retouched High-Res Images",
          "Custom Laser-Engraved Wooden USB Keepsake Box"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Royal Heirloom VIP Full Production)",
        "price": 90000,
        "deposit": 36000,
        "summary": "4-person full crew, documentary film + reel, luxury layflat photobook + 2 canvas mounts",
        "inclusions": [
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
  {
    "id": "traditional-wedding",
    "pathway": "events",
    "subcat": "weddings",
    "catLabel": "Weddings & Matrimony",
    "title": "Traditional Wedding (Ruracio)",
    "tagline": "Authentic cultural ceremony coverage honoring rich Kenyan marital customs",
    "image": "samples/events/traditional-wedding/cover_thumb.jpg",
    "imageWebp": "samples/events/traditional-wedding/cover_thumb.webp",
    "imageHighRes": "samples/events/traditional-wedding/cover.jpg",
    "badge": "👑 Cultural Matrimony",
    "turnaround": "48hr Teaser · Full Gallery in 3 Weeks",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/events/traditional-wedding",
    "samples": [
      {
        "url": "samples/events/traditional-wedding/BRA (22).jpg",
        "type": "image",
        "title": "Traditional Wedding (Ruracio) · BRA"
      },
      {
        "url": "samples/events/traditional-wedding/cover.jpg",
        "type": "image",
        "title": "Traditional Wedding (Ruracio) · Cover"
      }
    ],
    "options": [
      {
        "id": "bronze",
        "name": "Bronze (Civil & Intimate Ceremony)",
        "price": 25000,
        "deposit": 10000,
        "summary": "1 dedicated photographer, up to 4 hrs coverage, 120+ retouched photos",
        "inclusions": [
          "1 Dedicated Senior Lead Wedding Photographer",
          "Up to 4 Hours On-Site Coverage (Ceremony + Dowry Session)",
          "120+ Magazine-Retouched High-Res Images",
          "Full Family Regalia Combinations",
          "48hr Priority Social Media Teaser Pack (15 Photos)",
          "Private Cloud Master Gallery Link"
        ]
      },
      {
        "id": "silver",
        "name": "Silver (Classic Full-Day Coverage)",
        "price": 45000,
        "deposit": 18000,
        "summary": "2 photographers, full-day cultural ceremony coverage, 250+ retouched images",
        "inclusions": [
          "2 Photographers (Lead Photographer + Cultural Assistant)",
          "Full-Day Coverage of Ruracio & Dowry Festivities",
          "250+ Magazine-Retouched High-Res Images",
          "Elders Blessings, Family Negotiations & Gift Presentations",
          "48hr Priority Teaser Set for Socials",
          "Private Cloud Master Gallery + Soft Copies"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Cultural Matrimony + 4K Cinema + Drone)",
        "popular": true,
        "price": 75000,
        "deposit": 30000,
        "summary": "3-person crew, 4K cultural documentary + drone, 400+ images, wooden USB",
        "inclusions": [
          "3-Person Crew (2 Photographers + 1 Cinematographer)",
          "3–5 Minute 4K Cinematic Highlight Film with Elder Speeches Audio",
          "4K Aerial Drone Cinematography for Rural / Venue Overhead",
          "Full-Day Coverage of All Cultural Rites",
          "400+ Magazine-Retouched High-Res Images",
          "Custom Laser-Engraved Wooden USB Keepsake Box"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Royal Heritage VIP Full Production)",
        "price": 90000,
        "deposit": 36000,
        "summary": "4-person full crew, documentary film + reel, luxury layflat photobook + 2 canvas mounts",
        "inclusions": [
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
  {
    "id": "burial-coverage",
    "pathway": "events",
    "subcat": "memorials",
    "catLabel": "Burials & Memorials",
    "title": "Burials & Memorials Coverage",
    "tagline": "Dignified, respectful, and unobtrusive photo & video coverage honoring loved ones",
    "image": "samples/events/burial-coverage/BURIAL COVERAGE PACKAGES.jpg",
    "imageHighRes": "samples/events/burial-coverage/BURIAL COVERAGE PACKAGES.jpg",
    "badge": "🕊️ In Loving Memory",
    "turnaround": "7–10 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/events/burial-coverage",
    "samples": [
      {
        "url": "samples/events/burial-coverage/BURIAL COVERAGE PACKAGES.jpg",
        "type": "image",
        "title": "Burial Coverage Packages Official Rates & Inclusions"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Respectful Half-Day Service)",
        "price": 25000,
        "deposit": 10000,
        "summary": "Up to 4 hrs coverage, 100+ edited master photos, respectful documentation",
        "inclusions": [
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "100+ Edited High-Resolution Master Photos",
          "Complete Family Tribute & Service Documentation",
          "Same-Day 10-Photo Teaser Set for Press / Socials",
          "Private Cloud Gallery Delivery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Full-Day Memorial Photo + Film)",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Full-day photo + video, complete service & eulogy recording, 5-7 min highlight",
        "inclusions": [
          "2-Person Photo & Video Production Crew",
          "Up to 8 Hours Full Celebration of Life Coverage",
          "Complete Service & Eulogy Recording with Clear Audio",
          "5–7 Min Memorial Tribute Video Highlight",
          "200+ Edited High-Resolution Master Photos",
          "Private Cloud Gallery Delivery"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Memorial Documentary Tribute)",
        "price": 65000,
        "deposit": 26000,
        "summary": "Full 4-person crew, 4K documentary film, speeches recording, printed photobook album",
        "inclusions": [
          "Full Production Crew (2 Photographers + 2 Videographers)",
          "4K Memorial Documentary Film + Complete Speeches Recording",
          "Hardcover Printed Memorial Tribute Photobook for the Family",
          "300+ Retouched Photographs",
          "Custom USB Box with All Raw Footage & High-Resolution Photos"
        ]
      }
    ]
  },
  {
    "id": "corporate-event",
    "pathway": "events",
    "subcat": "corporate-events",
    "catLabel": "Corporate & Summits",
    "title": "Corporate Events & Summits",
    "tagline": "High-level visual documentation for conferences, AGM summits, galas & brand activations",
    "image": "samples/events/corporate-event/COPORATE EVENT COVERAGE.jpg",
    "imageHighRes": "samples/events/corporate-event/COPORATE EVENT COVERAGE.jpg",
    "badge": "🏢 Conferences & Galas",
    "turnaround": "3–5 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/events/corporate-event",
    "samples": [
      {
        "url": "samples/events/corporate-event/COPORATE EVENT COVERAGE.jpg",
        "type": "image",
        "title": "Corporate Event Coverage Official Rates & Guide"
      },
      {
        "url": "samples/events/corporate-event/CORPORATE PORTRAIT SHOOT.jpg",
        "type": "image",
        "title": "Corporate Portrait & Board Showcase"
      },
      {
        "url": "samples/events/corporate-event/DSC02822.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02822.jpgj"
      },
      {
        "url": "samples/events/corporate-event/DSC02827.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02827.jpgj"
      },
      {
        "url": "samples/events/corporate-event/DSC02830.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02830.jpgh"
      },
      {
        "url": "samples/events/corporate-event/DSC02832.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02832.jpgh"
      },
      {
        "url": "samples/events/corporate-event/DSC02836.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02836.jpgh"
      },
      {
        "url": "samples/events/corporate-event/DSC02840.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02840.jpgh"
      },
      {
        "url": "samples/events/corporate-event/DSC02856.jpgu.jpgg_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02856.jpgu.jpgg"
      },
      {
        "url": "samples/events/corporate-event/DSC02891.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate Events & Summits · DSC02891.jpgj"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Half-Day Summit / Conference)",
        "price": 25000,
        "deposit": 10000,
        "summary": "Up to 4 hours on-site coverage, 100+ PR-ready images",
        "inclusions": [
          "Up to 4 Hours On-Site Photography Coverage",
          "1 Senior Lead Event Photographer",
          "Keynotes, Audience & Brand Step-and-Repeat",
          "100+ Color-Graded PR-Ready High-Res Images",
          "Same-Day Teaser Photos for Press & LinkedIn"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Full-Day Conference + Gala)",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Up to 8 hours full coverage (Photo + Video Highlights), 200+ images",
        "inclusions": [
          "Up to 8 Hours Comprehensive Coverage",
          "2-Person Coverage Crew (Stills + 4K Reel Video)",
          "200+ High-Resolution Master Images",
          "Evening Gala & Award Dinner Documentation",
          "Next-Day PR Press Pack for Immediate Distribution"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (Multi-Day Summit Cinema & PR)",
        "price": 65000,
        "deposit": 26000,
        "summary": "Multi-day summit coverage, full video documentary, dedicated PR editor on-site",
        "inclusions": [
          "Multi-Day or Full Team Production Suite",
          "Dedicated On-Site Photo & Video Editors for Real-Time Press Delivery",
          "Executive Boardroom Stills & VIP Step-and-Repeat",
          "4K Corporate Highlight Film for Shareholders & Website",
          "Master Commercial Rights & High-Speed Cloud Delivery"
        ]
      }
    ]
  },
  {
    "id": "birthday-events",
    "pathway": "events",
    "subcat": "parties-galas",
    "catLabel": "Birthday Party Events",
    "title": "Birthday Party Events Coverage",
    "tagline": "Up to 8 hours on-site birthday party coverage: cake cutting, guest candids, decor details & 4K video reel",
    "image": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2370.jpg",
    "imageWebp": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2460.jpg",
    "imageHighRes": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2370.jpg",
    "badge": "🎉 Party Extravaganza",
    "turnaround": "48hr Teasers · Full Gallery in 7 Days",
    "depositRate": "Booking deposit: KSh 10,000 to KSh 22,000",
    "sampleFolder": "samples/events/birthday-events",
    "albums": [
      {
        "id": "andrews-birthday",
        "title": "ANDREW'S BIRTHDAY",
        "count": 27,
        "cover": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2370.jpg",
        "samples": [
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2370.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2370"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2374.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2374"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2432.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2432"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2460.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2460"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2467.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2467"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2489.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2489"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2499.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2499"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2531.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2531"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2575.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2575"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2592.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2592"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2621.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2621"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2629.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2629"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2656.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2656"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2668.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2668"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2679.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2679"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2737.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2737"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2760.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2760"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2792.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2792"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2830.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2830"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2845.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2845"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2854.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2854"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2890.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2890"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2908.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2908"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2986.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 2986"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3011.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 3011"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3021.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 3021"
          },
          {
            "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3065.jpg",
            "type": "image",
            "title": "ANDREW'S BIRTHDAY · IMG 3065"
          }
        ]
      },
      {
        "id": "ariana-and-carianahs-birthday",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY",
        "count": 31,
        "cover": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A4982.JPG",
        "samples": [
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A4982.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A4982"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5079.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5079"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5090.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5090"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5116.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5116"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5119.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5119"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5158.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5158"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5161.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5161"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5186.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5186"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5190.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5190"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5229.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5229"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5240.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5240"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5394.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5394"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5520.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5520"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5575.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5575"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5594.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5594"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5607.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5607"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5655.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5655"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5674.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5674"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5728.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5728"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5739.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5739"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5772.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5772"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5776.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5776"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5781.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5781"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5806.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5806"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5826.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5826"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5842.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5842"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5869.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5869"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5919.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5919"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5992.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5992"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A6036.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A6036"
          },
          {
            "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/A.JPG",
            "type": "image",
            "title": "ARIANA AND CARIANAH'S BIRTHDAY · A"
          }
        ]
      },
      {
        "id": "daleyzas-birthday",
        "title": "DALEYZA'S BIRTHDAY",
        "count": 28,
        "cover": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0033 - Copy.JPG",
        "samples": [
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0033 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0033 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0033.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0033"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0035 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0035 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0035.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0035"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0037 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0037 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0037.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0037"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0059 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0059 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0059.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0059"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0117 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0117 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0117.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0117"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0196 - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0196 Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0196.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0196"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0203.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0203"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0215.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0215"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0275.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0275"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0285.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0285"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0391.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0391"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0435.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0435"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0440.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0440"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0447.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0447"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0449.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0449"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0451.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · 69A0451"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (1).JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (11).JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (12) - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@ Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (12).JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (26) - Copy.JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@ Copy"
          },
          {
            "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (26).JPG",
            "type": "image",
            "title": "DALEYZA'S BIRTHDAY · @A@"
          }
        ]
      },
      {
        "id": "divias-birthday",
        "title": "DIVIA'S BIRTHDAY",
        "count": 26,
        "cover": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0457.jpg",
        "samples": [
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0457.jpg",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0457"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0471.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0471"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0473.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0473"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0483.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0483"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0504.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0504"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0519.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0519"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0520.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0520"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0526.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0526"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0538.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0538"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0545.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0545"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0556.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0556"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0583.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0583"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0597.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0597"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0605.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0605"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0619.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0619"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0621.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0621"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0629.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · IMG 0629"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6649.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6649"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6651.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6651"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6813.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6813"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6893.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6893"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6897.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6897"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6914.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6914"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6932.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6932"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6979.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6979"
          },
          {
            "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6991.JPG",
            "type": "image",
            "title": "DIVIA'S BIRTHDAY · PRI 6991"
          }
        ]
      },
      {
        "id": "imanis-birthday",
        "title": "IMANI'S BIRTHDAY",
        "count": 20,
        "cover": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8077.JPG",
        "samples": [
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8077.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8077"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8084.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8084"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8086.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8086"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8088.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8088"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8090.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8090"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8099.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8099"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8103.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8103"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8109.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8109"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8114.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8114"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8122.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8122"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8205.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8205"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8305.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8305"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8312.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8312"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8314.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8314"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8315.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8315"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8316.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8316"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8387.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8387"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8399.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8399"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8423.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8423"
          },
          {
            "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8428.JPG",
            "type": "image",
            "title": "IMANI'S BIRTHDAY · DSC8428"
          }
        ]
      }
    ],
    "samples": [
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2370.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2370"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2374.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2374"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2432.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2432"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2460.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2460"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2467.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2467"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2489.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2489"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2499.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2499"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2531.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2531"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2575.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2575"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2592.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2592"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2621.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2621"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2629.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2629"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2656.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2656"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2668.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2668"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2679.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2679"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2737.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2737"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2760.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2760"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2792.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2792"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2830.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2830"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2845.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2845"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2854.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2854"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2890.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2890"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2908.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2908"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_2986.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 2986"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3011.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 3011"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3021.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 3021"
      },
      {
        "url": "samples/events/birthday-events/ANDREW'S BIRTHDAY/IMG_3065.jpg",
        "type": "image",
        "title": "ANDREW'S BIRTHDAY · IMG 3065"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A4982.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A4982"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5079.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5079"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5090.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5090"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5116.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5116"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5119.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5119"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5158.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5158"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5161.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5161"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5186.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5186"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5190.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5190"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5229.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5229"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5240.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5240"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5394.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5394"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5520.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5520"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5575.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5575"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5594.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5594"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5607.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5607"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5655.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5655"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5674.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5674"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5728.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5728"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5739.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5739"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5772.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5772"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5776.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5776"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5781.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5781"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5806.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5806"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5826.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5826"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5842.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5842"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5869.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5869"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5919.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5919"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A5992.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A5992"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/_J0A6036.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · J0A6036"
      },
      {
        "url": "samples/events/birthday-events/ARIANA AND CARIANAH'S BIRTHDAY/A.JPG",
        "type": "image",
        "title": "ARIANA AND CARIANAH'S BIRTHDAY · A"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0033 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0033 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0033.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0033"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0035 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0035 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0035.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0035"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0037 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0037 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0037.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0037"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0059 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0059 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0059.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0059"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0117 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0117 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0117.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0117"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0196 - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0196 Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0196.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0196"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0203.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0203"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0215.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0215"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0275.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0275"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0285.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0285"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0391.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0391"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0435.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0435"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0440.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0440"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0447.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0447"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0449.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0449"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/_69A0451.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · 69A0451"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (1).JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (11).JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (12) - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@ Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (12).JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (26) - Copy.JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@ Copy"
      },
      {
        "url": "samples/events/birthday-events/DALEYZA'S BIRTHDAY/@A@ (26).JPG",
        "type": "image",
        "title": "DALEYZA'S BIRTHDAY · @A@"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0457.jpg",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0457"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0471.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0471"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0473.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0473"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0483.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0483"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0504.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0504"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0519.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0519"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0520.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0520"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0526.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0526"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0538.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0538"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0545.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0545"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0556.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0556"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0583.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0583"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0597.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0597"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0605.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0605"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0619.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0619"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0621.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0621"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/IMG_0629.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · IMG 0629"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6649.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6649"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6651.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6651"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6813.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6813"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6893.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6893"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6897.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6897"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6914.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6914"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6932.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6932"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6979.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6979"
      },
      {
        "url": "samples/events/birthday-events/DIVIA'S BIRTHDAY/PRI_6991.JPG",
        "type": "image",
        "title": "DIVIA'S BIRTHDAY · PRI 6991"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8077.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8077"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8084.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8084"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8086.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8086"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8088.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8088"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8090.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8090"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8099.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8099"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8103.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8103"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8109.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8109"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8114.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8114"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8122.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8122"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8205.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8205"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8305.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8305"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8312.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8312"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8314.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8314"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8315.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8315"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8316.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8316"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8387.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8387"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8399.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8399"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8423.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8423"
      },
      {
        "url": "samples/events/birthday-events/IMANI'S BIRTHDAY/_DSC8428.JPG",
        "type": "image",
        "title": "IMANI'S BIRTHDAY · DSC8428"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Half-Day Party Celebration)",
        "price": 25000,
        "deposit": 10000,
        "summary": "Up to 4 hours on-site birthday party coverage",
        "inclusions": [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Full Party Stills + 4K Reel)",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Up to 8 hours full party celebration with 4K video reel",
        "inclusions": [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Photographers",
          "Up to 8 Hours Full Party Extravaganza Coverage",
          "1x 60s 4K Vertical Highlight Reel for Instagram & TikTok",
          "Same-Day 15-Photo Teasers",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP Party + Cinema Film)",
        "price": 55000,
        "deposit": 22000,
        "summary": "Full VIP celebration with 2 photographers + 1 cinematographer",
        "inclusions": [
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
  {
    "id": "graduation-events",
    "pathway": "events",
    "subcat": "parties-galas",
    "catLabel": "Graduation Ceremonies",
    "title": "Graduation Ceremonies & Events Coverage",
    "tagline": "Full convocation walk, degree conferment, family banquet celebration & honorary portraits",
    "image": "samples/events/graduation-events/cover_thumb.jpg",
    "imageWebp": "samples/events/graduation-events/cover_thumb.webp",
    "imageHighRes": "samples/events/graduation-events/cover.jpg",
    "badge": "🎓 Convocation Walk",
    "turnaround": "48hr Teasers · Full Gallery in 7 Days",
    "depositRate": "Booking deposit: KSh 10,000 to KSh 22,000",
    "sampleFolder": "samples/events/graduation-events",
    "samples": [
      {
        "url": "samples/events/graduation-events/cover.jpg",
        "type": "image",
        "title": "Convocation Milestone Hero Portrait"
      },
      {
        "url": "samples/events/graduation-events/PRI_4998.jpg",
        "type": "image",
        "title": "Campus Convocation Walk"
      },
      {
        "url": "samples/events/graduation-events/PRI_5013.jpg",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · PRI 5013"
      },
      {
        "url": "samples/events/graduation-events/PRI_5363.jpg",
        "type": "image",
        "title": "Celebration Bouquet & Degree Scroll"
      },
      {
        "url": "samples/events/graduation-events/PRI_5412.jpg",
        "type": "image",
        "title": "Graduate Joy & Laughter"
      },
      {
        "url": "samples/events/graduation-events/PRI_5893.jpg",
        "type": "image",
        "title": "Golden Hour Campus Celebration"
      },
      {
        "url": "samples/events/graduation-events/PRI_5895.jpg",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · PRI 5895"
      },
      {
        "url": "samples/events/graduation-events/PRI_5912.jpg",
        "type": "image",
        "title": "Grand Convocation Regalia Portrait"
      },
      {
        "url": "samples/events/graduation-events/SHE_1757.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1757"
      },
      {
        "url": "samples/events/graduation-events/SHE_1765.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1765"
      },
      {
        "url": "samples/events/graduation-events/SHE_1768.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1768"
      },
      {
        "url": "samples/events/graduation-events/SHE_1770.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1770"
      },
      {
        "url": "samples/events/graduation-events/SHE_1773.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1773"
      },
      {
        "url": "samples/events/graduation-events/SHE_1865.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1865"
      },
      {
        "url": "samples/events/graduation-events/SHE_1873.JPG",
        "type": "image",
        "title": "Graduation Ceremonies & Events Coverage · SHE 1873"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Convocation & Ceremony Walk)",
        "price": 25000,
        "deposit": 10000,
        "summary": "Up to 4 hours on-site graduation celebration coverage",
        "inclusions": [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Ceremony + Afterparty Feast)",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Up to 8 hours full day convocation & evening banquet coverage",
        "inclusions": [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Event Photographers",
          "Up to 8 Hours Full Day Celebration Coverage",
          "1x 60s 4K Celebration Reel for TikTok & Instagram",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP Convocation Cinema + Album)",
        "price": 55000,
        "deposit": 22000,
        "summary": "Full VIP production with 2 photographers, 1 cinematographer & printed photobook",
        "inclusions": [
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
  {
    "id": "hotel-events",
    "pathway": "events",
    "subcat": "corporate-events",
    "catLabel": "Hotel & Gala Events",
    "title": "Hotel & Gala Events Coverage",
    "tagline": "Corporate gala dinners, luxury hotel launches, culinary showcases & VIP networking",
    "image": "samples/events/hotel-events/cover_thumb.jpg",
    "imageWebp": "samples/events/hotel-events/cover_thumb.webp",
    "imageHighRes": "samples/events/hotel-events/cover.jpg",
    "badge": "🥂 Luxury Hospitality",
    "turnaround": "48hr Teasers · Full Gallery in 7 Days",
    "depositRate": "Booking deposit: KSh 10,000 to KSh 22,000",
    "sampleFolder": "samples/events/hotel-events",
    "samples": [
      {
        "url": "samples/events/hotel-events/cover.jpg",
        "type": "image",
        "title": "Hotel & Gala Events Coverage · Cover"
      },
      {
        "url": "samples/events/hotel-events/HOTEL AND HOSPITALITY SHOOT.jpg",
        "type": "image",
        "title": "Hotel & Hospitality Official Rates"
      },
      {
        "url": "samples/events/hotel-events/work-5.jpg",
        "type": "image",
        "title": "Hotel & Gala Events Coverage · Work 5"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver (Half-Day Hospitality Showcase)",
        "price": 25000,
        "deposit": 10000,
        "summary": "Up to 4 hours coverage documenting hotel events, launches & culinary dinners",
        "inclusions": [
          "100+ Edited High-Resolution Master Photos",
          "1 Senior Lead Event Photographer",
          "Up to 4 Hours On-Site Coverage",
          "Same-Day 10-Photo Teaser Set for Social Media & Press",
          "RAW Unedited Soft Copies: KSh 150 each",
          "Delivered via Private Cloud Master Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold (Full-Day Gala + Culinary Showcase)",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Up to 8 hours comprehensive hospitality event coverage + 4K reel",
        "inclusions": [
          "200+ Edited High-Resolution Master Photos",
          "2 Dedicated Event Photographers",
          "Up to 8 Hours Comprehensive Event Coverage",
          "1x 60s 4K Vertical Social Reel showcasing venue & ambiance",
          "Priority 5-Day Delivery via Cloud Gallery"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum (VIP Gala Cinema + Brand Suite)",
        "price": 55000,
        "deposit": 22000,
        "summary": "Full VIP production crew (2 Photographers + 1 Cinematographer) & commercial licensing",
        "inclusions": [
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
  {
    "id": "product-shoot",
    "pathway": "commercial",
    "subcat": "products-hospitality",
    "catLabel": "Products & E-Commerce",
    "title": "Product Photography",
    "tagline": "Studio lighting, pure white background e-commerce packs, and lifestyle brand imagery",
    "image": "samples/commercial/product-shoot/cover_thumb.jpg",
    "imageWebp": "samples/commercial/product-shoot/cover_thumb.webp",
    "imageHighRes": "samples/commercial/product-shoot/cover.jpg",
    "badge": "📦 E-Commerce Catalog",
    "turnaround": "3–5 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/commercial/product-shoot",
    "samples": [
      {
        "url": "samples/commercial/product-shoot/Business 2 Business.jpg",
        "type": "image",
        "title": "B2B Brand Photography Showcase"
      },
      {
        "url": "samples/commercial/product-shoot/cover.jpg",
        "type": "image",
        "title": "Product Photography · Cover"
      },
      {
        "url": "samples/commercial/product-shoot/PRODUCT SHOOT PACKAGES.jpg",
        "type": "image",
        "title": "Product Shoot Packages Official Rates & Inclusions"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Catalog Essentials (10 SKUs)",
        "price": 4500,
        "deposit": 3600,
        "summary": "Pure white backdrop & transparent PNG cutouts for 10 items",
        "inclusions": [
          "Up to 10 Product Items / SKUs (2 angles each = 20 photos)",
          "Pure White E-Commerce Backdrop (Amazon / Shopify Compliant)",
          "Transparent PNG Cutouts for Digital Ads Included",
          "Delivered via High-Res Cloud Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Brand Lifestyle (25 SKUs)",
        "popular": true,
        "price": 9500,
        "deposit": 7600,
        "summary": "White backdrop + textured lifestyle staging for 25 items",
        "inclusions": [
          "Up to 25 Product Items / SKUs (75+ final photos)",
          "Combination of Pure White E-Commerce & Styled Lifestyle Staging",
          "Model Hand-Interactions & Prop Styling",
          "Commercial Print & Digital Usage Rights Included"
        ]
      },
      {
        "id": "platinum",
        "name": "Master Brand Suite",
        "price": 18000,
        "deposit": 14400,
        "summary": "50+ SKUs with 360 spin animations & 3x 15s product video ads",
        "inclusions": [
          "50+ Product Items / SKUs (Full Catalog Production)",
          "3x 15s High-Energy Vertical Product Video Ads for TikTok & IG",
          "Full Commercial Master Licensing",
          "Priority 48-Hour Turnaround Batch Delivery"
        ]
      }
    ]
  },
  {
    "id": "hotel-hospitality",
    "pathway": "commercial",
    "subcat": "products-hospitality",
    "catLabel": "Hotels & Hospitality",
    "title": "Hotel & Hospitality Showcase",
    "tagline": "Architectural, interior, culinary, and experiential imagery for luxury hotels, Airbnbs & resorts",
    "image": "samples/commercial/hotel-hospitality/cover_thumb.jpg",
    "imageWebp": "samples/commercial/hotel-hospitality/cover_thumb.webp",
    "imageHighRes": "samples/commercial/hotel-hospitality/cover.jpg",
    "badge": "🏖️ Resorts & Luxury",
    "turnaround": "4–6 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/commercial/hotel-hospitality",
    "samples": [
      {
        "url": "samples/commercial/hotel-hospitality/cover.jpg",
        "type": "image",
        "title": "Hotel & Hospitality Showcase · Cover"
      },
      {
        "url": "samples/commercial/hotel-hospitality/HOTEL AND HOSPITALITY SHOOT.jpg",
        "type": "image",
        "title": "Hotel & Hospitality Shoot Rates & Guide"
      },
      {
        "url": "samples/commercial/hotel-hospitality/work-5.jpg",
        "type": "image",
        "title": "Luxury Suite Architectural Lighting & Detail"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Airbnb / Boutique Suite",
        "price": 8000,
        "deposit": 6400,
        "summary": "Up to 3 rooms/spaces, 20 high-res interior & exterior photos",
        "inclusions": [
          "Up to 3 Key Spaces (Living, Master Bedroom, Balcony/Amenities)",
          "20 HDR Professionally Balanced Interior & Exterior Photos",
          "Flawless Window Views (No blown-out highlights)",
          "Airbnb & Booking.com Optimized Resolution"
        ]
      },
      {
        "id": "gold",
        "name": "Full Resort Showcase",
        "popular": true,
        "price": 18000,
        "deposit": 14400,
        "summary": "Full property walkthrough + restaurant/culinary + 60s reel",
        "inclusions": [
          "Complete Property Coverage (Rooms, Dining, Pool, Grounds, Twilight)",
          "45+ Magazine-Grade Architectural & Hospitality Photos",
          "Culinary & Cocktail Gourmet Food Photography",
          "1x 60s 4K Walkthrough Video Reel with Drone Aerials"
        ]
      },
      {
        "id": "platinum",
        "name": "Commercial Brand Campaign",
        "price": 35000,
        "deposit": 28000,
        "summary": "Complete visual asset overhaul with model lifestyle talents & 4K cinematic film",
        "inclusions": [
          "2-Day Multi-Production Shoot (Architectural + Lifestyle)",
          "Curated Talent / Guest Experience Lifestyle Posing",
          "2-3 Min 4K Cinematic Promotional Venue Film",
          "Full International Commercial Billboard & Web Rights"
        ]
      }
    ]
  },
  {
    "id": "corporate-branding",
    "pathway": "commercial",
    "subcat": "graphic-design",
    "catLabel": "Corporate & Branding",
    "title": "Corporate & Brand Growth Suite",
    "tagline": "Cohesive leadership headshots and annual report imagery for company teams",
    "image": "samples/commercial/corporate-branding/COPORATE EVENT COVERAGE.jpg",
    "imageHighRes": "samples/commercial/corporate-branding/COPORATE EVENT COVERAGE.jpg",
    "badge": "🏢 Leadership Suite",
    "turnaround": "3–5 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/commercial/corporate-branding",
    "samples": [
      {
        "url": "samples/commercial/corporate-branding/COPORATE EVENT COVERAGE.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · COPORATE EVENT COVERAGE"
      },
      {
        "url": "samples/commercial/corporate-branding/CORPORATE PORTRAIT SHOOT.jpg",
        "type": "image",
        "title": "Corporate Portrait Shoot Rates & Guide"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02822.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02822.jpgj"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02827.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02827.jpgj"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02830.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02830.jpgh"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02832.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02832.jpgh"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02836.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02836.jpgh"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02840.jpgh_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02840.jpgh"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02856.jpgu.jpgg_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02856.jpgu.jpgg"
      },
      {
        "url": "samples/commercial/corporate-branding/DSC02891.jpgj_status.jpg",
        "type": "image",
        "title": "Corporate & Brand Growth Suite · DSC02891.jpgj"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Small Team (Up to 5 Execs)",
        "price": 5000,
        "deposit": 4000,
        "summary": "5 executives, 2 retouched portraits each + 1 team group",
        "inclusions": [
          "Up to 5 Executives / Board Members",
          "2 Magazine Retouched Headshots per Person",
          "1 Cohesive Team Group Portrait",
          "Delivered via High-Res Cloud Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Department Suite (Up to 15 Execs)",
        "popular": true,
        "price": 12000,
        "deposit": 9600,
        "summary": "15 executives with on-site studio lighting setup at your offices",
        "inclusions": [
          "Up to 15 Team Members",
          "On-Site Studio Lighting Setup at Your Corporate Office",
          "2 Magazine Retouched Headshots per Person + Department Groups",
          "Custom Company Backdrop / Brand Color Match"
        ]
      },
      {
        "id": "platinum",
        "name": "Enterprise Firm (Up to 30 Execs)",
        "price": 22000,
        "deposit": 17600,
        "summary": "Full firm photo day with executive grooming & PR media pack",
        "inclusions": [
          "Up to 30 Team Members",
          "Executive Grooming & Anti-Shine Touch-Ups Included",
          "Individual Bio Shots, Working Action Candids & Board Portraits",
          "Expedited 48-Hour Turnaround for Press Releases"
        ]
      }
    ]
  },
  {
    "id": "graphic-starter",
    "pathway": "commercial",
    "subcat": "graphic-design",
    "catLabel": "Graphic Design & Branding",
    "title": "Graphic Design Starter Package",
    "tagline": "Essential visual branding assets for startups, small businesses & social campaigns",
    "image": "samples/commercial/graphic-starter/cover_thumb.jpg",
    "imageWebp": "samples/commercial/graphic-starter/cover_thumb.webp",
    "imageHighRes": "samples/commercial/graphic-starter/cover.jpg",
    "badge": "🎨 Visual Identity",
    "turnaround": "3 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/commercial/graphic-starter",
    "samples": [
      {
        "url": "samples/commercial/graphic-starter/cover.jpg",
        "type": "image",
        "title": "Graphic Design Starter Package · Cover"
      },
      {
        "url": "samples/commercial/graphic-starter/GRAPHIC DESIGNING STARTER PACKAGE.jpg",
        "type": "image",
        "title": "Graphic Design Starter Package Rates & Inclusions Guide"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Starter Pack",
        "price": 2500,
        "deposit": 2000,
        "summary": "Logo design + business card layout",
        "inclusions": [
          "Primary Logo Design (2 Initial Concepts, 2 Revisions)",
          "Double-Sided Business Card Print-Ready PDF",
          "Transparent PNG & Vector SVG Master Files",
          "3-Day Delivery"
        ]
      },
      {
        "id": "gold",
        "name": "Growth Kit",
        "popular": true,
        "price": 5500,
        "deposit": 4400,
        "summary": "Logo suite + marketing promotional flyers",
        "inclusions": [
          "Full Logo Suite (Primary, Secondary, Monogram/Favicon)",
          "2x Marketing Event / Promo Flyer Designs",
          "Brand Color Palette & Typography Guidelines Card",
          "High-Res Print & Web Ready Formats"
        ]
      }
    ]
  },
  {
    "id": "graphic-growth",
    "pathway": "commercial",
    "subcat": "graphic-design",
    "catLabel": "Graphic Design & Branding",
    "title": "Graphic Design Growth Package",
    "tagline": "Comprehensive corporate brand identity, company profile & marketing collateral",
    "image": "samples/commercial/graphic-growth/cover_thumb.jpg",
    "imageWebp": "samples/commercial/graphic-growth/cover_thumb.webp",
    "imageHighRes": "samples/commercial/graphic-growth/cover.jpg",
    "badge": "Corporate Identity",
    "turnaround": "5 Business Days",
    "depositRate": "80% booking deposit required",
    "sampleFolder": "samples/commercial/graphic-growth",
    "samples": [
      {
        "url": "samples/commercial/graphic-growth/cover.jpg",
        "type": "image",
        "title": "Graphic Design Growth Package · Cover"
      },
      {
        "url": "samples/commercial/graphic-growth/GRAPHIC DESGINING GROWTH PACKAGE.jpg",
        "type": "image",
        "title": "Corporate Rebrand, Company Profile & Advertising Suite Guide"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Corporate Standard",
        "price": 8000,
        "deposit": 6400,
        "summary": "Multi-page corporate profile & marketing pack",
        "inclusions": [
          "Full Brand Identity Guidelines System",
          "4-Page Corporate Company Profile (PDF + Print)",
          "Letterhead, Invoice & Official Email Signature",
          "3x Promotional Social Media Ad Templates"
        ]
      },
      {
        "id": "gold",
        "name": "Executive Scale",
        "popular": true,
        "price": 14000,
        "deposit": 11200,
        "summary": "Full company suite with 8-page profile & packaging design",
        "inclusions": [
          "8-Page Complete Corporate Brochure / Company Profile",
          "Full Stationery System (Card, Letterhead, Envelope, Folders)",
          "Product Packaging / Label Mockups",
          "Editable Source Files (AI, PSD, PDF, SVG)"
        ]
      }
    ]
  },
  {
    "id": "boudoir-shoot",
    "pathway": "studio",
    "subcat": "boudoir",
    "catLabel": "Boudoir & Intimate",
    "title": "Luxury Studio Boudoir & Intimate Portrait",
    "tagline": "Empowering, sensual, and tastefully lit private studio session with silk robes & lingerie posing guidance",
    "image": "samples/studio/boudoir-shoot/cover_thumb.jpg",
    "imageWebp": "samples/studio/boudoir-shoot/cover_thumb.webp",
    "imageHighRes": "samples/studio/boudoir-shoot/cover.jpg",
    "badge": "🌹 Private VIP Studio",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 400 to KSh 2,500 (lock your slot)",
    "sampleFolder": "samples/studio/boudoir-shoot",
    "samples": [
      {
        "url": "samples/studio/boudoir-shoot/cover.jpg",
        "type": "image",
        "title": "Luxury Boudoir & Intimate Silk Silhouette"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Intimate Starter",
        "price": 1500,
        "deposit": 400,
        "summary": "3 magazine-retouched images, 1 outfit, 30 min session",
        "inclusions": [
          "3 Magazine-Grade Skin & Tone Retouched Photos",
          "1 Lingerie / Silk Robe Outfit",
          "Completely Private, Closed-Door Studio Comfort",
          "Female Assistant / Posing Direction on Request",
          "Delivered via Private Password-Protected Cloud Link"
        ]
      },
      {
        "id": "silver",
        "name": "Silver Elegance",
        "price": 3500,
        "deposit": 900,
        "summary": "8 retouched images, 2 outfit changes, 45 min session",
        "inclusions": [
          "8 High-Fashion Retouched Photos",
          "2 Outfit Changes (Robes, Silks or Lingerie)",
          "Creative Rim Lighting & Soft Shadows",
          "Pose Guidance for Flattering Body Angles",
          "45 Mins Dedicated Studio Time",
          "Delivered within 48 Hours via Cloud Gallery"
        ]
      },
      {
        "id": "gold",
        "name": "Gold Allure",
        "popular": true,
        "price": 6000,
        "deposit": 1500,
        "summary": "15 retouched images, 3 outfit changes, 1 hr session, mood lighting",
        "inclusions": [
          "15 Editorial-Grade Retouched Photos",
          "3 Wardrobe Changes (Studio Silk Fabrics Included)",
          "Dramatic Mood & Venetian Blind Light Setups",
          "1 Hour Dedicated Private Studio Session",
          "Delivered via Private High-Res Gallery + WhatsApp"
        ]
      },
      {
        "id": "platinum",
        "name": "Royal Boudoir Luxe",
        "price": 10000,
        "deposit": 2500,
        "summary": "25 retouched images, unlimited looks, 90 mins, luxury A4 wooden mount",
        "inclusions": [
          "25 Master Retouched High-Fashion Images",
          "Unlimited Outfit / Silk Fabric Transitions",
          "Includes 1 Solid Wooden A4 Photo Mount (Discreet Packaging)",
          "Priority 24-Hour Delivery Turnaround",
          "Complete Privacy Guarantee (Zero Public Posting Without Written Consent)"
        ]
      }
    ]
  },
  {
    "id": "newborn-shoot",
    "pathway": "studio",
    "subcat": "maternity-kids",
    "catLabel": "Newborn Milestones",
    "title": "Newborn Baby Milestone (0–30 Days)",
    "tagline": "Gentle nursery-climate studio photography with sterile organic wraps, nesting baskets & paci breaks",
    "image": "samples/studio/newborn-shoot/DSC00462.jpgxxxxx.jpg",
    "imageHighRes": "samples/studio/newborn-shoot/DSC00462.jpgxxxxx.jpg",
    "badge": "🍼 Nursery Climate Controlled",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 600 to KSh 2,000 (lock your slot)",
    "sampleFolder": "samples/studio/newborn-shoot",
    "samples": [
      {
        "url": "samples/studio/newborn-shoot/DSC00462.jpgxxxxx.jpg",
        "type": "image",
        "title": "Newborn Baby Milestone (0–30 Days) · DSC00462.jpg"
      },
      {
        "url": "samples/studio/newborn-shoot/DSC00498.jpgxxx.jpg",
        "type": "image",
        "title": "Newborn Baby Milestone (0–30 Days) · DSC00498.jpg"
      },
      {
        "url": "samples/studio/newborn-shoot/DSC00566.jpgxx.jpg",
        "type": "image",
        "title": "Newborn Baby Milestone (0–30 Days) · DSC00566.jpgxx"
      },
      {
        "url": "samples/studio/newborn-shoot/DSC02461.JPG",
        "type": "image",
        "title": "Newborn Baby Milestone (0–30 Days) · DSC02461"
      },
      {
        "url": "samples/studio/newborn-shoot/DSC02482_1.jpg",
        "type": "image",
        "title": "Newborn Baby Milestone (0–30 Days) · DSC02482 1"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Cozy Mini",
        "price": 2500,
        "deposit": 600,
        "summary": "5 retouched photos, 1 swaddle setup, 45 min relaxed session",
        "inclusions": [
          "5 Tender Retouched Newborn Portraits",
          "1 Organic Wrap / Swaddle Setup",
          "Warm, Temperature-Controlled Studio Room",
          "Patience Pacing: Free Feeding & Diaper Break Time",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "silver",
        "name": "Nest & Baskets",
        "popular": true,
        "price": 4500,
        "deposit": 1200,
        "summary": "10 retouched photos, 2 prop setups, 1 hr session with parents",
        "inclusions": [
          "10 Delicate Retouched Newborn Portraits",
          "2 Creative Setups (Handmade Baskets, Soft Furs & Headbands)",
          "Includes Gentle Mother/Father Posing with Baby",
          "Macro Detail Shots (Tiny Toes, Fingers, Eyelashes)",
          "60 Mins Dedicated Studio Time"
        ]
      },
      {
        "id": "gold",
        "name": "Heirloom Keepsake",
        "price": 8000,
        "deposit": 2000,
        "summary": "20 retouched photos, 3 setups, family inclusive + A4 wooden mount",
        "inclusions": [
          "20 Master Retouched Keepsake Portraits",
          "3 Distinct Thematic Setups (Pastel Wraps, Baskets, Blankets)",
          "Full Family & Sibling Posing Included",
          "Includes 1 A4 Solid Wooden Photo Mount Ready to Hang",
          "Express 48-Hour Delivery Turnaround"
        ]
      }
    ]
  },
  {
    "id": "school-events",
    "pathway": "events",
    "subcat": "school-club-events",
    "catLabel": "School Events",
    "title": "School & Institutional Events Coverage",
    "tagline": "Comprehensive documentary photography & cinema reels for prize givings, sports days, graduations & proms",
    "image": "samples/events/school-events/cover_thumb.jpg",
    "imageWebp": "samples/events/school-events/cover_thumb.webp",
    "imageHighRes": "samples/events/school-events/cover.jpg",
    "badge": "🏫 Institutional & Academic",
    "turnaround": "3–5 Business Days",
    "depositRate": "Booking deposit: KSh 8,000 to KSh 20,000 (locks crew & gear)",
    "sampleFolder": "samples/events/school-events",
    "samples": [
      {
        "url": "samples/events/school-events/cover.jpg",
        "type": "image",
        "title": "School Convocation & Academic Campus Assembly"
      }
    ],
    "options": [
      {
        "id": "half-day",
        "name": "Half-Day Academic / Sports",
        "price": 20000,
        "deposit": 8000,
        "summary": "Up to 4 hours coverage, 1 lead photographer, 100+ retouched highlights",
        "inclusions": [
          "Up to 4 Hours High-Speed Event Coverage",
          "1 Lead Senior Photojournalist",
          "100+ Color-Graded & Retouched Key Moments",
          "All RAW Proofs Provided via Cloud Link for School Archives",
          "Turnaround: 3 Business Days"
        ]
      },
      {
        "id": "full-day",
        "name": "Full-Day Gala & Sports Day",
        "popular": true,
        "price": 35000,
        "deposit": 14000,
        "summary": "Up to 8 hours, 2 camera angles (photo + reel highlights), 250+ images",
        "inclusions": [
          "Up to 8 Hours Comprehensive Coverage",
          "2-Person Professional Media Crew",
          "250+ High-Resolution Master Images",
          "1 x 60s Dynamic Highlight Video Reel for School Social Media",
          "Permanent Cloud Download Link for Parents & Administration"
        ]
      },
      {
        "id": "festival-2day",
        "name": "2-Day Tournament / Graduation Festival",
        "price": 55000,
        "deposit": 22000,
        "summary": "2 Full Days coverage, drone aerial views, 2 photographers + videographer",
        "inclusions": [
          "2 Consecutive Full Days Coverage",
          "3-Person Cinema & Photo Crew",
          "4K Aerial Drone Coverage of Campus & Grounds",
          "500+ Retouched Photos + 3-5 Min Official Highlight Film",
          "Same-Day Teaser Pack for Immediate Press & Social Release"
        ]
      }
    ]
  },
  {
    "id": "club-events",
    "pathway": "events",
    "subcat": "school-club-events",
    "catLabel": "Nightlife & Clubs",
    "title": "Club & Nightlife Event Coverage",
    "tagline": "Low-light cinema prime lenses, synchronized flash & high-energy crowd portraits for DJs, lounges & VIP parties",
    "image": "samples/events/club-events/cover_thumb.jpg",
    "imageWebp": "samples/events/club-events/cover_thumb.webp",
    "imageHighRes": "samples/events/club-events/cover.jpg",
    "badge": "🎧 DJ Sets & VIP Nightlife",
    "turnaround": "24–48 Hours",
    "depositRate": "Booking deposit: KSh 6,000 to KSh 18,000 (locks crew)",
    "sampleFolder": "samples/events/club-events",
    "samples": [
      {
        "url": "samples/events/club-events/cover.jpg",
        "type": "image",
        "title": "High-Energy Nightlife & Crowd Celebration"
      }
    ],
    "options": [
      {
        "id": "teaser",
        "name": "Party Teaser (3 Hours)",
        "price": 15000,
        "deposit": 6000,
        "summary": "3 hours coverage, off-camera flash, 60+ vibrant party shots",
        "inclusions": [
          "3 Hours Dedicated Nightlife Coverage",
          "1 Senior Nightlife Specialist Photographer",
          "60+ Color-Graded Vibrant Party & Guest Portraits",
          "DJ Booth, VIP Table & Bar Ambience Shots",
          "Express 24-Hour Delivery for Social Hype"
        ]
      },
      {
        "id": "all-night",
        "name": "All-Night Club Gig",
        "popular": true,
        "price": 28000,
        "deposit": 12000,
        "summary": "Full night coverage (up to 6 hrs), 150+ photos + 45s hype video reel",
        "inclusions": [
          "Up to 6 Hours Full Night Event Coverage",
          "1 Photographer + 1 Vertical Video Reel Creator",
          "150+ High-Contrast Magazine Party Photos",
          "1 x 45s Viral Nightlife Video Reel for TikTok / Instagram",
          "Delivered Next Day by 2:00 PM for Weekend Promo"
        ]
      },
      {
        "id": "vip-festival",
        "name": "VIP Festival / Brand Night",
        "price": 45000,
        "deposit": 18000,
        "summary": "Full night multi-angle team, VIP red carpet backdrop, full recap film",
        "inclusions": [
          "Full Event Duration (8 Hours Coverage)",
          "2 Photographers + 1 4K Gimbal Videographer",
          "Red Carpet / Step-and-Repeat Photo Station",
          "300+ Retouched Photos + 2-Minute Cinematic Aftermovie",
          "Live Same-Night Airdrop / WhatsApp Transfer for Influencers & VIPs"
        ]
      }
    ]
  },
  {
    "id": "fun-club-events",
    "pathway": "events",
    "subcat": "school-club-events",
    "catLabel": "Club & Rally Events",
    "title": "Fun Club, Bikers & Community Meetups",
    "tagline": "High-shutter tracking shots, convoy rolling photography & outdoor expedition coverage for enthusiast groups",
    "image": "samples/events/fun-club-events/cover_thumb.jpg",
    "imageWebp": "samples/events/fun-club-events/cover_thumb.webp",
    "imageHighRes": "samples/events/fun-club-events/cover.jpg",
    "badge": "🏍️ Convoys & Adventures",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 7,000 to KSh 24,000 (locks crew)",
    "sampleFolder": "samples/events/fun-club-events",
    "samples": [
      {
        "url": "samples/events/fun-club-events/cover.jpg",
        "type": "image",
        "title": "Enthusiast Community Rally & Convoy Meetup"
      }
    ],
    "options": [
      {
        "id": "half-day-meet",
        "name": "Half-Day Meet / Ride-Out",
        "price": 18000,
        "deposit": 7000,
        "summary": "Up to 4 hours, static vehicle/member shots, rolling pass shots",
        "inclusions": [
          "Up to 4 Hours Meetup & Ride Coverage",
          "Static Lineup Individual & Group Portraits",
          "Highway Rolling & Cornering Action Photography",
          "80+ Color-Graded High-Res Deliverables",
          "All RAW Files Included for Club Archives"
        ]
      },
      {
        "id": "full-day-rally",
        "name": "Full-Day Rally / Excursion",
        "popular": true,
        "price": 32000,
        "deposit": 13000,
        "summary": "Full day excursion coverage, 200+ action photos + 60s rally reel",
        "inclusions": [
          "Full Day Tracking & Destination Coverage (Up to 8 Hours)",
          "1 Action Photographer + 1 Drone / Reel Creator",
          "200+ Dynamic Action & Campfire/Lunch Gathering Photos",
          "1 x 60s Cinematic Drone & Ground Highlight Video",
          "Cloud Storage Shared with Entire Club Membership"
        ]
      },
      {
        "id": "multi-day-camp",
        "name": "Multi-Day Tour / Camping Expedition",
        "price": 60000,
        "deposit": 24000,
        "summary": "2 Full Days road-trip or camping coverage, full documentary recap",
        "inclusions": [
          "2 Consecutive Days Complete Expedition Coverage",
          "Dedicated Chase Vehicle Accommodation for Media Crew",
          "4K Aerial Drone Scenics Across Road Trip Routes",
          "400+ Master Photos + 3-5 Minute Club Documentary Film",
          "Priority 48-Hour Delivery Turnaround"
        ]
      }
    ]
  },
  {
    "id": "model-portfolio",
    "pathway": "outdoor",
    "subcat": "outdoor-headshots",
    "catLabel": "Model Portfolio",
    "title": "Model Portfolio & Agency Z-Card Shoot",
    "tagline": "Magazine-standard editorial tests, commercial looks, swimwear/casual & printable composite card layouts",
    "image": "samples/outdoor/model-portfolio/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/model-portfolio/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/model-portfolio/cover.jpg",
    "badge": "🌟 Comp Card & Editorial",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 600 to KSh 2,500 (lock your slot)",
    "sampleFolder": "samples/outdoor/model-portfolio",
    "samples": [
      {
        "url": "samples/outdoor/model-portfolio/cover.jpg",
        "type": "image",
        "title": "Editorial Fashion Model Portfolio Test"
      }
    ],
    "options": [
      {
        "id": "starter",
        "name": "Portfolio Starter (6 Shots)",
        "price": 2500,
        "deposit": 600,
        "summary": "6 magazine-retouched images, 2 outfit changes, headshot & 3/4 length",
        "inclusions": [
          "6 High-End Magazine Retouched Images",
          "2 Outfits (Commercial Smile + Dramatic Editorial)",
          "Professional Posing Direction & Lighting",
          "Headshot, 3/4 Profile & Full-Length Poses",
          "Delivered in High-Res via Cloud"
        ]
      },
      {
        "id": "zcard-pro",
        "name": "Pro Agency Comp-Card (12 Shots)",
        "popular": true,
        "price": 5000,
        "deposit": 1200,
        "summary": "12 retouched images, 3 outfit transitions, printable A5 Comp-Card PDF",
        "inclusions": [
          "12 High-Fashion & Commercial Retouched Images",
          "3 Diverse Looks (Casual, High-Fashion, Formal/Swimwear)",
          "Includes Custom Designed Agency Comp-Card (PDF Ready to Print)",
          "Natural Golden Hour + Creative Reflector Lighting",
          "60 Mins Dedicated Session"
        ]
      },
      {
        "id": "agency-elite",
        "name": "Agency Elite Suite (20 Shots + Reel)",
        "price": 9000,
        "deposit": 2200,
        "summary": "20 retouched images, 4 outfits, comp-card layout + 45s runway walk reel",
        "inclusions": [
          "20 Editorial Master Retouched Deliverables",
          "4 Wardrobe Transitions with Location Variety",
          "1 x 45s High-Energy Model Runway & Posing Video Reel",
          "Printable Comp-Card + Digital Instagram Carousel Assets",
          "Express 48-Hour Delivery Turnaround"
        ]
      }
    ]
  },
  {
    "id": "outdoor-silk-wrap",
    "pathway": "outdoor",
    "subcat": "outdoor-headshots",
    "catLabel": "Outdoor Silk Wrap",
    "title": "Outdoor Luxury Silk Wrap Shoot",
    "tagline": "Breathtaking 6-meter flying satin silk wrap session in natural golden-hour wind & outdoor bokeh",
    "image": "samples/outdoor/outdoor-silk-wrap/_R2A6339.jpg",
    "imageHighRes": "samples/outdoor/outdoor-silk-wrap/_R2A6339.jpg",
    "badge": "✨ Flying Silk Satin",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-silk-wrap",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-silk-wrap/_R2A6339.jpg",
        "type": "image",
        "title": "Luxury Satin Drape Wind Motion"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/_R2A6346.jpg",
        "type": "image",
        "title": "Sunset Silhouette with Silk Flow"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/_R2A6356.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · R2A6356"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/_R2A6367.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · R2A6367"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1804.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1804"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1806.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1806"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1818.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1818"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1820.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1820"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1827.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1827"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1829.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1829"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1831.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1831"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1834.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1834"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1835.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1835"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1852.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1852"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1873.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1873"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/BR2A1875.JPG",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · BR2A1875"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0278.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0278"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0280.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0280"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0281.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0281"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0286.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0286"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0297.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0297"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0309 (2).jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0309"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0313.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0313"
      },
      {
        "url": "samples/outdoor/outdoor-silk-wrap/O13A0317.jpg",
        "type": "image",
        "title": "Outdoor Luxury Silk Wrap Shoot · O13A0317"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver Wrap (8 Images)",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images, 1 silk wrap color, 30 min session",
        "inclusions": [
          "8 Retouched High-Fashion Wrap Images",
          "1 Studio Luxury Silk Fabric of Choice (Red, Emerald, Gold, Black, Royal Blue)",
          "Outdoor Natural Light & Breeze Motion",
          "Posing Direction for Dramatic Fabric Waves",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold Allure (15 Images)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "15 retouched images, 2 silk colors, golden hour lighting",
        "inclusions": [
          "15 Editorial-Grade Retouched Images",
          "2 Luxury Silk Wrap Transitions",
          "Dedicated Fabric Assistant for Flying Wrap Dynamics",
          "45 Mins Golden Hour Session",
          "Delivered within 48 Hours"
        ]
      },
      {
        "id": "platinum",
        "name": "Royal Silk Luxe (25 Images)",
        "price": 5500,
        "deposit": 1400,
        "summary": "25 retouched images, 3 wrap looks + 45s slow-motion wind reel",
        "inclusions": [
          "25 Master Retouched Silk Wrap Portraits",
          "3 Silk Wrap Colors / Styles Included",
          "1 x 45s Slow-Motion Vertical Fabric Reel for Social Media",
          "Full 60 Mins Sunset Session",
          "Priority 24-Hour Turnaround"
        ]
      }
    ]
  },
  {
    "id": "outdoor-graduation",
    "pathway": "outdoor",
    "subcat": "outdoor-headshots",
    "catLabel": "Campus Graduation",
    "title": "Campus & Outdoor Graduation Milestone",
    "tagline": "Celebrate your degree in natural sunlight on university campus grounds, gates, convocation lawns & scenic gardens",
    "image": "samples/outdoor/outdoor-graduation/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/outdoor-graduation/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/outdoor-graduation/cover.jpg",
    "badge": "🎓 Campus Convocation",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 500 to KSh 1,400 (lock your slot)",
    "sampleFolder": "samples/outdoor/outdoor-graduation",
    "samples": [
      {
        "url": "samples/outdoor/outdoor-graduation/cover.jpg",
        "type": "image",
        "title": "Sunlit Campus Convocation Regalia Walk"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_4998.jpg",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · PRI 4998"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5013.jpg",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · PRI 5013"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5363.jpg",
        "type": "image",
        "title": "Degree Scroll & Celebration Bouquet"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5412.jpg",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · PRI 5412"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5893.jpg",
        "type": "image",
        "title": "Golden Hour Outdoor Graduation Glow"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5895.jpg",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · PRI 5895"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/PRI_5912.jpg",
        "type": "image",
        "title": "Grand Convocation Regalia Portrait"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1757.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1757"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1765.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1765"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1768.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1768"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1770.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1770"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1773.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1773"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1865.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1865"
      },
      {
        "url": "samples/outdoor/outdoor-graduation/SHE_1873.JPG",
        "type": "image",
        "title": "Campus & Outdoor Graduation Milestone · SHE 1873"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver Scholar (8 Images)",
        "price": 2000,
        "deposit": 500,
        "summary": "8 retouched images on campus grounds, gown & cap, 30 mins",
        "inclusions": [
          "8 Magazine-Grade Retouched Graduation Images",
          "Academic Regalia (Gown, Cap, Hood & Scroll)",
          "Campus Landmarks, Gates & Green Lawns",
          "Includes Cap Toss Action Shots",
          "Delivered via WhatsApp & Cloud"
        ]
      },
      {
        "id": "gold",
        "name": "Gold Honors (15 Images)",
        "popular": true,
        "price": 3500,
        "deposit": 900,
        "summary": "15 retouched images, campus grounds + family portraits",
        "inclusions": [
          "15 Master Retouched Convocation Portraits",
          "Dedicated Graduate Solo + Proud Parents & Family Members",
          "45 Mins Campus Session Across Multiple Landmarks",
          "Degree Scroll & Honors Detail Posing",
          "Delivered within 48 Hours"
        ]
      },
      {
        "id": "platinum",
        "name": "Presidential Convocation (25 Images)",
        "price": 5500,
        "deposit": 1400,
        "summary": "25 retouched images, family inclusive, 60 mins + A4 wooden mount",
        "inclusions": [
          "25 Master Retouched Graduation Portraits",
          "Comprehensive Campus & Convocation Coverage",
          "Includes 1 Solid Wooden A4 Photo Mount Ready to Hang",
          "1 x 45s Graduate Celebration Reel for TikTok / Instagram",
          "Express 24-Hour Delivery"
        ]
      }
    ]
  },
  {
    "id": "outdoor-traditional",
    "pathway": "outdoor",
    "subcat": "outdoor-traditional",
    "catLabel": "Outdoor Cultural Heritage",
    "title": "Traditional Cultural Shoot (Outdoor)",
    "tagline": "Cultural attire, beadwork & heritage portraits captured in scenic natural gardens & golden hour light",
    "image": "samples/outdoor/traditional-creative/cover_thumb.jpg",
    "imageWebp": "samples/outdoor/traditional-creative/cover_thumb.webp",
    "imageHighRes": "samples/outdoor/traditional-creative/cover.jpg",
    "badge": "🌿 Natural Heritage",
    "turnaround": "2–3 Business Days",
    "depositRate": "Booking deposit: KSh 1,000 to KSh 2,500 (lock your slot)",
    "sampleFolder": "samples/outdoor/traditional-creative",
    "samples": [
      {
        "url": "samples/outdoor/traditional-creative/BRA (2).jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · BRA"
      },
      {
        "url": "samples/outdoor/traditional-creative/BRA (17).jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · BRA"
      },
      {
        "url": "samples/outdoor/traditional-creative/BRA (22).jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · BRA"
      },
      {
        "url": "samples/outdoor/traditional-creative/cover.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · Cover"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0278.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0278"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0280.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0280"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0281.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0281"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0286.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0286"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0297.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0297"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0309 (2).jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0309"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0313.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0313"
      },
      {
        "url": "samples/outdoor/traditional-creative/O13A0317.jpg",
        "type": "image",
        "title": "Traditional Cultural Shoot (Outdoor) · O13A0317"
      }
    ],
    "options": [
      {
        "id": "silver",
        "name": "Silver Outdoor Cultural",
        "price": 3500,
        "deposit": 1000,
        "summary": "7 retouched photos, 1 outfit, 1 hr session (outdoor garden)",
        "inclusions": [
          "7 High-Res Magazine Retouched Photos",
          "1 Cultural Attire / Traditional Outfit",
          "1 Hour Outdoor Garden / Scenic Session",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      },
      {
        "id": "gold",
        "name": "Gold Outdoor Cultural",
        "popular": true,
        "price": 5500,
        "deposit": 1500,
        "summary": "12 retouched photos, 2 outfits, 1.5 hr session, cultural props",
        "inclusions": [
          "12 High-Res Magazine Retouched Photos",
          "2 Cultural Attire Changes",
          "1.5 Hours Scenic Outdoor Session",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      },
      {
        "id": "platinum",
        "name": "Platinum Outdoor Cultural",
        "price": 8500,
        "deposit": 2500,
        "summary": "20 retouched photos, 3 outfits, 2 hr session + 4K highlight reel",
        "inclusions": [
          "20 High-Res Magazine Retouched Photos",
          "3 Cultural Attire Changes",
          "2 Hours Complete Outdoor Storytelling",
          "1 Cinematic 4K Highlight Reel Cut for Socials",
          "Delivered via Cloud & WhatsApp within 48 Hours"
        ]
      }
    ]
  }
];
