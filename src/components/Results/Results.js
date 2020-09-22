import React from 'react';
import Result from './Result/Result';

import "./Results.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Results(props) {

  //console.log("results:");
  //console.log(props.documents);

  const infoStyle = {
    margin: '1em'
  }
  //const result_html = [];

  let results = props.documents.map(result => {
    return <Result 
        key={result.document.id} 
        id={result.document.id} 
        title={result.document.original_title} 
        author={result.document.authors}
        image_url={result.document.image_url}
      />;
  });

  return (
    <div>
      <p style={infoStyle}>Showing {props.documents.length} of {props.count} results</p>
      <div className="row row-cols-lg-5 Results">
        {results}
      </div>
    </div>
  );
};
