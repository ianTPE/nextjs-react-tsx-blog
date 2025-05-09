import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Ian's Next.js Blog. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/">首頁</Link>
            <Link href="/blog">文章</Link>
            <Link href="/about">關於</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
