import React from 'react';

const SecondPost: React.FC = () => {
  return (
    <div className="post-content">
      <p>
        TypeScript 已經成為 React 開發中的重要工具，它讓我們的代碼更健壯、更易於維護。
        在這篇文章中，我們會分享一些在 React 專案中使用 TypeScript 的最佳實踐。
      </p>
      
      <h2>明確的組件 Props 類型</h2>
      <p>
        始終為您的組件定義明確的 Props 類型：
      </p>
      
      <pre><code>{`interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};`}</code></pre>
      
      <h2>使用類型斷言謹慎</h2>
      <p>
        盡量避免過度使用類型斷言（type assertions）。如果您發現自己經常需要使用 "as" 語法，
        這可能意味著您的類型設計需要改進。
      </p>
      
      <h2>利用泛型創建可重用組件</h2>
      <p>
        泛型可以幫助您創建更靈活的組件：
      </p>
      
      <pre><code>{`interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}`}</code></pre>
      
      <h2>使用 TypeScript 的嚴格模式</h2>
      <p>
        在 tsconfig.json 中啟用嚴格模式，以獲得最大的類型安全性：
      </p>
      
      <pre><code>{`{
  "compilerOptions": {
    "strict": true,
    // 其他選項...
  }
}`}</code></pre>
      
      <h2>結論</h2>
      <p>
        遵循這些最佳實踐，您將能夠創建更健壯、更易於維護的 React 應用程序。
        TypeScript 和 React 的結合為我們提供了更好的開發體驗和更高質量的代碼。
      </p>
    </div>
  );
};

export default SecondPost;
