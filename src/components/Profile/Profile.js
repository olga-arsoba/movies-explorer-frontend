import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Navigation from "../Navigation/Navigation";

function Profile() {
    return (
        <>
            <Header headerClass='header_lite'>
                <Navigation></Navigation>
            </Header>
            <section className="profile__content">
                <h1 className="profile__hello">Привет, Ольга!</h1>
                <div className="profile__data">
                    <p>Имя</p>
                    <h4>Ольга</h4>
                </div>
                <div className="profile__line"></div>
                <div className="profile__data">
                    <p>E-mail</p>
                    <h4>pochta@yandex.ru</h4>
                </div>
                <div className="profile__actions">
                    <a href="/profile" className="profile__edit">Редактировать</a>
                    <a href="/profile" className="profile__signout">Выйти из аккаунта</a>
                </div>
            </section>
        </>
    )
};

export default Profile;