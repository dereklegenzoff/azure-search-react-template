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
    <div>
      <div class="row" style={searchStyle}>
        <img style={imageStyle} src="https://azure.microsoft.com/svghandler/search/?width=600&height=315.svg" alt="cognitive search logo"></img>
        {/* <img style={imageStyle} src="https://oneroomwithaview.files.wordpress.com/2013/04/microsoft-logo-2012.jpg"></img> */}
        <p style={text} class="lead">Powered by Azure Cognitive Search</p>
        <SearchBar postSearchHandler={navigateToSearchPage} searchChangeHandler={setSearchTerm}></SearchBar>
      </div>
    </div>
  );
};
