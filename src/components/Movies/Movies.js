import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { filterMovies } from '../../utils/filters'

function Movies(props) {
    const { savedMovies, loadSavedMovies, loadMovies } = props

    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        loadSavedMovies()
    }, [loadSavedMovies])

    const searchMovies = (searchQuery, isShortMovie) => {
        setFilteredMovies([])
        setIsLoading(true)
        loadMovies()
            . then((movies) => {
                setFilteredMovies(
                    filterMovies(movies, { searchQuery, isShortMovie })
                )
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(false)
                console.error(err)
            })
    }

    return (
        <>
            <Header
                headerStyle='lite'
                loggedIn={true}
            >
            </Header>

            <SearchForm
                searchMovies={searchMovies}
            >
            </SearchForm>

            <MoviesCardList
                movies={filteredMovies}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                savedMovies={savedMovies}
            >
            </MoviesCardList>

            <Footer>
            </Footer>
        </>
    )
};

export default Movies;