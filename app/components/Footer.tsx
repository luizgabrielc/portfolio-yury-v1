"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import Link from "next/link";

interface FooterProps {
  variant?: "hero" | "menu-left" | "menu-right";
  className?: string;
}

export default function Footer({
  variant = "hero",
  className = "",
}: FooterProps) {
  // Menu left side (dark theme)
  if (variant === "menu-left") {
    return (
      <div
        className={`flex items-center gap-6 md:gap-12 font-bootzy text-white ${className}`}
      >
        <Link
          href="mailto:placeholder@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
        >
          LET&apos;S CREATE TOGETHER
        </Link>
        <Link
          href="https://linkedin.com/in/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
        >
          LINKEDIN
        </Link>
      </div>
    );
  }

  // Menu right side (light theme)
  if (variant === "menu-right") {
    return (
      <div
        className={`flex items-center justify-between font-bootzy ${className}`}
      >
        <Link
          href="https://behance.net/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.15em] uppercase text-[#010103] hover:opacity-70 transition-opacity"
        >
          MADE BY INÁCIO
        </Link>
        <span className="text-xs tracking-[0.15em] uppercase text-[#010103]">
          ©2025
        </span>
      </div>
    );
  }

  // Hero footer (default - light theme, full width)
  return (
    <div
      className={`flex items-center justify-between w-full font-bootzy text-[#010103] ${className}`}
    >
      <Link
        href="mailto:placeholder@email.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rollover-container text-xs tracking-[0.15em] uppercase"
      >
        <span className="rollover-text">
          <span className="rollover-item">LET&apos;S CREATE TOGETHER</span>
          <span className="rollover-item">LET&apos;S CREATE TOGETHER</span>
        </span>
      </Link>
      <Link
        href="https://linkedin.com/in/placeholder"
        target="_blank"
        rel="noopener noreferrer"
        className="rollover-container text-xs tracking-[0.15em] uppercase"
      >
        <span className="rollover-text">
          <span className="rollover-item">LINKEDIN</span>
          <span className="rollover-item">LINKEDIN</span>
        </span>
      </Link>
      <div className="text-xs tracking-[0.15em] uppercase hidden md:flex items-center gap-2 group cursor-pointer">
        <span>SCROLL TO VIEW MORE</span>
        <ArrowDownIcon
          size={12}
          className="transition-transform group-hover:translate-y-1"
        />
      </div>
      <span className="text-xs tracking-[0.15em] uppercase">©2025</span>
    </div>
  );
}
