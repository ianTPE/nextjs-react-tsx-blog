import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../types/blog';

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="post-header">
      <div className="post-meta">
        <span className="post-date">{formattedDate}</span>
        {post.readTime && <span className="post-read-time">{post.readTime} 分鐘閱讀</span>}
      </div>
      
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.description}</p>
      
      <div className="post-tags">
        {post.tags.map(tag => (
          <Link key={tag} href={`/blog?tag=${tag}`} className="post-tag">
            {tag}
          </Link>
        ))}
      </div>
      
      <div className="post-author">
        {post.author.image && (
          <Image 
            src={post.author.image} 
            alt={post.author.name} 
            className="author-image" 
            width={60} 
            height={60}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        )}
        <div className="author-info">
          <h3 className="author-name">{post.author.name}</h3>
          {post.author.bio && <p className="author-bio">{post.author.bio}</p>}
        </div>
      </div>
      
      {post.coverImage && (
        <div className="post-cover-image">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            width={1200} 
            height={600}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      )}
      
      <div className="post-progress-bar">
        <div className="progress-bar-inner"></div>
      </div>
    </div>
  );
};

export default PostHeader;
