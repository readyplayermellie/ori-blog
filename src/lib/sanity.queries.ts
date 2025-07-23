// lib/sanity.queries.ts (or src/lib/sanity.queries.ts)
import { groq } from 'next-sanity';

// Query for all posts (for homepage/blog list)
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    "authorName": author->name,
    "categories": categories[]->title
  }
`;

// Query for a single post by slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body // This is your Portable Text content
  }
`;
