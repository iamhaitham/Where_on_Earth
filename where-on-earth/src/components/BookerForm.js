import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioButtonsGroup from './RadioGroup';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const BookerForm = (props) => {
    const classes = useStyles();
    const {initialBookerName, initialBookerEmail, SCB } = props;
    const [bookerName, setBookerName] = useState(initialBookerName);
    const [bookerEmail, setBookerEmail] = useState(initialBookerEmail);
    const onSubmitHandler = e => {
        e.preventDefault();
        SCB({ bookerName, bookerEmail });
    }
    
    return (
        
            <form onSubmit={onSubmitHandler} className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Full Name" onChange={(e) => { setBookerName(e.target.value) }}/>
                <br/>
                <TextField id="standard-basic" label="Email" onChange={(e) => { setBookerEmail(e.target.value) }}/>
                <br/>
                <br/>
                <br/>
                <RadioButtonsGroup/><br/>
                <Button type="submit" variant="contained" color="">Confirm</Button>
            </form>
    )
}

export default BookerForm

