"use client";

import { useState } from "react";
import { Monitor, Sparkles, Code2, Globe, FileText, BarChart2, FlaskConical, LayoutDashboard, Server, Package, Wrench, Cpu, Store, Bell,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────
interface Tag {
  icon: React.ReactNode;
  label: string;
}

interface Service {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: Tag[];
}

// ─── DATA ─────────────────────────────────────────
const services: Service[] = [
  {
    num: "01",
    icon: <Monitor size={18} strokeWidth={1.5} />,
    title: "Websites",
    description:
      "High-performance marketing websites, landing pages, and corporate sites built for speed, conversion, and growth.",
    tags: [
      { icon: <Globe size={11} />, label: "NEXT.JS & REACT" },
      { icon: <FileText size={11} />, label: "HEADLESS CMS" },
      { icon: <BarChart2 size={11} />, label: "SEO & PERFORMANCE" },
      { icon: <FlaskConical size={11} />, label: "CONVERSION OPTIMIZATION" },
    ],
  },

  {
    num: "02",
    icon: <Sparkles size={18} strokeWidth={1.5} />,
    title: "SaaS Platforms",
    description:
      "From MVPs to scalable platforms, we design and develop SaaS products that help businesses launch, automate, and grow.",
    tags: [
      { icon: <LayoutDashboard size={11} />, label: "SAAS DASHBOARDS" },
      { icon: <Server size={11} />, label: "API INTEGRATIONS" },
      { icon: <Package size={11} />, label: "MULTI-TENANT SYSTEMS" },
      { icon: <Wrench size={11} />, label: "SUBSCRIPTIONS & BILLING" },
    ],
  },

  {
    num: "03",
    icon: <Store size={18} strokeWidth={1.5} />,
    title: "E-Commerce",
    description:
      "Modern online stores built to sell more with seamless shopping experiences, secure payments, and scalable architecture.",
    tags: [
      { icon: <Store size={11} />, label: "SHOPIFY & STOREFRONTS" },
      { icon: <Package size={11} />, label: "PRODUCT MANAGEMENT" },
      { icon: <BarChart2 size={11} />, label: "ANALYTICS & REPORTING" },
      { icon: <Bell size={11} />, label: "PAYMENTS & AUTOMATION" },
    ],
  },

  {
    num: "04",
    icon: <Globe size={18} strokeWidth={1.5} />,
    title: "Web Applications",
    description:
      "Custom web applications, internal tools, dashboards, and business systems tailored to your workflow and operations.",
    tags: [
      { icon: <LayoutDashboard size={11} />, label: "ADMIN DASHBOARDS" },
      { icon: <Server size={11} />, label: "BACKEND SYSTEMS" },
      { icon: <Code2 size={11} />, label: "CUSTOM WORKFLOWS" },
      { icon: <Cpu size={11} />, label: "SCALABLE ARCHITECTURE" },
    ],
  },
];

// ─── SERVICE CARD ─────────────────────────────────
function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-between p-8 lg:p-10 overflow-hidden cursor-pointer
                 border border-neutral-800/50 bg-[#0c0c0c]/80
                 transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div
        className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-[90px] pointer-events-none
                    bg-lime-500/25 transition-opacity duration-700
                    ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Ghost number */}
      <span
        className="absolute bottom-2 right-5 select-none pointer-events-none
                   font-bold text-[110px] leading-none transition-all duration-500
                   text-white/[0.04] group-hover:text-white/[0.07]"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {service.num}
      </span>

      {/* Top content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-11 h-11 border mb-7
                      transition-all duration-300
                      ${hovered
                        ? "border-lime-400/50 text-lime-400 bg-lime-400/5"
                        : "border-neutral-700/80 text-neutral-500"
                      }`}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3
          className={`text-3xl font-bold tracking-tight mb-3 transition-colors duration-300
                      ${hovered ? "text-white" : "text-neutral-100"}`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed max-w-[280px]">
          {service.description}
        </p>
      </div>

      {/* Bottom: tags + arrow */}
      <div className="relative z-10 mt-10">
        <div className="flex flex-wrap gap-2 mb-7">
          {service.tags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.1em]
                          px-2.5 py-1.5 border transition-all duration-300
                          ${hovered
                            ? "border-lime-400/25 text-lime-400/75 bg-lime-400/5"
                            : "border-neutral-800 text-neutral-600"
                          }`}
            >
              <span className={`transition-colors duration-300 ${hovered ? "text-lime-400/70" : "text-neutral-700"}`}>
                {tag.icon}
              </span>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex justify-end">
          <span
            className={`text-lg transition-all duration-300
                        ${hovered
                          ? "text-lime-400 translate-x-1 -translate-y-1"
                          : "text-neutral-700"
                        }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────
export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#080808] overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left aurora */}
        <div
          className="absolute left-[-10%] top-[30%] w-[500px] h-[300px] rounded-full
                     bg-lime-600/20 blur-[120px] rotate-[-20deg]"
        />
        {/* Right aurora */}
        <div
          className="absolute right-[-5%] top-[10%] w-[400px] h-[250px] rounded-full
                     bg-lime-500/15 blur-[100px] rotate-[15deg]"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 py-20 lg:py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-neutral-700" />
          <p className="text-[11px] tracking-widest text-neutral-500 uppercase">
            <span className="text-lime-400">[03]</span>&nbsp;&nbsp;SERVICES / WHAT WE DO
          </p>
        </div>

        {/* Heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-14 text-white"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Four{" "}
          <em
            className="not-italic text-lime-400"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            disciplines.
          </em>{" "}
          One
          <br />
          team.
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-neutral-800/30 ">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}