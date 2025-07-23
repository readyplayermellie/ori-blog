// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { client } from '../lib/sanity.client';
import { postsQuery } from '../lib/sanity.queries';
import { urlFor } from '../lib/sanity.image'; // You'll create this next

export default function HomePage({ posts }) {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My personal blog with articles." />
      </Head>
        <div className="text-center mt-64">
        <div>
            <h1 className="text-6xl">Ori (nog niet) onderweg</h1>
            <h2 className="text-2xl italic">Voor de dromers en de doeners</h2>
        </div>
        <div className="mt-32">
            <h3>Huidige positie:</h3>
            <p>52°20&apos;24.349&quot; | 5°7&apos;57.537&quot;</p>
            <p>Almere, Nederland</p>
        </div>
        </div>

      <h1>Latest Blog Posts</h1>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post._id} style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(400).url()}
                  alt={post.mainImage.alt || post.title}
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: '15px' }}
                />
              )}
              <h2>
                <Link href={`/posts/${post.slug.current}`}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.9em', color: '#666' }}>
                {/* By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()} */}
              </p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(postsQuery);
  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalidate every 60 seconds (ISR)
  };
}
