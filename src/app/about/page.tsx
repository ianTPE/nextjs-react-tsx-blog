import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於 | 我的 Next.js 部落格',
  description: '了解更多關於這個部落格和作者的信息',
};

export default function About() {
  return (
    <div className="about-page">
      <h1>關於我的部落格</h1>
      
      <section className="about-blog">
        <h2>部落格簡介</h2>
        <p>
          這是一個使用 Next.js 和 TypeScript 構建的現代化部落格，主要分享關於 Web 開發、React、TypeScript 和其他前端技術的內容。
        </p>
        <p>
          這個部落格採用 Next.js 的 App Router 架構，並使用了組件化設計來展示部落格文章，所有文章都是 React 組件而不是 Markdown 文件，
          這給了我們更大的靈活性來包含交互元素和自定義樣式。
        </p>
      </section>
      
      <section className="about-author">
        <h2>關於作者</h2>
        <p>
          我是一名熱愛前端開發的工程師，對 Next.js、React 和 TypeScript 有特別的興趣。
          我創建這個部落格是為了分享我的知識和經驗，希望能對其他開發者有所幫助。
        </p>
      </section>
      
      <section className="tech-stack">
        <h2>技術棧</h2>
        <ul>
          <li>Next.js 15.3.2</li>
          <li>React 19.0.0</li>
          <li>TypeScript</li>
          <li>CSS</li>
        </ul>
      </section>
    </div>
  );
}
