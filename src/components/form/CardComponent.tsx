import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';

function CardComponent() {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          alt="random"
        />
      </Card>
    </>
  );
}
export default CardComponent;
