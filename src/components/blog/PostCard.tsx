import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../../types/blog';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      {post.coverImage && (
        <div className="post-card-image">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}
      <div className="post-card-content">
        <div className="post-meta">
          <span className="post-date">{post.date}</span>
          {post.readTime && <span className="post-read-time">{post.readTime} min read</span>}
        </div>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-description">{post.description}</p>
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="post-tag">{tag}</span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
