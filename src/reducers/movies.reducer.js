import {
    GET_EXACT_MOVIE,
    GET_MOVIES,
    GET_MOVIES_ERROR,
    LOADING_END,
    LOADING_START
} from "../actions-type";

let initialState = {
    movies: [],
    exactMovie: {},
    isLoading: false,
    error: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {...state, movies: action.payload}
        }

        case GET_MOVIES_ERROR: {
            return {...state, error: action.payload}
        }

        case GET_EXACT_MOVIE: {
            return {...state, exactMovie: action.payload}
        }

        case LOADING_START: {
            return {...state, isLoading: true}
        }

        case LOADING_END: {
            return {...state, isLoading: false}
        }
        default: return state;
    }
};