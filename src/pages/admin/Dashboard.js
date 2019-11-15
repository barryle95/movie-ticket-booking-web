import React, { Component } from 'react';
import AdminMenu from '../../components/AdminMenu';
import AddUsers from './AddUsers';
import AddMovies from './AddMovies';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <AddMovies></AddMovies>
                <AddUsers></AddUsers>
            </div>
        )
    }
}
