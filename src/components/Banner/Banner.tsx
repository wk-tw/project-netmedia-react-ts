import React, { useEffect, useState } from "react";
import axios from "../../apis/axios";
import requests from "../../apis/Requests";
import { DiscoverTv } from "../../types/DiscoverTv";
import "./Banner.css";

const BASE_URL_IMAGE = "https://image.tmdb.org";

function Banner(): React.ReactElement {
  const [movie, setMovie] = useState<DiscoverTv>();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return requests;
    }

    fetchData();
  }, []);

  function truncate(text: string, n: number) {
    return text?.length > n ? text.substring(0, n - 1).concat("...") : text;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BASE_URL_IMAGE}/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button" type="button">
            Play
          </button>
          <button className="banner__button" type="button">
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
