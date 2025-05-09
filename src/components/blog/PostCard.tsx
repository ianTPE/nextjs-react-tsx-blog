import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../../types/blog';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="post-card">
      {post.coverImage && (
        <div className="post-card-image">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            width={500}
            height={300}
            style={{ objectFit: 'cover', width: '100%', height: '200px' }}
          />
          <div className="post-card-tags">
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="post-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
      <div className="post-card-content">
        <div className="post-meta">
          <span className="post-date">{formattedDate}</span>
          {post.readTime && <span className="post-read-time">{post.readTime} 分鐘閱讀</span>}
        </div>
        <h2 className="post-title">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="post-description">{post.description}</p>
        <div className="post-card-footer">
          <div className="post-author">
            {post.author.image && (
              <Image 
                src={post.author.image} 
                alt={post.author.name} 
                width={30} 
                height={30}
                className="author-avatar"
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            )}
            <span>{post.author.name}</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="read-more">
            閱讀更多
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
