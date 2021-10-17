import React from 'react'
import './MoviesCard.css'
import mainApi from '../../../utils/MainApi'
import { convertMinsToHrsMins } from '../../../utils/utils'

const IMG_BASE_URL = 'https://api.nomoreparties.co'

function MoviesCard(props) {
    const {movie, savedMovies} = props

    const [isLiked, setIsLiked] = React.useState(false)

    const getMovieImg = (path) => {
        return `${IMG_BASE_URL}${path}`
    }

    const getSavedMovieId = () => {
        const m = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
        return m._id ?? null
    }

    const handleLike = () => {
        if (isLiked) {
            mainApi.deleteMovie(getSavedMovieId())
                .then(() => {
                    setIsLiked(false)
                })
        } else {
            mainApi.createMovie({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: getMovieImg(movie.image.url),
                trailer: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: getMovieImg(movie.image.formats.thumbnail.url),
                movieId: movie.id,
            })
                .then(() => {
                    setIsLiked(true)
                })
        }
    }

    React.useEffect(() => {
        setIsLiked(
            savedMovies.findIndex((savedMovie) => {
                return savedMovie.movieId === movie.id
            }) !== -1
        )
    }, [savedMovies, movie.id])

    return (
        <div className="movie">
            <div className="movie__info">
                <div>
                    <h4 className="movie__title">{movie.nameRU}</h4>
                    <p className="movie__time">{convertMinsToHrsMins(movie.duration)}</p>
                </div>
                <button type="button" className={`movie__like ${isLiked ? 'movie__like_active' : ''}`} onClick={handleLike}></button>
            </div>
            <img src={getMovieImg(movie.image.url)} alt={movie.nameRU} onClick={()=> window.open(movie.trailerLink, "_blank")} className="picture"/>
        </div>
    )
};

export default MoviesCard;