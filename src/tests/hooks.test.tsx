import { renderHook } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { useFetchSingleMovie } from "../hooks/hooks";
import { FetchStatus } from "../types/FetchStatus";
import { MovieDetail } from "../types/MovieDetail";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("testing hooks", () => {
  describe("useFetchSingleMovie()", () => {
    const renderCustomHook = () => renderHook(() => useFetchSingleMovie("ID"));

    it("should return initial value", () => {
      const [state, fetchStatus, method] = renderCustomHook().result.current;

      expect(state).toBe(undefined);
      expect(fetchStatus).toBe(FetchStatus.DEFAULT);
      expect(typeof method).toBe("function");
    });

    it("should have expected endpoint on api call", async () => {
      const axiosGetSpy = jest
        .spyOn(axios, "get")
        .mockResolvedValue({ data: [] });

      const method = renderCustomHook().result.current[2];

      await act(async () => {
        await method();
      });

      expect(axiosGetSpy).toBeCalledTimes(1);
    });

    it("should have expected states on api SUCCESS", async () => {
      const res: MovieDetail = {
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

      jest.spyOn(axios, "get").mockResolvedValue({ data: res });

      const customHook = renderCustomHook();
      const method = customHook.result.current[2];

      await act(async () => {
        await method();
      });

      const [state, fetchStatus] = customHook.result.current;

      expect(state).toEqual(res);
      expect(fetchStatus).toBe(FetchStatus.SUCCESS);
    });
  });
});
