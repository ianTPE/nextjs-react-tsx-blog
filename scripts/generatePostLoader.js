const fs = require('fs');
const path = require('path');

// 遞歸獲取所有 .tsx 文件
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 排除名為 "components" 的目錄
      if (file !== 'components') {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx')) {
      // 只包含 .tsx 文件
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 文章目錄和 PostLoader 文件的路徑
const postsDir = path.join(__dirname, '../src/components/blog/posts');
const postLoaderDir = path.join(__dirname, '../src/components/blog');
const allPostFiles = getAllFiles(postsDir);

// 基於文件路徑生成導入語句
const importStatements = allPostFiles.map(filePath => {
  // 將文件路徑轉換為相對於 PostLoader.tsx 的路徑
  // PostLoader.tsx 位於 src/components/blog 目錄中，而文章在 src/components/blog/posts 目錄中
  const relativePath = path.relative(postLoaderDir, filePath);
  // 將反斜杠轉換為正斜杠（對於Windows系統）
  const importPath = `./${relativePath.replace(/\\/g, '/')}`;
  // 去除.tsx擴展名
  const importPathWithoutExt = importPath.replace(/\.tsx$/, '');
  return `import '${importPathWithoutExt}';`;
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

console.log('PostLoader.tsx 已更新，自動導入了 ' + allPostFiles.length + ' 篇文章');
