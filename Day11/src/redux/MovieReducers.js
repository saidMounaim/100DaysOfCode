import * as actions from './MovieConstants';

export const moviesReducers = (state = { movies: [], favourite: [] }, action) => {

    switch (action.type) {
        case actions.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case actions.FETCH_MOVIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actions.ADD_TO_FAVOURITE:
            return {
                ...state,
                favourite: [...state.favourite, action.payload],
            }
        case actions.REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favourite: action.payload
            }
        default:
            return state;
    }

}