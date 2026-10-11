'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { FadeInUp, ImageReveal } from '@/components/motion-primitives';

export function AboutPreview() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left — image */}
            <div className="lg:col-span-5">
              <ImageReveal
                src="https://images.pexels.com/photos/9695080/pexels-photo-9695080.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800"
                alt="Creative studio atmosphere"
                className="aspect-[3/4] rounded-sm"
              />
            </div>

            {/* Right — content */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                    About
                  </span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tightest text-foreground">
                  WE&apos;RE BUILDING
                  <br />
                  A NEW WAY TO
                  <br />
                  CREATE BRAND
                  <br />
                  <span className="text-accent">CONTENT.</span>
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="mt-8 max-w-lg text-base text-muted-foreground leading-relaxed">
                  Zenex Labs is an independent creative studio focused on
                  advertising and visual storytelling for modern product brands.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="mt-4 max-w-lg text-base text-muted-foreground leading-relaxed">
                  We combine creative direction, AI production, visual design,
                  editing and sound to create cinematic content without the
                  traditional complexity of production.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <p className="mt-8 text-xs font-medium tracking-[0.2em] uppercase text-accent">
                  Founded by {siteConfig.founder}
                </p>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  More About Us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
