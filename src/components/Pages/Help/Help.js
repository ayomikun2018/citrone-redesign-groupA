import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classes from './Help.module.css'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import shape2 from './HelpAssets/shape2.svg';
import shape3 from './HelpAssets/shape3.svg';
import shape4 from './HelpAssets/shape4.svg';
import shape5 from './HelpAssets/shape5.svg';
import shape6 from './HelpAssets/shape6.svg';
import pic1 from './HelpAssets/Rectangle 29880 (1).svg';
import pic2 from './HelpAssets/Rectangle 29880 (2).svg';
import pic3 from './HelpAssets/Rectangle 29880 (3).svg';


function Help() {
  return (
    <Fragment >
    <Navbar/>
    <Sidebar />
    <div className={classes.help}>
        <section className={classes.breadcrumbs}><Link to="/dashboard"><span>Dashboard</span> &gt; </Link><Link to="/help"><span className={classes.spanB}>Help </span></Link></section>
        <section className={classes.contents} >
            <h1>Help</h1>
            <div className={classes.input}>
                 <input type="text" placeholder="How can we help you?" />
                 <img src={shape2} alt="Logo" />
            </div>

            <div className={classes.titles}>
                 <img src={shape5} alt="Logo" />
                 <h2>Explore help topics</h2>
            </div>
            <div className={classes.cards}>
                <Link to ='#' className={classes.card}>
                    <img src={pic1} alt="Logo" />
                    <h3>Configure your Citrone Application</h3>
                </Link>
                <Link to ='#' className={classes.card}>
                    <img src={pic2} alt="Logo" />
                    <h3>How to set a reminder</h3>
                </Link>
                <Link to ='#' className={classes.card}>
                    <img src={pic3} alt="Logo" />
                    <h3>Set your Citrone status</h3>
                </Link>
            </div>
          
            <div className={classes.titles}>
                 <img src={shape4} alt="Logo" />
                 <h2>Help categories</h2>
            </div>
            <div className={classes.links}>
                <Link to ='#' className={classes.link}>
                    <h4>Getting Started</h4>
                    <img src={shape3} alt="Logo" />
                </Link>
                <Link to ='#' className={classes.link}>
                    <h4>App Tour</h4>
                    <img src={shape3} alt="Logo" />
                </Link>
                <Link to ='#' className={classes.link}>
                    <h4>FAQs</h4>
                    <img src={shape3} alt="Logo" />
                </Link>
                <Link to ='#' className={classes.link}>
                    <h4>Feedback</h4>
                    <img src={shape3} alt="Logo" />
                </Link>
            </div>
        </section>
        <section className={classes.footer}>
            <Link to ='#' > 
            <div>
                <p>Request Help</p>
                <img src={shape6} alt="Logo" />
             </div>
            </Link> 
            <button>Contact Us</button>
           

        </section>
    </div>
    


    </Fragment>
  )
}

export default Help