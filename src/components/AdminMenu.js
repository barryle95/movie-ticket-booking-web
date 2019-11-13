import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AdminMenu extends Component {
    render() {
        return (
            <div className="sidebar-nav">
                <div className="well" style={{ width: 300, padding: '8px 0' }}>
                    <ul className="nav nav-list">
                        <li className="nav-header">Admin Menu</li>
                        <li><NavLink to="/admin/dashboard"><i className="icon-home" />Dashboard</NavLink></li>
                        <li><NavLink to="/addmin/message"><i className="icon-envelope" />Messages <span className="badge badge-info">4</span></NavLink></li>
                        <li><NavLink to="/admin/comment"><i className="icon-comment" />Comments <span className="badge badge-info">10</span></NavLink></li>
                        <li className="active"><NavLink to="/admin/add-user"><i className="icon-user" />Members</NavLink></li>
                        <li className="divider" />
                        <li><NavLink href="#"><i className="icon-comment" /> Settings</NavLink></li>
                        <li><NavLink href="#"><i className="icon-share" /> Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
