# Mohamed Nadheer — Video Editor Portfolio: Asset Replacement Guide

This portfolio is built to be **100% plug-and-play**. All project data is centralized in:
`src/data/projects.ts`

And all media files live in:
`public/media/`

---

## 🎬 1. Showreel Video & Poster
To replace the hero showreel with your actual reel:
1. Save your showreel video as:
   `public/media/showreel.mp4`
2. Save your showreel poster image (16:9 or 2.39:1 widescreen) as:
   `public/media/showreel-poster.jpg`

The built-in video player automatically detects `showreel.mp4` and prioritizes it.

---

## 📸 2. Portrait Photo
To update your portrait in the About section:
1. Save your portrait image (high quality 3:4 or 4:5 vertical photo) as:
   `public/media/nadheer-portrait.jpg`

---

## 🎞️ 3. Project Videos & Thumbnails
Place your project media in `public/media/`:
- `project-cinematic.jpg` / `project-01.mp4`
- `project-reels.jpg` / `project-02.mp4`
- `project-commercial.jpg` / `project-03.mp4`
- `project-wedding.jpg` / `project-04.mp4`
- `project-motion.jpg` / `project-05.mp4`

You can also use direct cloud links (e.g. AWS S3, Cloudflare R2, Google Storage, Vimeo direct MP4, or YouTube links) by updating the `videoSrc` property inside `src/data/projects.ts`.

---

## ➕ 4. Adding More Projects
Open `src/data/projects.ts` and simply append a new object to the `PROJECTS` array:

```typescript
{
  id: "project-06",
  number: "06",
  title: "YOUR PROJECT TITLE",
  category: "CINEMATIC", // or "REELS", "COMMERCIAL", "WEDDING", "MOTION", "YOUTUBE"
  year: "2026",
  role: "Lead Editor / Colorist",
  software: ["Adobe Premiere Pro", "DaVinci Resolve"],
  duration: "01:45",
  aspectRatio: "16:9",
  aspectRatioClass: "aspect-[16/9]",
  fps: "24 FPS",
  resolution: "4K DCI",
  poster: "/media/your-poster.jpg",
  videoSrc: "/media/your-video.mp4",
  synopsis: "Brief description of the film/video...",
  editingNotes: {
    timeline: "...",
    cutStyle: "...",
    colorGrade: "...",
    soundDesign: "..."
  },
  cutsCount: 42,
  deliveryPlatform: "YouTube 4K"
}
```

The website will automatically update its filters, project count, case studies, and modal players without requiring any UI code changes.
