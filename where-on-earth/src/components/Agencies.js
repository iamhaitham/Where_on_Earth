import React,{useState,useEffect} from 'react'
import styles from '../styling/agencies.module.css';
import axios from 'axios';
import AgencyCard from '../components/AgencyCard';
import { navigate } from '@reach/router';

const Agencies = (props) => {

    const style = {
        imageDiv : {
            width : "500px",
            height : "250px",
            margin :"5% auto 5% auto",
        }
    }
    const {countryNameFromURL} = props;
    const [agencies,setAgencies]=useState([]);
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/agencies')
            .then(res=>{
                setAgencies(res.data);
            });
    },[])

    useEffect(() => {
        axios.get("http://restcountries.eu/rest/v2")
        .then(res => {
          setCountries(res.data);
        })
      },[]);

    const SCB = (e,agencyId)=>{
        navigate(`/${countryNameFromURL}/${agencyId}`);
    }
    console.log(agencies[0])


    return (
        <>
            {
                countries.filter(country=>country.name===countryNameFromURL)
                .map((country,index)=>
                    <div style={style.imageDiv} key={index}>
                        <AgencyCard agencyName={country.name} agencyPicture={country.flag} agencyAddress="" SCB={e => ""}/>
                    </div>
                    // <img key={index} src={country.flag} alt="Flag"/>
                )
            }
            <h1 className={styles.agenciesPageHeading}>Agencies with available tours to: <span className={styles.countryNameFromAgencies}>{countryNameFromURL}</span></h1>
            <div className={styles.cardsInRow}>
                {agencies.filter(agency=>agency.agencyTours
                .some(ag=>ag.tourName===countryNameFromURL))
                .map((agency,index)=>
                <div key={index} className={styles.agencyCardHolder}>
                    <AgencyCard 
                    agencyName={agency.agencyName} 
                    agencyPicture={agency.agencyPicture} 
                    agencyAddress={agency.agencyAddress} 
                    SCB={(e)=>SCB(e,agency._id)}/>
                    </div>)}
                    </div>
        </>
    )
}

export default Agencies
