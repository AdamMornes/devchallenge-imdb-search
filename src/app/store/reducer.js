import * as actionTypes from './actions/types';

const initialState = {
    movies: [],
    error: false
};

const reducer = (state = initialState, { type, payload } ) => {
    if(type === actionTypes.UPDATE_MOVIES_SUCCESS) {
        return { 
            movies: state.movies.concat(payload.movies),
            error: payload.error
        };
    }

    return state;
};

export default reducer;
