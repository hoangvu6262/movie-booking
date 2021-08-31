import React, { useEffect } from "react";
import {
  getMoiveListPagination,
  getMoiveList,
} from "../../../store/actions/movie.action";
import { useSelector, useDispatch } from "react-redux";
import AdminMovieTable from "./AdminMovieTable";
import { Paper, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AdminMovieForm from "./AdminMovieForm";

const useStyles = makeStyles({
  adminMoviePaper: {
    padding: 15,
    margin: "20px 0",
  },
  pagination: {
    margin: "20px auto",
    width: "30%",
  },
});
export default function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movieListPanigations, movieList, totalPage } = useSelector(
    (state) => state.movie
  );

  const loading = useSelector((state) => state.common.loading);
  // const { items } = movieListPanigations;
  console.log(totalPage, movieListPanigations);
  useEffect(() => {
    dispatch(getMoiveListPagination(1, 10));
    // dispatch(getMoiveList());
  }, []);

  const handleChange = (event, value) => {
    dispatch(getMoiveListPagination(value, 10));
  };

  return (
    <div>
      <h2>Quản Lý Phim</h2>
      <Paper className={classes.adminMoviePaper}>
        <AdminMovieForm />
      </Paper>
      <AdminMovieTable movieList={movieListPanigations} />
      {totalPage > 0 ? (
        <Pagination
          count={totalPage}
          color="primary"
          className={classes.pagination}
          onChange={handleChange}
        />
      ) : null}
    </div>
  );
}
