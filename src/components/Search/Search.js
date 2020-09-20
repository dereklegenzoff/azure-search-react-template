import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

import Results from '../Results/Results';
import Pager from '../Pager/Pager';
import Facets from '../Facets/Facets';

import "./Search.css";
import SearchBar from '../SearchBar/SearchBar';

export default function Search() {
  
  let location = useLocation();
  
  console.log("location");
  console.log(location);
  const [ results, setResults ] = useState([]);
  const [ q, setQ ] = useState(new URLSearchParams(location.search).get('searchTerm') ?? "*");
  const [ top, setTop ] = useState(10);
  const [ skip, setSkip ] = useState(0);
  const [ error, setError ] = useState(false);
  const [ filters, setFilters ] = useState([]);
  
  useEffect(() => {
    const body = {
      search: q,
      top: top,
      skip: skip,
      filters: filters
    }

    axios.post( 'http://127.0.0.1:5500/api/search', body)
        .then( response => {
            const results = response.data.results;
            setResults(results);
            console.log("response");
            console.log( response );
        } )
        .catch(error => {
            console.log(error);
            setError(true);
        });
  }, [q, top, skip, filters]);

 // location = useLocation();


  let postSearchHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="container-fluid">
      
      <div className="row">
      <div className="col-md-3">
        <div className="search-bar">
          <SearchBar postSearchHandler={postSearchHandler} searchChangeHandler={setQ}></SearchBar>
        </div>
        <Facets></Facets>
      </div>
      
      <div className="col-md-9">
        <Results documents={results}></Results>
        <Pager className="pager-style"></Pager>
      </div>
      </div>
    </div>
  );
}
