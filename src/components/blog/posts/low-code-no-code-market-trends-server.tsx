import React from 'react';
import type { BlogPost } from '../../../types/blog';
import { withPostMetadata } from '../PostWrapper';
import dynamic from 'next/dynamic';

// 文章元數據
const metadata: BlogPost = {
  slug: 'low-code-no-code-market-trends-2025-career-transition',
  title: '【2025趨勢】低代碼/無代碼市場爆發：從企業高管到AI創業者的轉型之路',
  description: '探索低代碼/無代碼市場的爆發性成長與AI融合趨勢。從我50多年的職業生涯，工程師到集團副總，再到創業者，分享如何在這個預計到2032年達2644億美元的新興領域中開創第二人生。本文深入分析平台類型、應用領域與市場機會，為資深專業人士提供轉型藍圖，展示如何結合豐富經驗與前沿技術，把握低代碼革命帶來的商業新機遇。',
  date: '2025-05-08',
  author: {
    name: 'Ian Chou',
    image: '/images/author.png',
    bio: 'LC/NC開發者，AI 愛好者',
  },
  coverImage: '/images/202505/low-code-no-code-market-trends-2025-career-transition.png',
  tags: ['低代碼', '無代碼', '市場趨勢', '轉型之路'],
  readTime: 10
};

// 動態導入客戶端組件
const ClientComponent = dynamic(() => import('./low-code-no-code-market-trends-2025-career-transition'), {
  loading: () => <div>Loading...</div>
});

function ServerPost() {
  return <ClientComponent />;
}

// 使用高階組件包裝並自動註冊
export default withPostMetadata(metadata, ServerPost);
