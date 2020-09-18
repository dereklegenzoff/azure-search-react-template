import React, { Component } from 'react';
import axios from 'axios';

import Results from '../Results/Results';
import Pager from '../Pager/Pager';
import Facets from '../Facets/Facets';

import "./Search.css";
import SearchBar from '../SearchBar/SearchBar';



class Search extends Component {
  
  state = {
    results: [],
    search: "*",
    error: false
  }

  componentDidMount () {
    axios.get( 'http://127.0.0.1:5500/api/search' )
        .then( response => {
            const results = response.data.results;
            this.setState({results: results});
            console.log("response");
            console.log( response );
        } )
        .catch(error => {
            console.log(error);
            this.setState({error: true});
        });
  }

  postSearchHandler = (event) => {
    event.preventDefault();
    const body = {
      "search": this.state.search
    }

    console.log(body);

    axios.post( 'http://127.0.0.1:5500/api/search', body )
          .then( response => {
              const results = response.data.results;
              this.setState({results: results});
              console.log("response");
              console.log( response );
          } )
          .catch(error => {
              console.log(error);
              this.setState({error: true});
          });
  }

  searchChangeHandler = (searchTerm) => {
    this.setState({search: searchTerm});
  }



  render() {

    return (
      <div className="container-fluid">
        
        <div className="row">
        <div className="col-md-3">
          <div className="search-bar">
            <SearchBar postSearchHandler={this.postSearchHandler} searchChangeHandler={this.searchChangeHandler}></SearchBar>
          </div>
          <Facets></Facets>
        </div>
        
        <div className="col-md-9">
          <Results documents={this.state.results}></Results>
          <Pager className="pager-style"></Pager>
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
