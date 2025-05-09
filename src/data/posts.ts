import type { BlogPost } from '../types/blog';
import { PostRegistry } from '../components/blog/PostWrapper';
import '../components/blog/PostLoader'; // 確保所有文章都已經被加載和註冊

// 從註冊表中獲取所有文章元數據
export const allPosts: BlogPost[] = Object.values(PostRegistry).map(entry => entry.metadata);

// 建立組件映射表
export const PostComponents: Record<string, React.ComponentType> = {};
for (const [slug, entry] of Object.entries(PostRegistry)) {
  PostComponents[slug] = entry.Component;
}

// 通過 slug 獲取文章
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allPosts.find(post => post.slug === slug);
};

// 獲取所有文章元數據並按日期排序
export const getAllPosts = (): BlogPost[] => {
  return [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
