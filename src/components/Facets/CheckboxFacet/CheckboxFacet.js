import React from 'react';

import './CheckboxFacet.css';

const checkboxFacet = (props) => {

    const facetStyle = {
        margin: "1rem"
    }

    const checkboxes = props.values.map(facetValue => {
        return (
            <li className="facet-checkbox">
                <div>
                    <label>
                        {/* <input type="checkbox" onChange={toggleFacet.bind(null, valueKey)} checked={value.selected}/> {value.value + " "}{countDisplay} */}
                        <input type="checkbox"/> {facetValue.value + " "}{"(" + facetValue.count + ")"}
                    </label>
                </div>
            </li>
        );
    });

    const listStyle = {
        paddingLeft: "1em"
    };

    return (
        <div style={facetStyle}>
            <h5 className="facet-header"> 
                {props.name}
            </h5>
            <ul style={listStyle}>
                {checkboxes}
            </ul>
        </div>
    );
}

export default checkboxFacet;