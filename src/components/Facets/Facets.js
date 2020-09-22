import React from 'react';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';

import "./Facets.css";

export default function Facets(props) {

    const facetBoxStyle = {
        borderRight: "1px solid #f0f0f0",
        height: "100%"
    }
    console.log("facets");
    console.log(props);

    var facets;
    try{
        facets = Object.keys(props.facets).map(key => {
            console.log(key);
            return <CheckboxFacet 
                key={key}
                name={key} 
                values={props.facets[key]}
              />;
          });
    } catch (error) {
        console.log(error);
    }


    return (
        <div id="facetPanel" style={facetBoxStyle}>
            <div id="clearFilters"></div>
            {facets}
            {/* <div class="card" style = {facetStyle}>
                <div class="card-header">
                    <strong>Authors</strong>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Derek Legenzoff</li>
                    <li class="list-group-item">Maddie Henning</li>
                    <li class="list-group-item">J.K. Rowling</li>
                </ul>
            </div>
            <div class="card" style = {facetStyle}>
                <div class="card-header">
                    <strong>Genres</strong>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Fiction</li>
                    <li class="list-group-item">Nonfiction</li>
                    <li class="list-group-item">Comedy</li>
                </ul>
            </div> */}
        </div>
    );
};
