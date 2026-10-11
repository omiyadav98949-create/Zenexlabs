import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ContactPage } from '@/components/pages/contact-page';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your brand and what you want to create. Start a project with Zenex Labs.',
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <ContactPage />
      <SiteFooter />
    </>
  );
}
