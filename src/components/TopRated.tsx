import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import OverviewCard from './OverviewCard';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

type Movie = {
    title: string
    id: string,
    release_date: Date,
    poster_path: string,
    overview: any
}

function TopRated() {

    const API_KEY = '92b418e837b833be308bbfb1fb2aca1e'

    const [data, setData] = useState<Movie[]>([])

    const fetchData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`)
            .then(response => {
                console.log(response)
                setData(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => { fetchData() }, [])

    return (
        <Fragment>
            <Grid container>
                {
                    data.map((movie: Movie, index) => (
                        <div key={index}>
                            <Grid item>
                                <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <OverviewCard
                                        title={movie.title}
                                        releaseDate={movie.release_date}
                                        overview={movie.overview}
                                        image={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
                                </Link>
                            </Grid>
                        </div>
                    ))
                }
            </Grid>
        </Fragment>
    )
}

export default TopRated