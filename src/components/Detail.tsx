import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router";
import { useFetchSingleMovie, useFetchSingleMovieCredit } from "../hooks/hooks";
import type { Cast } from "../types/Cast";
import { FetchStatus } from "../types/FetchStatus";
import CastCard from "./CastCard";

function Detail(): React.ReactElement {
  const { id } = useParams();

  const idNotNull: string = id || "ID_SHOULD_NOT_BE_NULL";

  const [movieDetail, fetchSingleMovieStatus, getMovieDetail] =
    useFetchSingleMovie(idNotNull);
  const [movieCredit, , getMovieCredit] = useFetchSingleMovieCredit(idNotNull);

  useEffect(() => {
    getMovieDetail();
    getMovieCredit();
  }, []);

  return (
    <div>
      {fetchSingleMovieStatus === FetchStatus.SUCCESS && (
        <img
          key={movieDetail?.id}
          style={{ width: "20rem" }}
          src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
          alt=""
        />
      )}
      <h3>{movieDetail?.title}</h3>
      <h5>{movieDetail?.overview}</h5>
      <h6>Release Date :{movieDetail?.release_date.toString()}</h6>

      <h3> Cast : </h3>
      <Grid container>
        {movieCredit?.cast.map((cast: Cast) => (
          <Grid key={cast.cast_id}>
            <CastCard cast={cast} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Detail;
