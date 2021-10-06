import React from 'react'
import './Techs.css'

function Techs() {
    return (
        <section id="Techs" className="techs">
            <h2 className="title">Технологии</h2>
            <div className="line"></div>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.</p>
            <div className="techs__bottoms">
                <bottom type="button" id="" className="techs__bottom">HTML</bottom>
                <bottom type="button" id="" className="techs__bottom">CSS</bottom>
                <bottom type="button" id="" className="techs__bottom">JS</bottom>
                <bottom type="button" id="" className="techs__bottom">React</bottom>
                <bottom type="button" id="" className="techs__bottom">Git</bottom>
                <bottom type="button" id="" className="techs__bottom">Express.js</bottom>
                <bottom type="button" id="" className="techs__bottom">mongoDB</bottom>
            </div>
        </section>)
};

export default Techs;