"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

/** One-time subtle enter when scrolled into view. */
export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-48px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0.94, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 10 }}
      transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
