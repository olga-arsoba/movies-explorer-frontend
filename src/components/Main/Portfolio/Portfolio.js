import React from 'react'
import arrow from '../../../images/arrow.svg'
import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__links">Портфолио</h2>
            <div className="portfolio__info">
                <a className="portfolio__link" href="https://github.com/olga-arsoba/how-to-learn" rel="noreferrer" target="_blank">Статичный сайт</a>
                <img src={arrow} alt="" className="arrow"/>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__info">
                <a className="portfolio__link" href="https://github.com/olga-arsoba/russian-travel" rel="noreferrer" target="_blank">Адаптивный сайт</a>
                <img src={arrow} alt="" className="arrow"/>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__info">
                <a className="portfolio__link" href="https://github.com/olga-arsoba/react-mesto-auth" rel="noreferrer" target="_blank">Одностраничное приложение</a>
                <img src={arrow} alt="" className="arrow"/>
            </div>
        </section>)
};

export default Portfolio;