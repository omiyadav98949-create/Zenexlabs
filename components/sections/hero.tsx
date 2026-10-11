'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-background"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src="https://images.pexels.com/photos/36834269/pexels-photo-36834269.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000"
          alt="Cinematic product photography"
          className="h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-background/30 to-background"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex h-full flex-col justify-end px-6 lg:px-10 pb-20"
      >
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/70">
            AI Creative Studio for Brands
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-display font-bold leading-[0.85] tracking-tightest text-foreground">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[12vw] md:text-[9vw] lg:text-[8vw]"
          >
            WE TURN PRODUCTS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[12vw] md:text-[9vw] lg:text-[8vw]"
          >
            INTO CINEMATIC
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[12vw] md:text-[9vw] lg:text-[8vw] text-accent"
          >
            ADVERTISING.
          </motion.span>
        </h1>

        {/* Supporting copy + CTAs */}
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-md text-sm md:text-base text-foreground/60 leading-relaxed"
          >
            Cinematic ads, product films and visual campaigns built to make
            modern brands stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-foreground/40">
            Scroll
          </span>
          <ArrowDown className="h-3 w-3 text-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
