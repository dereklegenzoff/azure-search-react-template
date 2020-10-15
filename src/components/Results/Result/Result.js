import React from 'react';

import './Result.css';


export default function Result(props) {

    const cardStyle = {
        width: '10rem',
        maxHeight: '18rem'
        
    };
    
    const imageStyle = {
        minWidth: '6em',
        maxWidth: '10em',
        maxHeight: '12em',
        height: 'auto',
        vertialAlign: 'center'
    };
    
    const bodyStyle = {
        padding: '0.25rem'
    };

    return(
    <div className="card result" style={cardStyle}>
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={props.document.image_url} style={imageStyle} alt="book cover"></img>
            <div className="card-body" style={bodyStyle}>
                <h6 className="title-style">{props.document.original_title}</h6>
            </div>
        </a>
    </div>
    );
}
