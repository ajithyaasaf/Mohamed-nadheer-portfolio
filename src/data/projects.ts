export interface Project {
  id: string;
  number: string;
  title: string;
  category: "CINEMATIC" | "COMMERCIAL" | "REELS" | "WEDDING" | "MOTION";
  year: string;
  role: string;
  software: string[];
  duration: string;
  aspectRatio: "16:9" | "9:16" | "2.39:1";
  aspectRatioClass: string;
  fps: string;
  resolution: string;
  poster: string;
  videoSrc?: string;
  youtubeId: string;
  youtubeUrl: string;
  featured?: boolean;
  synopsis: string;
  editingNotes: {
    timeline: string;
    cutStyle: string;
    colorGrade: string;
    soundDesign: string;
  };
  cutsCount: number;
  deliveryPlatform: string;
}

export const SHOWREEL_DATA = {
  title: "MOHAMED NADHEER — SELECTED EDITORIAL SHOWREEL",
  featuredFilm: "WEDDING RAGA: CINEMATIC MASTER",
  year: "2025–2026",
  duration: "04:15",
  fps: "24.00 FPS",
  resolution: "4K DCI WIDESCREEN",
  timecode: "00:04:15:08",
  codec: "Apple ProRes 422 HQ / Rec.709",
  poster: "/media/wedding-raga.jpg",
  youtubeId: "kcjN_RkwacA",
  youtubeUrl: "https://youtu.be/kcjN_RkwacA",
  localVideo: "/media/showreel.mp4",
  fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  description:
    "Official portfolio showcase of Mohamed Nadheer's real post-production projects — spanning widescreen cinematic wedding films, commercial brand ads, dynamic motion graphics, and high-retention viral reels.",
};

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "WEDDING RAGA — CINEMATIC FILM",
    category: "WEDDING",
    year: "2026",
    role: "Lead Editor / Narrative Arch / Film Colorist / Sound Master",
    software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
    duration: "04:15",
    aspectRatio: "16:9",
    aspectRatioClass: "aspect-[16/9]",
    fps: "24 FPS",
    resolution: "4K DCI (3840 x 2160)",
    poster: "/media/wedding-raga.jpg",
    youtubeId: "kcjN_RkwacA",
    youtubeUrl: "https://youtu.be/kcjN_RkwacA?si=ImiEsANFfheV9PkR",
    featured: true,
    synopsis:
      "A grand, emotionally anchored cinematic wedding film blending sacred classical traditions with modern cinematic storytelling. Color-graded with filmic highlight roll-off and warm golden sunlight.",
    editingNotes: {
      timeline: "Assembly cut interweaving intimate morning rituals, sacred vows, and celebration with music beat sync.",
      cutStyle: "Poetic dissolves and match cuts between bride's eye-line and sacred temple architecture.",
      colorGrade: "Kodak 2383 film print curve with rich silk saffron, warm skin tones, and rich contrast.",
      soundDesign: "Clean dialogue cleanup, live acoustic instrumentation, and ambient temple nadaswaram acoustics.",
    },
    cutsCount: 72,
    deliveryPlatform: "4K YouTube Premiere & Cinema Archive",
  },
  {
    id: "project-02",
    number: "02",
    title: "HOTEL: RAMESHWARAM RESORT",
    category: "COMMERCIAL",
    year: "2026",
    role: "Commercial Video Editor / Atmosphere & Color Grading",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    duration: "02:30",
    aspectRatio: "16:9",
    aspectRatioClass: "aspect-[16/9]",
    fps: "24 FPS",
    resolution: "UHD (3840 x 2160)",
    poster: "/media/hotel-rameshwaram.jpg",
    youtubeId: "A2D8YCGQEpc",
    youtubeUrl: "https://youtu.be/A2D8YCGQEpc?si=Qt4hGH7EX7Y0ov_4",
    featured: false,
    synopsis:
      "Atmospheric hospitality brand documentary capturing the coastal resort elegance, cultural reverence of Rameshwaram, and serene guest experience.",
    editingNotes: {
      timeline: "Smooth architectural progression from sunrise ocean vistas into interior luxury suites.",
      cutStyle: "Tracking match cuts and seamless whip pans linking coastal breeze with warm interior ambience.",
      colorGrade: "Soft warm coastal highlights paired with deep azure ocean water and natural wood textures.",
      soundDesign: "Multi-layered binaural ocean surf, acoustic guitar melodies, and gentle ambient foley.",
    },
    cutsCount: 58,
    deliveryPlatform: "Commercial Campaign & Broadcast",
  },
  {
    id: "project-03",
    number: "03",
    title: "ROYAL WEDDING REEL",
    category: "REELS",
    year: "2026",
    role: "Vertical Reel Editor / Rhythm Pacing / Speed Ramping",
    software: ["CapCut Pro", "Adobe Premiere Pro"],
    duration: "00:30",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "60 FPS Mastered",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/wedding-reel.jpg",
    youtubeId: "BD78iNhwhCQ",
    youtubeUrl: "https://youtube.com/shorts/BD78iNhwhCQ?si=i5SzQ0WGlc-AdPoU",
    featured: false,
    synopsis:
      "High-energy vertical wedding reel structured with dynamic beat sync, micro-frame cuts, and romantic slow-motion captures for maximum social engagement.",
    editingNotes: {
      timeline: "Cuts synchronized strictly to musical downbeats, with a punchy 1-second retention hook.",
      cutStyle: "Speed ramps (from 400% down to 25% slow-mo) accentuating festive garment motion and smiles.",
      colorGrade: "Warm South Indian festive saturation, glowing golden highlights, and clean skin balance.",
      soundDesign: "Sub-bass risers, cloth swooshes, and celebratory ambient cheering.",
    },
    cutsCount: 38,
    deliveryPlatform: "Instagram Reels & YouTube Shorts",
  },
  {
    id: "project-04",
    number: "04",
    title: "NANDU BHAI AD CAMPAIGN",
    category: "COMMERCIAL",
    year: "2025",
    role: "Commercial Social Video / Fast-Cuts / Hook Architecture",
    software: ["Adobe Premiere Pro", "CapCut Pro"],
    duration: "00:45",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "30 FPS",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/nandu-bhai-ad.jpg",
    youtubeId: "WkPVxx9Re-8",
    youtubeUrl: "https://youtube.com/shorts/WkPVxx9Re-8?si=--Ae-19vXlfTQwQq",
    featured: false,
    synopsis:
      "Sharp, fast-paced commercial advertisement built for viral retention with snappy text animations, rapid scene transitions, and punchy comedic pacing.",
    editingNotes: {
      timeline: "Zero dead-air assembly cut; every frame drives message urgency and product clarity.",
      cutStyle: "Jump cuts and dynamic zoom snaps timed to voiceover punchlines.",
      colorGrade: "Clean commercial pop grade with vibrant brand colors and punchy contrast.",
      soundDesign: "Custom whoosh transitions, impact hits, pop sound effects, and upbeat commercial bed.",
    },
    cutsCount: 54,
    deliveryPlatform: "Instagram Sponsored Reels & YouTube Shorts",
  },
  {
    id: "project-05",
    number: "05",
    title: "HAVENS MOTION GRAPHICS",
    category: "MOTION",
    year: "2026",
    role: "Motion Graphics / Kinetic Typography / 3D Composition",
    software: ["Blender", "Adobe Premiere Pro"],
    duration: "00:32",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "30 FPS",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/havens-motion.jpg",
    youtubeId: "-u2GxIcf1xQ",
    youtubeUrl: "https://youtube.com/shorts/-u2GxIcf1xQ?si=-VkyRqwr5HiwXYNC",
    featured: false,
    synopsis:
      "Modern graphic design in motion: showcasing sleek corporate visual branding, architectural layout transitions, and fluid kinetic titles.",
    editingNotes: {
      timeline: "Keyframe-accurate motion choreography synchronized to electronic percussive beats.",
      cutStyle: "Geometric wipes, spatial 3D camera sweeps, and kinetic typography reveals.",
      colorGrade: "High-contrast minimalist dark palette with warm amber and cream accents.",
      soundDesign: "Digital synthesis clicks, UI tech foley, whoosh risers, and sub-bass accents.",
    },
    cutsCount: 32,
    deliveryPlatform: "Brand Social Channel & Commercial Portfolio",
  },
  {
    id: "project-06",
    number: "06",
    title: "HAVENS AI CREATIVE AD",
    category: "COMMERCIAL",
    year: "2026",
    role: "AI Post-Production / Sound Polish / Sequence Assembly",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    duration: "00:40",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "30 FPS",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/havens-ai-ad.jpg",
    youtubeId: "w2j9_hhLv4Q",
    youtubeUrl: "https://youtube.com/shorts/w2j9_hhLv4Q?si=UK1Ma7JuQOiXbCQ7",
    featured: false,
    synopsis:
      "Creative futuristic commercial showcasing AI-generated visual concepts, blended with high-grade editing transitions and immersive sound design.",
    editingNotes: {
      timeline: "Seamless sequence stitching between surreal conceptual frames and clean typography.",
      cutStyle: "Match cuts across visual themes with digital warp transitions.",
      colorGrade: "Vivid cinematic grade with saturated neon tones and deep shadow balance.",
      soundDesign: "Synthesized atmosphere drone, glitch impacts, and voiceover enhancement.",
    },
    cutsCount: 46,
    deliveryPlatform: "AI Product Launch & Instagram Ads",
  },
  {
    id: "project-07",
    number: "07",
    title: "NADHEER HAVENS BRAND REEL",
    category: "REELS",
    year: "2026",
    role: "Vertical Director of Edit / Pacing & Retention",
    software: ["CapCut Pro", "Adobe Premiere Pro"],
    duration: "00:35",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "60 FPS Mastered",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/nadheer-havens.jpg",
    youtubeId: "BK22l3U5Oqg",
    youtubeUrl: "https://youtube.com/shorts/BK22l3U5Oqg?si=v-Vl4Swz_DWtrNwJ",
    featured: false,
    synopsis:
      "Dynamic short-form lifestyle reel featuring energetic rhythm editing, micro-speed ramping, and high-production value social formatting.",
    editingNotes: {
      timeline: "Fast-tempo cut pacing designed to maximize re-watch rate and algorithmic reach.",
      cutStyle: "Whip pans, optical zooms, and beat-matched frame snapping.",
      colorGrade: "Clean lifestyle tone with crisp contrast and neutral shadows.",
      soundDesign: "Percussive rhythmic sound bed layered with real-world organic foley.",
    },
    cutsCount: 48,
    deliveryPlatform: "Instagram Reels & YouTube Shorts",
  },
];

export const CAPABILITIES = [
  {
    category: "EDITING DISCIPLINES",
    items: [
      { name: "Cinematic & Narrative Editing", desc: "Long-form pacing, dramatic tension, and emotional rhythm" },
      { name: "Instagram Reels & Shorts", desc: "High-retention 9:16 vertical hooks with dynamic speed ramps" },
      { name: "Commercial & Brand Campaigns", desc: "Brand storytelling, product showcases, and executive pacing" },
      { name: "Wedding Cinema & Highlights", desc: "Documentary-style vows, golden hour palette, and poetic cuts" },
      { name: "Motion Graphics & 3D", desc: "Kinetic typography, architectural layouts, and lower thirds" },
      { name: "Multi-Cam Live & Events", desc: "Seamless multicam cutting and live concert/event synchronization" },
    ],
  },
  {
    category: "POST-PRODUCTION CRAFT",
    items: [
      { name: "Color Grading & Look Dev", desc: "DaVinci Resolve node trees, film print emulation, and skin balancing" },
      { name: "Sound Design & Foley", desc: "Atmosphere beds, transient impacts, whoosh transitions, vocal polish" },
      { name: "Pacing & Retention Hooks", desc: "Trimming dead-air, musical beat-matching, and psychological flow" },
      { name: "Delivery Mastering", desc: "Pristine exports for 4K YouTube (16:9) and Instagram Reels (9:16)" },
    ],
  },
  {
    category: "PRIMARY SOFTWARE SUITE",
    items: [
      { name: "Adobe Premiere Pro", desc: "Primary editing workstation, multi-track timeline, production workflows" },
      { name: "DaVinci Resolve Studio", desc: "Color grading, Fairlight audio mastering, Blackmagic RAW processing" },
      { name: "CapCut Pro", desc: "Rapid-turnaround social formats, vertical speed ramps, auto-captions" },
      { name: "Blender 3D", desc: "Camera tracking, abstract motion visuals, and 3D titles" },
    ],
  },
];

export const EDITORIAL_PROCESS = [
  {
    step: "01",
    phase: "RAW",
    title: "Ingest & Story Assembly",
    description:
      "Transcoding, logging footage, marking selects, and building the skeletal assembly cut without soundtrack interference to ensure the visual narrative holds pure weight on its own.",
  },
  {
    step: "02",
    phase: "RHYTHM",
    title: "Pacing & Beat Synchronization",
    description:
      "Carving out micro-rhythms, trimming dead air, timing cuts to emotional beats rather than predictable markers, and sculpting the internal tempo of every scene.",
  },
  {
    step: "03",
    phase: "MOTION",
    title: "Dynamics, Color & Sound Polish",
    description:
      "Layering kinetic transitions, DaVinci Resolve color passes, match cuts, custom soundscapes, foley impacts, and subtitle motion that amplify engagement.",
  },
  {
    step: "04",
    phase: "FINAL CUT",
    title: "Mastering & Platform Delivery",
    description:
      "Strict color space exports (Rec.709 / Rec.2020 / sRGB), multi-platform aspect ratio deliverables (16:9, 9:16, 4:5), and pristine compression without artifacting.",
  },
];
