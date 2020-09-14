import * as actionTypes from './types';
import { getMovies } from '@api/api';

export const updateMoviesSuccess = movies => ({
    type: actionTypes.UPDATE_MOVIES_SUCCESS,
    movies
});

export const updateMoviesError = () => ({
    type: actionTypes.UPDATE_MOVIES_ERROR
});

export const fetchMoviesData = () => {
    return dispatch => {
        getMovies
            .then(movies => {
                dispatch(updateMoviesSuccess(movies));
            })
            .catch(() => {
                dispatch(updateMoviesError());
            })
    }
};
