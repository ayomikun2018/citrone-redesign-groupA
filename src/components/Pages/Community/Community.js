import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Community.module.css";
import Navbar from "../../Navigation/Navbar/Navbar";
import Sidebar from "../../Navigation/Sidebar/Sidebar";
import Search from './communityAssets/search.svg';
import Toggle from './communityAssets/toggle.svg';
import Tutors from "./Tutors";
import Students from "./Students";
export default function Community() {
  return (
    <Fragment >
      <Navbar/>
      <Sidebar />
      <section className={classes.community}>
        <div className={classes.top}>
          <div className={classes.breadcrumbs}><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/community"><span className={classes.spanB}>Community </span></Link></div>
          <div className={classes.inputContainer}>
            <div className={classes.input}>
              <img src={Search} alt="Logo" />
              <input type="text"  placeholder="Search" />
            </div>
            <img src={Toggle} alt="Logo" />
          </div>
        </div>
        <div className={classes.bottom}>
            <h1>Community</h1>
            <h2>Tutors</h2>
          <div className={classes.tutors}>
            <Tutors/>
          </div>
          <div className={classes.students}>
            <h2>Students</h2>
            <Students/>
          </div>
        </div>
       

      </section>
     
      
      
    </Fragment>
  );
}
