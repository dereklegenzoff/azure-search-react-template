import React from 'react';

import "../Search/Search.css";
import SearchBar from '../SearchBar/SearchBar';
//import Carousel from './Carousel/Carousel';



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

  return (
    <div>
      <div class="row" style={searchStyle}>
        <img style={imageStyle} src="https://azure.microsoft.com/svghandler/search/?width=600&height=315.svg" alt="cognitive search logo"></img>
        {/* <img style={imageStyle} src="https://oneroomwithaview.files.wordpress.com/2013/04/microsoft-logo-2012.jpg"></img> */}
        <p style={text} class="lead">Powered by Azure Cognitive Search</p>
        <SearchBar ></SearchBar>
      </div>
    </div>
  );
};
