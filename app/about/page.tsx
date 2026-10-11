import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { AboutPage } from '@/components/pages/about-page';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Zenex Labs is an independent creative studio focused on advertising and visual storytelling for modern product brands.',
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
    </>
  );
}
