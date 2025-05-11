// 測試 PostRegistry 和 getAllPosts
console.log("開始測試文章註冊系統...");

// 強制加載所有文章
require('./components/blog/PostLoader.tsx');

// 導入相關模組
const { PostRegistry } = require('./components/blog/PostWrapper.tsx');
const { getAllPosts } = require('./data/posts.ts');

console.log("\nPostRegistry 內容:");
console.log("註冊的文章數量:", Object.keys(PostRegistry).length);
console.log("註冊的文章 slugs:", Object.keys(PostRegistry));

console.log("\ngetAllPosts() 結果:");
const allPosts = getAllPosts();
console.log("getAllPosts 返回的文章數量:", allPosts.length);
allPosts.forEach(post => {
  console.log(`- ${post.slug}: ${post.title}`);
});
