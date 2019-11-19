import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux/action/index';
import { NavLink } from 'react-router-dom';

class MoviesList extends Component {

    componentDidMount() {
        this.props.saveMoviesList();
    }
    renderHTML = () => {
        const { moviesList } = this.props;
        console.log(moviesList);
        console.log(1)
        return moviesList.map((item, index) => {
            console.log(item)
            return (
                <div key={index}>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: 300 }}>
                                <img className="card-img-top" src={item.hinhAnh} alt="Card" style={{ maxWidth: '100%', height: 250 }} />
                                <div className="card-body text-center">
                                    <h4 className="card-title text-center">{item.tenPhim}</h4>
                                    <div>
                                        <p className="card-text">{item.moTa}</p>
                                    </div>

                                    <NavLink to={`detail-movie/${item.maPhim}`} className="btn btn-primary mr-1">Detail</NavLink>
                                    <a href="#a" className="btn btn-danger" onClick={() => this.toggleButton()}>Toggle</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="container">
                <h1>DANH SÁCH PHIM NÈ</h1>
                <div className="row">
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveMoviesList: () => {
        dispatch(action.saveMoviesAPI())
    }
});

const mapStateToProps = state => ({
    moviesList: state.moviesReducer.moviesList,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);