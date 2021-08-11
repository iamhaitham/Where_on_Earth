import React,{ useState } from 'react'
import styles from '../styling/form.module.css';
import axios from 'axios'
import { navigate } from '@reach/router'
import BookerForm from '../components/BookerForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookerPage = () => {
    const TheBooker = booker => {
        
        axios.put('http://localhost:8000/api/agencies/', booker)
            .then(res=>{
                navigate("/")
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