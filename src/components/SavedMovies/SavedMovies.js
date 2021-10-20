import React from 'react'
import Header from '../Header/Header'
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import {filterMovies} from "../../utils/filters";

function SavedMovies(props) {
    const {savedMovies, loadSavedMovies} = props

    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [isShortMovie, setIsShortMovie] = React.useState(false)

    React.useEffect(() => {
        loadSavedMovies()
    }, [loadSavedMovies])

    React.useEffect(() => {
        setFilteredMovies(
            filterMovies(savedMovies, { searchQuery, isShortMovie })
        )
    }, [savedMovies, searchQuery, isShortMovie])

    const searchMovies = (query, isShort) => {
        setSearchQuery(query)
        setIsShortMovie(isShort)

        setFilteredMovies(
            filterMovies(savedMovies, { searchQuery, isShortMovie })
        )
        setIsLoading(false)
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
                isLoading={isLoading}
                savedMovies={filteredMovies}
                loadSavedMovies={loadSavedMovies}
            >
            </MoviesCardList>

            <Footer>
            </Footer>
        </>
    )
};

export default SavedMovies;