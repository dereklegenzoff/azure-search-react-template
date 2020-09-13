import React, { Component } from 'react';

import Results from '../Results/Results';
import Pager from '../Pager/Pager';
import Facets from '../Facets/Facets';

import "./Search.css";



class Search extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-3">
          <Facets></Facets>
        </div>
        
        <div className="col-md-9">
          <Results></Results>
          <Pager className="pager-style"></Pager>
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
