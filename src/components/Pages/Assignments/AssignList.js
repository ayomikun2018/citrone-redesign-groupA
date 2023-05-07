import React from 'react'
import { Link } from 'react-router-dom'

import classes from './assignments.module.css'
import imageA from './assignmentsAssets/Rectangle 29880.svg'

export default function AssignList() {
  return (
    <section className={classes.assign}>
    <div className={classes.heading}>
      <h2 >Assignments</h2>
      <div>
        <h2>Tutor</h2>
        <h2>Due Date</h2>
        <h2> Status</h2>
      </div>
    </div>
    <div className={classes.totalAssign}>
      <Link to ='/assignment'>
        <div className={classes.assignCard} >
            <div className={classes.assignDetails}>
              <img src={imageA} alt="img1"  />
              <div className={classes.titles} >
                <h3>Wireframe and Prototypes </h3>
                <p>Module 1, Assignment 3</p>
              </div>
            </div>
            <div className={classes.info}>
            <p>Taiwo</p>
            <h4>04/01/23</h4>
            <Link to='/#'><button  className={classes.pending} >Pending</button></Link>
          </div>
        </div>
      </Link>
      <Link to ='#'>
        <div className={classes.assignCard} >
            <div className={classes.assignDetails}>
              <img src={imageA} alt="img1"  />
              <div className={classes.titles} >
                <h3>Design Thinking </h3>
                <p>Module 5, Assignment 1</p>
              </div>
            </div>
            <div className={classes.info}>
            <p>Taiwo</p>
            <h4>04/01/23</h4>
            <Link to='/#'><button  className={classes.progress} >In Progress</button></Link>
          </div>
        </div>
      </Link>
     <Link to='#'>
        <div className={classes.assignCard} >
              <div className={classes.assignDetails}>
                <img src={imageA} alt="img1"  />
                <div className={classes.titles} >
                  <h3>Design Systems </h3>
                  <p>Module 5, Assignment 1</p>
                </div>
              </div>
              <div className={classes.info}>
              <p>Taiwo</p>
              <h4>04/01/23</h4>
              <Link to='/#'><button  className={classes.completed} >Completed</button></Link>
            </div>
          </div>
     </Link>
      
    
    </div>
    </section>
  )
}
