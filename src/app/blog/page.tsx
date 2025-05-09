import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../data/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文章列表 | Ian\'s LC/NC, AI Blog',
  description: '瀏覽所有LC/NC開發、AI 開發相關的技術文章',
};

export default function BlogIndex() {
  const posts = getAllPosts();
  
  return (
    <div className="blog-index">
      <div className="page-header">
        <h1 className="page-title">LC/NC, AI 開發技術文章</h1>
        <p className="page-description">分享 LC/NC 開發、AI 開發相關的技術文章</p>
      </div>
      
      <div className="post-filters">
        <div className="filter-tags">
          <button className="filter-tag active">全部</button>
          <button className="filter-tag">LC/NC</button>
          <button className="filter-tag">AI</button>
          <button className="filter-tag">其他</button>
        </div>
        <div className="post-sort">
          <select>
            <option value="newest">最新發布</option>
            <option value="oldest">最早發布</option>
          </select>
        </div>
      </div>
      
      <div className="posts-grid">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
