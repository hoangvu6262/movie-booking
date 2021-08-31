import React, { useEffect } from "react";
import { getMoiveListPagination } from "../../../store/actions/movie.action";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";

export default function User() {
  const dispatch = useDispatch();
  const { movieListPanigations } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(getMoiveListPagination());
  }, []);
  return <div>User admin</div>;
}
