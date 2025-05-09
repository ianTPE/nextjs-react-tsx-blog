import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../data/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '部落格文章 | 我的 Next.js 部落格',
  description: '瀏覽所有部落格文章',
};

export default function BlogIndex() {
  const posts = getAllPosts();
  
  return (
    <div className="blog-index">
      <h1 className="page-title">部落格文章</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
