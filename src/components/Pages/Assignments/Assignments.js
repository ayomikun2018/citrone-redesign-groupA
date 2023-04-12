import React from 'react'
import { Link } from 'react-router-dom'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import classes from './assignments.module.css';
import imageA from './assignmentsAssets/Rectangle 29880.svg'
export default function Assignments() {
  return (
    <div className={classes.assignments}>
      <Link to='/dashboard'><span >Dashboard </span> &gt;</Link><Link to='/assignments'><span >Assignments </span> </Link>
      <div className={classes.firstHalf}>
        <section className={classes.cards}>
          <div className={classes.cardA}>
            <p> 30</p>
            <h1>Total Assignments </h1>
            <span> <BiDotsVerticalRounded/></span>
            <p>+ 13.5% from yesterday</p>
          </div>
          <div className={classes.cardB}>
            <p> 5</p>
            <h1>Tasks in Progress </h1>
            <span> <BiDotsVerticalRounded/></span>
            <p>+ 13.5% from yesterday</p>
          </div>
        </section>
        <section className={classes.assign}>
          <div className={classes.heading}>
            <h2>Assignments</h2>
            <h2>Tutor</h2>
            <h2>Due Date</h2>
            <h2> Status</h2>
          </div>
          <div>
            <img src={imageA} alt="img1"  />
            <h3>Wireframe and prototype </h3>
            <p>Module 9, Assignment 3</p>
            <p>Timi.A</p>
            <p>04/01/23</p>
            <Link to='/#'><button  >In progress</button></Link>
            </div>
            <div>
            <img src={imageA} alt="img1"  />
            <h3>Design Systems </h3>
            <p>Module 5, Assignment 1</p>
            <p>Taiwo</p>
            <p>04/01/23</p>
            <Link to='/#'><button  >Pending</button></Link>
            </div>
            <div>
            <img src={imageA} alt="img1"  />
            <h3>High fidelity designs </h3>
            <p>Module 5, Assignment 2</p>
            <p>Tayo.A</p>
            <p>04/01/23</p>
            <Link to='/#'><button  >Completed</button></Link>
            </div>
            <div>
            <img src={imageA} alt="img1"  />
            <h3>High fidelity designs </h3>
            <p>Module 5, Assignment 2</p>
            <p>Tayo.A</p>
            <p>04/01/23</p>
            <Link to='/#'><button  >Completed</button></Link>
            </div>
          </section>
        </div>
        <div className={classes.secondHalf}>
            <div className={classes.search}>
              <FiSearch/>
              <input type="text" placeholder="Search" ></input>
            </div>
            <div className={classes.graded} >
                <h2>Graded Tasks</h2>
              <div>
                <h3>High fidelity designs</h3>
                <h3>60</h3>
                <h3>View Comment</h3>
              </div>
              <div>
                <h3>High fidelity designs</h3>
                <h3>60</h3>
                <h3>View Comment</h3>
              </div>
              <div>
                <h3>High fidelity designs</h3>
                <h3>60</h3>
                <h3>View Comment</h3>
              </div>
              <div>
                <h3>High fidelity designs</h3>
                <h3>60</h3>
                <h3>View Comment</h3>
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
  )
}

 const Assignments = () => {
  return (
    <div>Assignments</div>
  )
}
export default Assignments