'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects';
import { SectionLabel, FadeInUp, ImageReveal } from '@/components/motion-primitives';
import { cn } from '@/lib/utils';

export function WorkPage() {
  const [filter, setFilter] = useState<'ALL' | ProjectCategory>('ALL');

  const filtered =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-28 md:pt-32">
      {/* Page header */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="" label="Creative Archive" />

          <FadeInUp delay={0.1}>
            <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tightest text-foreground">
              SELECTED
              <br />
              <span className="text-accent">WORK.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
              A creative archive of cinematic product films, advertising concepts
              and visual campaigns.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-10 sticky top-20 z-30 bg-background/80 backdrop-blur-md py-4 border-y border-border">
        <div className="mx-auto max-w-[1600px] flex flex-wrap items-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300',
                filter === cat
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border text-muted-foreground hover:border-accent hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={cn(
                    'group cursor-pointer',
                    (project.size === 'wide' || project.size === 'full') &&
                      'md:col-span-2'
                  )}
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
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
                    <div className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground tracking-wide">
                        {project.category} — {project.year}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground/60 leading-relaxed max-w-xs">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-accent text-xs font-medium tracking-[0.15em]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
