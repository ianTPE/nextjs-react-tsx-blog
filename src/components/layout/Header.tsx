import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-logo">
          我的 Next.js 部落格
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
                部落格
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
