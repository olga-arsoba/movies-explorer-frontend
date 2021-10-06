import React from 'react'
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm() {
    return (
        <form className="serach__form">
            <div className="buttonin">
                <input type="text" className="search__film" placeholder="Фильм"/>
                <button type="submit" className="search__button">Поиск</button>
            </div>
            <FilterCheckbox></FilterCheckbox>
            <div className="serach__line"></div>

        </form>
    )
};

export default SearchForm;