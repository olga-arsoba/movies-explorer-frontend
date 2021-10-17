import React, {useCallback} from 'react'
import './MoviesCardList.css'
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'

const getMoviesCountByWidth = () => {
    return window.innerWidth <= 520 ? 5 : 7
}

function MoviesCardList(props) {
    const {movies, isLoading, setIsLoading, savedMovies, loadSavedMovies} = props

    const [page, setPage] = React.useState(1)
    const [moviesPerPage, setMoviesPerPage] = React.useState(getMoviesCountByWidth())
    const [moviesList, setMoviesList] = React.useState([])

    const getMoviesByPage = useCallback(
        (page, movies) => {
            return movies.slice(0, moviesPerPage * page)
        },
        [moviesPerPage],
    )

    React.useEffect(() => {
        setMoviesList(getMoviesByPage(page, movies))
    }, [movies, page, moviesPerPage, getMoviesByPage])

    React.useEffect(() => {
        function updateMoviesList() {
            setTimeout(() => {
                setMoviesPerPage(getMoviesCountByWidth())
            }, 1000)
        }

        window.addEventListener('resize', updateMoviesList)
    }, [movies])

    const loadMore = () => {
        setIsLoading(true)
        setPage(page + 1)
        setIsLoading(false)
    }

    return (
        <section className="card__list">
            {moviesList.map((movie, i) => (
                <MoviesCard
                    key={movie._id}
                    movie={movie}
                    savedMovies={savedMovies}
                    loadSavedMovies={loadSavedMovies}
                ></MoviesCard>
            ))}
            {isLoading
                ? <Preloader></Preloader>
                : movies.length > moviesList.length
                    ? <button className="movie__button-more" onClick={loadMore}>Ещё</button>
                    : ''
            }
        </section>)
};

export default MoviesCardList;