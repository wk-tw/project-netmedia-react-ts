import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Fragment } from 'react'
import type { Cast } from './Detail'

function CastCard(props: { cast: Cast }) {

    const { cast } = props

    return (
        <Fragment>
            <Card sx={{ width: 200, height: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="200"
                        height="300"
                        image={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                        alt="image not found"
                    />
                    <CardContent>
                        <Typography variant="body1" color="text.primary">
                            {cast.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cast.character}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default CastCard