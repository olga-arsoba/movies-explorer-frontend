import React from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
    const {name, time, img} = props

    return (
        <div className="movie">
            <div className="movie__info">
                <div>
                    <h4 className="movie__title">{name}</h4>
                    <p className="movie__time">{time}</p>
                </div>
                <button type="button" className="movie__delete"></button>
            </div>
            <img src={img} alt="" className="picture"/>
        </div>
    )
};

export default MoviesCard;