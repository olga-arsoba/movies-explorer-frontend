class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    getHeadersWithJWT() {
        const headers = { ...this._headers }
        if (localStorage.getItem('token')) {
            headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`
        }

        return headers
    }

    signUp(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name, password, email})
        })
            .then(this._checkResponse)
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({password, email})
        })
            .then(this._checkResponse)
    }

    me (token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            },
        })
            .then(this._checkResponse)
    }

    updateProfile ({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.getHeadersWithJWT(),
            body: JSON.stringify({
                name,
                email,
            })
        })
            .then(this._checkResponse)
    }

    movies () {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this.getHeadersWithJWT(),
        })
            .then(this._checkResponse)
    }

    createMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId
    }) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this.getHeadersWithJWT(),
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailer,
                nameRU,
                nameEN,
                thumbnail,
                movieId
            })
        })
            .then(this._checkResponse)
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this.getHeadersWithJWT(),
        })
            .then(this._checkResponse)
    }

    _checkResponse (res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.arsoba.nomoredomains.monster',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi