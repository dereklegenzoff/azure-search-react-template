import React from 'react';

import './Result.css';

const cardStyle = {
    width: '8rem'
};

const imageStyle = {
    minWidth: '6em',
    maxWidth: '10em',
    maxHeight: '12em',
    height: 'auto',
    vertialAlign: 'center'
}

const result = (props) => (
    <div className="card result" style={cardStyle}>
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={props.document.image_url} style={imageStyle} alt="book cover"></img>
            <div className="card-body">
                <h5 className="card-title">{props.document.original_title}</h5>
                <p className="card-text">{props.document.authors}</p>
            </div>
        </a>
    </div>
    );

export default result;