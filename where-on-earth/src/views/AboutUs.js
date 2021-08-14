import React from 'react'
import MediaCard from '../components/AboutAsCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styling/aboutUs.module.css';


const AboutUs = () => {
    return (
        <div>
            <Header/>
            <h1 className={styles.agenciesPageHeading}>About Us</h1>
            <div className={styles.Team}>
            <MediaCard teamMember={"Bara Salameh"} profilePicture={"../braa.jpg"} description={"Junior Full Stack Developer"} />
            <MediaCard teamMember={"Layth Irshaid"} profilePicture={"../layth1.jpg"} description={"Junior Full Stack Developer"}/>
            <MediaCard teamMember={"Haitham Estetieh"} profilePicture={"../haitham.jpg"} description={"Junior Full Stack Developer"}/>
            <MediaCard teamMember={"Khalil Khalil"} profilePicture={"../Khalil.jpg"} description={"Junior Full Stack Developer"}/>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs
