import React, {useState, useEffect} from 'react';
import { Collapse, Checkbox, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

import './CheckboxFacet.css';

export default function CheckboxFacet(props) {

    let [isExpanded, setIsExpanded] = useState(false);
    let [selectedCount, setSelectedCount] = useState(0);

    function mapFacetName(facetName) {
        const capitalizeFirstLetter = (string) =>
            string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';
        facetName = facetName.trim();
        facetName = capitalizeFirstLetter(facetName);

        facetName = facetName.replace('_', ' ');
        return facetName;
    }

    const checkboxes = props.values.map(facetValue => {
        return (
            <FacetValueListItem dense disableGutters>
                <Checkbox edge="start" disableRipple />
                <ListItemText primary={facetValue.value + " (" + facetValue.count + ")"}/>
            </FacetValueListItem>
        );
    });


    return (
        <div>
            <FacetListItem disableRipple={true} button onClick={() => setIsExpanded(!isExpanded)}>
                <ListItemText 
                    primary={mapFacetName(props.name)}
                    secondary={`${selectedCount} of ${props.values.length} selected`}
                />
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </FacetListItem>
            <Collapse in={isExpanded} component="div" disablePadding>
                <FacetValuesList>
                    {checkboxes}
                </FacetValuesList>
            </Collapse>
        </div>
    );
}

const FacetListItem = styled(ListItem)({
    paddingLeft: '36px !important',
})

const FacetValueListItem= styled(ListItem)({
    paddingLeft: '46px !important',
});

const FacetValuesList= styled(List)({
    maxHeight: 340,
    overflowY: 'auto !important',
    marginRight: '18px !important'
})