import type { Metadata } from 'next';

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
          這個部落格的核心特色是純 React + TypeScript，並不是特定於 Next.js，未來我也可能會用 Vite 來做一個新的 blog。這裡的內容、結構與流程，都是「vibe coding」的產物，以最純粹的 React + TypeScript 來呈現。
        </p>
        <p>
          一開始我曾用 MDX，但發現 Claude 產生的 React 組件並不容易直接放進 MDX，會遇到很多問題。因此我找到最好的解決方案，就是直接用純 React + TypeScript 撰寫所有 blog 內容。
        </p>
        <p>
          本站的內容大多是由 Claude 產生 React 組件，再用 Claude 與 Windsurf OpenAI 協作整理、架構這個網站。我的目標是讓寫作流程盡量簡單，大部分內容都是「vibe code」產生，幾乎不需要手動 coding。
        </p>
      </section>
      
      <section className="about-author">
        <h2>關於作者</h2>
        <p>
          跨領域職涯，歷練工程、管理、業務與創業，熟悉企業運作與產品推廣。現專注於低代碼/無代碼（Low-Code/No-Code）與 AI 應用，持續探索創新技術。
        </p>
        <p>
          連絡作者 Email: <a href="mailto:ian@wo94.top" className="text-blue-600 underline">ian@wo94.top</a>
        </p>
      </section>
      
      <section className="tech-stack">
        <h2>技術棧</h2>
        <ul>
          <li>Next.js 15.3.2</li>
          <li>React 19.0.0</li>
          <li>TypeScript 5</li>
          <li>Tailwind CSS 4</li>
        </ul>
      </section>
    </div>
  );
}
