import React, { useEffect, useState } from "react";
import axios from "../../apis/axios";
import { DiscoverMovie } from "../../types/DiscoverMovie";
import "./Row.css";

const BASE_URL_IMAGE = "https://image.tmdb.org";

interface IProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}

function Row({ title, fetchUrl, isLargeRow }: IProps): React.ReactElement {
  const [movies, setMovies] = useState<DiscoverMovie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${BASE_URL_IMAGE}/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Row;
