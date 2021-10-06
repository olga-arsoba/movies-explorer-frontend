import React from 'react'
import Header from '../Header/Header'
import Promo from './Promo/Promo'
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <Header headerClass='header_dark'>
                <div>
                    <Link to="/signup" className="singup__link">Регистрация</Link>
                    <Link to="/signin">
                        <button type="button" className="singin__button">Войти</button>
                    </Link>
                </div>
            </Header>

            <Promo>
            </Promo>

            <NavTab>
            </NavTab>

            <AboutProject>
            </AboutProject>

            <Techs>
            </Techs>

            <AboutMe>
            </AboutMe>

            <Portfolio>
            </Portfolio>

            <Footer>
            </Footer>
        </>
    )
}

export default Main;