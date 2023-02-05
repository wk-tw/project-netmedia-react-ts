import axios, { AxiosResponse } from "axios";
import {
  fetchSingleMovie,
  fetchSingleMovieCredit,
  fetchTopRated,
} from "../apis/the-movie-db.api";
import { Movie } from "../types/Movie";
import { MovieCredit } from "../types/MovieCredit";
import { MovieDetail } from "../types/MovieDetail";

const API_KEY = "92b418e837b833be308bbfb1fb2aca1e";

const BASE_URL = "https://api.themoviedb.org/3";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.restoreAllMocks();
});

describe("testing axios request fetchSingleMovie", () => {
  test("WHEN fetchSingleMovie BY id THEN return expected data MovieDetail", async () => {
    const expectedData: MovieDetail = {
      title: "TITLE",
      id: "ID",
      release_date: new Date("2020-01-01"),
      poster_path: "POSTER_PATH",
      overview: "OVERVIEW",
      adult: false,
      backdrop_path: "BACKDROP_PATH",
      belongs_to_collection: [],
      budget: 1_000_000,
      genres: [],
      homepage: "HOME_PAGE",
      imdb_id: "IMDB_ID",
      original_language: "ORIGINAL_LANGUAGE",
      original_title: "ORIGINAL_TITLE",
      popularity: 12_000,
      production_companies: [],
      production_countries: [],
      revenue: 2_000_000,
      runtime: 30_000,
      spoken_languages: [],
      status: "STATUS",
      tagline: "TAG_LINE",
      video: true,
      vote_average: 10,
      vote_count: 50,
    };

    const mockedResponse: AxiosResponse = {
      data: expectedData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<MovieDetail> = await fetchSingleMovie("ID");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/ID?api_key=${API_KEY}`,
    );
    expect(response.data).toBe(expectedData);
  });

  test("WHEN fetchSingleMovie BY id fails THEN return error", async () => {
    const mockedResponse: AxiosResponse = {
      data: [],
      status: 404,
      statusText: "NOT_FOUND",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<MovieDetail> = await fetchSingleMovie("ID");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/ID?api_key=${API_KEY}`,
    );
    expect(response.status).toBe(404);
    expect(response.statusText).toBe("NOT_FOUND");
  });
});

describe("testing axios request fetchSingleMovieCredit", () => {
  test("WHEN fetchSingleMovieCredit BY id THEN return expected data MovieCredit", async () => {
    /**
     * Possible Improvement
     * MovieCredit values are not necessary.
     * Could be replaced by an abstraction such as in 'mockk' : mockk<MovieCredit>()
     */
    const expectedData: MovieCredit = {
      id: "ID",
      cast: [],
      crew: [],
    };

    const mockedResponse: AxiosResponse = {
      data: expectedData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<MovieCredit> = await fetchSingleMovieCredit(
      "ID",
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/ID/credits?api_key=${API_KEY}`,
    );
    expect(response.data).toBe(expectedData);
  });

  test("WHEN fetchSingleMovie BY id fails THEN return error", async () => {
    const mockedResponse: AxiosResponse = {
      data: [],
      status: 404,
      statusText: "NOT_FOUND",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<MovieCredit> = await fetchSingleMovieCredit(
      "ID",
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/ID/credits?api_key=${API_KEY}`,
    );
    expect(response.status).toBe(404);
    expect(response.statusText).toBe("NOT_FOUND");
  });
});

describe("testing axios request fetchTopRated", () => {
  test("WHEN fetchTopRated BY id THEN return expected data Movie[]", async () => {
    const expectedData: Movie = {
      title: "TITLE",
      id: "ID",
      release_date: new Date("2023-01-23"),
      poster_path: "POSTER_PATH",
      overview: "OVERVIEW",
    };

    const mockedResponse: AxiosResponse = {
      data: { results: [expectedData] },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<{ results: Movie[] }> = await fetchTopRated(
      1,
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`,
    );
    expect(response.data.results).toEqual([expectedData]);
  });

  test("WHEN fetchTopRated BY id fails THEN return error", async () => {
    const mockedResponse: AxiosResponse = {
      data: [],
      status: 404,
      statusText: "NOT_FOUND",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const response: AxiosResponse<{ results: Movie[] }> = await fetchTopRated(
      1,
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`,
    );
    expect(response.status).toBe(404);
    expect(response.statusText).toBe("NOT_FOUND");
  });
});
