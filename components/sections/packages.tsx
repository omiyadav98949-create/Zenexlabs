'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { packages } from '@/lib/services';
import { SectionLabel, FadeInUp } from '@/components/motion-primitives';

export function Packages() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="07" label="How We Can Work Together" />

          <FadeInUp delay={0.1}>
            <h2 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tightest text-foreground">
              HOW WE CAN
              <br />
              WORK <span className="text-accent">TOGETHER.</span>
            </h2>
          </FadeInUp>
        </div>
      </div>

      {/* Packages grid */}
      <div className="mt-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-background p-8 md:p-10 transition-colors duration-300 hover:bg-secondary/40"
              >
                <span className="text-accent text-xs font-medium tracking-[0.15em]">
                  {pkg.number}
                </span>
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="mt-8 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <FadeInUp delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                Discuss a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
