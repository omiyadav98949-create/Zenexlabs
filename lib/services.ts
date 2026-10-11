export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  deliverables: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    number: '01',
    title: 'CINEMATIC ADS',
    description:
      'High-impact advertising films designed to stop the scroll and make products unforgettable.',
    image: 'https://images.pexels.com/photos/36834269/pexels-photo-36834269.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['15–30s ad film', 'Multiple aspect ratios', 'Sound design', 'Color grade'],
    useCases: ['Paid advertising', 'Brand campaigns', 'Product launches'],
  },
  {
    number: '02',
    title: 'PRODUCT FILMS',
    description:
      'Detailed product-focused films built around camera movement, light and visual storytelling.',
    image: 'https://images.pexels.com/photos/9453448/pexels-photo-9453448.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['30–60s product film', 'Macro detail shots', 'Controlled lighting', 'Motion design'],
    useCases: ['Website hero content', 'Product pages', 'Trade shows'],
  },
  {
    number: '03',
    title: 'SOCIAL CREATIVES',
    description:
      'Short-form content designed for Instagram, TikTok and paid advertising.',
    image: 'https://images.pexels.com/photos/4938514/pexels-photo-4938514.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['6–15s vertical creatives', 'Multiple variations', 'Captions and overlays', 'Platform-optimized'],
    useCases: ['Instagram reels', 'TikTok', 'Paid social', 'Story ads'],
  },
  {
    number: '04',
    title: 'AI UGC',
    description:
      'Creator-style advertising content for social campaigns and product marketing.',
    image: 'https://images.pexels.com/photos/20483654/pexels-photo-20483654.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['Creator-style videos', 'Multiple hooks', 'Product-focused narratives', 'A/B test variations'],
    useCases: ['Social campaigns', 'Product marketing', 'Influencer-style content'],
  },
  {
    number: '05',
    title: 'BRAND VISUALS',
    description:
      'Product photography, lifestyle imagery and campaign visuals.',
    image: 'https://images.pexels.com/photos/7670680/pexels-photo-7670680.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['Product photography', 'Lifestyle imagery', 'Campaign visuals', 'Retouching and grade'],
    useCases: ['E-commerce', 'Lookbooks', 'Social grid', 'Print'],
  },
  {
    number: '06',
    title: 'CREATIVE CAMPAIGNS',
    description:
      'Multiple creative assets built around a product, collection or campaign.',
    image: 'https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    deliverables: ['Hero film', 'Social cutdowns', 'Static visuals', 'Campaign direction'],
    useCases: ['Collection launches', 'Seasonal campaigns', 'Brand resets'],
  },
];

export interface ProductStory {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const productStories: ProductStory[] = [
  {
    number: '01',
    title: 'PRODUCT SHOWCASE',
    description: 'Multiple angles and controlled camera movement.',
    image: 'https://images.pexels.com/photos/8361544/pexels-photo-8361544.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '02',
    title: 'MACRO DETAIL',
    description: 'Close-up shots highlighting material, texture and finish.',
    image: 'https://images.pexels.com/photos/9202860/pexels-photo-9202860.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '03',
    title: 'CINEMATIC AD',
    description: 'Product placed inside a visually striking environment.',
    image: 'https://images.pexels.com/photos/11711816/pexels-photo-11711816.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '04',
    title: 'LUXURY / EDITORIAL',
    description: 'Fashion-forward campaign imagery.',
    image: 'https://images.pexels.com/photos/34089130/pexels-photo-34089130.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '05',
    title: 'LIFESTYLE',
    description: 'Product shown within a believable lifestyle scene.',
    image: 'https://images.pexels.com/photos/11711819/pexels-photo-11711819.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '06',
    title: 'PRODUCT + MODEL',
    description: 'Model wearing or using the product.',
    image: 'https://images.pexels.com/photos/6801217/pexels-photo-6801217.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '07',
    title: 'PRODUCT REVEAL',
    description: 'Build-up, reveal, hero shot and CTA.',
    image: 'https://images.pexels.com/photos/15574229/pexels-photo-15574229.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '08',
    title: 'COLLECTION FILM',
    description: 'Multiple products presented as one visual story.',
    image: 'https://images.pexels.com/photos/36779954/pexels-photo-36779954.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
  {
    number: '09',
    title: 'SOCIAL AD',
    description: 'Short-form scroll-stopping creative.',
    image: 'https://images.pexels.com/photos/9694193/pexels-photo-9694193.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  },
];

export interface Industry {
  name: string;
  image: string;
}

export const industries: Industry[] = [
  { name: 'BEAUTY', image: 'https://images.pexels.com/photos/12969358/pexels-photo-12969358.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'JEWELRY', image: 'https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'FRAGRANCE', image: 'https://images.pexels.com/photos/36834269/pexels-photo-36834269.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'WATCHES', image: 'https://images.pexels.com/photos/9453448/pexels-photo-9453448.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'FASHION', image: 'https://images.pexels.com/photos/20483654/pexels-photo-20483654.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'LIFESTYLE', image: 'https://images.pexels.com/photos/296287/pexels-photo-296287.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'FOOD & BEVERAGE', image: 'https://images.pexels.com/photos/33889175/pexels-photo-33889175.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
  { name: 'CONSUMER PRODUCTS', image: 'https://images.pexels.com/photos/7005933/pexels-photo-7005933.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200' },
];

export interface Package {
  number: string;
  name: string;
  description: string;
  features: string[];
}

export const packages: Package[] = [
  {
    number: '01',
    name: 'SINGLE CREATIVE',
    description: 'One product. One concept. One cinematic creative.',
    features: ['1 product', '1 creative direction', '1 cinematic ad', '1–2 deliverables'],
  },
  {
    number: '02',
    name: 'PRODUCT CONTENT',
    description: 'Multiple short-form creatives built around your products.',
    features: ['Multiple products', 'Short-form content', 'Social-optimized', '4–8 deliverables'],
  },
  {
    number: '03',
    name: 'CREATIVE CAMPAIGN',
    description: 'A complete visual campaign around a product or collection.',
    features: ['Hero film + cutdowns', 'Static visuals', 'Campaign direction', '8–15 deliverables'],
  },
  {
    number: '04',
    name: 'ONGOING CREATIVE',
    description: 'Continuous content for social media and paid advertising.',
    features: ['Monthly deliverables', 'Ongoing creative direction', 'Priority scheduling', 'Custom scope'],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'DISCOVER', description: 'Understand the product, audience and objective.' },
  { number: '02', title: 'CONCEPT', description: 'Develop the creative direction and visual story.' },
  { number: '03', title: 'CREATE', description: 'Build the scenes, product visuals and campaign assets.' },
  { number: '04', title: 'REFINE', description: 'Editing, motion, sound design and final polish.' },
  { number: '05', title: 'DELIVER', description: 'Final content optimized for social and advertising.' },
];
