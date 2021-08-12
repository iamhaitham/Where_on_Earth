import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AgencyCard from '../components/AgencyCard';
import styles from '../styling/agencies.module.css';
import FloatingActionButtonSize from '../components/CircularButton'

const Agency = props => {

    const {tour, id} = props;
    const [agency, setAgency] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/agencies/"+id)
        .then(res => {
            setAgency(res.data);
            setLoaded(true);
        })
        .catch(err => console.log("Error retrieving agency object",err));
    },[id]);

    return (
        
        <div>
            <Header/>
            <div className={styles.cardsInRow}>
                <div className={styles.agencyCardHolder}>
                    <AgencyCard agencyName={agency.agencyName} agencyPicture={agency.agencyPicture} agencyAddress={agency.agencyAddress}/>
                </div>
            </div>
            <div className={styles.cardsInRow}>
                {
                    loaded && agency.agencyTours.map((value, key) =>
                        <>
                            <div className={styles.agencyCardHolder} key={key}>
                                <AgencyCard agencyName={value.tourName} agencyPicture={value.tourPicture} agencyAddress={value.tourDescription}/>
                            </div>
                            <div>
                                
                            </div>
                        </>
                    )
                }
            </div>
            <div className={styles.circularButton}><FloatingActionButtonSize/></div>
            <Footer/>
        </div>
    )
}

export default Agency
