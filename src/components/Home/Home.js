import React from 'react';

import "../Search/Search.css";
import SearchBar from '../SearchBar/SearchBar';
//import Carousel from './Carousel/Carousel';



export default function Home() {
  /*
  return (
    <div class="row">
      <div class="col-sm">
       <h3>Knowledge Mining Solution Accelerator</h3>
      </div>
      <div class="col-sm">
        <h3>Column Two</h3>
      </div>
      <div class="col-sm">
        <h3>Learn More</h3>
        <a href="#">Azure Search</a><br />
        <a href="#">Cognitive Search</a><br />
        <a href="#">Text Analysis</a><br />
        <a href="#">Computer Vision</a>
      </div>
    </div>
  );
  */


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

  const itemStyle = {
    maxWidth: "65%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0"
  }

  return (
    <div>
      <div class="row" style={searchStyle}>
        <img style={imageStyle} src="https://azure.microsoft.com/svghandler/search/?width=600&height=315.svg"></img>
        {/* <img style={imageStyle} src="https://oneroomwithaview.files.wordpress.com/2013/04/microsoft-logo-2012.jpg"></img> */}
        <p style={text} class="lead">Search powered by Azure Cognitive Search</p>
        <SearchBar ></SearchBar>
      </div>
      {/* <div class="row" style={itemStyle}>
        <Carousel></Carousel>
      </div> */}
    </div>
  );
};
