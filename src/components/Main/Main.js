import React from 'react'
import Header from '../Header/Header'
import Promo from './Promo/Promo'
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Footer from '../Footer/Footer'

function Main(props) {
    const {loggedIn} = props

    return (
        <>
            <Header
                headerStyle='dark'
                loggedIn={loggedIn}
            >
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