import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class HomeMenu extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/">VinMovies</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <NavLink exact activeClassName="active" className="nav-link" to="/">TRANG CHỦ<span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/contact">LIÊN HỆ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/info">TIN TỨC</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/app">ỨNG DỤNG</NavLink>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <button className="btn btn-outline-primary my-2 my-sm-0 mr-2" type="submit">Đăng nhập</button>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng ký</button>
                                </form>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        )
    }
}
