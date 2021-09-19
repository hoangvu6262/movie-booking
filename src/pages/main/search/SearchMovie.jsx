import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListByName } from "../../../store/actions/movie.action";
import MovieCard from "../../../components/movie-card/MovieCard";
import {
  Grid,
  Container,
  InputAdornment,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import CustomPaper from "../../../components/customPaper";
import SearchInput from "../../../components/searchInput";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  searchMovieContainer: {
    marginTop: 30,
  },
  searchMovieItems: {
    display: "flex",
    justifyContent: "center",
  },
  searchMoviePaper: {
    marginTop: 10,
    padding: "20px 0",
    "& h2": {
      marginLeft: 20,
      fontWeight: 300,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
});

export default function SearchMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const searchList = useSelector((state) => state.movie.searchList);

  const { tenPhim } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getMovieListByName(tenPhim));
    setName(tenPhim);
  }, [tenPhim]);

  const renderSearchMovieList = () => {
    return searchList.map((search, index) => {
      return (
        <Grid
          item
          sm={4}
          xs={12}
          key={index}
          className={classes.searchMovieItems}
        >
          <MovieCard movie={search} />
        </Grid>
      );
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = () => {
    history.push(`/search/${name}`);
  };

  return (
    <div style={{ paddingTop: 5 }}>
      <Container maxWidth="md">
        <CustomPaper title="Tìm kiếm phim" IconPaper={SearchIcon}>
          <SearchInput
            id="search"
            name="search"
            label="Tìm kiếm phim..."
            autoComplete="off"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSubmit}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </CustomPaper>
        <Paper className={classes.searchMoviePaper}>
          <h2>search movie: {tenPhim}</h2>
          <Grid container className={classes.searchMovieContainer} spacing={2}>
            {renderSearchMovieList()}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
