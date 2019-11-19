//Home
import Home from '../pages/home/Home';
import About from '../pages/home/About';
import Contact from '../pages/home/Contact';
import Info from '../pages/home/Info';
import App from '../pages/home/App';
import Error404 from '../pages/home/Error404';
import MoviesList from '../components/MoviesList';

//routesHome array
const homeRoutes = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: false,
        path: '/about',
        component: About,
    },
    {
        exact: false,
        path: '/contact',
        component: Contact,
    },
    {
        exact: false,
        path: '/info',
        component: Info,
    },
    {
        exact: false,
        path: '/app',
        component: App,
    },
    {
        exact: false,
        path: '/list-movies',
        component: MoviesList,
    },
    {
        exact: true,
        path: '*',
        component: Error404,
    },
];


export default homeRoutes;
