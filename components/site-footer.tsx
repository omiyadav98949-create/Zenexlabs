'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Oversized typography */}
      <div className="px-6 lg:px-10 pt-20 pb-12">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/"
            className="font-display text-[20vw] md:text-[15vw] lg:text-[13vw] font-bold leading-[0.85] tracking-tightest text-foreground block"
          >
            ZENEX LABS
          </Link>
        </div>
      </div>

      {/* Statement */}
      <div className="px-6 lg:px-10 pb-16 border-t border-border pt-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left — statement */}
            <div className="md:col-span-6">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.1] tracking-tight text-foreground">
                WE TURN PRODUCTS
                <br />
                INTO CINEMATIC
                <br />
                <span className="text-accent">ADVERTISING.</span>
              </p>
            </div>

            {/* Right — links */}
            <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Nav */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  Navigate
                </p>
                <ul className="space-y-3">
                  {siteConfig.nav.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  Social
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      Instagram
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      Facebook
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  Contact
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      Email
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 lg:px-10 py-6">
        <div className="mx-auto max-w-[1600px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; 2026 Zenex Labs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wide">
            Founded by {siteConfig.founder}
          </p>
        </div>
      </div>
    </footer>
  );
}
