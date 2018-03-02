import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">Readable</h1>
      </Link>
      <nav className="nav">
        <Link to="/posts/create" className="nav-item">New Post</Link>
      </nav>
    </header>
  );
}


export default Header;
