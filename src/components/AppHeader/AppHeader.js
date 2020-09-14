import React from 'react';

import './AppHeader.css';

const iconStyle = {
  width: "1.5em",
  height: "auto"
}

export default function AppHeader() {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <img style={iconStyle} src="/microsoft-small.svg" className="logo" alt="Microsoft" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/Search">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://azure.microsoft.com/services/search/">Learn more</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div class="row">
      <a href="/">
        <img style={iconStyle} src="/microsoft-small.svg" className="logo" alt="Microsoft" />
      </a> 
      <nav className="navbar-nav">
        <div className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </div>
        
        <a href="/search" className="nav-link">Search</a>
        <a href="https://azure.microsoft.com/en-us/services/search/" className="nav-link">Learn More</a>
      </nav>
      </div> */}
    </header>
  );
};
