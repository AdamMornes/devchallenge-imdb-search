import * as actionTypes from './actions/types';

const initialState = {
    movies: [],
    error: false
};

const reducer = (state = initialState, { type, movies } ) => {
    if(type === actionTypes.UPDATE_MOVIES_SUCCESS) {
        return {
            movies: state.movies.concat(movies),
            error: false
        };
    }

    if(type === actionTypes.UPDATE_MOVIES_ERROR) {
        return {
            ...state,
            error: true
        }
    }

    return state;
};

export default reducer;
