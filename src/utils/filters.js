export const filterBySearchQuery = (movies, searchQuery) => {
    return movies.filter((movie) => {
        return movie.nameRU.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    })
}

export const filterShortMovie = (movies) => {
    return movies.filter((movie) => {
        return movie.duration < 60
    })
}

export const filterMovies =  (movies, { searchQuery, isShortMovie} ) => {
    const filteredMovies = filterBySearchQuery(movies, searchQuery)

    if (isShortMovie) {
        return filterShortMovie(filteredMovies)
    }

    return filteredMovies
}