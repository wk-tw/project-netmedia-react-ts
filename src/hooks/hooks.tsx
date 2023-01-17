import { useState } from 'react';
import { fetchImage, fetchSingleMovie, fetchSingleMovieCredit, fetchTopRated } from '../apis/the-movie-db.api';
import { FetchStatus } from '../types/FetchStatus';
import { Movie } from '../types/Movie';
import { MovieCredit } from '../types/MovieCredit';
import { MovieDetail } from '../types/MovieDetail';

export function useFetchSingleMovie(id: string) {
    const [fetchSingleMovieStatus, setFetchSingleMovieStatus] = useState(FetchStatus.DEFAULT);
    const [movieDetail, setMovieDetail] = useState<MovieDetail>();

    const getMovieDetail = async () => {
        try {
            setFetchSingleMovieStatus(FetchStatus.LOADING);

            const res = await fetchSingleMovie(id);
            const resData = res.data as MovieDetail;

            setMovieDetail(resData);
            setFetchSingleMovieStatus(FetchStatus.SUCCESS);
        } catch (err) {
            setFetchSingleMovieStatus(FetchStatus.ERROR);
        }
    };

    return [movieDetail, fetchSingleMovieStatus, getMovieDetail] as const;
}

export function useFetchSingleMovieCredit(id: string) {
    const [fetchSingleMovieCreditStatus, setFetchSingleMovieCreditStatus] = useState(FetchStatus.DEFAULT);
    const [movieCredit, setMovieCredit] = useState<MovieCredit>();

    const getMovieCredit = async () => {
        try {
            setFetchSingleMovieCreditStatus(FetchStatus.LOADING);

            const res = await fetchSingleMovieCredit(id);
            const resData = res.data as MovieCredit;

            setMovieCredit(resData);
            setFetchSingleMovieCreditStatus(FetchStatus.SUCCESS);
        } catch (err) {
            setFetchSingleMovieCreditStatus(FetchStatus.ERROR);
        }
    };

    return [movieCredit, fetchSingleMovieCreditStatus, getMovieCredit] as const;
}

export function useFetchTopRated() {
    const [fetchTopRatedStatus, setFetchTopRatedStatus] = useState(FetchStatus.DEFAULT);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);

    const getTopRated = async () => {
        try {
            setFetchTopRatedStatus(FetchStatus.LOADING);

            const res = await fetchTopRated(page);
            const resData = res.data.results as Movie[];

            setMovies(resData);
            setFetchTopRatedStatus(FetchStatus.SUCCESS);
        } catch (err) {
            setFetchTopRatedStatus(FetchStatus.ERROR);
        }
    };

    return [page, setPage, movies, fetchTopRatedStatus, getTopRated] as const;
}

export function useFetchImage(imageFileNameWithExtension: string) {
    const [fetchImageStatus, setFetchImageStatus] = useState(FetchStatus.DEFAULT);
    const [image, setImage] = useState<any>();

    const getImage = async () => {
        try {
            setFetchImageStatus(FetchStatus.LOADING);

            const res = await fetchImage(imageFileNameWithExtension);
            const resData = res.data;

            setImage(resData);
            setFetchImageStatus(FetchStatus.SUCCESS);
        } catch (err) {
            setFetchImageStatus(FetchStatus.ERROR);
        }
    };

    return [image, fetchImageStatus, getImage] as const;
}