import React from 'react';
import Result from './Result/Result';

import "./Results.css";

export default function Results(props) {

  //console.log("results:");
  //console.log(props.documents);

  const infoStyle = {
    margin: '1em'
  }
  //const result_html = [];

  let results = props.documents.map((result, index) => {
    return <Result 
        key={index} 
        document={result.document}
      />;
  });

  let beginDocNumber = Math.min(props.skip + 1, props.count);
  let endDocNumber = Math.min(props.skip + props.top, props.count);

  return (
    <div>
      <p style={infoStyle}>Showing {beginDocNumber}-{endDocNumber} of {props.count} results</p>
      <div className="row row-cols-lg-5 Results">
        {results}
      </div>
    </div>
  );
};
