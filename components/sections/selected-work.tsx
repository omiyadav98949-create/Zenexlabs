'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { SectionLabel, FadeInUp, ImageReveal } from '@/components/motion-primitives';
import { cn } from '@/lib/utils';

export function SelectedWork() {
  const featured = projects.slice(0, 5);

  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="02" label="Selected Work" />

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeInUp>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tightest text-foreground">
                BUILT TO
                <br />
                BE SEEN.
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
                A selection of cinematic product films, advertising concepts and
                visual campaigns.
              </p>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Editorial portfolio layout */}
      <div className="mt-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px] space-y-6 md:space-y-10">
          {featured.map((project, idx) => {
            const isFull = project.size === 'full';
            const isWide = project.size === 'wide';
            const isTall = project.size === 'tall';

            // Split layout for specific items
            if (idx === 1) {
              return (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <ProjectCard project={project} index={idx} />
                  <ProjectCard project={featured[2] ?? project} index={idx + 1} />
                </div>
              );
            }
            if (idx === 2) return null; // already rendered in split

            return (
              <div
                key={project.id}
                className={cn(
                  isFull && 'w-full',
                  isWide && 'w-full',
                  isTall && 'mx-auto max-w-2xl'
                )}
              >
                <ProjectCard project={project} index={idx} large={isFull || isWide} />
              </div>
            );
          })}
        </div>
      </div>

      {/* View all link */}
      <div className="mt-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px] flex justify-center">
          <FadeInUp>
            <Link
              href="/work"
              className="group flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: (typeof projects)[0];
  index: number;
  large?: boolean;
}) {
  return (
    <Link href="/work" className="group block">
      <div
        className={cn(
          'relative overflow-hidden',
          large ? 'aspect-[16/9]' : 'aspect-[4/5]'
        )}
      >
        <ImageReveal
          src={project.image}
          alt={project.title}
          className="h-full w-full"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Type badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="rounded-full bg-background/60 backdrop-blur-sm px-3 py-1 text-[9px] font-medium tracking-[0.15em] uppercase text-foreground/80">
            {project.type}
          </span>
        </div>
        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0 }}
          className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
          style={{ opacity: 0 }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>
      {/* Project info */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg md:text-xl font-medium tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground tracking-wide">
            {project.category} — {project.year}
          </p>
        </div>
        <span className="text-accent text-xs font-medium tracking-[0.15em]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </Link>
  );
}
