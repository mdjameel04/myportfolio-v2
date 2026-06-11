"use client";

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
  { label: "@webxaistudio →", href: "https://www.threads.com/@webx.aistudio"},
  { label: "GitHub →",        href: "https://github.com/webxaistudio" },
  { label: "Gumroad →",       href: "https://webxaistudio.gumroad.com" },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-neutral-900 text-white bg-black">
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-14">
          <div className="w-8 h-px bg-neutral-700" />
          <p className="text-[11px] tracking-widest text-neutral-500 uppercase font-bold">
            <span className="text-lime-400">[03]</span>&nbsp;&nbsp;ABOUT Me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* ── Left ── */}
          <div>
            <h2 className=" text-4xl lg:text-5xl leading-snug mb-8">
              A dev who ships,{" "}
              <em className="italic text-lime-400 not-italic font-['Instrument_Serif'] italic">
                not just codes.
              </em>
            </h2>

            <p className="text-[15px] text-neutral-500 leading-relaxed mb-4">
              I&apos;m{" "}
              <span className="text-neutral-200 font-medium">Jameel</span> — a
              self-taught full-stack developer from{" "}
              <span className="text-neutral-200 font-medium">Hyderabad</span>,
              building AI products, SaaS tools, and high-performance web
              experiences under{" "}
              <span className="text-neutral-200 font-medium">@webxaistudio</span>.
            </p>
            <p className="text-[15px] text-neutral-500 leading-relaxed">
              I specialise in{" "}
              <span className="text-neutral-200 font-medium">
                Next.js, TypeScript &amp; Convex
              </span>{" "}
              and bringing ideas from zero to production — fast. Whether it&apos;s a
              client site or my own product, I care about what the end user
              actually feels.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-5 mt-9">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-600 border-b border-neutral-800 pb-0.5
                             hover:text-lime-400 hover:border-lime-400 transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 pt-8 border-t border-neutral-900">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-['Instrument_Serif'] text-[38px] text-white leading-none">
                    {s.num}
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
            <p className="text-[11px] tracking-widest text-neutral-600 uppercase mb-5">
              Tech stack
            </p>
            <div className="grid grid-cols-2 gap-2">
              {stack.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-2.5 px-3.5 py-3
                             border border-neutral-900 text-sm text-neutral-500
                             hover:border-lime-400/30 hover:text-lime-400
                             transition-all duration-200 cursor-default"
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
            <div className="mt-6 flex items-center gap-2.5">
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