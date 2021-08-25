import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListByName } from "../../../store/actions/movie.action";
import MovieCard from "../../../components/movie-card/MovieCard";
import { Grid, Container, makeStyles } from "@material-ui/core";

export default function SearchMovie() {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.movie.searchList);

  const { tenPhim } = useParams();
  useEffect(() => {
    dispatch(getMovieListByName(tenPhim));
  }, []);

  const renderSearchMovieList = () => {
    return searchList.map((search, index) => {
      return (
        <Grid item xs={4} key={index}>
          <MovieCard movie={search} />
        </Grid>
      );
    });
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>search movie: {tenPhim}</h2>
      <Grid container>{renderSearchMovieList()}</Grid>
    </div>
  );
}
