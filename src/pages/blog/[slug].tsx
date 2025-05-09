import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout/Layout';
import PostHeader from '../../components/blog/PostHeader';
import { BlogPostContent } from '../../types/blog';
import { getPostBySlug, getAllPosts } from '../../data/posts';

interface PostPageProps {
  post: BlogPostContent;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const PostContent = post.renderContent;
  
  return (
    <Layout>
      <article className="blog-post">
        <PostHeader post={post} />
        <div className="post-content-wrapper">
          <PostContent />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      post,
    },
  };
};

export default PostPage;
