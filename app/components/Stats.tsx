"use client";

import { useRef } from "react";
import { Star, Users, Zap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".stat-item");

    gsap.from(items, {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
      },
    });
  }, []);

  return (
    <div className="w-full py-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="flex items-center justify-center gap-2 text-gray-400"
        >
          {/* Item 1 */}
          <div className="stat-item flex items-center gap-2">
            <div className="border border-lime-500/30 p-2">
              <Star className="h-3 w-3 fill-lime-400 text-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">5.0</span>
              <span className="text-xs">Google · 21 Reviews</span>
            </div>
          </div>

          <span className="hidden text-gray-600 md:block">▪</span>

          {/* Item 2 */}
          <div className="stat-item flex items-center gap-3">
            <div className="border border-lime-500/30 p-2">
              <Users className="h-3 w-3 text-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">7.5M+</span>
              <span className="text-xs">Users Reached</span>
            </div>
          </div>

          <span className="hidden text-gray-600 md:block">▪</span>

          {/* Item 3 */}
          <div className="stat-item flex items-center gap-2">
            <div className="border border-lime-500/30 p-2">
              <Zap className="h-3 w-3 fill-lime-400 text-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">100</span>
              <span className="text-xs">Pagespeed Score</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;