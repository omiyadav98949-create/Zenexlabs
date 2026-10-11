'use client';

import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { services, productStories } from '@/lib/services';
import { SectionLabel, FadeInUp, ImageReveal } from '@/components/motion-primitives';

export function ServicesPage() {
  return (
    <main className="pt-28 md:pt-32">
      {/* Header */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="" label="Services" />

          <FadeInUp delay={0.1}>
            <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tightest text-foreground">
              CREATIVE
              <br />
              BUILT AROUND
              <br />
              <span className="text-accent">YOUR PRODUCT.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-8 max-w-lg text-base text-muted-foreground leading-relaxed">
              Every service is designed to make your product the story. From
              cinematic ads to full creative campaigns.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services list with details */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] space-y-20 md:space-y-32">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image — alternating sides */}
              <div
                className={`lg:col-span-7 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <ImageReveal
                  src={service.image}
                  alt={service.title}
                  className="aspect-[16/10] rounded-sm"
                />
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent text-xs font-medium tracking-[0.15em]">
                    {service.number}
                  </span>
                  <span className="h-px w-8 bg-accent/40" />
                </div>

                <FadeInUp>
                  <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.9] tracking-tight text-foreground">
                    {service.title}
                  </h2>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </FadeInUp>

                {/* Deliverables */}
                <FadeInUp delay={0.2}>
                  <div className="mt-8">
                    <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
                      Typical Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                        >
                          <Check className="h-3.5 w-3.5 text-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Use cases */}
                <FadeInUp delay={0.3}>
                  <div className="mt-6">
                    <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
                      Best Use Cases
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((u) => (
                        <span
                          key={u}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.4}>
                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Inquire about this
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </FadeInUp>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What can we make from one product? */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="px-6 lg:px-10">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="" label="One Product, Many Creatives" />

            <FadeInUp delay={0.1}>
              <h2 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tightest text-foreground">
                WHAT CAN WE MAKE
                <br />
                FROM <span className="text-accent">ONE PRODUCT?</span>
              </h2>
            </FadeInUp>
          </div>
        </div>

        <div className="mt-16 px-6 lg:px-10">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productStories.map((story, idx) => (
                <FadeInUp key={story.number} delay={idx * 0.05}>
                  <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-accent text-xs font-medium tracking-[0.15em]">
                        {story.number}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground">
                        {story.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
