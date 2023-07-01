import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/img/images.jpg'
import { ListeContenuFormation } from './ListeContenuFormation'

export const PrixTotalFormation = ()=> {
  return (
    <Card sx={{ maxWidth: 345 }} style={{height : "100%"}}>
      <CardMedia
        sx={{ height: 150 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Prix total 
        </Typography>
        <Button variant="contained" color = "error" style = {{width : "100%"}}>Acheter</Button>

        <Typography variant="body2" color="text.secondary">
          Ce cours comprend :

          <ListeContenuFormation/>
          5h de vidéos formation
          Assistance du prof
          Certificat

        </Typography>
      </CardContent>
    </Card>
  );
}