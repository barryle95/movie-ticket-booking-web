import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeMenu from '../components/HomeMenu';

const HomeLayout = props => {
    return (
        <Fragment>
            <HomeMenu></HomeMenu>
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