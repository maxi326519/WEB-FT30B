const apiKey = 'ef227a26';

function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apiKey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

function removeMovieFavorite(payload){
    return { type: 'REMOVE_FAVORITE_MOVIE', payload};
}

function getMoviesDetail(id){
    return function(dispatch){
        return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GET_MOVIE_DETAIL', payload: json})
            })
    }
}

module.exports = {
    addMovieFavorite,
    getMovies,
    removeMovieFavorite,
    getMoviesDetail
}