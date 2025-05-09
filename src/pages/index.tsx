import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import PostCard from '../components/blog/PostCard';
import { BlogPost } from '../types/blog';
import { getAllPosts } from '../data/posts';

interface HomeProps {
  recentPosts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ recentPosts }) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3); // 只顯示最近的3篇文章
  
  return {
    props: {
      recentPosts,
    },
  };
};

export default Home;
