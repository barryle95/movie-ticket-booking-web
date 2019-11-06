let innitState = {
    moviesList : [],
    movieDetail: {},

};

const moviesReducer = (state = innitState, action) => {
    switch(action.type) {
        default: {
            return {...state};
        }
    }
}

export default moviesReducer;