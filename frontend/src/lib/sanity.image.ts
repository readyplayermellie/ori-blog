// lib/sanity.image.ts
import createImageUrlBuilder from '@sanity/image-url';
import type { Image as SanityImage } from 'sanity'; // if you have Sanity types installed

import { client } from './sanity.client'; // Adjust path if needed

const imageBuilder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImage) => {
  return imageBuilder.image(source);
};
