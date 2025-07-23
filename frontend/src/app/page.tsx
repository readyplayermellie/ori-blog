// This will be your homepage
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../lib/sanity.client'; // Adjust path based on your lib location
import { postsQuery } from '../lib/sanity.queries'; // Adjust path
import { urlFor } from '../lib/sanity.image'; // Adjust path

// In App Router, data fetching can be done directly in the component (Server Component by default)
export default async function HomePage() {
  const posts = await client.fetch(postsQuery);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
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
                <Image
                  src={urlFor(post.mainImage).width(400).url()}
                  alt={post.mainImage.alt || post.title}
                  width={400}
                  height={200} // Adjust aspect ratio
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: '15px' }}
                />
              )}
              <h2>
                <Link href={`/posts/${post.slug.current}`}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.9em', color: '#666' }}>
                By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()}
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

// Note: No getStaticProps or getServerSideProps in App Router page components, fetch directly.
// Revalidation is handled by `fetch` API or `revalidatePath` if needed.
// For SSG, ensure `force-cache` or `next: { revalidate: false }` for fetch, or use `generateStaticParams` for dynamic routes.