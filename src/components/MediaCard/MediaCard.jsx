import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/R.1b0a61524a57eccc7e2a585bf8e540a5?rik=%2fLpXkpbnJbMoHw&pid=ImgRaw&r=0"
        title="State library"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         State Library
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a card ut enim ad minim veniam, quis nostrud exercitation ullamco.
          <br/>
          We can add a button to shared content about info and learn
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}