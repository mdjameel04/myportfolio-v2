"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 rounded-full 
          ${scrolled
            ? "border-b border-neutral-800/70 backdrop-blur-md bg-[#0a0a0a]/80"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className=" font-[Switzer6] text-xl text-white hover:text-lime-400
                       transition-colors duration-200 tracking-tight"
          >
            webxai<span className="text-lime-400 text-2xl">Studio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className=" text-neutral-500 hover:text-white transition-colors duration-200
                           tracking-wide relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px bg-lime-400
                             group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[12px] font-semibold
                         bg-lime-400 text-black px-5 py-2.5 hover:bg-lime-300
                         transition-all duration-200 hover:-translate-y-px"
            >
              Hire me →
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.5 w-6 group"
            >
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center
                            ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300
                            ${menuOpen ? "opacity-0 w-0" : "w-full"}`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center
                            ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-between
                    px-8 pt-24 pb-12 transition-all duration-500
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Instrument_Serif'] text-5xl text-neutral-300 hover:text-lime-400
                         py-3 border-b border-neutral-900 transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2 bg-lime-400 text-black font-semibold
                     text-sm px-7 py-4 self-start hover:bg-lime-300 transition-colors duration-200"
        >
          Hire me →
        </a>
      </div>
    </>
  );
}