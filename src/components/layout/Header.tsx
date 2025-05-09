import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/">
          您的部落格名稱
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
