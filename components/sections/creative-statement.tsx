'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeInUp, SectionLabel } from '@/components/motion-primitives';

const creativeLabels = [
  'THE PRODUCT',
  'THE STORY',
  'THE CAMERA',
  'THE LIGHT',
  'THE MOVEMENT',
  'THE EDIT',
  'THE SOUND',
];

export function CreativeStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary py-20 md:py-32"
    >
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="" label="Creative Statement" />
        </div>
      </div>

      <motion.div
        style={{ y }}
        className="mt-12 md:mt-16 px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tightest text-foreground">
            <FadeInUp>GOOD PRODUCTS</FadeInUp>
            <FadeInUp delay={0.1}>
              <span className="text-muted-foreground">DESERVE</span>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <span className="text-accent">GOOD CREATIVE.</span>
            </FadeInUp>
          </h2>

          <FadeInUp delay={0.3}>
            <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              We combine creative direction, AI production, visual storytelling,
              editing and sound to turn products into advertising people want to
              watch.
            </p>
          </FadeInUp>
        </div>
      </motion.div>

      {/* Creative labels */}
      <div className="mt-20 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-4">
            {creativeLabels.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="font-display text-sm md:text-base lg:text-lg font-light tracking-[0.15em] text-muted-foreground/60"
              >
                {label}
                {i < creativeLabels.length - 1 && (
                  <span className="ml-6 md:ml-10 text-accent/30">/</span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
