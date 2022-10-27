const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
const GET_MOVIES = 'GET_MOVIES';
const GET_DETAILS = 'GET_DETAILS';

const API_KEY = 'b8b7d0cb';

function addMovieFavourite(movie){
    return dispatch => {
        console.log(`${movie.imdbID} added like favourite`)
        dispatch({
            type: ADD_MOVIE_FAVORITE,
            payload: movie
        });
    }
};

function removeMovieFavourite(id){
    return dispatch => {
        console.log(`Movie delete favourite ${id}`)
        dispatch({
            type: REMOVE_MOVIE_FAVORITE,
            payload: id
        })
    }
}

function getMovies(title){
    return dispatch => {
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
            .then( res => res.json() )
            .then( data => {
                dispatch({
                    type: GET_MOVIES,
                    payload: data.Search
                });
            });
    }
};

function getDetails(){
    return dispatch => {
        return fetch()
            .then( res => res.json() )
            .then( data => {
                dispatch({
                    type: GET_DETAILS,
                    payload: data
                });
            });
    };
};

module.exports = {
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    GET_MOVIES,
    GET_DETAILS,
    addMovieFavourite,
    removeMovieFavourite,
    getMovies,
    getDetails
}