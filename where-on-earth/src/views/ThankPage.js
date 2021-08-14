import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styling/agencies.module.css';
// import plan from '../images/plan.jpg';

const ThankPage = () => {
    return (
        <div>
            <Header/>
            
            <div className={styles.thank}></div>
            <div className={styles.agenciesPageHeadin}>
                    <h1 >Thank you for booking with Where ON Earth </h1>
                    <h2 >The operation has been completed successfully</h2>
                    <h3 >Have A Nice Trip</h3>
            </div>
            <Footer/>
        </div>
    )
}

export default ThankPage
