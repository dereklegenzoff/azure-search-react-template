import React from 'react';

import './Carousel.css';
//import Result from '../../Results/Result/Result'

const cardStyle = {
    width: '8rem'
};

const imageStyle = {
    width: '100%',
    maxHeight: '12rem',
    maxWidth: '8rem',
    height: 'auto',
    vertialAlign: 'center'
}

const carousel = (props) => (
    <div class="row">
        <div className="card Post" style={cardStyle}>
            <a href={`/details/${props.id}`}>
                <img className="card-img-top result-item-image" src={props.image_url} style={imageStyle} alt="book cover"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                </div>
            </a>
        </div>
        <div className="card Post" style={cardStyle}>
            <a href={`/details/${props.id}`}>
                <img className="card-img-top result-item-image" src={props.image_url} style={imageStyle} alt="book cover"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                </div>
            </a>
        </div>
        <div className="card Post" style={cardStyle}>
            <a href={`/details/${props.id}`}>
                <img className="card-img-top result-item-image" src={props.image_url} style={imageStyle} alt="book cover"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                </div>
            </a>
        </div>
    </div>
);

export default carousel;