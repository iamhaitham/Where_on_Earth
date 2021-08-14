import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {navigate} from "@reach/router";

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

  const startChatting = ()=>{
    navigate("/chat");
  }

  return (
    <div>
      <div>
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin} onClick={()=>startChatting()}>
          <AddIcon />
        </Fab>
      </div>
     
    </div>
  );
}