import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Navigation/Navbar/Navbar';
import Sidebar from '../../Navigation/Sidebar/Sidebar';
import classes from './TaskProgress.module.css'
import imageA from './assignmentsAssets/Rectangle 29880.svg'
import AssignList from './AssignList';

export default function TaskProgress() {
  
  return (
    <Fragment>
      <Navbar/>
      <Sidebar />
      <section className={classes.taskProgress}>
      <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/assignments"><span >Assignments </span> &gt;</Link><Link to="taskprogress"><span className={classes.spanB}>Task Progress </span></Link></section>
        <section>
          <h2>Tasks in Progress</h2>
          <div className={classes.cards}>
              <div className={classes.card}>
                <img src={imageA} alt="img1"  />
                <div className={classes.titles} >
                  <div>
                    <h3>Wireframe and Prototypes </h3>
                    <div className={classes.details}>
                      <div className={classes.wrapper}>
			                <div className={classes.progressBar}>
				              <span className={classes.fill} ></span>
			                </div>
                      </div>
                      <h4>20% Completed</h4>
		              </div>
                </div>
                  <div className={classes.info}>
                        <Link to='/assignment'><button  className={classes.submit} >Resume</button></Link>
                      </div>
                </div>  
                
              </div>
              <div className={classes.card}>
                <img src={imageA} alt="img1"  />
                <div className={classes.titles} >
                  <div>
                    <h3>Wireframe and Prototypes </h3>
                    <div className={classes.details}>
                      <div className={classes.wrapper}>
			                <div className={classes.progressBar}>
				              <span className={classes.fill} ></span>
			                </div>
                      </div>
                      <h4>20% Completed</h4>
		              </div>
                </div>
                  <div className={classes.info}>
                        <Link to='/assignment'><button  className={classes.submit} >Resume</button></Link>
                      </div>
                </div>  
                
              </div>
              <div className={classes.card}>
                <img src={imageA} alt="img1"  />
                <div className={classes.titles} >
                  <div>
                    <h3>Wireframe and Prototypes </h3>
                    <div className={classes.details}>
                      <div className={classes.wrapper}>
			                <div className={classes.progressBar}>
				              <span className={classes.fill} ></span>
			                </div>
                      </div>
                      <h4>20% Completed</h4>
		              </div>
                </div>
                  <div className={classes.info}>
                        <Link to='/assignment'><button  className={classes.submit} >Resume</button></Link>
                      </div>
                </div>  
                
              </div>
              <div className={classes.card}>
                <img src={imageA} alt="img1"  />
                <div className={classes.titles} >
                  <div>
                    <h3>Wireframe and Prototypes </h3>
                    <div className={classes.details}>
                      <div className={classes.wrapper}>
			                <div className={classes.progressBar}>
				              <span className={classes.fill} ></span>
			                </div>
                      </div>
                      <h4>20% Completed</h4>
		              </div>
                </div>
                  <div className={classes.info}>
                        <Link to='/assignment'><button  className={classes.submit} >Resume</button></Link>
                      </div>
                </div>  
                
              </div>
           
        </div>
  
     
        
        </section>
      </section>
    </Fragment>
  )
}
