import Actions from '../actions/index'

const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootREducer(state = initialState, action){
    switch(Actions.type){
        case Actions.addMovieFavorite:
            return {
                ...state,
                moviesFavorites: [...state.moviesFavourites, action.payload]
            };
        case Actions.getMovies:
            return {
                ...state,
                moviesLoaded: [...state.moviesLoaded, action.payload.Search]
            };
        case Actions.removeMovieFavorite:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(title => title !== action.payload)
            };
        case Actions.getMoviesDetail:
            return {
                ...state,
                movieDetail: state.movieDetail
            };
        default:
            return state;
    }
}