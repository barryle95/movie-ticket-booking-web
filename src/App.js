import React from 'react';
import './App.scss';

//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //Route bộ định tuyến

//import Home
import HomeTemplate from './templates/HomeTemplate';
import homeRoutes from './routes/homeRoutes';

//import Admin
import Admin from './pages/admin/Admin';
import AdminTemplate from './templates/AdminTemplate';
import adminRoutes from './routes/adminRoutes';


class App extends React.Component {

  render() {
    const showHomeMenu = routes => {
      //Did U check array is null?
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}></HomeTemplate>
        })
      }
    };

    const showAdminMenu = routes => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}></AdminTemplate>
        })
      }
    };

    return (
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        < Switch >
          <Route path="/admin" component={Admin}></Route>
          {showHomeMenu(homeRoutes)}
          {showAdminMenu(adminRoutes)}
        </Switch >
      </BrowserRouter >
    );
  }
}

export default App;
