import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Suggestions from './Suggestions/Suggestions';

import "./SearchBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar(props) {

    let [q, setQ] = useState("");
    let [suggestions, setSuggestions] = useState([]);
    let [showSuggestions, setShowSuggestions] = useState(false);

    const onSearchHandler = () => {
        props.postSearchHandler();
    }

    const onChangeHandler = () => {
        var searchTerm = document.getElementById("search-box").value;
        setShowSuggestions(true);
        setQ(searchTerm);
    }

    useEffect(_ =>{
        
        const body = {
            q: q,
            top: 5,
            suggester: 'sg'
        };

        if (q === '') {
            setSuggestions([]);
        } else {
            axios.post( '/api/suggest', body)
            .then( response => {
                setSuggestions(response.data.suggestions);
            } )
            .catch(error => {
                console.log(error);
                setSuggestions([]);
            });
        }
    }, [q, props]);

    var suggestionDiv;
    if (showSuggestions) {
        suggestionDiv = (<Suggestions suggestions={suggestions}></Suggestions>);
    } else {
        suggestionDiv = (<div></div>);
    }

    return (
        <form autoComplete="off">
            <div class="input-group">
                <div className={suggestions}>
                    <input 
                        type="text" 
                        id="search-box" 
                        class="form-control rounded-0" 
                        placeholder="What are you looking for?" 
                        onChange={onChangeHandler} 
                        onBlur={() => setShowSuggestions(false)}
                        onClick={() => setShowSuggestions(true)}>
                    </input>
                    {suggestionDiv}
                </div>
                <div class="input-group-btn">
                    <button class="btn btn-primary rounded-0" type="submit" onClick={onSearchHandler}>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};