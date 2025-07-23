// lib/sanity.client.ts (or src/lib/sanity.client.ts)
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use environment variables
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Use environment variables
  apiVersion: '2024-07-23', // Use current date for API version
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for faster delivery
});
