'use client';

const marqueeItems = [
  'CINEMATIC ADS',
  'PRODUCT FILMS',
  'SOCIAL CREATIVES',
  'AI UGC',
  'BRAND VISUALS',
  'CREATIVE CAMPAIGNS',
];

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-6 md:py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 md:mx-12 font-display text-3xl md:text-5xl font-light tracking-tight text-foreground/30"
          >
            {item}
            <span className="ml-8 md:ml-12 text-accent/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
