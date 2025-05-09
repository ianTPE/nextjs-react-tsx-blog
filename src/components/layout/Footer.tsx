import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 您的部落格名稱. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
