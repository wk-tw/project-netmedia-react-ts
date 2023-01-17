import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useFetchSingleMovie, useFetchSingleMovieCredit } from '../hooks/hooks'
import type { Cast } from '../types/Cast'
import { FetchStatus } from '../types/FetchStatus'
import CastCard from './CastCard'

function Detail() {

    const { id } = useParams()

    const idNotNull: string = id ? id : 'ID_SHOULD_NOT_BE_NULL'

    const [movieDetail, fetchSingleMovieStatus, getMovieDetail] = useFetchSingleMovie(idNotNull);
    const [movieCredit, fetchSingleMovieCreditStatus, getMovieCredit] = useFetchSingleMovieCredit(idNotNull);

    useEffect(() => {
        getMovieDetail()
        getMovieCredit()
    }, [])

    return (
        <div>
            {(fetchSingleMovieStatus === FetchStatus.SUCCESS) && <img key={movieDetail?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieDetail?.poster_path} alt="" />}
            <h3>{movieDetail?.title}</h3>
            <h5>{movieDetail?.overview}</h5>
            <h6>Release Date : {movieDetail?.release_date.toString()}</h6>

            <h3> Cast : </h3>
            <Grid container>
                {
                    movieCredit?.cast.map((cast: Cast, index: number) => (
                        <Grid key={index}>
                            <CastCard cast={cast} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Detail