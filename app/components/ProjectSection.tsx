"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = [
  { id: "01", name: "ImageFlow", image: "/herobackground.png" },
  { id: "02", name: "PrepForze", image: "/prepforge.png" },
  { id: "03", name: "ai-saas-starter", image: "/ai-saas-kit.png" },
  { id: "04", name: "remove-bg", image: "/removeBg.png" },
  { id: "05", name: "gsap-repo", image: "/gsap-rep.png" },
  { id: "06", name: "Elite Furny", image: "/eliteFurny.png" },
];

// ✅ TOP LEVEL — outside ProjectSection
const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.div
        initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
        animate={
          isInView
            ? { y: "0%", opacity: 1, filter: "blur(0px)" }
            : { y: "100%", opacity: 0, filter: "blur(10px)" }
        }
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ProjectSection = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div id="projects" className=" relative w-full bg-black pt-20 py-8 px-14">
      <div className="text-white flex flex-col items-start">

        {/* Tag line */}
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 text-sm mt-6">
            <span className="w-8 h-[0.5px] bg-gray-300" />
            <span className="text-gray-400 font-[Poppins]">[02]</span>
            <span className="uppercase text-gray-200 font-[Switzer4]">
              Projects
            </span>
            <span className="text-gray-100 font-[Switzer5]">/ 2025 - 2026</span>
          </div>
        </Reveal>

        <div className="mt-6 w-full">

          {/* Heading */}
          <Reveal delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide font-[Switzer6] pb-10">
              what we've
              <span className="font-[woff2] italic text-[#c9e265]"> built.</span>
            </h1>
          </Reveal>

          {/* Projects */}
          <div ref={containerRef} onMouseMove={handleMouse}>
            <ul className="flex flex-col gap-2">
              {Projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.08}>
                  <li
                    onMouseEnter={() => setHover(project.id)}
                    onMouseLeave={() => setHover(null)}
                    className="flex items-center gap-6 py-6 border-t border-white/40 cursor-pointer group mt-4"
                  >
                    <span className="text-sm text-gray-500">{project.id}</span>
                    <span
                      className={`text-3xl font-bold ml-6 transition-colors duration-300 ${
                        hover === project.id ? "text-[#c8f55a]" : "text-white"
                      }`}
                    >
                      {project.name}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* ✅ AnimatePresence intact */}
            <AnimatePresence>
              {hover && (
                <motion.div
                  key={hover}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="pointer-events-none absolute z-50 w-92 rounded-xl overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    left: mousePos.x + 30,
                    top: mousePos.y - 80,
                  }}
                >
                  <img
                    src={Projects.find((p) => p.id === hover)?.image}
                    alt="preview"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </div>


        </div>
      </div>
    </div>
  );
};

export default ProjectSection;