'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { FadeInUp } from '@/components/motion-primitives';

export function StartSmall() {
  return (
    <section className="relative bg-accent py-20 md:py-32 overflow-hidden">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left — headline + copy */}
            <div>
              <FadeInUp>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/40" />
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent-foreground/60">
                    Start Small
                  </span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.85] tracking-tightest text-accent-foreground">
                  START WITH
                  <br />
                  ONE PRODUCT.
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="mt-8 max-w-md text-base text-accent-foreground/70 leading-relaxed">
                  Not ready for a full campaign? Start with one product and one
                  creative concept. See what we can create together before
                  committing to a larger content package.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent-foreground px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase text-accent transition-all duration-300 hover:gap-3"
                >
                  Try One Creative
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </FadeInUp>
            </div>

            {/* Right — visual equation */}
            <FadeInUp delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'One Product', sub: 'Your product' },
                  { label: 'One Creative Direction', sub: 'Our vision' },
                  { label: 'One Cinematic Ad', sub: 'The result' },
                ].map((item, i) => (
                  <div key={i}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                      className="flex items-center gap-4 rounded-lg border border-accent-foreground/15 bg-accent-foreground/5 px-6 py-5"
                    >
                      <span className="text-accent-foreground/40 text-xs font-medium tracking-[0.15em]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <p className="font-display text-xl md:text-2xl font-medium text-accent-foreground">
                          {item.label}
                        </p>
                        <p className="text-xs text-accent-foreground/40 mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                    {i < 2 && (
                      <div className="flex justify-center py-2">
                        <Plus className="h-4 w-4 text-accent-foreground/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
