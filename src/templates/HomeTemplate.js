import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './../components/Navbar';

const HomeLayout = props => {
    return (
        <Fragment>
            <Navbar></Navbar>
            {props.childern}
        </Fragment>
    )
}

const HomeTemplate = ({ Component, ...props }) => {
    return (
        <Route {...props} render={propsComponent => (
            <HomeLayout>
                <Component {...propsComponent}></Component>
            </HomeLayout>
        )}></Route>
    );
};

export default HomeTemplate;