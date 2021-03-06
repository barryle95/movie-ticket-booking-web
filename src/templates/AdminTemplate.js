import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminMenu from '../components/AdminMenu';

const AdminLayout = props => {
    return (
        <Fragment>
            <AdminMenu></AdminMenu>
            {props.children}
        </Fragment>
    )
}

const AdminTemplate = ({ Component, ...props }) => {
    return (
        <Route {...props} render={propsComponent => {
            if (localStorage.getItem("userAdmin")) {
                return (
                    <AdminLayout>
                        <Component {...propsComponent}></Component>
                    </AdminLayout>
                )
            } else {
                return <Redirect to="/admin"></Redirect>
            }   
        }}>
        </Route>
    );
};

export default AdminTemplate;