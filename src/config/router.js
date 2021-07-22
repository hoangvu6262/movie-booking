import Home from "../pages/main/home";
import DetailMovie from "../pages/main/deail-movie";
import Booking from "../pages/main/booking";
import Dashboard from "../pages/admin/dashboard";
import User from "../pages/admin/user";
import Movie from "../pages/admin/movie";
import Login from "../pages/login";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/movie-detail/:id",
    exact: false,
    Component: DetailMovie,
  },
  {
    path: "/booking/:maLichChieu",
    exact: false,
    Component: Booking,
  },
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
];

/**
 * admin router
 * - dashboard: /admin/dashboard
 * - user: /admin/user
 * - movie: /admin/movie
 */

export const adminRouter = [
  {
    path: "/admin/",
    exact: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user",
    exact: true,
    Component: User,
  },
  {
    path: "/admin/movie",
    exact: true,
    Component: Movie,
  },
];
