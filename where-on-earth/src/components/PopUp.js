import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  learnMoreButton:{
    color: "white",
    backgroundColor: "#26c6da",
    border:"none",
    '&:hover': {
      backgroundColor: "#0097a7",
      border:"none",
    },
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#d50000",
    '&:hover': {
      backgroundColor: "#b71c1c",
    },
  },
}))(Button);

export default function CustomizedDialogs(props) {
  const classes = useStyles();

    const {tourName,tourDescription,tourBookers} =props;
    console.log(tourBookers);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop:"10%"}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.learnMoreButton}>
        Learn More
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          {tourName}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {tourDescription}
          </Typography>
          <Typography gutterBottom>
            <b>Participants:</b>
          {tourBookers.map((booker,index)=>
          <span style={{display:"block"}} key={index}>{booker.bookerName}</span>        
          )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <ColorButton onClick={handleClose} variant="contained" color="primary" className={classes.margin}>
            Close
          </ColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
