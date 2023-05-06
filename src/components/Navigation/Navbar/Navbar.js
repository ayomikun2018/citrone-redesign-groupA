import React from 'react'
import { Link } from "react-router-dom"
import Ellipse from "../../Pages/Dashboard/DashboardAssets/Ellipse 136.svg"
import CitroneLogo from "../../Pages/Dashboard/DashboardAssets/citrone logo-new.svg"
import Bell from "../../Pages/Dashboard/DashboardAssets/notification.svg";


const Navbar = () => {
  return (
    <div class=" fixed top-0  bg-[#fbfbfb] shadow border flex z-20" style={{ width: "100%", height: "5.5rem"}}>

 
    <div className='flex ml-8 mt-2 flex-wrap ' >
      <img src={CitroneLogo} alt="citrone_logo" className=" " style={{width: '75px', height: '75px'}}/>
      <h3 className=' font-poppins font-semibold mt-2 -ml-2 p-2' style={{ fontSize: '30px'}}>Citrone</h3>
    </div>
      <div className= " absolute flex space-x-8 right-12 ">
        <Link to="">
          <img src={Bell} alt="notification" className='  w-6 cursor-pointer mt-4 z-0'/>
          <div className='w-6 h-6 -mt-16 ml-4 z-20 rounded-full text-sm flex justify-center text-center text-white font-normal bg-red-500'>2</div>
        </Link>
        <Link to="/profile-update-page">
          <img src={Ellipse} alt='ellipse' className=' w-14 h-14 mt-3 cursor-pointer'/>
        </Link>
      </div>
      <div className=''></div>

    </div>
  )
}

export default Navbar