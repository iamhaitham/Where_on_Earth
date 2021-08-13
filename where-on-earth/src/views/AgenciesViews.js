import React from 'react'
import Header from '../components/Header';
import Agencies from '../components/Agencies';
import Footer from '../components/Footer';

const AgenciesViews = props => {

    return (
        <>
            <Header/>
            <Agencies countryNameFromURL={props.tour}/>
            <Footer/>
        </>
    )
}

export default AgenciesViews
