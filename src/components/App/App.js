import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Error404 from '../Error404/Error404'

function App() {
    return (
        <Switch>
            <Route path="/movies">
                <Movies/>
            </Route>
            <Route path="/saved-movies">
                <SavedMovies/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/signin">
                <Login/>
            </Route>
            <Route path="/signup">
                <Register/>
            </Route>
            <Route path="/404">
                <Error404/>
            </Route>
            <Route path="/">
                <Main/>
            </Route>
        </Switch>
    );
}

export default App;
