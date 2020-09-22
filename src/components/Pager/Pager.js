import React, {useState, useEffect} from 'react';

import './Pager.css';

export default function Pager(props) {

    let [selectedPage, setSelectedPage] = useState(props.currentPage);
    let totalPages = Math.ceil(props.resultCount / props.resultsPerPage);

    useEffect(_=>{
        console.log("lets set the page");
        console.log(selectedPage);
        props.setCurrentPage(selectedPage);
    }, [selectedPage, props]);

    const itemStyle = {
        margin: "1em",
        marginLeft: "auto",
        marginRight: "auto"
      }
    
    const pagerStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "fit-content"
      }


    var i = 0;
    var page_links = [];

    var minPage = 1;
    var maxPage = totalPages;

    if (selectedPage - minPage > 2) {
        minPage = selectedPage - 2;
    }

    if (maxPage - selectedPage > 2) {
        maxPage = parseInt(selectedPage) + 2;
    }

    console.log(selectedPage);
    console.log(totalPages);
    console.log(minPage);
    console.log(maxPage);

    for (i = minPage; i <= maxPage; i++) {
        if (i === parseInt(selectedPage)) {
            page_links.push(
                <li class="page-item active" key={i}>
                    <span class="page-link">
                        {i}
                    </span>
                </li>
            );
        } else {
            page_links.push(
                <li class="page-item" key={i}>
                    <button class="page-link" id={i} onClick={(e) => setSelectedPage(e.currentTarget.id)}>{i}</button>
                </li>
            );
        }
    }

    var previousButton;
    if (selectedPage === 1) {
        previousButton = (<li class="page-item disabled" key="prev">
                            <span class="page-link">Previous</span>
                        </li>);
    } else {
        previousButton = (<li class="page-item" key="prev">
                            <span class="page-link">Previous</span>
                        </li>);
    }

    var nextButton;
    if (props.currentPage === totalPages) {
        nextButton = (<li class="page-item disabled" key="next">
                            <span class="page-link">Next</span>
                        </li>);
    } else {
        nextButton = (<li class="page-item" key="next">
                            <span class="page-link">Next</span>
                        </li>);
    }

    

    return (
        <nav aria-label="..."  style={pagerStyle}>
            <ul class="pagination" style={itemStyle}>
                {previousButton}
                {page_links}
                {nextButton}
            </ul>
        </nav>
    );

    }