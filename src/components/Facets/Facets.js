import React from 'react';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';

export default function Facets(props) {
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

    const facetBoxStyle = {
        borderRight: "1px solid #f0f0f0"

    }

    const boxHeight = {
        height: "100%"
    }
    return (
        <div id="facetPanel" style={boxHeight}>
            <div style={facetBoxStyle}>
                <div id="clearFilters"></div>
                {facets}
            </div>
        </div>
    );
};
