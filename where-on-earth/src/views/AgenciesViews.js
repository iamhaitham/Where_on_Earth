import React from 'react'
import Header from '../components/Header';
import Agencies from '../components/Agencies';
import Footer from '../components/Footer';
import { useParams } from "@reach/router"

const AgenciesViews = () => {
    
    const params = useParams();

    return (
        <>
            <Header/>
            <Agencies countryNameFromURL={params.tour}/>
            <Footer/>
        </>
    )
}

export default AgenciesViews
