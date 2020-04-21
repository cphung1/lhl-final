import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import styles from "./Card.scss"
import { border } from '@material-ui/system';

const calculateAge = (birthdate) => {
  const currentYear = new Date().getFullYear()
  return currentYear - birthdate
}

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    // maxWidth: 700,
    backgroundColor: blue,
    // border: 'solid 2px #f77eb3',
    maxWidth: 900,
    borderRadius: 20,
    // borderRadius: 5
  },
  cardMedia: {
    objectFit: 'cover',
    objectPosition: 'top',
    userSelect: 'none',
    pointerEvents: 'none',
    borderRadius: 5,
    width: 900,
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
          height="500"
          image={`./images/users/${id}.jpg`}
          />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h6" component="h3">
            <h2>{name}, {calculateAge(birthdate.slice(0, 4))}</h2>
            <h3>{location}</h3>
          </Typography>
          <Typography gutterBottom variant="body1" component="h3">
            <h3>{description}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}