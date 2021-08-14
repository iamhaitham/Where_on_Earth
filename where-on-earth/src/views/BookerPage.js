import React from 'react'
import styles from '../styling/form.module.css';
import axios from 'axios'
import { navigate } from '@reach/router'
import BookerForm from '../components/BookerForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookerPage = props => {

    const {agencyId, tourId} = props;

    const TheBooker = booker => {
        axios.put('http://localhost:8000/api/agencies/'+agencyId+'/'+tourId, booker)
            .then(res=>{
                navigate("/success")
            })
            .catch(err => console.log(ErrorEvent))
    }

    return (
        <div >
            <Header/>
            <div className={styles.formContainer}>
            <BookerForm  SCB ={TheBooker}/>
            </div>
            <Footer/>
        </div>
    )
}

export default BookerPage
