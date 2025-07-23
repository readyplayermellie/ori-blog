// frontend/src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../../../lib/sanity.client';
import { postsQuery } from '../../../lib/sanity.queries';
import { urlFor } from '../../../lib/sanity.image';
import { Post } from '../../../lib/types'; // <--- IMPORT YOUR POST TYPE

export default async function HomePage() {
  const posts: Post[] = await client.fetch(postsQuery); // <--- TYPE THE FETCHED DATA

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Latest Blog Posts</h1>

      {posts.length > 0 ? (
        <div>
          {posts.map((post: Post) => ( // <--- TYPE THE MAP ITERATOR
            <div key={post._id} style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(400).url()}
                  alt={post.mainImage.alt || post.title}
                  width={400}
                  height={200}
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: '15px' }}
                />
              )}
              <h2>
                <Link href={`/posts/${post.slug.current}`}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.9em', color: '#666' }}>
                By {post.author?.name} on {new Date(post.publishedAt).toLocaleDateString()} {/* Use optional chaining */}
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