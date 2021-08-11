import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router';

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
  },
  media: {
    minHeight: "200px",
  },
});

export default function MediaCard(props) {
    const {agencyName,agencyPicture,agencyAddress,SCB} = props;
    const classes = useStyles();

  return (
    <Card className={classes.root} onClick={SCB}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={agencyPicture}
          title={agencyName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {agencyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {agencyAddress}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
