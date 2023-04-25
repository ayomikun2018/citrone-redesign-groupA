import React from 'react'
import { Link } from "react-router-dom"
import Ellipse from "../../Pages/Dashboard/DashboardAssets/Ellipse 136.svg"
import CitroneLogo from "../../Pages/Dashboard/DashboardAssets/citrone logo 1.svg"
import Bell from "../../Pages/Dashboard/DashboardAssets/notification.svg"

const Navbar = () => {
  return (
    <div class=" fixed h-24 bg-[#fbfbfb] shadow border display: flex z-20" style={{ width: "100%"}}>
    <div className='' >
      <img src={CitroneLogo} alt="citrone_logo" className="w-52 h-20 ml-10 mt-2"/>
    </div>
      <div className= " absolute flex space-x-10 right-12 ">
        <Link to="">
          <img src={Bell} alt="notification" className='  w-6 cursor-pointer mt-4 z-0'/>
          <div className='w-6 h-6 -mt-16 ml-4 z-20 rounded-full text-sm flex justify-center text-center text-white font-normal bg-red-500'>2</div>
        </Link>
        <img src={Ellipse} alt='ellipse' className='w-22 h-16  mt-4 cursor-pointer'/>
      </div>
      <div className=''></div>

    </div>
  )
}

export default Navbar