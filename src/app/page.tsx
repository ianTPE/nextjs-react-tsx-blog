import Link from 'next/link';
import PostCard from '../components/blog/PostCard';
import { getAllPosts } from '../data/posts';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3); // 只顯示最近的3篇文章
  
  return (
    <div className="home-page">
      <section className="hero">
        <h1>歡迎來到我的技術部落格</h1>
        <p>分享 Next.js、React 和 TypeScript 的學習心得和最佳實踐</p>
        <div className="hero-actions">
          <Link href="/blog" className="primary-button">
            瀏覽所有文章
          </Link>
          <Link href="/about" className="secondary-button">
            了解更多
          </Link>
        </div>
      </section>
      
      <section className="featured-content">
        <h2 className="section-title">精選文章</h2>
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
      
      <section className="newsletter">
        <h2>訂閱我的最新文章</h2>
        <p>不定期發送最新文章和技術資訊，絕不濫發郵件</p>
        <form className="subscribe-form">
          <input type="email" placeholder="您的郵箱地址" required />
          <button type="submit">訂閱</button>
        </form>
      </section>
    </div>
  );
}
