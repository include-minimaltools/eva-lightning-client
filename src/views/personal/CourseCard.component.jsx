import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseCard({ src, title, text, alt, height, maxWidth, actions, children }) {
  return <Card sx={{ maxWidth: {maxWidth} }}>
  <CardMedia
    component="img"
    height={height}
    image={src}
    alt={alt}
  />
  <CardContent>
    <Typography gutterBottom variant="body1" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {text}
    </Typography>
    {children}
  </CardContent>
  <CardActions>
    {actions}
  </CardActions>
</Card>;
}
