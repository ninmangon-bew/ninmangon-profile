import type { ImageMetadata } from 'astro';
const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/images/portfolio/*.webp', { eager: true });
export function portfolioImage(name: string): ImageMetadata {
  const asset = assets[`../assets/images/portfolio/${name}.webp`];
  if (!asset) throw new Error(`Missing portfolio image: ${name}`);
  return asset.default;
}
