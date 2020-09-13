import React from 'react';

import "./SearchBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar() {

    return (
        <form>
            <div class="input-group">
                <input type="text" class="form-control rounded-0" placeholder="What are you looking for?"></input>
                <div class="input-group-btn">
                    <button class="btn btn-primary rounded-0" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};
