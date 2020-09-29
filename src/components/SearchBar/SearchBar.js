import React from 'react';

import "./SearchBar.css";

const searchBar = (props) => {

    const onChangeHandler = () => {
        var searchTerm = document.getElementById("search-box").value;
        console.log(searchTerm);
        props.searchChangeHandler(searchTerm);
    }


    // const renderSuggestion = (suggestion) => {
    //     return (
    //         <div>
    //             <pre>
    //                 <code>
    //                     {JSON.stringify(suggestion, null, 4)}
    //                 </code>
    //             </pre>
    //         </div>
    //     );
    // }

    // let suggestions = props.suggestions.map(sg => {
    //     return renderSuggestion(sg);
    //   });

    return (
        <form>
            <div class="input-group">
                <input type="text" id="search-box" class="form-control rounded-0" placeholder="What are you looking for?" onChange={onChangeHandler}></input>
                <div class="input-group-btn">
                    <button class="btn btn-primary rounded-0" type="submit" onClick={(e) => props.postSearchHandler(e)}>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default searchBar;