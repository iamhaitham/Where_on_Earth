import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor:"blue",
    '&:hover':{
        backgroundColor:'yellow'
    }

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtonSize() {
    
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
     
    </div>
  );
}