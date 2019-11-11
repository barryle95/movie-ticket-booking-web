import React from 'react';
import './App.scss';

//Router
import { BrowserRouter, Switch } from 'react-router-dom'; //Route bộ định tuyến

//import routesHome
import { routesHome } from './routes/routes';

//import HomeTemplate
import HomeTemplate from './templates/HomeTemplate';


class App extends React.Component {

  render() {
    const showMenuHome = routes => {
      //Did U check array is null?
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}></HomeTemplate>
        })
      }
    };

    return (
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        < Switch >
          {showMenuHome(routesHome)}
        </Switch >
      </BrowserRouter >
    );
  }
}

export default App;
