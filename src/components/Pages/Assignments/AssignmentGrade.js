import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Navigation/Navbar/Navbar';
import Sidebar from '../../Navigation/Sidebar/Sidebar';
import classes from './AssGrade.module.css';
import attach from './assignmentsAssets/shape.svg';
import ModalB from './ModalB';
import CheckModal from './CheckModal';
// import classes from './CheckModal.module.css'

import { useState, useEffect} from 'react';


function AssignmentGrade() {
  const [openModal, setOpenModal]= useState(false)
 
  /// to add success modal
  // const [showModal, setShowModal] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(false)
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <Fragment>
        <Navbar/>
        <Sidebar />
        {openModal && <ModalB closeModal={setOpenModal} />  }

        {/* { showModal  ? <CheckModal/> : null } */}
        <div className={classes.assignmentGrade}>
        <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/assignments"><span >Assignments </span> &gt;</Link><Link to="/assignments"><span className={classes.spanB}>Assignment 3 </span></Link></section>
        <section className={classes.sections}>
        <div className={classes.firstHalf}>
        <div className={classes.titles}>
        <h1>Assignment 1 -  <span className={classes.span}>Awaiting Grade</span></h1>
          <h2>Module 1; Lesson 2</h2>
        </div>
          <h3>Due: 10th Oct 2022</h3>
          <h3>Submitted: 12th Oct 2022</h3>
          <h4>  1&#41; In your own words, describe what you understand as design thinking.</h4>
          <h4>  2&#41; In a Google doc, sumarize and add examples of websites and products you feel have rightfully applied this process.</h4>
          <h4>  3&#41; List the design thinking processes</h4>
          <div className={classes.answer}>
            <h2>Your Answer</h2>
            <textarea  className={classes.search}  placeholder ='Type here' rows="4" cols="40"></textarea>
            <div className={classes.attachSection} >
                <div className={classes.file}>
                    <p>Attach file</p>
                    <input style={{ display: "none " }} type="file" id="file"  />
                    <label htmlFor="file" className="file" >
                        <img src={attach} alt="" className={classes.attach} />
                    </label>
                </div>
                <button  className={classes.submit} onClick={()=>setOpenModal(true)} > Retract</button>   
            </div>
          </div>
        </div>
        <div className={classes.secondHalf}>
          <h1>Your Score</h1>
          <p>0%</p>
          <h2>Tutor’s Comment</h2>
          <div>
          <textarea  className={classes.comment}  placeholder ='' rows="3" cols="45"></textarea>
          <button  className={classes.reply}  > Reply Comment</button>  
          </div>
 

        </div>

        {/* <div className={classes.secondHalf}>
          
        </div> */}
        </section>

       

        </div>

    </Fragment>
  )
}

export default AssignmentGrade