'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/services';
import { SectionLabel, FadeInUp } from '@/components/motion-primitives';

export function Process() {
  return (
    <section className="relative bg-secondary py-20 md:py-32">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="05" label="From Product to Campaign" />

          <FadeInUp delay={0.1}>
            <h2 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tightest text-foreground">
              FROM PRODUCT
              <br />
              TO <span className="text-accent">CAMPAIGN.</span>
            </h2>
          </FadeInUp>
        </div>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="mt-16 md:mt-24 px-6 lg:px-10 hidden md:block">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-[42px] left-0 right-0 h-px bg-border" />
            <motion.div
              className="absolute top-[42px] left-0 h-px bg-accent"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="relative flex h-[84px] items-start">
                    <div
                      className={`mt-[34px] h-3 w-3 rounded-full border-2 transition-colors duration-500 ${
                        idx === 0
                          ? 'bg-accent border-accent'
                          : 'bg-background border-border'
                      }`}
                    />
                  </div>
                  {/* Content */}
                  <div className="space-y-3">
                    <span className="text-accent text-xs font-medium tracking-[0.15em]">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile vertical progression */}
      <div className="mt-16 px-6 lg:px-10 md:hidden">
        <div className="mx-auto max-w-[1600px] space-y-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-accent" />
                {idx < processSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8 space-y-2">
                <span className="text-accent text-xs font-medium tracking-[0.15em]">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
