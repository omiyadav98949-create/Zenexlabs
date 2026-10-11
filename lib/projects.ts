export type ProjectCategory =
  | 'JEWELRY'
  | 'FRAGRANCE'
  | 'BEAUTY'
  | 'WATCHES'
  | 'FASHION'
  | 'LIFESTYLE'
  | 'CONSUMER PRODUCTS';

export type ProjectType = 'CLIENT' | 'CONCEPT' | 'SPEC' | 'EXPERIMENT';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  type: ProjectType;
  year: string;
  description: string;
  image: string;
  poster?: string;
  size: 'full' | 'wide' | 'tall' | 'standard' | 'split';
}

export const projects: Project[] = [
  {
    id: 'aurum',
    title: 'AURUM',
    category: 'JEWELRY',
    type: 'CONCEPT',
    year: '2026',
    description: 'A cinematic product film exploring light, shadow and gold craftsmanship.',
    image: 'https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'full',
  },
  {
    id: 'noir-perfume',
    title: 'NOIR',
    category: 'FRAGRANCE',
    type: 'SPEC',
    year: '2026',
    description: 'A fragrance film built around texture, mood and controlled camera movement.',
    image: 'https://images.pexels.com/photos/36834269/pexels-photo-36834269.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'wide',
  },
  {
    id: 'serum',
    title: 'SERUM 01',
    category: 'BEAUTY',
    type: 'CONCEPT',
    year: '2026',
    description: 'Macro detail film highlighting texture, viscosity and premium packaging.',
    image: 'https://images.pexels.com/photos/12146904/pexels-photo-12146904.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    size: 'tall',
  },
  {
    id: 'horizon-watch',
    title: 'HORIZON',
    category: 'WATCHES',
    type: 'SPEC',
    year: '2026',
    description: 'A timepiece film combining precision, materiality and cinematic lighting.',
    image: 'https://images.pexels.com/photos/9453448/pexels-photo-9453448.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'wide',
  },
  {
    id: 'monochrome',
    title: 'MONOCHROME',
    category: 'FASHION',
    type: 'EXPERIMENT',
    year: '2026',
    description: 'Editorial fashion campaign exploring contrast, silhouette and movement.',
    image: 'https://images.pexels.com/photos/20483654/pexels-photo-20483654.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    size: 'tall',
  },
  {
    id: 'amber-bloom',
    title: 'AMBER BLOOM',
    category: 'FRAGRANCE',
    type: 'CONCEPT',
    year: '2026',
    description: 'A perfume reveal film — build-up, atmosphere, product hero shot.',
    image: 'https://images.pexels.com/photos/36779953/pexels-photo-36779953.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'standard',
  },
  {
    id: 'luxe-skin',
    title: 'LUXE SKIN',
    category: 'BEAUTY',
    type: 'SPEC',
    year: '2026',
    description: 'Skincare campaign visuals — clean, minimal, premium product storytelling.',
    image: 'https://images.pexels.com/photos/7670680/pexels-photo-7670680.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    size: 'tall',
  },
  {
    id: 'gold-standard',
    title: 'GOLD STANDARD',
    category: 'JEWELRY',
    type: 'CONCEPT',
    year: '2026',
    description: 'A collection film presenting multiple pieces as one visual story.',
    image: 'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    size: 'split',
  },
  {
    id: 'essence',
    title: 'ESSENCE',
    category: 'FRAGRANCE',
    type: 'EXPERIMENT',
    year: '2026',
    description: 'A creative exploration of scent through abstract visual storytelling.',
    image: 'https://images.pexels.com/photos/36779955/pexels-photo-36779955.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'standard',
  },
  {
    id: 'precision',
    title: 'PRECISION',
    category: 'WATCHES',
    type: 'SPEC',
    year: '2026',
    description: 'A macro study of watch mechanisms, finish and controlled lighting.',
    image: 'https://images.pexels.com/photos/15019857/pexels-photo-15019857.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'wide',
  },
  {
    id: 'ritual',
    title: 'RITUAL',
    category: 'LIFESTYLE',
    type: 'CONCEPT',
    year: '2026',
    description: 'A lifestyle film placing product into a believable everyday scene.',
    image: 'https://images.pexels.com/photos/296287/pexels-photo-296287.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
    size: 'standard',
  },
  {
    id: 'couture',
    title: 'COUTURE',
    category: 'FASHION',
    type: 'CONCEPT',
    year: '2026',
    description: 'A fashion-forward campaign blending product, model and editorial direction.',
    image: 'https://images.pexels.com/photos/15051712/pexels-photo-15051712.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    size: 'tall',
  },
];

export const projectCategories: ('ALL' | ProjectCategory)[] = [
  'ALL',
  'BEAUTY',
  'JEWELRY',
  'FRAGRANCE',
  'WATCHES',
  'FASHION',
  'LIFESTYLE',
];
