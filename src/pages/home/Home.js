import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import MoviesList from '../../components/MoviesList';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel></Carousel>
                <MoviesList></MoviesList>
            </div>
        )
    }
}
