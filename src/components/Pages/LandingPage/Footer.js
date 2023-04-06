import React from 'react'
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <section className={classes.footer}>
    <div className={classes.company}>
      <h3>COMPANY</h3>
      <div className={classes.paragraphs}>
      <p><Link to ='https://www.citrone.co/'>Citrone Website</Link></p>
      <p><Link to ='/login'>Login</Link></p>
      <p><Link to ='https://www.stutern.com/'>FAQ</Link></p>
      <p><Link to ='https://www.stutern.com/'>Contact</Link></p>
      <p><Link to ='https://www.stutern.com/'>Help</Link></p>
      </div>
      
      
    </div>
    <div className={classes.services}>
    <h3>OUR SERVICES</h3>
    <p><Link to ='https://www.stutern.com/'>Learning & Development</Link></p>
    <p> <Link to ='https://www.stutern.com/'>Digital Solutions</Link></p>
    </div>
    <div className={classes.legal}>
      <h3>LEGAL</h3>
      <p> <Link to ='https://www.citrone.co/'>Privacy Policy</Link></p>
      <p><Link to ='https://www.citrone.co/'>Terms of Service</Link></p>
    </div>
    <div className={classes.office}>
      <h3>OFFICE</h3>
      <p>16a Fola Jinadu Cres, Gbagada 100266, Lagos.</p>
    </div>
    </section>
  )
}
