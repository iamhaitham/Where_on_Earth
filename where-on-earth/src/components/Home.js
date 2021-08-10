import '../App.css';
import React from 'react'
import styles from '../styling/home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../logo.svg';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <>
            <Header/>
            <img src={logo} alt="logo" className={`App-logo ${styles.planeMoving}`}/>
            <div className={styles.homePageContainer}>
                <h1 className={styles.homePageParagraph}>Where on earth are you going?</h1>
                {/* <SearchBar/> */}
                <Countries/>
            </div>
            <Footer/>
        </>
    )
} 

export default Home
