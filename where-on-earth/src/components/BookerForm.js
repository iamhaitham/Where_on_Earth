import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioButtonsGroup from './RadioGroup';
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
    const {initialBookerName, initialBookerEmail, onSubmitProp } = props;
    const [bookerName, setBookerName] = useState(initialBookerName);
    const [bookerEmail, setBookerEmail] = useState(initialBookerEmail);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ bookerName, bookerEmail });
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
                <input type="submit" value="Confirm" />
            </form>
    )
}

export default BookerForm

