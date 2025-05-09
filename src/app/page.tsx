import Link from 'next/link';
import PostCard from '../components/blog/PostCard';
import { getAllPosts } from '../data/posts';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3); // 只顯示最近的3篇文章
  
  return (
    <div className="home-page">
      <section className="hero">
        <h1>歡迎來到我的部落格</h1>
        <p>使用 Next.js 和 TypeScript 構建的現代化部落格</p>
      </section>
      
      <section className="recent-posts">
        <h2>最新文章</h2>
        <div className="posts-grid">
          {recentPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="view-all">
          <Link href="/blog">
            查看所有文章
          </Link>
        </div>
      </section>
    </div>
  );
}
