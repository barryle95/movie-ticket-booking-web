import React, { Component } from 'react';
import * as action from '../../redux/action/index';
import {connect} from 'react-redux';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
        }
    }

    handleOnChange = (e) => {
        let { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        const user = {...this.state};
        user.maNhom = "GPO5";
        user.maLoaiNguoiDung = "QuanTri";
        this.props.addUser(user);

    }

    render() {
        return (
            <div>
                <form className="container col-6" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor>Họ tên</label>
                        <input type="text" className="form-control" name="hoTen" id aria-describedby="helpId" placeholder onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Tài khoản</label>
                        <input type="text" className="form-control" name="taiKhoan" id aria-describedby="helpId" placeholder onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mật khẩu</label>
                        <input type="text" className="form-control" name="matKhau" id aria-describedby="helpId" placeholder onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Email</label>
                        <input type="text" className="form-control" name="email" id aria-describedby="helpId" placeholder onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor>SĐT</label>
                        <input type="text" className="form-control" name="s>oDT" id aria-describedby="helpId" placeholder onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <button name="" id="" class="btn btn-primary" type="submit" value="">Thêm người dùng</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    addUser: (user) => {
        dispatch(action.actAddUserAPI(user));
    }
})

export default connect(null, mapDispatchToProps)(AddUser);