import React from 'react';
import './App.scss';

//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //Route bộ định tuyến

//import routesHome
import { routesHome } from './routes';

//import Navbar
import Navbar from './components/Navbar';


class App extends React.Component {

  render() {
    const showMenuHome = (routes) => {
      //Did U check array is null?
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return <Route key={index} exact={item.exact} path={item.paht} component={item.component}></Route>
        })
      }

    }
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          {showMenuHome(routesHome)}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
