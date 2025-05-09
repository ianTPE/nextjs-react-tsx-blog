const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/components/blog/posts');
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.tsx'));

let importStatements = files.map(file => {
  const name = path.basename(file, '.tsx');
  return `import './posts/${name}';`;
}).join('\n');

const template = `// 自動生成的文件 - 請勿手動編輯
import React from 'react';

// 自動導入所有文章
${importStatements}

export function PostLoader() {
  return null;
}
`;

fs.writeFileSync(
  path.join(__dirname, '../src/components/blog/PostLoader.tsx'),
  template
);

console.log('PostLoader.tsx 已更新，自動導入了 ' + files.length + ' 篇文章');
