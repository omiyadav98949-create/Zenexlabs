'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = siteConfig.nav.filter((n) => n.href !== '/contact');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-[0.15em] uppercase text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Zenex Labs
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/contact"
              className={cn(
                'text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300',
                pathname === '/contact'
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-sm font-bold tracking-[0.15em] uppercase">
                Zenex Labs
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-12">
              {siteConfig.nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 font-display text-4xl font-light tracking-tight text-foreground border-b border-border"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + siteConfig.nav.length * 0.08, duration: 0.4 }}
                className="pt-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase text-accent-foreground"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
