import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - 頁面未找到</h1>
      <p>抱歉，您尋找的頁面不存在。</p>
      <Link href="/">
        返回首頁
      </Link>
    </div>
  );
}
