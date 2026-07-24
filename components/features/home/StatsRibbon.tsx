'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, Variants } from 'framer-motion';

// Separate Client Counter Component for performance separation
function CounterNode({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Animate counting up from 0 to target over 2 seconds
      const controls = animate(count, targetValue, {
        duration: 2,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, count, targetValue]);

  // Hook into the motion string generation thread
  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = `${latest}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return (
    <span ref={nodeRef} className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white leading-none mb-1">
      0{suffix}
    </span>
  );
}

export default function StatsRibbon() {
  const stats = [
    { numValue: 14, suffix: '+', label: 'Years In Operation' },
    { numValue: 25, suffix: '+', label: 'Happy Clients' },
    { numValue: 70, suffix: '+', label: 'Projects Delivered' },
    { numValue: 24, suffix: '/7', label: 'Support & Monitoring' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // FIXED: Explicitly typed to Framer Motion's internal Variants interface
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 14 },
    },
  };
  return (
    <section className="w-full bg-[#283860] py-16 lg:py-20 overflow-hidden">
      <motion.div
        className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col sm:flex-row justify-between gap-y-8 gap-x-4 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col space-y-1 px-4 flex-1"
            >
              {/* Counter Logic Placement Node */}
              <CounterNode targetValue={stat.numValue} suffix={stat.suffix} />

              <span className="text-[14px] text-[#E7E8EC] font-semibold whitespace-nowrap">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

