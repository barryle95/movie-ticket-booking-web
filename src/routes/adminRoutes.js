import Dashboard from '../pages/admin/Dashboard';
import AddUsers from '../pages/admin/AddUsers';
import AddMovies from '../pages/admin/AddMovies';

const adminRoutes = [
    {
        exact: false,
        path: "/admin/dashboard",
        component: Dashboard,
    },
    {
        exact: false,
        path: "/admin/add-movies",
        component: AddMovies,
    },
    {
        exact: false,
        path: "/admin/add-user",
        component: AddUsers,
    },
]

export default adminRoutes;