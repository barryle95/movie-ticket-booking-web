import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';

export default class AdminMenu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3"> <nav className="">
                    <ul className="list-unstyled components">
                        <li className="nav-header">Admin Menu</li>
                        <li>
                            <NavLink to="/admin/dashboard"><i className="nav-link" />DASHBOARD</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/add-movie"><i className="nav-link" />QUẢN LÝ PHIM</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/add-user"><i className="nav-link" />QUẢN LÝ NGƯỜI DÙNG</NavLink>
                        </li>
                        <li>
                        <li>
                            <NavLink to="/"><i className="nav-link" />TRANG CHỦ</NavLink>
                        </li>
                        </li>
                    </ul>
                </nav></div>
                <div className="col-9"><Dashboard></Dashboard></div>
            </div>
        )
    }
}
