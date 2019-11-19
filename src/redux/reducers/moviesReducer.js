import * as actionType from './../constants/actionType';

let innitState = {
    moviesList : [],
    movieDetail: {},

};

const moviesReducer = (state = innitState, action) => {
    switch(action.type) {
        case actionType.SAVE_LIST_MOVIES: {
            console.log(action);
            state.moviesList = action.moviesList;
            console.log(state.listMovies);
            return { ...state };
        }
        default: {
            return {...state};
        }
    }
}

export default moviesReducer;