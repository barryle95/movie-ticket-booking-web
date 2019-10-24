import Home from './pages/home/Home';
import About from './pages/home/About';
import Contact from './pages/home/Contact';
import Info from './pages/home/Info';
import Error404 from './pages/home/Error404';

//routesHome array
const routesHome = [
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
        exact: true,
        path: '*',
        component: Error404,
    },
]

export { routesHome };
