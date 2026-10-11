'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionLabel } from '@/components/motion-primitives';

export function OversizedType() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-background py-20 md:py-32"
    >
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="01" label="Creative Direction" />
        </div>
      </div>

      <div className="mt-12 md:mt-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="font-display font-bold leading-[0.85] tracking-tightest text-foreground">
            <motion.span
              style={{ x: x1 }}
              className="block text-[15vw] md:text-[12vw] lg:text-[11vw]"
            >
              MAKE THE
            </motion.span>
            <motion.span
              style={{ x: x2 }}
              className="block text-[15vw] md:text-[12vw] lg:text-[11vw] pl-[10vw] md:pl-[15vw]"
            >
              PRODUCT
            </motion.span>
            <motion.span
              style={{ x: x1 }}
              className="block text-[15vw] md:text-[12vw] lg:text-[11vw] text-accent"
            >
              THE STORY.
            </motion.span>
          </h2>
        </div>
      </div>
    </section>
  );
}
