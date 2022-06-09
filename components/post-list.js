import PostPreview from './post-preview'
import authors from '../lib/authors'

export default function PostList({ posts }) {
  return (
    <section>
      <div className="mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={authors[post.author]}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
