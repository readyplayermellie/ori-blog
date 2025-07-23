// frontend/lib/types.ts

import { PortableTextBlock, Image as SanityImage, Slug } from 'sanity';

export interface Post {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: 'post';
  title: string;
  slug: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    name: string;
  };
  mainImage?: SanityImage & {
    // Add the alt property directly to the image type if it's directly on the image object
    // If your Sanity image schema has a separate 'alt' field:
    alt?: string | null; // <--- KEY CHANGE HERE (string or null, as empty objects are unlikely for a simple string field)
  };
  categories?: {
    _ref: string;
    _type: 'reference';
    title: string;
  }[];
  publishedAt: string;
  excerpt?: string;
  body: PortableTextBlock[];
}
