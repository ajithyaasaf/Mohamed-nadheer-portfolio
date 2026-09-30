export interface Project {
  id: string;
  number: string;
  title: string;
  category: "CINEMATIC" | "COMMERCIAL" | "REELS" | "WEDDING" | "MOTION" | "YOUTUBE";
  year: string;
  role: string;
  software: string[];
  duration: string;
  aspectRatio: "16:9" | "9:16" | "2.39:1";
  aspectRatioClass: string;
  fps: string;
  resolution: string;
  poster: string;
  videoSrc: string; // Local path in /media/ or online stream
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
  year: "2025–2026",
  duration: "01:24",
  fps: "24.00 FPS",
  resolution: "4K DCI WIDESCREEN",
  timecode: "00:01:24:18",
  codec: "Apple ProRes 422 HQ / Rec.709",
  poster: "/media/showreel-poster.jpg",
  // If showreel.mp4 is placed in public/media/, it will load. We also provide a fast cinematic demo video fallback.
  localVideo: "/media/showreel.mp4",
  fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  description:
    "A tight, rhythmic retrospective compiling 150+ commercial edits, cinematic short narratives, high-impact social reels, and sound-driven montage work.",
};

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "CHRONICLES OF DUSK",
    category: "CINEMATIC",
    year: "2026",
    role: "Lead Editor / Colorist / Audio Pacing",
    software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
    duration: "03:12",
    aspectRatio: "2.39:1",
    aspectRatioClass: "aspect-[2.39/1]",
    fps: "24 FPS",
    resolution: "4K DCI (4096 x 1716)",
    poster: "/media/project-cinematic.jpg",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    featured: true,
    synopsis:
      "A high-tension neo-noir cinematic narrative cut to sparse ambient soundscapes and sharp rhythmic tension. Shot across rainy urban vistas, exploring alienation and unresolved pursuit.",
    editingNotes: {
      timeline: "Assembly cut timed strictly to heartbeat rhythm and diegetic rain foley before the score enters.",
      cutStyle: "Match cuts between architectural lines and character eye-lines, holding tension before sudden snap cuts.",
      colorGrade: "Kodak 2383 print emulation LUT curve with lifted deep blacks and subdued cyan night highlights.",
      soundDesign: "Sub-bass rumble paired with precise rain droplets and hollow footsteps to emphasize psychological isolation.",
    },
    cutsCount: 48,
    deliveryPlatform: "Film Festival & Theatrical Screening",
  },
  {
    id: "project-02",
    number: "02",
    title: "PULSE MADURAI: STREET KINETICS",
    category: "REELS",
    year: "2026",
    role: "Vertical Director of Edit / Speed Ramping / Sound Sync",
    software: ["CapCut Pro", "Adobe Premiere Pro"],
    duration: "00:38",
    aspectRatio: "9:16",
    aspectRatioClass: "aspect-[9/16]",
    fps: "60 FPS (Mastered to 30 FPS)",
    resolution: "Vertical UHD (2160 x 3840)",
    poster: "/media/project-reels.jpg",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    featured: false,
    synopsis:
      "Rapid-fire street dance and movement captured against the vibrant night corridors and temple lights of Madurai. Designed for maximum retention and rhythmic hook in the first 1.2 seconds.",
    editingNotes: {
      timeline: "Micro-frame cuts synced to transient bass drum transients, alternating between extreme wide and macro close-ups.",
      cutStyle: "Seamless whip pans and speed ramp transitions (800% to 25% slow-mo) catching mid-air kinetic points.",
      colorGrade: "High dynamic contrast with vibrant neon signage and warm temple sodium vapor street illumination.",
      soundDesign: "Custom whooshes, textile foley, and bass drops layered underneath traditional percussive beats.",
    },
    cutsCount: 62,
    deliveryPlatform: "Instagram Reels & YouTube Shorts",
  },
  {
    id: "project-03",
    number: "03",
    title: "APEX HORIZON: COASTAL RUN",
    category: "COMMERCIAL",
    year: "2025",
    role: "Commercial Post-Production / Sound Mix / Motion Graphics",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    duration: "01:15",
    aspectRatio: "16:9",
    aspectRatioClass: "aspect-[16/9]",
    fps: "24 FPS",
    resolution: "UHD (3840 x 2160)",
    poster: "/media/project-commercial.jpg",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    featured: false,
    synopsis:
      "A cinematic commercial brand film showcasing high-performance automotive engineering navigating winding mountain fog during the blue hour twilight.",
    editingNotes: {
      timeline: "Accelerating rhythm that mirrors engine acceleration curves from idle hum to high RPM apex.",
      cutStyle: "Tracking-axis match cuts linking wheel rotation with coastal guardrail motion blur.",
      colorGrade: "Cold slate blue ambient treatment paired with warm tungsten headlight beams and deep matte carbon textures.",
      soundDesign: "Multi-track engine exhaust binaural recordings mixed with deep synthetic bass sweeps.",
    },
    cutsCount: 39,
    deliveryPlatform: "Commercial Broadcast & Brand Campaign",
  },
  {
    id: "project-04",
    number: "04",
    title: "GOLDEN KNOTS: SITA & ARJUN",
    category: "WEDDING",
    year: "2025",
    role: "Wedding Film Editor / Narrative Arch / Colorist",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    duration: "04:30",
    aspectRatio: "16:9",
    aspectRatioClass: "aspect-[16/9]",
    fps: "24 FPS",
    resolution: "4K DCI (3840 x 2160)",
    poster: "/media/project-wedding.jpg",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    featured: false,
    synopsis:
      "An emotive documentary-style wedding film rejecting standard generic music montages in favor of personal vows, natural ambient celebration, and golden hour intimacy.",
    editingNotes: {
      timeline: "Speech-anchored narrative intercutting between quiet morning preparations and vibrant ritual celebrations.",
      cutStyle: "Poetic lingering dissolves and gentle jump cuts capturing genuine micro-expressions and laughter.",
      colorGrade: "Warm Tuscan sunlight tones, rich saffron and silk gold saturation with gentle highlight roll-off.",
      soundDesign: "Intimate wireless lapel dialogue cleaned with vocal isolation, wrapped in acoustic strings and temple nadaswaram.",
    },
    cutsCount: 54,
    deliveryPlatform: "Private Family Archive & 4K Cinema Premiere",
  },
  {
    id: "project-05",
    number: "05",
    title: "KINETIC TENSION: 3D EXPERIMENT",
    category: "MOTION",
    year: "2026",
    role: "3D Animation / Motion Sequencing / Sound Synthesis",
    software: ["Blender", "Adobe Premiere Pro"],
    duration: "00:45",
    aspectRatio: "16:9",
    aspectRatioClass: "aspect-[16/9]",
    fps: "30 FPS",
    resolution: "UHD (3840 x 2160)",
    poster: "/media/project-motion.jpg",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    featured: false,
    synopsis:
      "An experimental kinetic piece exploring mechanical fluid deformation and tensile resistance in simulated zero-gravity physics.",
    editingNotes: {
      timeline: "Rhythmic synchronization between mechanical gear articulation and synthetic percussive ticks.",
      cutStyle: "Hard cuts strictly on phase shifts in the mechanical topology.",
      colorGrade: "Monochrome industrial metal finishes with caustic dark amber bounce lights.",
      soundDesign: "Custom synthesized servo motors, metallic clicks, and low-frequency gravitational hums.",
    },
    cutsCount: 28,
    deliveryPlatform: "Digital Art Exhibition & Creative Studio Reel",
  },
];

export const CAPABILITIES = [
  {
    category: "EDITING DISCIPLINES",
    items: [
      { name: "Cinematic Editing", desc: "Long-form pacing, narrative tension, and emotional rhythm" },
      { name: "Instagram Reels & Shorts", desc: "High-retention 9:16 vertical hooks with dynamic speed ramps" },
      { name: "Corporate & Commercial", desc: "Brand storytelling, product showcases, and executive pacing" },
      { name: "Wedding Cinema", desc: "Documentary-style vows, golden hour color palette, and poetic cuts" },
      { name: "YouTube Content", desc: "Story-driven pacing, retention optimization, and visual gags" },
      { name: "Multi-Cam Concerts & Events", desc: "Live music synchronization and seamless multicam switching" },
    ],
  },
  {
    category: "POST-PRODUCTION CRAFT",
    items: [
      { name: "Color Grading & Look Dev", desc: "DaVinci Resolve node trees, film print emulation, and skin balancing" },
      { name: "Sound Design & Foley", desc: "Atmosphere beds, transient impacts, whoosh transitions, vocal polish" },
      { name: "Motion Graphics & Titles", desc: "Minimalist cinematic typography, lower thirds, and animated posters" },
      { name: "3D Integration (Blender)", desc: "Product mockups, mechanical animation, and camera tracking" },
    ],
  },
  {
    category: "PRIMARY SOFTWARE SUITE",
    items: [
      { name: "Adobe Premiere Pro", desc: "Primary editing workstation, multi-track timeline, production workflows" },
      { name: "DaVinci Resolve", desc: "Color grading, Fairlight audio mastering, Blackmagic RAW processing" },
      { name: "CapCut Pro", desc: "Rapid-turnaround social formats, auto-captions, vertical speed ramps" },
      { name: "Blender", desc: "3D camera tracking, product renders, and abstract motion assets" },
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
