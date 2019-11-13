import Dashboard from '../pages/admin/Dashboard';
import AddUsers from '../pages/admin/AddUsers';
import AddMovies from '../pages/admin/AddMovies';

const adminRoutes = [
    {
        path: "/admin/dashboard",
        exact: false,
        component: Dashboard,
    },
    // {
    //     path: "/admin/message",
    //     exact: false,
    //     component: Message,
    // },
    // {
    //     path: "/admin/comment",
    //     exact: false,
    //     component: Comment,
    // },
    {
        path: "/admin/add-movies",
        exact: false,
        component: AddMovies,
    },
    {
        path: "/admin/add-user",
        exact: false,
        component: AddUsers,
    },
]

export default adminRoutes;