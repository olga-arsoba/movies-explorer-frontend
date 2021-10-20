import React from 'react'
import './Header.css'
import Logo from './Logo/Logo';
import Navigation from '../Navigation/Navigation'
import {Link} from "react-router-dom";

function Header(props) {
    const {loggedIn, headerStyle} = props

    return (
        <header className={`header header_${headerStyle}`}>
            <Logo></Logo>
            { loggedIn
                ? <Navigation
                     headerStyle={headerStyle}
                    ></Navigation>
                : (
                    <div>
                        <Link to="/signup" className={`header__link header__link_${headerStyle}`}>Регистрация</Link>
                        <Link to="/signin">
                            <button type="button" className="singin__button">Войти</button>
                        </Link>
                    </div>
                )
            }
        </header>)
};

export default Header;