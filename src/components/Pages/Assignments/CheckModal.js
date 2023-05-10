import React, { Fragment } from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import t from './assignmentsAssets/tick.svg';
import x from './assignmentsAssets/x.svg';
import classes from './CheckModal.module.css'
import gif from './assignmentsAssets/59945-success-confetti (2).gif';
import Navbar from '../../Navigation/Navbar/Navbar';
import Sidebar from '../../Navigation/Sidebar/Sidebar';
// import Assignment from './Assignment';
import img1 from './assignmentsAssets/new.svg';
import img2 from './assignmentsAssets/video.svg';
import attach from './assignmentsAssets/shape.svg';

function CheckModal({closeModal}) {

  return (
    <Fragment>
    <Navbar/>
    <Sidebar/>
    {/* {openModal && <Modal closeModal={setOpenModal} />  } */}
 <div className={classes.assignment}>
    <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/assignments"><span >Assignments </span> &gt;</Link><Link to="#"><span > Module 1 Assignment </span>&gt;</Link><Link to="/assignment"><span className={classes.spanB}>Assignment 3 </span></Link></section>
    <div className={classes.all}>
    
    <section className={classes.body}>
        <h2>Assignment 3</h2>
        <h3>Module 1; Lesson 3</h3>
        <h4>Start working on previewing all the sketches and turning them into wireframes for the Citrone main action pages.</h4>
        <span className={classes.spanC}>View file</span>
        {/* <div className={classes.search}> */}
        <textarea  className={classes.search}  placeholder ='Type here' rows="4" cols="40"></textarea>
        {/* </div> */}
        <div className={classes.attachSection} >
            <div className={classes.file}>
                <p>Attach file</p>
                <input style={{ display: "none " }} type="file" id="file"  />
                <label htmlFor="file" className="file" >
                    <img src={attach} alt="" className={classes.attach} />
                </label>
            </div>
            <button  className={classes.submit} > Submit</button> 
           
        </div>
        </section>
    <section className={classes.side}>
        <h2>Watch Lesson Recording</h2>
        <p>Wireframe and Prototype</p>
       
            <img src= {img1} alt ='img'></img>
      
        <h2>Resources</h2>
        <h3>10 Easy Ways to Create A Wireframe</h3>
        <p>Creating a wireframe is one of the first steps in any UI design process. This article will hep you understand the basic design principles for great UI designs and the easiest way to create a wireframe. <span  className={classes.spanC}>Read more</span>
        </p>
        <h3>How to Create A Wireframe</h3>
       
        <img className={classes.imgB}src= {img2} alt ='img'></img>
        <span  className={classes.spanC}>Watch Video</span>
   
        <p>A video to provide visual perspective on how to easily create a wireframe.</p>
       
    </section>
    </div>
    <div className={classes.checkBackground}>
    <div className={classes.checkContainer}>
    <div className={classes.top}>
        <h2>SUCCESS!</h2>  
       
        <Link to='/assignmentgrade'><img src= {x} alt ='img' className={classes.cancelB} ></img></Link>
     
        
    </div>
    <img src= {gif} alt ='img' className={classes.x1}></img> 
    <h3>Your assignment has been submitted successfully.</h3>
    <h3>You will get notified when your grades are uploaded.</h3>
    </div>
    
    </div>
    </div>
  
</Fragment>

  
   
    
  )
}

export default CheckModal