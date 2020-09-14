import * as actionTypes from './actions/types';

const initialState = {
    movies: [],
    error: false
};

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.UPDATE_MOVIES) {
        return { 
            movies: [
                ...state.movies,
                action.movies
            ],
            error: action.error
        };
    }

    return state;
};

export default reducer;
