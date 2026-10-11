'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { industries } from '@/lib/services';
import { SectionLabel, FadeInUp } from '@/components/motion-primitives';

export function Industries() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="06" label="Who We Create For" />

          <FadeInUp delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tightest text-foreground">
              BUILT FOR
              <br />
              <span className="text-accent">PRODUCT-LED BRANDS.</span>
            </h2>
          </FadeInUp>
        </div>
      </div>

      {/* Industry list with hover image */}
      <div className="mt-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px] relative">
          <div className="border-t border-border">
            {industries.map((industry, idx) => (
              <div
                key={industry.name}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="group relative border-b border-border"
              >
                <div className="flex items-center justify-between py-5 md:py-8 px-2 md:px-4 transition-colors duration-300 hover:bg-secondary/20">
                  <motion.h3
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-colors duration-300"
                    animate={{
                      color: hovered === idx ? 'hsl(22 80% 52%)' : 'hsl(40 15% 95%)',
                    }}
                  >
                    {industry.name}
                  </motion.h3>
                  <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover image — mobile/desktop inline */}
                {hovered === idx && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-48 h-32 overflow-hidden rounded-sm pointer-events-none z-20"
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
