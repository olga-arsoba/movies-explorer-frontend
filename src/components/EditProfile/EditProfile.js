import React from 'react'
import './EditProfile.css'
import Header from '../Header/Header'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function EditProfile(props) {
    const { updateProfile } = props

    const currentUser = React.useContext(CurrentUserContext)
    const [name, setName] = React.useState(currentUser.name)
    const [email, setEmail] = React.useState(currentUser.email)
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    React.useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsButtonDisabled(true)
        } else {
            setIsButtonDisabled(false)
        }
    }, [name, email, currentUser.name, currentUser.email])

    const handleSubmit = (e) => {
        e.preventDefault()

        updateProfile(name, email)
    }

    return (
        <>
            <Header
                headerStyle='lite'
                loggedIn={true}
            >
            </Header>
            <section className="edit-profile">
                <form className="edit-profile__form" onSubmit={handleSubmit}>
                    <p className="form__name-field">Имя</p>
                    <input id="username" className='form__input' placeholder='Имя' required type='text' value={name} onChange={handleNameChange}/>
                    <p className="form__name-field">E-mail</p>
                    <input id="email" className='form__input' placeholder='E-mail' required type='email' value={email} onChange={handleEmailChange}/>
                    <button type="submit" disabled={isButtonDisabled} className="form__button">Сохранить</button>
                </form>
            </section>
        </>
    )
};

export default EditProfile;