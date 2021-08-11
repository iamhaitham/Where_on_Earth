import React,{useState,useEffect} from 'react'
import styles from '../styling/agencies.module.css';
import axios from 'axios';
import AgencyCard from '../components/AgencyCard';
import { navigate } from '@reach/router';

const Agencies = (props) => {
    const {countryNameFromURL} = props;
    const [agencies,setAgencies]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setAgencies(res.data);
            });
    },[])

    const SCB = (e,agencyId)=>{
        navigate(`/${countryNameFromURL}/${agencyId}`);
    }

    return (
        <>
            <h1 className={styles.agenciesPageHeading}>Agencies with available tours to: <span className={styles.countryNameFromAgencies}>{countryNameFromURL}</span></h1>
            <div className={styles.cardsInRow}>{agencies.filter(agency=>agency.agencyTours[0].tourName===countryNameFromURL).map((agency,index)=><div key={index} className={styles.agencyCardHolder}><AgencyCard agencyName={agency.agencyName} agencyPicture={agency.agencyPicture} agencyAddress={agency.agencyAddress} SCB={(e)=>SCB(e,agency._id)}/></div>)}</div>
        </>
    )
}

export default Agencies
