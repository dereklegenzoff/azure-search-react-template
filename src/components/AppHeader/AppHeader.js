import React from 'react';
import AppHeaderAuth from '../AppHeaderAuth/AppHeaderAuth';

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

        <AppHeaderAuth />
      </nav>
      
    </header>
  );
};
