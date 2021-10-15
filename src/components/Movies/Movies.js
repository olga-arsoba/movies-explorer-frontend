import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Navigation from '../Navigation/Navigation'

function Movies() {
    return (
        <>
            <Header headerClass='header_lite'>
                <Navigation></Navigation>
            </Header>

            <SearchForm>
            </SearchForm>

            <MoviesCardList>
            </MoviesCardList>

            <Footer>
            </Footer>
        </>
    )
};

export default Movies;