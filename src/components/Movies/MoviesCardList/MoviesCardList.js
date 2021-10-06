import React from 'react'
import './MoviesCardList.css'
import picture1 from '../../../images/picture1.png'
import picture2 from '../../../images/picture2.png'
import picture3 from '../../../images/picture3.png'
import picture4 from '../../../images/picture4.png'
import picture5 from '../../../images/picture5.png'
import picture6 from '../../../images/picture6.png'
import picture7 from '../../../images/picture7.png'
import picture8 from '../../../images/picture8.png'
import picture9 from '../../../images/picture9.png'
import picture10 from '../../../images/picture10.png'
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
    const movies = [
        {
            name: '33 слова о дизайне',
            time: '1ч 42м',
            img: picture1,
            isLiked: true
        },
        {
            name: 'Киноальманах «100 лет дизайна»\n',
            time: '1ч 42м',
            img: picture2,
            isLiked: false
        },
        {
            name: 'В погоне за Бенкси',
            time: '1ч 42м',
            img: picture3,
            isLiked: true
        },
        {
            name: 'Баския: Взрыв реальности',
            time: '1ч 42м',
            img: picture4,
            isLiked: true
        },
        {
            name: 'Бег это свобода',
            time: '1ч 42м',
            img: picture5,
            isLiked: false
        },
        {
            name: 'Книготорговцы',
            time: '1ч 42м',
            img: picture6,
            isLiked: false
        },
        {
            name: 'Когда я думаю о Германии ночью',
            time: '1ч 42м',
            img: picture7,
            isLiked: false
        },
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

    const [moviesList, setMoviesList] = React.useState(movies.slice(0, 7))
    const [isLoading, setIsLoading] = React.useState(false)

    const loadMore = () => {
        setIsLoading(true)
        setTimeout(() => {
            setMoviesList(moviesList.concat(movies.slice(8, 10)))
            setIsLoading(false)
        }, 1000)
    }

    return (
        <section className="card__list">
            {moviesList.map((movie, i) => (
                <MoviesCard
                    name={movie.name}
                    time={movie.time}
                    isLiked={movie.isLiked}
                    img={movie.img}
                ></MoviesCard>
            ))}
            {isLoading
                ? <Preloader></Preloader>
                : <button className="movie__button-more" onClick={loadMore}>Ещё</button>
            }
        </section>)
};

export default MoviesCardList;