import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function Profile(props) {
    const { logout, updateProfile } = props
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

    const handleEditProfile = (e) => {
        e.preventDefault()

        if (isButtonDisabled) {
            return
        }

        updateProfile(name, email)
    }

    React.useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsButtonDisabled(true)
        } else {
            setIsButtonDisabled(false)
        }
    }, [name, email, currentUser.name, currentUser.email])

    return (
        <>
            <Header
                headerStyle='lite'
                loggedIn={true}
            >
            </Header>
            <section className="profile__content">
                <form onSubmit={handleEditProfile}>
                    <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
                    <div className="profile__data">
                        <p>Имя</p>
                        <input className="profile__input" placeholder='Имя' required type='text' value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="profile__line"></div>
                    <div className="profile__data">
                        <p>E-mail</p>
                        <input className="profile__input" placeholder='E-mail' required type='text' value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="profile__actions">
                        <button type="submit" disabled={isButtonDisabled}  className="profile__edit">
                            Редактировать
                        </button>
                        <span onClick={logout} className="profile__signout">Выйти из аккаунта</span>
                    </div>
                </form>
            </section>
        </>
    )
};

export default Profile;