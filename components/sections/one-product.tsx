'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { productStories } from '@/lib/services';
import { SectionLabel, FadeInUp } from '@/components/motion-primitives';

export function OneProduct() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Smooth the scroll progress for buttery transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const imageScale = useTransform(smoothProgress, [0, 1], [1.05, 1.15]);

  // Determine active story index from smoothed progress
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    return smoothProgress.on('change', (v) => {
      const idx = Math.min(
        productStories.length - 1,
        Math.max(0, Math.round(v * (productStories.length - 1)))
      );
      setActiveIndex(idx);
    });
  }, [smoothProgress]);

  return (
    <section
      ref={ref}
      className="relative bg-background"
      style={{ height: `${productStories.length * 50}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images with crossfade */}
        <div className="absolute inset-0">
          {productStories.map((story, idx) => {
            const start = idx / (productStories.length - 1);
            const range = 1 / (productStories.length - 1);
            const opacity = useTransform(
              smoothProgress,
              [start - range * 0.6, start, start + range * 0.6],
              [0, 1, 0]
            );
            return (
              <motion.div
                key={story.number}
                className="absolute inset-0"
                style={{ opacity }}
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  style={{ scale: imageScale }}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/80" />

        {/* Content overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 lg:px-10 py-16 md:py-20">
          {/* Top — label */}
          <div className="flex items-start justify-between">
            <SectionLabel number="04" label="One Product" />
          </div>

          {/* Center — headline */}
          <div className="flex-1 flex items-center">
            <FadeInUp>
              <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.85] tracking-tightest text-foreground">
                ONE PRODUCT.
                <br />
                <span className="text-accent">MULTIPLE STORIES.</span>
              </h2>
            </FadeInUp>
          </div>

          {/* Bottom — story info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Active story text */}
            <div className="relative h-[100px] md:h-[80px]">
              {productStories.map((story, idx) => {
                const start = idx / (productStories.length - 1);
                const range = 1 / (productStories.length - 1);
                const opacity = useTransform(
                  smoothProgress,
                  [start - range * 0.5, start, start + range * 0.5],
                  [0, 1, 0]
                );
                const y = useTransform(
                  smoothProgress,
                  [start - range * 0.5, start, start + range * 0.5],
                  [20, 0, -20]
                );
                return (
                  <motion.div
                    key={story.number}
                    style={{ opacity, y, position: idx === 0 ? 'relative' : 'absolute', top: 0, left: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-accent text-xs font-medium tracking-[0.15em]">
                        {story.number}
                      </span>
                      <span className="h-px w-6 bg-accent/40" />
                      <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-foreground/70">
                        {story.title}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
                      {story.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="hidden md:flex justify-end">
              <div className="flex flex-col gap-2.5">
                {productStories.map((story, idx) => {
                  const start = idx / (productStories.length - 1);
                  const range = 1 / (productStories.length - 1);
                  const isActive = useTransform(
                    smoothProgress,
                    [start - range * 0.5, start, start + range * 0.5],
                    [0, 1, 0]
                  );
                  return (
                    <motion.div
                      key={story.number}
                      className="h-px"
                      style={{
                        backgroundColor: useTransform(
                          isActive,
                          [0, 1],
                          ['hsl(0 0% 22%)', 'hsl(22 80% 52%)']
                        ),
                        width: useTransform(isActive, [0, 1], ['24px', '56px']),
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
