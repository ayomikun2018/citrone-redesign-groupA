import React from 'react'
import classes from './landingPage.module.css';
import Header from './Header';
import Joining from './Joining';
import Community from './Community';
import Learning from './Learning';
import Reporting from './Reporting';
import Footer from './Footer';

export default function LandingPage() {
    return (
        <div className={classes.landingPage}>
        <Header/>
        <Joining/>
         <Community/>
         <Learning/>
         <Reporting/>
         <Footer/>
        </div>
    )
}
