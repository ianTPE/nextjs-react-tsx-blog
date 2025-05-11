const fs = require('fs');
const path = require('path');

// 文章目錄和 PostLoader 文件的路徑
const postsDir = path.join(__dirname, '../src/components/blog/posts');
const postLoaderDir = path.join(__dirname, '../src/components/blog');

// 獲取所有文件
const allFiles = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.tsx'))
  .filter(file => file !== 'ServerWrapper.tsx');

// 定義服務端文件和其對應的客戶端文件映射
const serverToClientMapping = {
  '2025-freelancer-guide-server': '2025-freelancer-guide-low-code-no-code-development-applications-ranking',
  'ai-prd-devops-integration-guide-server': 'ai-prd-devops-integration-guide-2025',
  'low-code-no-code-market-trends-server': 'low-code-no-code-market-trends-2025-career-transition'
};

// 建立文件列表，優先使用服務端版本
const finalFiles = [];
const excludedClientFiles = new Set(Object.values(serverToClientMapping));

allFiles.forEach(file => {
  const baseName = file.replace('.tsx', '');
  
  if (baseName.endsWith('-server')) {
    // 這是服務端版本，使用它
    finalFiles.push(file);
  } else if (!excludedClientFiles.has(baseName)) {
    // 不是被排除的客戶端文件，包含它
    finalFiles.push(file);
  }
});

// 生成導入語句
const importStatements = finalFiles.map(file => {
  const relativePath = path.relative(postLoaderDir, path.join(postsDir, file));
  const importPath = `./${relativePath.replace(/\\/g, '/')}`;
  const importPathWithoutExt = importPath.replace(/\.tsx$/, '');
  return `import '${importPathWithoutExt}';`;
}).join('\n');

const template = `// 自動生成的文件 - 請勿手動編輯
import React from 'react';

// 導入所有文章組件
${importStatements}

export function PostLoader() {
  return null;
}

export default PostLoader;
`;

fs.writeFileSync(
  path.join(__dirname, '../src/components/blog/PostLoader.tsx'),
  template
);

console.log('PostLoader.tsx 已更新，自動導入了 ' + finalFiles.length + ' 篇文章');
