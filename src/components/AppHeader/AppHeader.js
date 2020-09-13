import React from 'react';

import './AppHeader.css';

const iconStyle = {
  width: "2em",
  heigh: "auto"
}

export default function AppHeader() {
  return (
    <header className="header">
      <a href="/">
        <img style={iconStyle} src="/microsoft-small.svg" className="logo" alt="Microsoft" />
      </a> 
      {/* <nav className="nav">
        <a href="/" className="nav-link">Knowledge Mining</a>
        <a href="/search" className="nav-link">Search</a>
       <a href="/details/foo" className="nav-link">Foo Details</a>
      </nav> */}
    </header>
  );
};
