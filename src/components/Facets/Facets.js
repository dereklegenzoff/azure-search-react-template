import React from 'react';
import { List, Chip } from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {


    const facetBoxStyle = {
        borderRight: "1px solid #f0f0f0"
    };

    const boxHeight = {
        height: "100%"
    };

    const listItemStyle = {
        paddingLeft: '36px !important'
    };

    const filterListStyle = {
        listStyle: "none"
    };

    const chipStyle = {
        margin: "0.25em"
    };

    function mapFacetName(facetName) {
        const capitalizeFirstLetter = (string) =>
            string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';
        facetName = facetName.trim();
        facetName = capitalizeFirstLetter(facetName);

        facetName = facetName.replace('_', ' ');
        return facetName;
    }

    function addFilter(name, value) {
        const newFilters = props.filters.concat({ field: name, value: value });
        props.setFilters(newFilters);
    }

    function removeFilter(filter) {      
        console.log(props.filters);
        console.log(filter);
        const newFilters = props.filters.filter((item) => item.value !== filter.value);
        props.setFilters(newFilters);
    }

    var facets;
    try{
        facets = Object.keys(props.facets).map(key => {
            return <CheckboxFacet 
                key={key}
                name={key} 
                values={props.facets[key]}
                addFilter={addFilter}
                removeFilter={removeFilter}
                mapFacetName={mapFacetName}
                selectedFacets={props.filters.filter( f => f.field === key)}
              />;
          });
    } catch (error) {
        console.log(error);
    }

    const filters = props.filters.map((filter, index) => {
            return (
            <li key={index}>
                <Chip 
                    label={`${mapFacetName(filter.field)}: ${filter.value}`} 
                    onDelete={() => removeFilter(filter)}
                    style={chipStyle}
              />
            </li>);
          });


    return (
        <div id="facetPanel" style={boxHeight}>
            <div style={facetBoxStyle}>
                <div id="clearFilters">
                <ul style={filterListStyle}>
                    {filters}
                </ul>
                </div>
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
