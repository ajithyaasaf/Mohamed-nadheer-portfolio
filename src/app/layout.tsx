import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamednadheer.com"),
  title: "Mohamed Nadheer — Video Editor | Madurai, India",
  description:
    "Professional video editor based in Madurai, India. Specializing in cinematic editing, motion graphics, corporate videos, YouTube content, Instagram reels, and wedding films. Over 50+ projects edited.",
  keywords: [
    "Mohamed Nadheer",
    "Video Editor",
    "Madurai Video Editor",
    "Tamil Nadu Video Editor",
    "Cinematic Video Editing",
    "Premiere Pro Editor",
    "DaVinci Resolve Colorist",
    "Motion Graphics",
    "Instagram Reels Editor",
    "Commercial Video Editor",
  ],
  authors: [{ name: "Mohamed Nadheer", url: "https://nadheer.portfolio" }],
  creator: "Mohamed Nadheer",
  openGraph: {
    title: "Mohamed Nadheer — Video Editor",
    description:
      "Editing stories through rhythm, motion, and image. 50+ projects delivered. Premiere Pro, DaVinci Resolve, CapCut, Blender.",
    siteName: "Mohamed Nadheer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/media/showreel-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Mohamed Nadheer — Video Editor Showreel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Nadheer — Video Editor",
    description:
      "Editing stories through rhythm, motion, and image. 50+ projects delivered.",
    images: ["/media/showreel-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3E9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0A" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full bg-canvas text-primary`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-canvas text-primary">
        {children}
      </body>
    </html>
  );
}
