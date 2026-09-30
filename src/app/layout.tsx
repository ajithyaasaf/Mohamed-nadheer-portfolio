import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamednadheer.com"),
  title: "Mohamed Nadheer — Video Editor | Madurai, India",
  description:
    "Professional video editor based in Madurai, India. Specializing in cinematic editing, motion graphics, corporate videos, YouTube content, Instagram reels, and wedding films. Over 150+ projects edited.",
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
      "Editing stories through rhythm, motion, and image. 150+ projects delivered. Premiere Pro, DaVinci Resolve, CapCut, Blender.",
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
      "Editing stories through rhythm, motion, and image. 150+ projects delivered.",
    images: ["/media/showreel-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0A",
  colorScheme: "dark",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-[#0B0B0A] text-[#F5F2EB]`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#0B0B0A] text-[#F5F2EB]">
        {children}
      </body>
    </html>
  );
}
