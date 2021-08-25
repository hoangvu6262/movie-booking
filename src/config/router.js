import Home from "../pages/main/home";
import DetailMovie from "../pages/main/deail-movie";
import Booking from "../pages/main/booking";
import Dashboard from "../pages/admin/dashboard";
import User from "../pages/admin/user";
import Movie from "../pages/admin/movie";
import LoginPage from "../pages/login";
import SearchMovie from "../pages/main/search/SearchMovie";
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
    path: "/search/:tenPhim",
    exact: false,
    Component: SearchMovie,
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

/**
 * Login Router
 * - login
 * - signup
 */

export const loginRouter = [
  {
    path: "/login",
    exact: true,
    Component: LoginPage,
  },
];
