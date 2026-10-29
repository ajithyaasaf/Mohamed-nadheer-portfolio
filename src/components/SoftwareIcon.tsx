"use client";

import React from "react";

interface SoftwareIconProps {
  name: string;
  className?: string;
}

export default function SoftwareIcon({ name, className = "w-4 h-4" }: SoftwareIconProps) {
  const normalized = name.toLowerCase().trim();

  // 1. Adobe Premiere Pro
  if (normalized.includes("premiere")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#00005B" />
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="#9999FF" strokeWidth="1.2" />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fill="#9999FF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Pr
        </text>
      </svg>
    );
  }

  // 2. DaVinci Resolve Studio
  if (normalized.includes("davinci") || normalized.includes("resolve")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        {/* 3-blades DaVinci Color Wheel Pinwheel */}
        <circle cx="12" cy="12" r="11" fill="#15171C" />
        {/* Top Blade: Red */}
        <path
          d="M12 2.5C14.5 2.5 17 4.5 17 7.5C17 9.8 14.8 11.2 12.5 10.8C11.5 10.6 11 9.5 11.2 8.5C11.4 7 10.5 4 12 2.5Z"
          fill="#FF3B30"
        />
        {/* Bottom Right Blade: Green */}
        <path
          d="M19.5 16C18.2 18 15.8 19.5 13 19C11 18.5 10.2 16 11.2 14C11.8 13 13 12.8 14 13.2C15.5 13.8 18.5 14.5 19.5 16Z"
          fill="#34C759"
        />
        {/* Bottom Left Blade: Blue */}
        <path
          d="M4.5 15C4 12.5 5 10 7.5 9C9.5 8 11.5 10 11 12C10.5 13.2 9.2 13.5 8.2 13C6.8 12.5 5 14 4.5 15Z"
          fill="#007AFF"
        />
        <circle cx="12" cy="12" r="1.8" fill="#FFFFFF" opacity="0.9" />
      </svg>
    );
  }

  // 3. CapCut Pro
  if (normalized.includes("capcut")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#0E0E0E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 6.2v-2.2l-3.2 1.7v1.4c0 1-.7 1.7-1.8 1.7H5.8c-1.1 0-1.8-.7-1.8-1.7V5.5L8.5 12 4 14.5v1.6c0 1.1.7 1.8 1.8 1.8h8.2c1.1 0 1.8-.7 1.8-1.8v-1.4l3.2 1.7V14L13.8 12 19 6.2zM10.8 13.3l5.5 2.8H5.5l5.3-2.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 4. Blender 3D
  if (normalized.includes("blender")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        {/* Blender Orange Loop */}
        <path
          d="M12.5 13.2a3.4 3.4 0 0 1 2.2-.8c.8 0 1.6.3 2.2.8.6.5 1 1.2 1 2a3.4 3.4 0 0 1-2.4 1 3.4 3.4 0 0 1-2.4-1c-.6-.5-.9-1.3-.9-2M7.4 14.8c0 .3.1.9.3 1.4a7.4 7.4 0 0 0 1.6 2.8 8.2 8.2 0 0 0 2.8 2 9 9 0 0 0 3.7.8 9 9 0 0 0 3.6-.8 8.3 8.3 0 0 0 2.8-2 7.4 7.4 0 0 0 1.6-2.8 7 7 0 0 0 .2-3.1 7.1 7.1 0 0 0-1-2.8 7.8 7.8 0 0 0-1.8-2L13.6 2.5c-.5-.4-1.3-.4-1.9 0-.5.4-.6 1-.1 1.4l3.1 2.6-9.5.01c-.8 0-1.5.5-1.7 1.2-.1.6.4 1.2 1.2 1.2l4.8-.01L1 15.5c-.8.6-1.1 1.7-.6 2.3.5.7 1.6.7 2.4 0L7.4 14v.8z"
          fill="#EA7600"
        />
        {/* Blender Blue Center Dot */}
        <circle cx="14.7" cy="14.4" r="2" fill="#226DC9" />
      </svg>
    );
  }

  // 5. Adobe After Effects
  if (normalized.includes("after effects") || normalized === "ae") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#00005B" />
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="#D291FF" strokeWidth="1.2" />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fill="#D291FF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Ae
        </text>
      </svg>
    );
  }

  // 6. Fairlight Audio (Blackmagic Fairlight)
  if (normalized.includes("fairlight")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#1C1B1A" />
        {/* Sound sliders & audio meter */}
        <line x1="7" y1="5" x2="7" y2="19" stroke="#E55B4C" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="7" cy="10" r="2.2" fill="#E55B4C" />
        <line x1="12" y1="5" x2="12" y2="19" stroke="#34C759" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="12" cy="14" r="2.2" fill="#34C759" />
        <line x1="17" y1="5" x2="17" y2="19" stroke="#007AFF" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="17" cy="8" r="2.2" fill="#007AFF" />
      </svg>
    );
  }

  // 7. Cinema DNG / RAW Cinema
  if (normalized.includes("dng") || normalized.includes("cinema")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#241B15" />
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#FF9500" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#FF9500" />
        <circle cx="7" cy="9" r="0.9" fill="#FF9500" />
        <circle cx="17" cy="9" r="0.9" fill="#FF9500" />
      </svg>
    );
  }

  // 8. Apple ProRes 422
  if (normalized.includes("prores") || normalized.includes("apple")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.88-.97.04-2.14.65-2.76 1.4-.55.65-.98 1.71-.92 2.76 1.08.08 2.05-.53 2.67-1.28z" />
      </svg>
    );
  }

  // Fallback generic media chip icon
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

