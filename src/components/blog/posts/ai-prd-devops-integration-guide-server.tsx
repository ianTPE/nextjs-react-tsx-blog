import React from 'react';
import type { BlogPost } from '../../../types/blog';
import { withPostMetadata } from '../PostWrapper';
import dynamic from 'next/dynamic';

// 文章元數據
const metadata: BlogPost = {
  slug: 'ai-prd-devops-integration-guide-2025',
  title: 'AI + PRD + DevOps：軟體開發智能化革命完整指南 2025',
  description: '深入探討 AI 如何與 PRD（產品需求文件）及 DevOps 結合，實現需求智能化、開發自動化、運維自適應化。涵蓋 10 大產業實際應用案例、技術架構、實施路線圖，幫助企業將軟體開發效率提升 50%。',
  date: '2025-05-11',
  author: {
    name: 'Ian Chou',
    image: '/images/author.png',
    bio: 'LC/NC開發者，AI 愛好者',
  },
  coverImage: '/images/202505/ai-prd-devops-integration-guide-2025.png',
  tags: ['AI', 'PRD', 'DevOps', '軟體開發智能化革命'],
  readTime: 15
};

// 動態導入客戶端組件
const ClientComponent = dynamic(() => import('./ai-prd-devops-integration-guide-2025'), {
  loading: () => <div>Loading...</div>
});

function ServerPost() {
  return <ClientComponent />;
}

// 使用高階組件包裝並自動註冊
export default withPostMetadata(metadata, ServerPost);
