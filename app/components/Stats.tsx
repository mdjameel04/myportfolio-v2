"use client"

import  { useRef } from "react";
import { Star, Users, Zap } from "lucide-react";
import {   motion, useInView } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center text-gray-400 gap-2"
        >
          {/* Item 1 */}
          <motion.div variants={item} className="flex items-center gap-2">
            <div className="border border-lime-500/30 p-2">
              <Star className="w-3 h-3 text-lime-400 fill-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">5.0</span>
              <span className="text-xs">Google · 21 Reviews</span>
            </div>
          </motion.div>

          <span className="hidden md:block text-gray-600">▪</span>

          {/* Item 2 */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="border border-lime-500/30 p-2">
              <Users className="w-3 h-3 text-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">7.5M+</span>
              <span className="text-xs">Users Reached</span>
            </div>
          </motion.div>

          <span className="hidden md:block text-gray-600">▪</span>

          {/* Item 3 */}
          <motion.div variants={item} className="flex items-center gap-2">
            <div className="border border-lime-500/30 p-2">
              <Zap className="w-3 h-3 text-lime-400 fill-lime-400" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-300">100</span>
              <span className="text-xs">Pagespeed Score</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;