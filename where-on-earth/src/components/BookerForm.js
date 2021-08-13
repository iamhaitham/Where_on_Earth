import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioButtonsGroup from './RadioGroup';
import { Button } from '@material-ui/core';
import ValidationAlert from '../components/ValidationAlert';
import styles from '../styling/bookerForm.module.css';

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
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        if(undefined===bookerName || bookerName.length<3){
          setErrors("Booker Name must be 3 or more characters long!");
        }else{
        SCB({ bookerName, bookerEmail });
        }
    }
    
    return (
        <>
          <div className={styles.bookerFormErrorMessage}>{errors.length>0?<ValidationAlert formErrors={errors}/>:""}</div>
            <form onSubmit={onSubmitHandler} className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Full Name" onChange={(e) => setBookerName(e.target.value) }/>
                <br/>
                <TextField id="standard-basic" label="Email" onChange={(e) => setBookerEmail(e.target.value) }/>
                <br/>
                <br/>
                <br/>
                <RadioButtonsGroup/>
                <br/>
                <Button type="submit" variant="contained" color="">Confirm</Button><br/>
            </form>
            </>
    )
}

export default BookerForm

