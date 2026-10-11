import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/sections/hero';
import { OversizedType } from '@/components/sections/oversized-type';
import { Marquee } from '@/components/sections/marquee';
import { CreativeStatement } from '@/components/sections/creative-statement';
import { ServicesList } from '@/components/sections/services-list';
import { OneProduct } from '@/components/sections/one-product';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { StartSmall } from '@/components/sections/start-small';
import { Packages } from '@/components/sections/packages';
import { AboutPreview } from '@/components/sections/about-preview';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <OversizedType />
        <OneProduct />
        <Marquee />
        <CreativeStatement />
        <ServicesList />
        <Process />
        <Industries />
        <StartSmall />
        <Packages />
        <AboutPreview />
      </main>
      <SiteFooter />
    </>
  );
}
