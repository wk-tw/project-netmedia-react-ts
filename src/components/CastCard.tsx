import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Cast } from "../types/Cast";

function CastCard(props: { cast: Cast }) {
  const { cast } = props;

  return (
    <Card sx={{ width: 200, height: 400 }}>
      <CardActionArea>
        {cast.profile_path && (
          <CardMedia
            component="img"
            width="200"
            height="300"
            image={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            alt="image not found"
          />
        )}
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
  );
}

export default CastCard;
