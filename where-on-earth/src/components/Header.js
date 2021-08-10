import React from 'react'
import logo from '../images/WhereOnEarth.png';
import styles from '../styling/header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={logo} alt="Where on Earth logo" className={styles.logo}/>
        </div>
    )
}

export default Header
