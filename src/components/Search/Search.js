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
  
  const [ results, setResults ] = useState([]);
  const [ q, setQ ] = useState(new URLSearchParams(location.search).get('q') ?? "*");
  const [ top, setTop ] = useState(new URLSearchParams(location.search).get('top') ?? 10);
  const [ skip, setSkip ] = useState(new URLSearchParams(location.search).get('skip') ?? 0);
  const [ error, setError ] = useState(false);
  const [ filters, setFilters ] = useState([]);
  const [ facets, setFacets ] = useState({});
  
  useEffect(() => {
    const body = {
      search: q,
      top: top,
      skip: skip,
      filters: filters
    }

    axios.post( 'http://127.0.0.1:5500/api/search', body)
        .then( response => {
            console.log("search response:");
            console.log(response.data);

            setResults(response.data.results);
            setFacets(response.data.facets);
        } )
        .catch(error => {
            console.log(error);
            setError(true);
        });
  }, [q, top, skip, filters]);


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
        <Facets facets={facets} editFilters={setFilters}></Facets>
      </div>
      
      <div className="col-md-9">
        <Results documents={results}></Results>
        <Pager className="pager-style"></Pager>
      </div>
      </div>
    </div>
  );
}
