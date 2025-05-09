import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-logo">
          Ian's Next.js Blog
        </Link>
        <nav className="site-nav">
          <ul>
            <li>
              <Link href="/">
                首頁
              </Link>
            </li>
            <li>
              <Link href="/blog">
                文章
              </Link>
            </li>
            <li>
              <Link href="/about">
                關於
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
