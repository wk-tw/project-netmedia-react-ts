import { Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CastCard from './CastCard'

type MovieDetail = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: any,
    budget: number,
    genres: [],
    homepage: string,
    id: string,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: any,
    production_countries: any,
    release_date: Date,
    revenue: number,
    runtime: number,
    spoken_languages: any,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

type MovieCredit = {
    id: string,
    cast: Cast[],
    crew: Crew[]
}

type Crew = {
    adult: boolean
    credit_id: any,
    department: any,
    gender: any,
    id: any,
    job: any,
    known_for_department: any,
    name: any,
    original_name: any,
    popularity: any,
    profile_path: string
}

type Cast = {
    adult: boolean,
    cast_id: number,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    order: number,
    original_name: string,
    popularity: number,
    profile_path: string
}

export type { Cast }


function Detail() {

    const API_KEY = '92b418e837b833be308bbfb1fb2aca1e'

    const { id } = useParams()

    const [movieData, setMovieData] = useState<MovieDetail>()
    const [movieCredit, setMovieCredit] = useState<MovieCredit>()

    const fetchSingleMovie = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(response => {
                console.log(response)
                setMovieData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchSingleMovieCredit = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(response => {
                console.log('fetchSingleMovieCredit')
                console.log(response)
                setMovieCredit(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchSingleMovie()
        fetchSingleMovieCredit()
    }, [])

    return (
        <div>
            <img key={movieData?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" />
            <h3>{movieData?.title}</h3>
            <h5>{movieData?.overview}</h5>
            <h6>Release Date : {movieData?.release_date.toString()}</h6>

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
            {

            }
        </div>
    )
}

export default Detail