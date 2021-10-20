import React from 'react'
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
    const {searchMovies} = props

    const [searchQuery, setSearchQuery] = React.useState('')
    const [isShortMovie, setIsShortMovie] = React.useState(false)

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleCheckboxChange = (isChecked) => {
        setIsShortMovie(isChecked)
        searchMovies(searchQuery, isChecked)
    }

    const handleSearchMovies = (e) => {
        e.preventDefault()
        searchMovies(searchQuery, isShortMovie)
    }

    return (
        <form className="search__form" onSubmit={handleSearchMovies}>
            <div className="buttonin">
                <input type="text" className="search__film" placeholder="Фильм" value={searchQuery} onChange={handleSearchQueryChange}/>
                <button type="submit" className="search__button">Поиск</button>
            </div>
            <FilterCheckbox
                handleCheckboxChange={handleCheckboxChange}
            >
            </FilterCheckbox>
            <div className="serach__line"></div>
        </form>
    )
};

export default SearchForm;