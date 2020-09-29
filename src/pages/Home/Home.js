import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import SearchBar from '../../components/SearchBar/SearchBar';

import "../../pages/Search/Search.css";

export default function Home() {

  const searchStyle = {
    margin: "5em",
    maxWidth: "45%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }

  const imageStyle = {
    maxHeight: "12em",
    width: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0"
  }

  const text = {
    textAlign: "center"
  }

  const [ searchTerm, setSearchTerm ] = useState("");

  const history = useHistory();
  const navigateToSearchPage = () => history.push('/search?q=' + searchTerm);

  // const postSearchHandler = (event) => {
  //   event.preventDefault();
  //   // const body = {
  //   //   "search": this.state.search
  //   // }

  //   console.log("searchTerm");
  //   console.log(searchTerm);

  //   //fetch( '/search?searchTerm=' + searchTerm);
  //   let url = "/search"; //?searchTerm=" + searchTerm;
  //   return  <Redirect  to="/search/" />;
  // }
  

  return (
    <main className="main main--home">
      <div class="row" style={searchStyle}>
        <img style={imageStyle} src="/images/cognitive-search.png" alt="cognitive search logo"></img>
        <p style={text} class="lead">Powered by Azure Cognitive Search</p>
        <SearchBar postSearchHandler={navigateToSearchPage} searchChangeHandler={setSearchTerm}></SearchBar>
      </div>
    </main>
  );
};
