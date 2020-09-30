import React from 'react';

import "./Suggestions.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const suggestions = (props) => {

    // const onChangeHandler = () => {
    //     var searchTerm = document.getElementById("search-box").value;
    //     console.log(searchTerm);
    //     props.searchChangeHandler(searchTerm);
    // }

    const suggestionClickHandler = (e) => {
        console.log(e.currentTarget.id);
        props.suggestionClickHandler(e.currentTarget.id);
    }

    const borders = {
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        boxSizing: "border-box"
    }

    let suggestions = props.suggestions.map((s, index) => {
        return (<div key={index} id={s.text} onMouseDown={suggestionClickHandler}>{s.text}</div>);
      });

    return (
        <div style={borders}>
            {suggestions}
        </div>
    );
};

export default suggestions;