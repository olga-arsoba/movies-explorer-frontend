import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__line"></div>
            <div className="footer__links">
                <p className="footer__year">© 2021</p>
                <div className="footer__links-column">
                     <a className="footer__link" href="https://practicum.yandex.ru/profile/web/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/olga-arsoba" rel="noreferrer" target="_blank">Github</a>
                    <a className="footer__link" href="https://www.facebook.com/olga.pelykh/" rel="noreferrer" target="_blank">Facebook</a>
                </div>
            </div>
        </footer>)
};

export default Footer;