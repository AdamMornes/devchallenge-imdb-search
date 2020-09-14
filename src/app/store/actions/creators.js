import * as actionTypes from './types';
import fetchData from '../../api/api';

export const getMovies = () => {
    return {
        type: actionTypes.UPDATE_MOVIES,
        payload: fetchData
            .then(movies => ({ movies, error: false }))
            .catch(() => ({ movies: [], error: true }))
    }
};
