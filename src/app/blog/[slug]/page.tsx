import React from 'react';
import { notFound } from 'next/navigation';
import PostHeader from '../../../components/blog/PostHeader';
import PostCard from '../../../components/blog/PostCard';
import { getPostBySlug, getAllPosts, PostComponents } from '../../../data/posts';
import type { Metadata } from 'next';

// 静态参数生成
export function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// 元数据生成 - 使用异步函数
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '文章未找到',
    };
  }
  
  return {
    title: `${post.title} | 我的 Next.js 部落格`,
    description: post.description,
  };
}

// 页面组件
export default function Page({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // 獲取相關文章 (同個標籤的其他文章)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug) // 排除當前文章
    .filter(p => p.tags.some(tag => post.tags.includes(tag))) // 有相同標籤
    .slice(0, 3); // 最多顯示3篇
  
  // 從 PostComponents 中獲取對應的文章內容組件
  const PostContent = PostComponents[post.slug];
  
  // 确保 PostContent 是一个有效的组件
  if (!PostContent) {
    return notFound();
  }
  
  return (
    <>
      <article className="blog-post">
        <PostHeader post={post} />
        <div className="post-content-wrapper">
          {React.createElement(PostContent)}
        </div>
        
        <div className="post-footer">
          <div className="post-share">
            <h3>分享這篇文章</h3>
            <div className="social-share">
              <button className="share-button twitter">Twitter</button>
              <button className="share-button facebook">Facebook</button>
              <button className="share-button linkedin">LinkedIn</button>
            </div>
          </div>
        </div>
      </article>
      
      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h2 className="related-title">您可能還會喜歡</h2>
          <div className="posts-grid">
            {relatedPosts.map(relatedPost => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
