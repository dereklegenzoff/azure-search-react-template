import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./Details.css";

export default function Details() {
  
  let {id} = useParams(); 
  const [ document, setDocument ] = useState({});
  

  useEffect(() => {
    console.log(id);
    axios.get('/api/lookup?id=' + id )
        .then( response => {
            const doc = response.data.document;
            setDocument(doc);
            console.log("response");
            console.log( response );
        } )
        .catch(error => {
            console.log(error);
        });
  }, [id]);

  //id = useParams();

  return (
    <main className="main main--details">
      <h1>Details: {id}</h1>
      <p>{JSON.stringify(document)}</p>
    </main>
  );

}

