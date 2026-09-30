"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Detect touch / non-pointer fine devices
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      !window.matchMedia("(hover: hover)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Check hovered elements for custom cursor text
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target?.closest("a, button, input, select, textarea");
        if (isClickable) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    // Smooth RAF loop for cursor lerp
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      posRef.current.x = lerp(posRef.current.x, posRef.current.targetX, 0.2);
      posRef.current.y = lerp(posRef.current.y, posRef.current.targetY, 0.2);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={dotRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      <div
        className={`relative flex items-center justify-center transition-all duration-200 ease-out ${
          cursorText
            ? "px-3.5 py-1.5 rounded-full bg-primary text-canvas font-bold border border-primary shadow-2xl scale-100"
            : isHovered
            ? "w-8 h-8 rounded-full border-2 border-accent bg-accent/20 scale-125"
            : "w-3 h-3 rounded-full bg-accent scale-100 shadow-md"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase select-none whitespace-nowrap text-canvas">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
