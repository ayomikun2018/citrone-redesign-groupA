import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navigation/Navbar/Navbar';
import Sidebar from '../../Navigation/Sidebar/Sidebar';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import classes from './assignments.module.css';
import AssignList from './AssignList';

export default function Assignments() {
  return (
    <Fragment>
        <Navbar/>
        <Sidebar />
        <div className={classes.assignments}>
        <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/assignments"><span className={classes.spanB}>Assignments </span></Link></section>
          <div className={classes.sections}>
            <section className={classes.firstHalf}>
              <section className={classes.cards}>
              <Link to="/totalassignment">
                <div className={classes.cardA}>
                    <div>
                        <p > 30</p>
                        <h1>Total Assignments </h1>
                        <span> <BiDotsVerticalRounded/></span>
                    </div>
                    <p>+ 13.5% from yesterday</p>
                  </div>
              </Link>
              <Link to="/taskprogress">
                <div className={classes.cardA}>
                    <div>
                        <p> 5</p>
                        <h1>Tasks in Progress </h1>
                        <span> <BiDotsVerticalRounded/></span>
                    </div>
                    <p>+ 13.5% from yesterday</p>
                  </div>
              </Link> 
                
              </section>
             <AssignList/>
              </section>
              <div className={classes.secondHalf}>
                  <div className={classes.search}>
               
                    <FiSearch className={classes.searchIcon}/>
                    <input type="text" placeholder="Search" ></input>
                  </div>
                  <div  className={classes.cardss}>
                      <div className={classes.graded} >
                          <h2>Graded Tasks</h2>
                        <div className={classes.gradeDetails}>
                          <h3>High fidelity designs</h3>
                          <h3>60</h3>
                          <h4 className={classes.viewComment}>View Comment</h4>
                        </div>
                        <div className={classes.gradeDetails}>
                          <h3>High fidelity designs</h3>
                          {/* <div> */}
                          <h3>60</h3>
                          <h4 className={classes.noComment}>No Comment</h4>
                          {/* </div> */}
                          
                        </div>
                        <div className={classes.gradeDetails}>
                          <h3>High fidelity designs</h3>
                          <h3>40</h3>
                          <h4 className={classes.viewComment}>View Comment</h4>

                        </div>
                        <div className={classes.gradeDetails}>
                          <h3>High fidelity designs</h3>
                          <h3>83</h3>
                          <h4 className={classes.noComment}>No Comment</h4>
                        </div>
                      </div>
                      <div className={classes.retracted}>
                        <h2>Retracted Assignments</h2>
                        <div>
                          <h3>High fidelity designs </h3>
                          <p>04/01/23</p>
                        </div>
                        <div>
                          <h3>High fidelity designs </h3>
                          <p>04/01/23</p>
                        </div>
                        <div>
                          <h3>High fidelity designs </h3>
                          <p>04/01/23</p>
                        </div>
                        <div>
                          <h3>High fidelity designs </h3>
                          <p>04/01/23</p>
                        </div>
                      </div>
                  </div>
                  
                
              </div>
          </div>
          
        
        </div>

    </Fragment>

  )
}

