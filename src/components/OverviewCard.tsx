import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Fragment } from 'react'

function OverviewCard(
    props: {
        title: string,
        releaseDate: Date,
        overview: string,
        image: string
    }
) {
    const { title, releaseDate, overview, image } = props

    return (
        <Fragment>
            <Card sx={{ width: 300, height: 700 }}>
                <CardActionArea>
                    <CardHeader
                        titleTypographyProps={{ variant: 'h6' }}
                        title={title}
                        subheader={releaseDate.toString()}
                    />
                    <CardMedia
                        component="img"
                        height="400"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default OverviewCard
