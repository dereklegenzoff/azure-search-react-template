import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./Details.css";

export default function Details() {
  
  let {id} = useParams(); 
  const [ document, setDocument ] = useState({});
  

  useEffect(() => {
    axios.get( 'http://127.0.0.1:5500/api/lookup?id=' + id )
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

  // componentDidMount () {
  //   axios.get( 'http://127.0.0.1:5500/api/lookup?id=' + this.state.id )
  //       .then( response => {
  //           const doc = response.data.document;
  //           this.setState({document: doc});
  //           console.log("response");
  //           console.log( response );
  //       } )
  //       .catch(error => {
  //           console.log(error);
  //           this.setState({error: true});
  //       });
  // }

  return (
    <main className="main main--details">
      <h1>Details: {id}</h1>
      <p>{JSON.stringify(document)}</p>
    </main>
  );

}

