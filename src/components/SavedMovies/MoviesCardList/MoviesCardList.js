import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
    const {savedMovies, loadSavedMovies} = props

    return (
        <section className="card__list-save">
            {savedMovies.map((movie, i) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    loadSavedMovies={loadSavedMovies}
                ></MoviesCard>
            ))}
        </section>)
};

export default MoviesCardList;