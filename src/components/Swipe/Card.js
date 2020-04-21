import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
    objectFit: 'cover',
    objectPosition: 'top',
    userSelect: 'none',
    pointerEvents: 'none',
  },
});

export default function Card({
  item: {
    id,
    name,
    birthdate,
    location,
    description,
  },
}) {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          height="250"
          image={`./images/users/${id}.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {name}
            {birthdate}
            {location}
          </Typography>
          <Typography gutterBottom variant="body1" component="h3">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}