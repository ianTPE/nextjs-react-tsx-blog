import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout/Layout';
import PostCard from '../../components/blog/PostCard';
import { BlogPost } from '../../types/blog';
import { getAllPosts } from '../../data/posts';

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="blog-index">
        <h1 className="page-title">部落格文章</h1>
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
