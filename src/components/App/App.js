import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App shell components
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

// React Router page components
import Home from '../Home/Home';
import Search from '../Search/Search';
import Details from '../Details/Details';

// Bootstrap styles, optionally with jQuery and Popper
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// Custom app styles
import './App.css';

export default function App() {
  return (
    <div className="container-fluid app">
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
      {/* <AppFooter /> */}
    </div>
  );
}
