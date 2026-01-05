"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between font-bootzy bg-[#f6f3ec]">
        <div className="flex items-center gap-8 md:gap-16">
          {/* Logo / Name */}
          <Link href="/" className="text-sm tracking-[0.15em] uppercase">
            HYAGO YURY
          </Link>

          {/* Role */}
          <span className="text-sm tracking-[0.15em] uppercase hidden md:block">
            ART DIRECTOR
          </span>
        </div>

        <div className="flex items-center gap-8 md:gap-16">
          {/* Location */}
          <span className="text-sm tracking-[0.15em] uppercase hidden md:block">
            BR, SÃO LUÍS
          </span>

          {/* Menu Button with rollover animation */}
          <button
            onClick={toggleMenu}
            className="rollover-container text-sm tracking-[0.15em] uppercase"
            aria-label="Abrir menu"
          >
            <span className="rollover-text">
              <span className="rollover-item">MENU</span>
              <span className="rollover-item">MENU</span>
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
