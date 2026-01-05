"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

type NavItem = "about" | "work" | "index" | null;

// Placeholder images - replace with actual images later
const placeholderImages: Record<Exclude<NavItem, null>, string> = {
  about: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  work: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  index: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
};

const navItems = [
  { id: "about" as const, label: "ABOUT", href: "/about" },
  { id: "work" as const, label: "WORK", href: "/all-projects" },
  { id: "index" as const, label: "INDEX", href: "/index" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<NavItem>(null);

  const currentBackground = hoveredItem
    ? placeholderImages[hoveredItem]
    : placeholderImages.about;

  return (
    <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
      {/* Left side - Black background with navigation */}
      <div className="w-1/2 bg-[#010103] flex flex-col justify-between p-6">
        {/* Header inside menu */}
        <div className="flex items-center justify-between font-bootzy">
          <div className="flex items-center gap-8 md:gap-16">
            <Link
              href="/"
              className="text-sm tracking-[0.15em] uppercase text-white"
            >
              HYAGO YURY
            </Link>
            <span className="text-sm tracking-[0.15em] uppercase text-white hidden md:block">
              ART DIRECTOR
            </span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-4 font-roc-grotesk">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="nav-link text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer links - left side */}
        <Footer variant="menu-left" />
      </div>

      {/* Right side - Dynamic image/placeholder */}
      <div className="w-1/2 relative">
        {/* Header on right side */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between font-bootzy z-10">
          <span className="text-sm tracking-[0.15em] uppercase text-[#010103]">
            BR, SÃO LUÍS
          </span>

          {/* Close button with rollover animation */}
          <button
            onClick={onClose}
            className="rollover-container text-sm tracking-[0.15em] uppercase text-[#010103]"
            aria-label="Fechar menu"
          >
            <span className="rollover-text">
              <span className="rollover-item">CLOSE</span>
              <span className="rollover-item">CLOSE</span>
            </span>
          </button>
        </div>

        {/* Dynamic background/image */}
        <div
          className="w-full h-full transition-all duration-500 ease-in-out"
          style={{ background: currentBackground }}
        />

        {/* Footer on right side */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Footer variant="menu-right" />
        </div>
      </div>
    </div>
  );
}
