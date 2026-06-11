"use client";

import { useState } from "react";

// ── Icons ──────────────────────────────────────────
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const ThreadsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.312-.88-2.374-.889h-.045c-.876 0-1.817.244-2.448 1.071l-1.696-1.281c.902-1.194 2.274-1.84 3.92-1.85h.072c3.917.045 5.965 2.461 5.965 6.847 0 .061-.001.122-.001.184a7.555 7.555 0 01-.065 1.02c.79.583 1.394 1.354 1.783 2.268.936 2.141.949 5.116-1.418 7.418-1.868 1.832-4.161 2.726-7.183 2.748z"/>
    <path d="M11.86 13.926c-.88.047-1.583.292-2.033.71-.364.332-.543.765-.514 1.25.057 1.038 1.165 1.521 2.254 1.46 1.226-.067 2.14-.493 2.716-1.265.374-.501.615-1.167.719-1.99a11.5 11.5 0 00-3.142-.165z"/>
  </svg>
);
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

// ── Data ───────────────────────────────────────────
const contactLinks = [
  {
    id: "email",
    icon: <MailIcon />,
    label: "Email",
    value: "jameeltony67@gmail.com",
    hint: "Best for project inquiries",
    href: "mailto:hello@webxaistudio.com",
    external: false,
  },
  {
    id: "phone",
    icon: <PhoneIcon />,
    label: "Phone / WhatsApp",
    value: "+91 70136 84532",
    hint: "Mon–Sat, 10am–8pm IST",
    href: "tel:+917013684532",
    external: false,
  },
  {
    id: "threads",
    icon: <ThreadsIcon />,
    label: "Threads",
    value: "@webxaistudio",
    hint: "Build-in-public updates",
    href: "https://www.threads.com/@webx.aistudio",
    external: true,
  },
];

const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Most landing pages and SaaS MVPs ship in 2–4 weeks. Larger products are scoped after a quick discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — async-first, happy to jump on calls. I've worked across timezones with no issues.",
  },
  {
    q: "What's your stack?",
    a: "Next.js, react, TypeScript, Tailwind, Convex, Clerk, GSAP, framer motion, javascript . I pick what ships fastest and scales cleanest.",
  },
  {
    q: "Can I buy your templates?",
    a: "Yep — LaunchKit AI and more on Gumroad. Drop-in starters for Next.js + AI SaaS projects.",
  },
];

// ── Sub-components ─────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-neutral-900">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-neutral-900">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          >
            <span
              className={`text-sm font-medium leading-snug transition-colors duration-200
                ${open === i ? "text-lime-400" : "text-neutral-300 group-hover:text-white"}`}
            >
              {faq.q}
            </span>
            <span
              className={`text-xl text-neutral-600 flex-shrink-0 mt-0.5 transition-all duration-300
                ${open === i ? "rotate-45 text-lime-400" : "group-hover:text-neutral-400"}`}
            >
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open === i ? "max-h-40 pb-5" : "max-h-0"}`}
          >
            <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main export ────────────────────────────────────
export default function ContactSection() {
  return (
    <section id="contact" className="border-b border-neutral-200 bg-black">
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-700" />
          <p className="text-[11px] tracking-widest text-neutral-500 uppercase">
            <span className="text-lime-400">[05]</span>&nbsp;&nbsp;CONTACT
          </p>
        </div>

        {/* Heading */}
        <h2 className="font-['Instrument_Serif'] text-white text-5xl lg:text-7xl leading-none mb-4">
          Let&apos;s build{" "}
          <em className="italic text-lime-400">something.</em>
        </h2>
        <p className="text-sm text-neutral-400 max-w-xs leading-relaxed mb-16">
          Got a project or idea? Reach out directly — no middleman.
        </p>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-300/40">

          {/* ── Left — Direct contacts ── */}
          <div className="bg-[#0a0a0a] lg:pr-12 py-2">

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-lime-400/20
                            bg-lime-400/5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[11px] text-lime-400/80 tracking-wide">
                Available for projects
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex items-center justify-between gap-4 p-5
                             border border-neutral-800/60 bg-[#0d0d0d]
                             hover:border-lime-400/30 hover:bg-lime-400/[0.03]
                             transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 border border-neutral-800 flex items-center justify-center
                                 text-neutral-500 flex-shrink-0 group-hover:border-lime-400/40
                                 group-hover:text-lime-400 transition-all duration-300"
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-neutral-600 uppercase mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-neutral-200 group-hover:text-white
                                   transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-neutral-700 group-hover:text-lime-400 transition-all duration-300
                                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight />
                    </span>
                    <span className="text-[10px] text-neutral-700 hidden sm:block">{link.hint}</span>
                  </div>

                  {/* Index */}
                  <span className="absolute top-2.5 right-3 text-[10px] text-neutral-800 tabular-nums">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </div>

            {/* Timezone */}
            <p className="mt-6 text-xs text-neutral-700 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Based in Hyderabad — IST (UTC +5:30)
            </p>
          </div>

          {/* ── Right — FAQ ── */}
          <div className="bg-[#0a0a0a] lg:pl-12 py-2">
            <div className="mb-8">
              <p className="text-[11px] tracking-widest text-neutral-600 uppercase mb-2">
                Common questions
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Quick answers before you reach out.
              </p>
            </div>

            <FAQ />

            {/* CTA strip */}
            <div className="mt-10 p-5 border border-neutral-800/60 bg-[#0d0d0d]
                            flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-medium text-white mb-0.5">Ready to start?</p>
                <p className="text-xs text-neutral-600">I reply within 24 hours.</p>
              </div>
              <a
                href="mailto:hello@webxaistudio.com"
                className="inline-flex items-center gap-2 bg-lime-400 text-black
                           text-xs font-semibold px-5 py-3 hover:bg-lime-300
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Send a message →
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}