import React from 'react';
import {List} from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {

    var facets;
    try{
        facets = Object.keys(props.facets).map(key => {
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

    const listItemStyle = {
        paddingLeft: '36px !important'
    }

    return (
        <div id="facetPanel" style={boxHeight}>
            <div style={facetBoxStyle}>
                <div id="clearFilters"></div>
                <FacetList component="nav" style={listItemStyle} >
                    {facets}
                </FacetList>    
            </div>
        </div>
    );
};

const FacetList = styled(List)({
    marginTop: '32px !important'
})
