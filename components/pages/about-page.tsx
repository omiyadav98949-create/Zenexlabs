'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel, FadeInUp, ImageReveal } from '@/components/motion-primitives';
import founderPhoto from '@/app/about/Modern_Cafe_Portrait_with_Circular_Lights.png';

const aboutSections = [
  {
    number: '01',
    title: 'WHO WE ARE',
    body: 'Zenex Labs is an independent creative studio focused on advertising and visual storytelling for modern product brands. We exist to make products look extraordinary.',
  },
  {
    number: '02',
    title: 'WHAT WE BELIEVE',
    body: 'We believe the product should always be the story. Not the technology behind it, not the production process — the product. Everything we do serves that principle.',
  },
  {
    number: '03',
    title: 'HOW WE CREATE',
    body: 'Creative direction comes first. Then visual storytelling, AI production, editing, motion and sound design. The creative thinking leads. The tools follow.',
  },
  {
    number: '04',
    title: 'WHY ZENEX',
    body: 'We combine the creative standards of an advertising studio with the speed and flexibility of modern production. No bloated teams. No unnecessary complexity. Just focused, cinematic creative.',
  },
];

const capabilities = [
  'Creative Direction',
  'Visual Storytelling',
  'AI Production',
  'Editing',
  'Motion',
  'Sound Design',
];

export function AboutPage() {
  return (
    <main className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="" label="About" />

          <FadeInUp delay={0.05}>
            <div className="mt-10 inline-flex items-center gap-4 border border-border bg-secondary/40 px-5 py-4">
              <span className="font-display text-4xl font-bold leading-none tracking-tight text-foreground">Z</span>
              <span className="h-10 w-px bg-accent" />
              <span className="font-display text-sm font-bold leading-[0.9] tracking-[0.18em] text-foreground">
                ZENEX
                <br />
                <span className="text-[0.65em] font-medium tracking-[0.35em] text-muted-foreground">LABS</span>
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tightest text-foreground">
              A NEW WAY TO
              <br />
              CREATE BRAND
              <br />
              <span className="text-accent">CONTENT.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
              Zenex Labs is an independent creative studio focused on advertising
              and visual storytelling for modern product brands.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Founder image */}
      <section className="px-6 lg:px-10 py-8 md:py-12">
        <div className="mx-auto max-w-[1600px]">
          <ImageReveal
            src="https://images.pexels.com/photos/5757638/pexels-photo-5757638.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
            alt="Founder"
            className="aspect-[16/9] rounded-sm"
          />
        </div>
      </section>

      {/* Editorial sections */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] space-y-20 md:space-y-32">
          {aboutSections.map((section) => (
            <div
              key={section.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              <div className="lg:col-span-4">
                <FadeInUp>
                  <div className="flex items-center gap-3">
                    <span className="text-accent text-xs font-medium tracking-[0.15em]">
                      {section.number}
                    </span>
                    <span className="h-px w-8 bg-accent/40" />
                    <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground">
                      {section.title}
                    </span>
                  </div>
                </FadeInUp>
              </div>
              <div className="lg:col-span-8">
                <FadeInUp delay={0.1}>
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.2] tracking-tight text-foreground">
                    {section.body}
                  </p>
                </FadeInUp>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="px-6 lg:px-10">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="" label="Capabilities" />

            <FadeInUp delay={0.1}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8">
                {capabilities.map((cap, i) => (
                  <motion.span
                    key={cap}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground/40 hover:text-accent transition-colors duration-300 cursor-default"
                  >
                    {cap}
                    {i < capabilities.length - 1 && (
                      <span className="ml-8 md:ml-12 text-accent/20">/</span>
                    )}
                  </motion.span>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="px-6 lg:px-10 py-20 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <SectionLabel number="05" label="Founder" />
              <FadeInUp delay={0.1}>
                <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-foreground">
                  {siteConfig.founder}
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
                  Founder and creative director. Building a studio that makes
                  products look like they deserve to be seen.
                </p>
              </FadeInUp>
            </div>
            <div className="lg:col-span-7">
              <ImageReveal
                src={founderPhoto.src}
                alt="Onkar Yadav, founder of Zenex Labs"
                className="aspect-[4/5] max-w-md rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
