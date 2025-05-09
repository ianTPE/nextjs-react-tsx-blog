export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: Author;
  coverImage?: string;
  tags: string[];
  readTime?: number; // 閱讀時間（分鐘）
}

// 移除了之前的 BlogPostContent 介面，因為我們現在使用 PostRegistry
