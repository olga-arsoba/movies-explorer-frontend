import React from 'react'
import './Register.css'
import Logo from '../Header/Logo/Logo'
import {Link} from "react-router-dom";

function Register() {
    return (
        <>
            <section className="form">
                <Logo></Logo>
                <h2 className="greeting">Добро пожаловать!</h2>
                <form className="register">
                    <p className="form__name-field">Имя</p>
                    <input id="username" className='form__input' placeholder='Имя' required type='text'/>
                    <p className="form__name-field">E-mail</p>
                    <input id="email" className='form__input' placeholder='E-mail' required type='email'/>
                    <p className="form__name-field">Пароль</p>
                    <input id="password" className='form__input' placeholder='Пароль' required type='password' min="8"/>
                    <p className="form__error">Что-то пошло не так...</p>
                    <button type="button" className="form__button">Зарегистрироваться</button>
                </form>
                <div className="links">
                    <p className="link">Уже зарегистрированы?</p>
                    <Link to="/signin" className="enter">
                        Войти
                    </Link>
                </div>
            </section>
        </>
    )
};

export default Register;