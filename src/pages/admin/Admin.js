import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/action/index';

class Admin extends Component {
    constructor(props) {
        super(props)
    
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
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.login(this.state, this.props.history)
    }
    
    render() {
        return (
            <div>
                 <form className="container" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="true">Username</label>
                    <input type="text" className="form-control" name="taiKhoan" id aria-describedby="helpId" placeholder onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="true">Password</label>
                    <input type="password" className="form-control" name="matKhau" id aria-describedby="helpId" placeholder onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                    <button name="" id="" className="btn btn-primary" type="submit" value="">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (user, history) => {
        dispatch(action.actLoginAdmin(user, history))
    }
});

export default connect(null, mapDispatchToProps)(Admin);
