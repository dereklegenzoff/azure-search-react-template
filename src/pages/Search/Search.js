import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

import Results from '../../components/Results/Results';
import Pager from '../../components/Pager/Pager';
import Facets from '../../components/Facets/Facets';
import SearchBar from '../../components/SearchBar/SearchBar';

import "./Search.css";

export default function Search() {
  
  let location = useLocation();
  
  const [ results, setResults ] = useState([]);
  const [ resultCount, setResultCount ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ q, setQ ] = useState(new URLSearchParams(location.search).get('q') ?? "*");
  const [ top, setTop ] = useState(new URLSearchParams(location.search).get('top') ?? 10);
  const [ skip, setSkip ] = useState(new URLSearchParams(location.search).get('skip') ?? 0);
  //const [ error, setError ] = useState(false);
  const [ filters, setFilters ] = useState([]);
  const [ facets, setFacets ] = useState({});

  let resultsPerPage = 10;
  
  useEffect(() => {
    setTop(10);
    setSkip(currentPage * top);
    const body = {
      search: q,
      top: top,
      skip: skip,
      filters: filters
    }

    axios.post( '/api/search', body)
        .then( response => {
            console.log("search response:");
            console.log(response.data);

            setResults(response.data.results);
            setFacets(response.data.facets);
            setResultCount(response.data.count);
        } )
        .catch(error => {
            console.log(error);
            // setError(true);
        });
  }, [q, top, skip, filters, currentPage]);


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
          <Results documents={results} count={resultCount}></Results>
          <Pager className="pager-style" currentPage={currentPage} resultCount={resultCount} resultsPerPage={resultsPerPage} setCurrentPage={setCurrentPage}></Pager>
        </div>
      </div>
    </div>
  );
}
