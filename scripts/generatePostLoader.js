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

const postsDir = path.join(__dirname, '../src/components/blog/posts');
const allPostFiles = getAllFiles(postsDir);

// 基於文件路徑生成導入語句
const importStatements = allPostFiles.map(filePath => {
  // 獲取相對於posts目錄的路徑
  const relativePath = path.relative(postsDir, filePath);
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
