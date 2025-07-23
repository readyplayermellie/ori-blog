// frontend/src/app/posts/[slug]/page.tsx
import { client } from '../../../lib/sanity.client'; // Adjust path
import { postsQuery, postQuery } from '../../../lib/sanity.queries'; // Adjust path
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../lib/sanity.image'; // Adjust path
import Image from 'next/image';
import { notFound } from 'next/navigation'; // For handling 404s in App Router
import Head from 'next/head';

// This is optional: define custom components for Portable Text rendering
const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          width={800} // Example width
          height={500} // Example height, adjust aspect ratio
          style={{ display: 'block', margin: '20px auto' }}
        />
      );
    },
    code: ({ value }) => (
      <pre data-language={value.language}>
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl my-3">{children}</h2>,
    // ... add more heading styles
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-4">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} target={rel ? '_blank' : '_self'}>
          {children}
        </a>
      );
    },
  },
};

// Replace getStaticPaths with generateStaticParams
export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Async component for data fetching (replaces getStaticProps)
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
    // App Router way to handle 404
    notFound();
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Head> {/* Make sure you have imported Head from 'next/head' in App Router or use metadata API */}
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.excerpt} />
        {/* Canonical Tag for SEO: Point to YOUR URL */}
        <link rel="canonical" href={`https://yourwebsite.com/posts/${post.slug.current}`} />
      </Head>

      <article>
        <h1>{post.title}</h1>
        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '20px' }}>
          By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.mainImage.alt || post.title}
            width={800}
            height={450}
            priority
            style={{ marginBottom: '30px' }}
          />
        )}

        <div className="prose" style={{ lineHeight: '1.7', fontSize: '1.1em' }}>
          <PortableText value={post.body} components={PortableTextComponents} />
        </div>
      </article>
    </div>
  );
}