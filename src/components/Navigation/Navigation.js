import React from 'react'
import './Navigation.css'
import { useLocation } from 'react-router-dom'
import menu from '../../images/menu.svg'
import close from '../../images/close.svg'
import {Link} from 'react-router-dom'

function Navigation(props) {
    const location = useLocation()
    const { headerStyle } = props
    const [isNavigationPopupShown, setIsNavigationPopupShown] = React.useState(false)

    return (
        <div className="navigation">
            <div className="navigation__top">
                <Link to="/movies" className={`header__link header__link_${headerStyle} ${location.pathname === '/movies' ? 'header__link_active' : ''}`}>Фильмы</Link>
                <Link to="/saved-movies" className={`header__link header__link_${headerStyle} ${location.pathname === '/saved-movies' ? 'header__link_active' : ''}`}>Сохранённые фильмы</Link>
                <Link to="/profile">
                    <button type="button" className="account__button">Аккаунт</button>
                </Link>
            </div>

            {isNavigationPopupShown
                ?
                    <button onClick={() => setIsNavigationPopupShown(false)} type="button" className="navigation__button_close">
                        <img src={close} alt="Close"/>
                    </button>
                :
                    <button onClick={() => setIsNavigationPopupShown(true)} className="navigation__button">
                        <img src={menu}  alt="Menu"/>
                    </button>
            }

            { isNavigationPopupShown
                ? (
                    <div className="navigation__popup">
                        <div className="navigation__popup-links">
                            <Link to="/" className={`header__link header__link_big ${location.pathname === '/' ? 'header__link_big_active' : ''}`}>Главная</Link>
                            <Link to="/movies" className={`header__link header__link_big ${location.pathname === '/movies' ? 'header__link_big_active' : ''}`}>Фильмы</Link>
                            <Link to="/saved-movies" className={`header__link header__link_big ${location.pathname === '/saved-movies' ? 'header__link_big_active' : ''}`}>Сохранённые фильмы</Link>
                        </div>
                        <Link to="/profile" className="account__button_profile">
                            <button type="button" className="account__button account__button_popup">Аккаунт</button>
                        </Link>
                    </div>
                )
                : ''
            }

        </div>
    )
};

export default Navigation;

