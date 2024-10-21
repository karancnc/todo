import React from 'react';
import { Link ,useLocation  } from 'react-router-dom';

function Header() {
  const location = useLocation(); 

  return (
    <header className="wrapper">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>about</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>contact</Link>
    </header>
  );
}

export default Header;
