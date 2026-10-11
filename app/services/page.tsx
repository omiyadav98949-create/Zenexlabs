import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ServicesPage } from '@/components/pages/services-page';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Cinematic ads, product films, social creatives, AI UGC, brand visuals and creative campaigns by Zenex Labs.',
};

export default function Services() {
  return (
    <>
      <SiteHeader />
      <ServicesPage />
      <SiteFooter />
    </>
  );
}
