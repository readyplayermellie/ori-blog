// pages/posts/[slug].tsx
import Head from 'next/head';
import { client } from '../../lib/sanity.client';
import { postsQuery, postQuery } from '../../lib/sanity.queries';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/sanity.image'; // You'll create this next
import Image from 'next/image'; // For Next.js Image component

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
          layout="responsive" // Or "fill", "fixed", "intrinsic"
          width={800} // Example width
          height={500} // Example height
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
    // Custom mark for code (inline code)
    // code: ({ children }) => <code>{children}</code>,
  },
};

export default function PostPage({ post }) {
  if (!post) {
    return <div>Loading...</div>; // Or a custom 404 page
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.excerpt} />
        {/* Canonical Tag for SEO: Point to YOUR URL */}
        <link rel="canonical" href={`https://yourwebsite.com/posts/${post.slug.current}`} />
        {/* If you want search engines to prefer Substack, point to Substack: */}
        {/* <link rel="canonical" href={post.linkToSubstack} /> */}
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
            layout="responsive"
            width={800}
            height={450} // Adjust as needed
            priority // Preload the main image
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

export async function getStaticPaths() {
  const posts = await client.fetch(postsQuery);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking', // or true if you want to show a loading state for new pages
  };
}

export async function getStaticProps({ params }) {
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Revalidate every 60 seconds (ISR)
  };
}
