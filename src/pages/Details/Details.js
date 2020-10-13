import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import "./Details.css";

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});
  const [selectedTab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(id);
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        const doc = response.data.document;
        setDocument(doc);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });

  }, [id]);

  var body;
  if (isLoading) {
    body = (<CircularProgress />);
  } else {
    body = (<div class="card-body">
      <h5 class="card-title">{document.original_title}</h5>
      <img class="image" src={document.image_url} alt="Book cover"></img>
      <p class="card-text">{document.authors?.join('; ')} - {document.original_publication_year}</p>
      <p class="card-text">ISBN {document.isbn}</p>
      <Rating name="half-rating-read" value={parseInt(document.average_rating)} precision={0.1} readOnly></Rating>
      <p class="card-text">{document.ratings_count} Ratings</p>
    </div>)
  }

  if (selectedTab === 0) {
    return (
      <div class="main main--details container fluid card">
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
          {body}
        </div>
      </div>
    );
  } else {
    return (
      <div class="main main--details container fluid card">
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
      </div>
    );
  }

}

