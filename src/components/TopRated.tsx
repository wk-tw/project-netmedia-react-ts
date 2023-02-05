import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchTopRated } from "../hooks/hooks";
import { type Movie } from "../types/Movie";
import OverviewCard from "./OverviewCard";

function TopRated(): JSX.Element {
  const [page, setPage, movies, , getTopRated] = useFetchTopRated();

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <>
      <Grid container>
        {movies.map((movie: Movie) => (
          <div key={movie.id}>
            <Grid item>
              <Link
                to={`/detail/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <OverviewCard
                  title={movie.title}
                  releaseDate={movie.release_date}
                  overview={movie.overview}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Link>
            </Grid>
          </div>
        ))}
      </Grid>
      <input
        value={page}
        onChange={(e) => {
          setPage(e.target.valueAsNumber);
        }}
      />
    </>
  );
}

export default TopRated;
