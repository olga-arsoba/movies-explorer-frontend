import React from 'react'
import './AboutProject.css'

function AboutProject() {
    return (
        <section id="AboutProject" className="about__project">
            <h2 className="title">О проекте</h2>
            <div className="line"></div>
            <div className="info">
                <div className="about__info">
                    <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="about__info">
                    <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="weeks">
                <div className="week">
                    <div className="week__backend">1 неделя</div>
                    <div className="week__frontend">4 недели</div>
                </div>
                <div className="week">
                    <div className="technology">Back-end</div>
                    <div className="technology">Front-end</div>
                </div>
            </div>
        </section>)
};

export default AboutProject;