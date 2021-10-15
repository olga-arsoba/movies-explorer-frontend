import React from 'react'
import './Login.css'
import Logo from '../Header/Logo/Logo'
import {Link} from 'react-router-dom'

function Login(props) {
    const {handleLogin} = props
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password).then(() => {
            setEmail('')
            setPassword('')
        })
    }

    return (
        <>
            <section className="form">
                <Logo></Logo>
                <h2 className="greeting">Рады видеть!</h2>
                <form className="login" onSubmit={handleSubmit}>
                    <p className="form__name-field">E-mail</p>
                    <input id="email" className='form__input' placeholder='E-mail' required type='email' value={email} onChange={handleEmailChange}/>
                    <p className="form__name-field">Пароль</p>
                    <input id="password" className='form__input' placeholder='Пароль' required type='password' min="8" value={password} onChange={handlePasswordChange}/>
                    <button type="submit" className="form__button_login">Войти</button>
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