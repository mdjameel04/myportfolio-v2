"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const stack = [
  "Next.js", "TypeScript", "Tailwind CSS", "Convex",
  "Clerk", "GSAP", "Framer Motion", "shadcn/ui",
  "Groq / AI APIs", "Cloudflare R2",
];

const stats = [
  { num: "6", suffix: "+", label: "Products shipped" },
  { num: "1",  suffix: "yr", label: "Full-stack exp" },
  { num: "∞",  suffix: "",   label: "Things to build" },
];

const links = [
  { label: "@webxaistudio →", href: "https://www.threads.com/@webx.aistudio" },
  { label: "GitHub →",        href: "https://github.com/webxaistudio" },
  { label: "Gumroad →",       href: "https://webxaistudio.gumroad.com" },
];

export default function AboutSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const eyebrowRef   = useRef<HTMLDivElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const bodyRef      = useRef<HTMLDivElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const stackLabelRef = useRef<HTMLParagraphElement>(null);
  const stackGridRef = useRef<HTMLDivElement>(null);
  const availRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const st = (trigger: Element | null, start = "top 88%") => ({
        trigger,
        start,
        toggleActions: "play none none none",
      });

      // ── Eyebrow
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: st(eyebrowRef.current) }
      );

      // ── Heading — char-by-char flip
      const split = new SplitText(headingRef.current, { type: "chars,words" });
      gsap.fromTo(split.chars,
        { opacity: 0, y: 24, rotateX: -50 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.45, ease: "power3.out", stagger: 0.022,
          scrollTrigger: st(headingRef.current, "top 85%"),
        }
      );

      // ── Body paragraphs — line by line
      const bodyLines = bodyRef.current?.querySelectorAll("p");
      if (bodyLines) {
        gsap.fromTo(bodyLines,
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0,
            duration: 0.5, ease: "power2.out", stagger: 0.12,
            scrollTrigger: st(bodyRef.current),
          }
        );
      }

      // ── Links
      const linkEls = linksRef.current?.querySelectorAll("a");
      if (linkEls) {
        gsap.fromTo(linkEls,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0,
            duration: 0.4, ease: "power2.out", stagger: 0.08,
            scrollTrigger: st(linksRef.current),
          }
        );
      }

      // ── Stats — count up + fade
      const statNums = statsRef.current?.querySelectorAll<HTMLElement>("[data-stat]");
      statNums?.forEach((el) => {
        const final = el.dataset.stat!;
        const isNum = /^\d+$/.test(final);

        gsap.fromTo(el.parentElement!,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
            scrollTrigger: st(statsRef.current),
            stagger: 0.1,
          }
        );

        if (isNum) {
          gsap.fromTo({ val: 0 }, { val: Number(final) }, {
            duration: 1.4, ease: "power2.out",
            scrollTrigger: st(statsRef.current),
            onUpdate() { el.textContent = Math.round((this as any).targets()[0].val).toString(); },
          });
        }
      });

      // ── Stack label
      gsap.fromTo(stackLabelRef.current,
        { opacity: 0, x: 16 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: st(stackLabelRef.current) }
      );

      // ── Stack grid items — stagger
      const stackItems = stackGridRef.current?.querySelectorAll("div");
      if (stackItems) {
        gsap.fromTo(stackItems,
          { opacity: 0, y: 14, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.38, ease: "power2.out", stagger: 0.055,
            scrollTrigger: st(stackGridRef.current),
          }
        );
      }

      // ── Availability badge
      gsap.fromTo(availRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: st(availRef.current) }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-b border-neutral-900 text-white bg-black"
    >
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="flex items-center gap-3 mb-14" style={{ opacity: 0 }}>
          <div className="w-8 h-px bg-neutral-700" />
          <p className="text-[11px] tracking-widest text-neutral-500 uppercase font-bold">
            <span className="text-lime-400">[03]</span>&nbsp;&nbsp;ABOUT ME
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* ── Left ── */}
          <div>
            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-4xl lg:text-5xl leading-snug mb-8"
              style={{ opacity: 0, perspective: "600px" }}
            >
              A dev who ships,{" "}
              <em className="not-italic font-['Instrument_Serif'] italic text-lime-400">
                not just codes.
              </em>
            </h2>

            {/* Body */}
            <div ref={bodyRef}>
              <p className="text-[15px] text-neutral-500 leading-relaxed mb-4" style={{ opacity: 0 }}>
                I&apos;m{" "}
                <span className="text-neutral-200 font-medium">Jameel</span> — a
                self-taught full-stack developer from{" "}
                <span className="text-neutral-200 font-medium">Hyderabad</span>,
                building AI products, SaaS tools, and high-performance web
                experiences under{" "}
                <span className="text-neutral-200 font-medium">@webxaistudio</span>.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed" style={{ opacity: 0 }}>
                I specialise in{" "}
                <span className="text-neutral-200 font-medium">
                  Next.js, TypeScript &amp; Convex
                </span>{" "}
                and bringing ideas from zero to production — fast. Whether it&apos;s a
                client site or my own product, I care about what the end user
                actually feels.
              </p>
            </div>

            {/* Links */}
            <div ref={linksRef} className="flex flex-wrap gap-5 mt-9">
              {links.map((l) => (
                <Link 
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-600 border-b border-neutral-800 pb-0.5
                             hover:text-lime-400 hover:border-lime-400 transition-colors duration-200"
                  style={{ opacity: 0 }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex gap-10 mt-10 pt-8 border-t border-neutral-900"
            >
              {stats.map((s) => (
                <div key={s.label} style={{ opacity: 0 }}>
                  <div className="font-['Instrument_Serif'] text-[38px] text-white leading-none">
                    <span data-stat={s.num}>{s.num}</span>
                    <span className="text-lime-400">{s.suffix}</span>
                  </div>
                  <div className="text-[11px] text-neutral-600 mt-1.5 tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Stack ── */}
          <div>
            <p
              ref={stackLabelRef}
              className="text-[11px] tracking-widest text-neutral-600 uppercase mb-5"
              style={{ opacity: 0 }}
            >
              Tech stack
            </p>

            <div ref={stackGridRef} className="grid grid-cols-2 gap-2">
              {stack.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-2.5 px-3.5 py-3
                             border border-neutral-900 text-sm text-neutral-500
                             hover:border-lime-400/30 hover:text-lime-400
                             transition-all duration-200 cursor-default"
                  style={{ opacity: 0 }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-lime-400 opacity-30
                               group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              ref={availRef}
              className="mt-6 flex items-center gap-2.5"
              style={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-xs text-neutral-600">
                Available for freelance projects &amp; full-time roles
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}