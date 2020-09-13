import React from 'react';

import './Pager.css';

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
const pager = (props) => (
    <nav aria-label="..."  style={pagerStyle}>
        <ul class="pagination" style={itemStyle}>
            <li class="page-item disabled">
                <span class="page-link">Previous</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
                <span class="page-link">
                    2
        <span class="sr-only">(current)</span>
                </span>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
);

export default pager;