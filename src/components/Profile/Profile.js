import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import {Link} from "react-router-dom";

function Profile(props) {
    const {logout} = props
    const currentUser = React.useContext(CurrentUserContext)

    return (
        <>
            <Header
                headerStyle='lite'
                loggedIn={true}
            >
            </Header>
            <section className="profile__content">
                <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
                <div className="profile__data">
                    <p>Имя</p>
                    <h4>{currentUser.name}</h4>
                </div>
                <div className="profile__line"></div>
                <div className="profile__data">
                    <p>E-mail</p>
                    <h4>{currentUser.email}</h4>
                </div>
                <div className="profile__actions">
                    <Link to="/edit-profile" className="profile__edit">
                        Редактировать
                    </Link>
                    <span onClick={logout} className="profile__signout">Выйти из аккаунта</span>
                </div>
            </section>
        </>
    )
};

export default Profile;