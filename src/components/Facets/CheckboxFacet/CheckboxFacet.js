import React from 'react';

import './CheckboxFacet.css';

const checkboxFacet = (props) => {

    const facetStyle = {
        margin: "1rem"
    }

    console.log("checkbopx facet:")
    console.log(props);
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


    return (
        <div className="card" style={facetStyle}>
            <div className="card-header">
                <h5>
                    {props.name}
                </h5>
            </div>
            <div className="card-body">
                <ul>
                    {checkboxes}
                </ul>
            </div>
        </div>
    );
}

export default checkboxFacet;