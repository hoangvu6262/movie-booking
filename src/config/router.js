import Home from "../pages/main/home";
import DetailMovie from "../pages/main/deail-movie";
import Booking from "../pages/main/booking";
import Dashboard from "../pages/admin/dashboard";
import User from "../pages/admin/user";
import Movie from "../pages/admin/movie";
import LoginPage from "../pages/login/loginPage";
import SearchMovie from "../pages/main/search/SearchMovie";
import RegisterPage from "../pages/login/registerPage";
import UserInfo from "../pages/admin/userInfo";
import MovieInfo from "../pages/admin/movieInfo";
import Report from "../pages/admin/report";
import CinemaSystems from "../pages/admin/cimemas";

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
  {
    path: "/userinfo/profile-user&taikhoan=:taiKhoan",
    exact: true,
    Component: UserInfo,
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
    path: "/admin/user/userinfo&taiKhoan=:taiKhoan",
    exact: true,
    Component: UserInfo,
  },
  {
    path: "/admin/movie",
    exact: true,
    Component: Movie,
  },
  {
    path: "/admin/movie/movieInfo&maPhim=:id",
    exact: true,
    Component: MovieInfo,
  },
  {
    path: "/admin/report",
    exact: true,
    Component: Report,
  },
  {
    path: "/admin/cinema-system",
    exact: true,
    Component: CinemaSystems,
  },
  {
    path: "/admin/profile/userinfo&taiKhoan=:taiKhoan",
    exact: true,
    Component: UserInfo,
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
  {
    path: "/register",
    exact: false,
    Component: RegisterPage,
  },
];
