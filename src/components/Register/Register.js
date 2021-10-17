import React from 'react'
import './Register.css'
import Logo from '../Header/Logo/Logo'
import {Link} from "react-router-dom";

function Register(props) {
    const {handleRegister} = props
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(name, email, password).then(() => {
            setName('')
            setEmail('')
            setPassword('')
        })
    }

    return (
        <>
            <section className="form">
                <Logo></Logo>
                <h2 className="greeting">Добро пожаловать!</h2>
                <form className="register" onSubmit={handleSubmit}>
                    <p className="form__name-field">Имя</p>
                    <input id="username" className='form__input' placeholder='Имя' required type='text' value={name} onChange={handleNameChange}/>
                    <p className="form__name-field">E-mail</p>
                    <input id="email" className='form__input' placeholder='E-mail' required type='email' value={email} onChange={handleEmailChange}/>
                    <p className="form__name-field">Пароль</p>
                    <input id="password" className='form__input' placeholder='Пароль' required type='password' min="8" value={password} onChange={handlePasswordChange}/>
                    <button type="submit" className="form__button">Зарегистрироваться</button>
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