import React from 'react';
import  './Header.module.css';
import logo from './landingPageAssets/citrone logo 1.png';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
 

  
  return (
    <section  className={classes.header}>
    <div className={classes.navDiv}>
      <div className={classes.navLogo}>
        <img src={logo} alt="Logo" />
        <h1 >Citrone</h1>
      </div>
      <ul className={classes.navUl}>
      {/* <Link to ='/#' ><li>About Us</li></Link>
      <Link to ='/#'><li>Contact Us</li></Link> */}
      </ul>
    </div>
    <div className={classes.login}>
      <p >Have an account already?</p>
      <Link to='/login'><button  >Log In</button></Link>
    </div>
    </section>
  )
}