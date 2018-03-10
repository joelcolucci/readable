import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="link">
          <h1 className="navbar-brand">Readable</h1>
        </Link>
        <span>| {props.title}</span>
      </div>
    </header>
  );
}


export default Header;
