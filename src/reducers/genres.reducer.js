import {GET_GENRES, GET_GENRES_ERROR } from "../actions-type";

let initialState = {
    genres: [],
    error: [],
};

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES: {
            return {...state, genres: action.payload}
        }
        case GET_GENRES_ERROR: {
            return {...state, error: action.payload}
        }
        default: return state;
    }
};