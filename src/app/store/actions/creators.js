import * as actionTypes from './types';
import { getMovies } from '../../api/api';

export const updateMoviesSuccess = movies => ({
    type: actionTypes.UPDATE_MOVIES_SUCCESS,
    payload: { movies, error: false }
});

export const updateMoviesError = () => ({
    type: actionTypes.UPDATE_MOVIES_ERROR,
    payload: { movies: [], error: true }
});

export const fetchMoviesData = () => {
    return dispatch => {
        getMovies
            .then(movies => {
                dispatch(updateMoviesSuccess(movies));
            })
    }
};
