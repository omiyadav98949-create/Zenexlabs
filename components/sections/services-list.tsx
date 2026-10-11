'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
import { SectionLabel, FadeInUp } from '@/components/motion-primitives';

export function ServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="03" label="What We Create" />

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeInUp>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tightest text-foreground">
                CREATIVE
                <br />
                BUILT AROUND
                <br />
                <span className="text-accent">YOUR PRODUCT.</span>
              </h2>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Service list */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="mt-16 md:mt-20 relative px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1600px] relative">
          {/* Floating preview image — follows cursor smoothly */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block pointer-events-none absolute z-30 overflow-hidden rounded-sm"
                style={{
                  left: cursorPos.x + 30,
                  top: cursorPos.y - 100,
                  width: 260,
                  height: 180,
                }}
              >
                <img
                  src={services[hoveredIndex].image}
                  alt={services[hoveredIndex].title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-border">
            {services.map((service, idx) => (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-border transition-colors duration-300 hover:bg-secondary/30"
              >
                <Link href="/services" className="block">
                  <div className="flex items-center gap-4 md:gap-8 py-6 md:py-8 px-2 md:px-4">
                    {/* Number */}
                    <span
                      className={`text-xs font-medium tracking-[0.15em] transition-colors duration-300 shrink-0 ${
                        hoveredIndex === idx ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight transition-transform duration-300 shrink-0 ${
                        hoveredIndex === idx
                          ? 'text-accent md:translate-x-2'
                          : 'text-foreground'
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description — always visible on desktop, fades in on hover */}
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="hidden md:block flex-1 text-sm text-muted-foreground leading-relaxed pl-8"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Spacer to maintain layout when description not shown */}
                    {hoveredIndex !== idx && (
                      <div className="hidden md:block flex-1" />
                    )}

                    {/* Arrow */}
                    <ArrowUpRight
                      className={`h-5 w-5 md:h-6 md:w-6 transition-all duration-300 shrink-0 ${
                        hoveredIndex === idx
                          ? 'text-accent opacity-100 -translate-y-1 translate-x-1'
                          : 'text-muted-foreground/30 opacity-0'
                      }`}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
