// 測試 PostRegistry
console.log("開始測試 PostRegistry...");

// 導入所需的文件
require('./components/blog/PostLoader.tsx');
const { PostRegistry } = require('./components/blog/PostWrapper.tsx');

console.log("PostRegistry 內容:");
console.log(Object.keys(PostRegistry));

console.log("\n註冊的文章數量:", Object.keys(PostRegistry).length);

// 列出所有註冊的文章
Object.keys(PostRegistry).forEach(slug => {
  console.log(`- ${slug}: ${PostRegistry[slug].metadata.title}`);
});
