import React from 'react'
import avatar from '../../../images/avatar.png'
import './AboutMe.css'

function AboutMe() {
    return (
        <section id="AboutMe" className="about__me">
            <h2 className="title">Студент</h2>
            <div className="line"></div>
            <div className="about__me-general">
                <div className="about__me_info">
                    <h3 className="about__me-title">Ольга</h3>
                    <p className="about__me-profession">Фронтенд-разработчик, 31 год</p>
                    <p className="about__me-paragraph">Я родилась в Беларуси, закончила строительный факультет БНТУ в
                        Минске. Уже 2,5 года живу в Варшаве. Люблю фотографию и горы. Недавно начала кодить. После того,
                        как прошла курс по веб-разработке от Яндекс.Практикума, начала искать работу.</p>
                </div>
                <div className="about__me_image">
                    <img src={avatar} alt="" className="avatar"/>
                </div>
            </div>
            <a className="about__me-link" href="https://www.facebook.com/olga.pelykh/" rel="noreferrer" target="_blank">Facebook</a>
            <a className="about__me-link" href="https://github.com/olga-arsoba" rel="noreferrer" target="_blank">Github</a>
        </section>)
};

export default AboutMe;