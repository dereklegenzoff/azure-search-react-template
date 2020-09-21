import React from 'react';

import './CheckboxFacet.css';

const checkboxFacet = (props) => {
    console.log("checkbopx facet:")
    console.log(props);
    const checkboxes = props.values.map(facetValue => {
        return (
            <li>
                <div>
                    <label>
                        {/* <input type="checkbox" onChange={toggleFacet.bind(null, valueKey)} checked={value.selected}/> {value.value + " "}{countDisplay} */}
                        <input type="checkbox"/> {facetValue.value + " "}{facetValue.count}
                    </label>
                </div>
            </li>
        );
    });


    return (
        <div>
            <div>
                <h4>
                    <a data-toggle="collapse">
                        <span aria-hidden="true"></span> {props.name}
                    </a>
                </h4>
            </div>
            <div>
                <ul>
                    {checkboxes}
                </ul>
            </div>
        </div>
    );
}

export default checkboxFacet;