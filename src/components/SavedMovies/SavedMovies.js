import React from 'react'
import Header from '../Header/Header'
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import Navigation from "../Navigation/Navigation";

function SavedMovies() {
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

export default SavedMovies;