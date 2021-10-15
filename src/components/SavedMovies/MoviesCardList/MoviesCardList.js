import React from 'react'
import './MoviesCardList.css'
import picture8 from '../../../images/picture8.png'
import picture9 from '../../../images/picture9.png'
import picture10 from '../../../images/picture10.png'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
    const movies = [
        {
            name: 'Скейт — кухня',
            time: '1ч 42м',
            img: picture8,
            isLiked: true
        },
        {
            name: 'Рудбой',
            time: '1ч 42м',
            img: picture9,
            isLiked: false
        },
        {
            name: 'Пи Джей Харви: A dog called money',
            time: '1ч 42м',
            img: picture10,
            isLiked: true
        },
    ]

    return (
        <section className="card__list-save">
            {movies.map((movie, i) => (
                <MoviesCard
                    name={movie.name}
                    time={movie.time}
                    img={movie.img}
                ></MoviesCard>
            ))}
        </section>)
};

export default MoviesCardList;