import React from 'react'
import './MoviesCard.css'
import {convertMinsToHrsMins} from "../../../utils/utils";
import mainApi from "../../../utils/MainApi";

function MoviesCard(props) {
    const {movie, loadSavedMovies} = props

    const handleDeleteMovie = () => {
        mainApi.deleteMovie(movie._id)
            .then(() => {
                loadSavedMovies()
            })
    }

    return (
        <div className="movie">
            <div className="movie__info">
                <div>
                    <h4 className="movie__title">{movie.nameRU}</h4>
                    <p className="movie__time">{convertMinsToHrsMins(movie.duration)}</p>
                </div>
                <button type="button" className="movie__delete" onClick={handleDeleteMovie}></button>
            </div>
            <img src={movie.image} alt={movie.nameRU} onClick={()=> window.open(movie.trailer, "_blank")} className="picture"/>
        </div>
    )
};

export default MoviesCard;