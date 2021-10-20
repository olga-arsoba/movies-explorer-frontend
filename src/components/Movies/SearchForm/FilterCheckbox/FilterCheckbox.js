import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox(props) {
    const {handleCheckboxChange} = props

    const handleChange = (e) => {
        handleCheckboxChange(e.target.checked)
    }

    return (
        <section className="filter__checkbox">
            <input type="checkbox" id="filter" onChange={handleChange}/>
            <label htmlFor="filter">Короткометражки</label>
        </section>
    )
};

export default FilterCheckbox;