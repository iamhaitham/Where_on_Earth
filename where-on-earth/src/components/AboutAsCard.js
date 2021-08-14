import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "400px",
    maxHeight:"490px",
    marginBottom:"2%"
  },
  media: {
    width: "400px",
    height:"400px"
  },
});

export default function MediaCard(props) {
    const{teamMember,profilePicture,description}=props;
  const classes = useStyles();
    console.log(profilePicture)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={profilePicture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {teamMember} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p style ={{color:'black'}}>{description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
