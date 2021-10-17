import React, {useCallback} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import {useHistory} from 'react-router'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Error404 from '../Error404/Error404'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import mainApi from '../../utils/MainApi'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import moviesApi from '../../utils/MoviesApi'
import EditProfile from '../EditProfile/EditProfile'

function App() {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [movies, setMovies] = React.useState([])
    const [savedMovies, setSavedMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        email: '',
        _id: ''
    })

    const handleRegister = (name, email, password) => {
        return mainApi.signUp(name, email, password).then((data) => {
            return handleLogin(email, password)
        }).catch((err) => {
            console.error(err)
        })
    }

    const handleLogin = (email, password) => {
        return mainApi.signIn(email, password).then((data) => {
            localStorage.setItem('token', data.token)
            tokenCheck('/movies')
        }).catch((err) => {
            console.error(err)
        })
    }

    const updateProfile = (name, email) => {
        return mainApi.updateProfile({ name, email }).then(() => {
            setCurrentUser({
                name,
                email
            })
        })
    }

    const tokenCheck = useCallback(
        (redirect = null) => {
            setIsLoading(true)
            if (localStorage.getItem('token')) {
                const jwt = localStorage.getItem('token')
                mainApi.me(jwt).then((data) => {
                    if (data) {
                        setCurrentUser(data.data)
                        setLoggedIn(true)
                        setIsLoading(false)

                        if (redirect) {
                            history.push(redirect)
                        }
                    }
                }).catch((err) => {
                    console.error(err)
                })
            }
        },
        [history],
    )

    React.useEffect(() => {
        tokenCheck()
    }, [tokenCheck])

    const loadSavedMovies = useCallback(() => {
        return mainApi.movies()
            .then((data) => {
                setSavedMovies(data.data)
            }).catch((err) => {
                console.error(err)
            })
        },
        []
    )

    const loadMovies = () => {
        return new Promise((resolve, reject) => {
            const localMovies = localStorage.getItem('movies');

            if (localMovies) {
                const jsonMovies = JSON.parse(localMovies)
                setMovies(jsonMovies)
                resolve(jsonMovies);
            } else {
                moviesApi.getMovies()
                    .then((movies) => {
                        localStorage.setItem('movies', JSON.stringify(movies));
                        setMovies(movies)
                        resolve(movies)
                    }).catch((err) => {
                    reject(err)
                })
            }
        });
    }

    const logout = () => {
        localStorage.setItem('token', '')
        setLoggedIn(false)
        history.push('/')
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {!isLoading && (
                <Switch>
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        path="/movies"
                        component={Movies}
                        movies={movies}
                        savedMovies={savedMovies}
                        loadMovies={loadMovies}
                        loadSavedMovies={loadSavedMovies}
                    />
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        path="/saved-movies"
                        component={SavedMovies}
                        loadSavedMovies={loadSavedMovies}
                        savedMovies={savedMovies}
                    />
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        path="/profile"
                        component={Profile}
                        logout={logout}
                    />
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        path="/edit-profile"
                        component={EditProfile}
                        logout={logout}
                        updateProfile={updateProfile}
                    />
                    <Route path="/signin">
                        <Login
                            handleLogin={handleLogin}
                        />
                    </Route>
                    <Route path="/signup">
                        <Register
                            handleRegister={handleRegister}
                        />
                    </Route>
                    <Route path="/">
                        <Main loggedIn={loggedIn}/>
                    </Route>
                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>)
            }
        </CurrentUserContext.Provider>
    );
}

export default App;
