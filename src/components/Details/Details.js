import React from 'react';
import { useParams } from 'react-router-dom';

import "./Details.css";

export default function Details() {

  let { id } = useParams();

  return (
    <main className="main main--details">
      <h1>Details: {id}</h1>
    </main>
  );
};
