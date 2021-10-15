import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <section className="filter__checkbox">
            <input type="checkbox" id="filter"/>
            <label for="filter">Короткометражки</label>
        </section>
    )
};

export default FilterCheckbox;