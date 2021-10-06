import React from 'react'
import landing_logo from '../../../images/pic__COLOR_landing-logo.svg'
import './Promo.css'

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__info">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={landing_logo} alt="" className="landing__logo"/>
        </section>)
};

export default Promo;