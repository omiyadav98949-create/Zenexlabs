export const siteConfig = {
  name: 'Zenex Labs',
  tagline: 'AI Creative Studio for Brands',
  description:
    'Zenex Labs creates cinematic ads, product films, social creatives and visual campaigns for modern product brands.',
  url: 'https://zenexlabs.com',
  founder: 'Onkar Yadav',
  email: 'contact@zenexlabs.com',
  social: {
    instagram: 'https://www.instagram.com/zenexlabs_/',
    facebook: 'https://facebook.com/zenexlabs',
  },
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
