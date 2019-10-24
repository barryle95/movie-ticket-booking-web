let innitState = {
    moviesList = [],

};

const moviesReducer = (state = innitState, action) => {
    switch(action.type) {
        default: {

            return {...state};
            break;
        }
    }
}

export default moviesReducer;