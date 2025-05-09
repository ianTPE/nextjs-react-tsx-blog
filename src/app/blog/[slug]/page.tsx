import { notFound } from 'next/navigation';
import PostHeader from '../../../components/blog/PostHeader';
import { getPostBySlug, getAllPosts } from '../../../data/posts';
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
  
  const PostContent = post.renderContent;
  
  return (
    <article className="blog-post">
      <PostHeader post={post} />
      <div className="post-content-wrapper">
        <PostContent />
      </div>
    </article>
  );
}
