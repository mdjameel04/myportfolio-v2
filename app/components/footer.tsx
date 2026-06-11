"use client";

import { useState } from "react";

// ── Icons ──────────────────────────────────────────
const ThreadsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.312-.88-2.374-.889h-.045c-.876 0-1.817.244-2.448 1.071l-1.696-1.281c.902-1.194 2.274-1.84 3.92-1.85h.072c3.917.045 5.965 2.461 5.965 6.847 0 .061-.001.122-.001.184a7.555 7.555 0 01-.065 1.02c.79.583 1.394 1.354 1.783 2.268.936 2.141.949 5.116-1.418 7.418-1.868 1.832-4.161 2.726-7.183 2.748z"/>
    <path d="M11.86 13.926c-.88.047-1.583.292-2.033.71-.364.332-.543.765-.514 1.25.057 1.038 1.165 1.521 2.254 1.46 1.226-.067 2.14-.493 2.716-1.265.374-.501.615-1.167.719-1.99a11.5 11.5 0 00-3.142-.165z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GumroadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 19.2c-3.974 0-7.2-3.226-7.2-7.2S8.026 4.8 12 4.8c2.4 0 4.516 1.178 5.824 2.986H14.4v2.4h5.76C20.1 10.6 20.16 11.1 20.16 12c0 .9-.06 1.4-.046 1.814H14.4v2.4h3.424C16.516 18.022 14.4 19.2 12 19.2z"/>
  </svg>
);

// ── Data ───────────────────────────────────────────
const navColumns = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "ImageFlow", href: "#" },
      { label: "PrepForge", href: "#" },
      { label: "LaunchKit AI", href: "#" },
      { label: "ErazeAI", href: "#" },
      { label: "gsap-repo", href: "#" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "LaunchKit AI — Gumroad", href: "https://webxaistudio.gumroad.com" },
      { label: "SaaS Starter Kit", href: "#" },
      { label: "More coming soon", href: "#" },
    ],
  },
];

const socials = [
  { label: "Threads", icon: <ThreadsIcon />, href: "https://www.threads.com/@webx.aistudio" },
  { label: "GitHub",  icon: <GithubIcon />,  href: "https://github.com/mdjameel04" },
  { label: "LinkedIn",icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/mohammed-jameel04/" },
  { label: "Gumroad", icon: <GumroadIcon />,  href: "https://webxaistudio.gumroad.com" },
];

// ── Component ──────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a]  border-t border-neutral-900 ">

      {/* ── Big CTA strip ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-neutral-900
                      flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-widest text-neutral-600 uppercase mb-2">
            Open to work
          </p>
          <h2 className="font-['Instrument_Serif'] text-3xl lg:text-4xl text-white leading-tight">
            Got a project in mind?{" "}
            <em className="italic text-lime-400">Let&apos;s talk.</em>
          </h2>
        </div>
        <a
          href="mailto:hello@webxaistudio.com"
          className="flex-shrink-0 inline-flex items-center gap-2.5 border border-neutral-700
                     text-white text-sm px-7 py-3.5 hover:bg-lime-400 hover:text-black
                     hover:border-lime-400 transition-all duration-300 hover:-translate-y-0.5"
        >
          Start a project →
        </a>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-6xl mx-auto px-8 py-14
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-neutral-900">

        {/* Brand col */}
        <div>
          <p className="font-['Instrument_Serif'] text-xl text-white mb-3">
            webxai<span className="text-lime-400">studio</span>
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed mb-6 max-w-[180px]">
            Building digital products for ambitious brands — fast, clean, production-ready.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-neutral-800 flex items-center justify-center
                           text-neutral-600 hover:border-lime-400/40 hover:text-lime-400
                           transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {navColumns.map((col) => (
          <div key={col.heading}>
            <p className="text-[10px] tracking-widest text-neutral-600 uppercase mb-5">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-xs text-neutral-500 hover:text-lime-400
                               transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-6xl mx-auto px-8 py-5
                      flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-3 text-[11px] text-neutral-700">
        <span>© {year} webxaistudio — All rights reserved</span>

        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>Hyderabad, India · IST (UTC +5:30)</span>
        </div>

        <span>
          Built with Next.js + Tailwind
        </span>
      </div>

    </footer>
  );
}