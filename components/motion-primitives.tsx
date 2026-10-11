'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/** Fade-in-up on scroll into view */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Reveal text word-by-word or line-by-line */
export function RevealText({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + i * 0.04,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}

/** Horizontal parallax on scroll */
export function ParallaxX({
  children,
  speed = 100,
  className = '',
  direction = 'left',
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [0, -speed] : [0, speed]
  );
  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
}

/** Scale-in image reveal */
export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

/** Section label with number */
export function SectionLabel({
  number,
  label,
  className = '',
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <FadeInUp className={className}>
      <div className="flex items-center gap-3">
        <span className="text-accent text-xs font-medium tracking-[0.15em]">
          {number}
        </span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground">
          {label}
        </span>
      </div>
    </FadeInUp>
  );
}
