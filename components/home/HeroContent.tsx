"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <motion.div
      className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="max-w-4xl w-full text-center">
        <motion.span
          className="inline-block font-zalando text-sm text-primary font-medium tracking-wider uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Software Engineer
        </motion.span>

        <motion.h1
          className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Building scalable
          <br />
          <span className="text-primary">web applications</span>
          <br />
          & infrastructure
        </motion.h1>

        <motion.p
          className="font-zalando text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          I craft full-stack solutions, robust backend systems, and self-hosted
          infrastructure. Passionate about clean architecture, developer experience,
          and shipping products that scale.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-zalando font-medium text-base hover:shadow-[0_0_30px_-5px] hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center gap-2">
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-transparent border border-border text-foreground rounded-xl font-zalando font-medium text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-muted-foreground/50"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}