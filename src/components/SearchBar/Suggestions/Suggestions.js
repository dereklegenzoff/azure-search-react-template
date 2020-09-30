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

    }

    const borders = {
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        boxSizing: "border-box"
    }

    let suggestions = props.suggestions.map((s, index) => {
        return (<div key={index} onClick={suggestionClickHandler}>{s.text}</div>);
      });

    return (
        <main >
            <div style={borders}>
                {suggestions}
            </div>
        </main>
    );
};

export default suggestions;