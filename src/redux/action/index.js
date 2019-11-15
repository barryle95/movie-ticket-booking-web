import * as actionType from './../constants/actionType';
import axios from 'axios';


//Call API via axios
const saveMoviesAPI = () => {
    return dispatch => {
        console.log(1);
        axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`,
        })
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionType.SAVE_LIST_MOVIES,
                    moviesList: res.data,
                })
            })
            .catch(err => {
                console.log(err.response);
            })
    };
};

const detailMovieAPI = (id) => {
    return dispatch => {
        console.log(id);
        axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: actionType.DETAIL_MOVIE,
                movieDetail: res.data,
            });
        })
        .catch(err => {
            console.log(err.response)
        })
    }
};

const actLoginAdmin = (user, history) => {
    return dispatch => {
        axios.post(`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`, user)
            .then(res => {
                console.log(res);
                if (res.data.maLoaiNguoiDung === "QuanTri") {
                    localStorage.setItem("userAdmin", JSON.stringify(res.data))
                    //Chuyển trang nếu đăng nhập hợp lệ
                    history.push("/admin/dashboard");
                } else {
                    alert("Error Login!")
                }
            })
            .catch(err => {
                console.log(err.response)
            })
    }
};

const addUserAPI = (user) => {

};

export { saveMoviesAPI, detailMovieAPI}