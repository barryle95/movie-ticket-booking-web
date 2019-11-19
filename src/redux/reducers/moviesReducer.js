import * as actionType from './../constants/actionType';

let innitState = {
    moviesList : [
        {
            "maPhim": 1318,
            "tenPhim": "Ted 2",
            "biDanh": "ted-2",
            "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP05",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
          },
          {
            "maPhim": 1333,
            "tenPhim": "Trainwreck",
            "biDanh": "trainwreck",
            "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
            "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
            "maNhom": "GP05",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
          },
    ],
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