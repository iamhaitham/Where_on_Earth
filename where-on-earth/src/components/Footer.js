import React from 'react'
import styles from '../styling/footer.module.css';
import logo from '../images/WhereOnEarth.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import callus from '../images/callus.png';
import email from '../images/email.png';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <p className={styles.socialMediaParagraph}>Social Media</p>
                <div>
                    <a href="https://www.twitter.com"><img src={twitter} alt="Twitter icon" className={styles.footerIcons}/></a>
                    <a href="https://www.facebook.com"><img src={facebook} alt="Facebook icon" className={styles.footerIcons}/></a>
                    <a href="https://www.instagram.com"><img src={instagram} alt="Instagram icon" className={styles.footerIcons}/></a>
                </div>
            </div>

            <img src={logo} alt="Where on Earth logo" className={styles.webPageLogo}/>

            <div className={styles.footerContentsInColumns}>
                <p><img src={callus} alt="Telephone icon" className={styles.footerCallUsIcons}/> +970-xxx-xxx-xxx</p>
                <p><img src={email} alt="Email icon" className={styles.footerCallUsIcons}/> <a className={styles.emailAddressContact} href="mailto:where_on_earth@example.com">where_on_earth@example.com</a></p>
            </div>
        </div>
    )
}

export default Footer
