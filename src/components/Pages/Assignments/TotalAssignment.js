import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Navigation/Navbar/Navbar';
import Sidebar from '../../Navigation/Sidebar/Sidebar';
import classes from './totalAssignments.module.css';
import { FiSearch } from 'react-icons/fi';
import imgA from './assignmentsAssets/Rectangle 29880.svg'
import imgB from './assignmentsAssets/Rectangle 29881.svg'
import imgC from './assignmentsAssets/Rectangle 29882.svg'
import imgD from './assignmentsAssets/Rectangle 29883.svg'



// import AssignList from './AssignList';

export default function TotalAssignment() {
  const [search, setSearch] = useState('');
//   console.log(search)
    useEffect(() => {
        async function postData(url = "https://stutern-citrone-app.onrender.com/api/v1/assignments/") {
            const response = await fetch(url, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQxM2JmNDQ3YWU4Y2UzZGE1NGRhZjYiLCJlbWFpbCI6ImF5b0BtYWlsLmNvbSIsImlhdCI6MTY4MjMzMzEyOCwiZXhwIjoxNjgyNDE5NTI4fQ.GbUt-ixyCfWqrMxcBhnajusqApnpZDTFFyqUgJwJaZs'
              },
            });
            return response.json(); 
          }
          postData().then((data) => {
            console.log(data);
          });

        // fetch ('https://stutern-citrone-app.onrender.com/api/v1/assignments/')
        // .then((response) => response.json())
        // .then((data) => console.log(data))

        // const resData =  response.json();
        // const token = resData.token;
        // console.log(token);
    },[]);
  return (
    <Fragment>

        <Navbar/>
        <Sidebar />
        <div className={classes.totalAssignment}>
            <div className={classes.headSection}>
            <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/assignments"><span >Assignments </span>  &gt;</Link><Link to="/totalassignment"><span className={classes.spanB}>Total Assignment </span></Link></section>
          
            <div className={classes.search}>
               <FiSearch className={classes.searchIcon}/>
               <input type="text" placeholder="Search" 
               onChange={(e) => setSearch(e.target.value)}
               ></input>
            </div>
            </div>
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
                <Link to='/assignment'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                            <img src={imgA} alt="img1"  />
                            <div className={classes.titles} >
                            <h2>Module 1</h2>
                            <h3>Wireframe and Prototypes </h3>
                            <p>1 Assignment </p>
                            </div>
                        </div>
                        <div className={classes.info}>
                        <p>Timi.A</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.notSubmitted} >Not Submitted</button></Link>
                        </div>
                    </div>
                </Link>
                <Link to ='#'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                        <img src={imgB} alt="img1"  />
                        <div className={classes.titles} >
                            <h2>Module 2</h2>
                            <h3>Design Systems </h3>
                            <p> 2 Assignments </p>
                        </div>
                        </div>
                        <div className={classes.info}>
                        <p>Taiwo</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.awaitingGrade} >Awaiting Grade</button></Link>
                    </div>
                    </div>
                </Link>
                <Link to='#'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                            <img src={imgC} alt="img1"  />
                            <div className={classes.titles} >
                            <h2>Module 3</h2>
                            <h3>High Fidelity Designs </h3>
                            <p>1 Assignment </p>
                            </div>
                        </div>
                        <div className={classes.info}>
                        <p>Timi.A</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.notSubmitted} >Not Submitted</button></Link>
                        </div>
                    </div>
                </Link>
                
                
                </div>
                 <div className={classes.totalAssign}>
                <Link to ='/assignment'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                        <img src={imgD} alt="img1"  />
                        <div className={classes.titles} >
                            <h2>Module 4</h2>
                            <h3>Design Thinking </h3>
                            <p>2 Assignments </p>
                        </div>
                        </div>
                        <div className={classes.info}>
                        <p>Taiwo</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.graded} >Graded</button></Link>
                    </div>
                    </div>
                </Link>
                <Link to ='#'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                        <img src={imgA} alt="img1"  />
                        <div className={classes.titles} >
                            <h2>Module 5</h2>
                            <h3>Wireframe and Prototypes </h3>
                            <p> 2 Assignments </p>
                        </div>
                        </div>
                        <div className={classes.info}>
                        <p>Taiwo</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.awaitingGrade} >Awaiting Grade</button></Link>
                    </div>
                    </div>
                </Link>
                <Link to='#'>
                    <div className={classes.assignCard} >
                        <div className={classes.assignDetails}>
                            <img src={imgA} alt="img1"  />
                            <div className={classes.titles} >
                            <h2>Module 6</h2>
                            <h3>Design Systems </h3>
                            <p>1 Assignment </p>
                            </div>
                        </div>
                        <div className={classes.info}>
                        <p>Timi.A</p>
                        <h4>04/01/23</h4>
                        <Link to='/#'><button  className={classes.notSubmitted} >Not Submitted</button></Link>
                        </div>
                    </div>
                </Link>
                
                
                </div>
                </section>
        </div>
    
    </Fragment>
  )
}
