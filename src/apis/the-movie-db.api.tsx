import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/Movie";
import { MovieCredit } from "../types/MovieCredit";
import { MovieDetail } from "../types/MovieDetail";

const API_KEY = "f1385c64d950783daf4b51c41fc24cb0";

const BASE_URL = "https://api.themoviedb.org/3";

const BASE_URL_IMAGE = "https://image.tmdb.org";

const enum ImageSize {
  w200 = "w200",
  w500 = "w500",
  original = "original",
}

export async function fetchSingleMovie(
  id: string,
): Promise<AxiosResponse<MovieDetail>> {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export async function fetchTopRated(
  page: number,
): Promise<AxiosResponse<{ results: Movie[] }>> {
  return axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
  );
}

export async function fetchSingleMovieCredit(
  id: string,
): Promise<AxiosResponse<MovieCredit>> {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
  );
}

export async function fetchImage(
  imageFileNameWithExtension: string,
  imageSize: ImageSize = ImageSize.w200,
) {
  return axios.get(
    `${BASE_URL_IMAGE}/t/p/${imageSize}${imageFileNameWithExtension}`,
  );
}
