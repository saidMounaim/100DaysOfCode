import * as actions from './MovieConstants';
import { fetchMoviesUrl } from '../api';
import axios from 'axios';

export const fetchMovies = () => async (dispatch) => {
    try {
        dispatch({ type: actions.FETCH_MOVIES_REQUEST });
        const results = await axios.get(fetchMoviesUrl);
        dispatch({ type: actions.FETCH_MOVIES_SUCCESS, payload: results.data.results });
    } catch (error) {
        dispatch({ type: actions.FETCH_MOVIES_FAIL, payload: error.message });
        console.log(error.message)
    }

}

export const addToFavourite = (movie) => async (dispatch) => {
    dispatch({ type: actions.ADD_TO_FAVOURITE, payload: movie });
}


export const removeFromFavourite = (movie) => async (dispatch, getState) => {
    const { favourite } = getState().movies;
    const filtredFavourite = favourite.filter(fav => fav.id !== movie.id);
    console.log(filtredFavourite);

    dispatch({ type: actions.REMOVE_FROM_FAVOURITE, payload: filtredFavourite });
}