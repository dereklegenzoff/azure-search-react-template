import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});
  const [selectedTab, setTab] = useState(0);


  useEffect(() => {
    console.log(id);
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        const doc = response.data.document;
        console.log(doc);
        setDocument(doc);
        console.log("response");
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  // let rawData = Object.keys(document).map(key => {
  //   //console.log(key);
  //   return <li><strong>{key}</strong>: {document[key]}</li>;
  // });

  const cardStyle = {
    paddingTop: "2em"
  };

  const imageStyle = {
    width: "10em",
    height: "auto"
  }

  if (selectedTab === 0) {
    return (
      <main class="main main--details container fluid" style={cardStyle}>
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <button class="nav-link active" onClick={() => setTab(0)}>Result</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={() => setTab(1)}>Raw Data</button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">{document.original_title}</h5>
            <img style={imageStyle} src={document.image_url} alt="Book cover"></img>
            <p class="card-text">{document.authors} - {document.original_publication_year}</p>
            <p class="card-text">ISBN {document.isbn}</p>
            <Rating name="half-rating-read" value={parseInt(document.average_rating)} precision={0.1} readOnly></Rating>
            <p class="card-text">{document.ratings_count} Ratings</p>
            
            {/* <button class="btn btn-primary">Go somewhere</button> */}
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main class="main main--details container fluid" style={cardStyle}>
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <button class="nav-link" onClick={() => setTab(0)}>Result</button>
              </li>
              <li class="nav-item">
                <button class="nav-link active" onClick={() => setTab(1)}>Raw Data</button>
              </li>
            </ul>
          </div>
          <div class="card-body">
          <div>{JSON.stringify(document, null, 2)}</div>
          </div>
        </div>
      </main>
    );
  }

}

