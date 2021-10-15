import React from 'react'
import './Login.css'
import Logo from '../Header/Logo/Logo'
import {Link} from 'react-router-dom'

function Login() {

    const handleSubmit = (event) => {
        console.log(event)
    }

    return (
        <>
            <section className="form">
                <Logo></Logo>
                <h2 className="greeting">Рады видеть!</h2>
                <form className="login">
                    <p className="form__name-field">E-mail</p>
                    <input id="email" className='form__input' placeholder='E-mail' required type='email'/>
                    <p className="form__name-field">Пароль</p>
                    <input id="password" className='form__input' placeholder='Пароль' required type='password' min="8"/>
                    <button type="submit" className="form__button_login" onClick={handleSubmit}>Войти</button>
                    <div className="links">
                        <p className="link">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="enter">
                            Регистрация
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )
};

export default Login;