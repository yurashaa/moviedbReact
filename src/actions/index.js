import {
    GET_MOVIES,
    GET_GENRES,
    LOADING_START,
    LOADING_END, GET_GENRES_ERROR
} from "../actions-type";
import {batch} from "react-redux";


const getMoviesSuccess = (movies) => ({type: GET_MOVIES, payload: movies});
const getMovieError = (error) => ({type: GET_GENRES, payload: error});

const getGenresSuccess = (genres) => ({type: GET_GENRES, payload: genres});
const getGenresError = (error) => ({type: GET_GENRES_ERROR, payload: error});

const startLoading = () => ({type: LOADING_START});
const endLoading = () => ({type: LOADING_END});

export const getMovies = () => {
    return (dispatch) =>
    {
        dispatch(startLoading());
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=db3bc69614c0b03ee3e994b62e73c0a3')
            .then((res) => {

                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json();
            })
            .then((data) => {
                console.log(data.results);
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getMoviesSuccess(data.results))
                })
            })
            .catch((e) => {
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getMovieError(e))
                })
            })
    }
};

export const getGenres = () => {
    return (dispatch) =>
    {
        dispatch(startLoading());
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=db3bc69614c0b03ee3e994b62e73c0a3')
            .then(res => {

                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json();
            })
            .then(data => {
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getGenresSuccess(data.genres));
                })
            })
            .catch((e) => {
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getGenresError(e));
                })
            })
    }
};