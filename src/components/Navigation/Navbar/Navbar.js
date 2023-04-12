import React from 'react'
import { Link } from "react-router-dom"
import Ellipse from "././NavbarAssets/Ellipse 136.svg"
import CitroneLogo from "./NavbarAssets/citrone logo 1.svg"
import Bell from "./NavbarAssets/shape.svg"
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbarr}>
        <div className={classes.logosection} >
          <img src={CitroneLogo} alt="citrone_logo" className={classes.logo}/>
          <h1>Citrone</h1>
        </div>
        <div className= {classes.profile}>
         <Link to="#" className= {classes.bell} >
          <img src={Bell} alt="notification" />
         <div className={classes.circle}>2</div>
         </Link>
         <img src={Ellipse} alt='ellipse' className={classes.pic}/>
       </div>
    </div>



    // <div class=" fixed w-full h-20 bg-white shadow border border-#94a3b8-600 display: flex z-20">
    // <div className='' >
    //   <img src={CitroneLogo} alt="citrone_logo" className="w-52 h-20 ml-10 mt-2"/>
    // </div>
    //   <div className= " absolute flex space-x-10 right-12 ">
    //     <Link to="">
    //       <img src={Bell} alt="notification" className='  w-6 cursor-pointer mt-8 z-0'/>
    //       <div className='w-5 h-5  -mt-10 ml-4 z-10 rounded-full text-sm text-center text-white font-normal bg-red-500'>2</div>
    //     </Link>
    //     <img src={Ellipse} alt='ellipse' className='w-22 h-16  mt-4 cursor-pointer'/>
    //   </div>
    //   <div className=''></div>

    // </div>
  )
}

export default Navbar