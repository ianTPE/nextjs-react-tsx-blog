import { BlogPostContent } from '../types/blog';
import FirstPostContent from '../components/blog/posts/FirstPost';
import SecondPostContent from '../components/blog/posts/SecondPost';

// 文章內容將由 TSX 組件渲染而不是 Markdown
export const allPosts: BlogPostContent[] = [
  {
    slug: 'first-post',
    title: '使用 Next.js 建立部落格',
    description: '學習如何使用 Next.js 和 TypeScript 建立現代化部落格',
    date: '2025-05-08',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/first-post.jpg',
    tags: ['Next.js', 'React', 'TypeScript'],
    readTime: 5,
    renderContent: FirstPostContent
  },
  {
    slug: 'second-post',
    title: 'TypeScript 與 React 的最佳實踐',
    description: '探索在 React 專案中使用 TypeScript 的有效方法',
    date: '2025-05-07',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/second-post.jpg',
    tags: ['TypeScript', 'React', '最佳實踐'],
    readTime: 7,
    renderContent: SecondPostContent
  },
];

// 通過 slug 獲取文章
export const getPostBySlug = (slug: string): BlogPostContent | undefined => {
  return allPosts.find(post => post.slug === slug);
};

// 獲取所有文章元數據（不包含內容）
export const getAllPosts = (): BlogPostContent[] => {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
