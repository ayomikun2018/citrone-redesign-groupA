import React from 'react'
import { Link } from 'react-router-dom';
import x from './assignmentsAssets/x.svg';
import t from './assignmentsAssets/tick.svg';
import classes from '../Assignments/Modal.module.css';
import { useState } from 'react';
import CheckModal from './CheckModal';



function Modal({closeModal}) {
  const [openModal, setOpenModal]= useState(false)

  return (
    

    <div className={classes.modalBackground}>
    <div className={classes.modalContainer}>
    {openModal && <CheckModal closeModal={setOpenModal} /> }
    
    <h2>Are you sure you want to retract the assignment?</h2>
    <div  className={classes.modalButtons}>      
    <button  className={classes.cancel} onClick ={() => closeModal(false)}> 
        <img src= {x} alt ='img'></img>Cancel
     </button>
    <Link to ='/assignment'> <button  className={classes.submit}  onClick={()=>setOpenModal(true)}><img src= {t} alt ='img'></img> Retract</button></Link>
    </div>
    
    </div>
    </div>
  )
}

export default Modal