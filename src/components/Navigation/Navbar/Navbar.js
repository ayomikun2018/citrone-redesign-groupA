import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Ellipse from "../../Pages/Dashboard/DashboardAssets/Ellipse 136.svg"
import CitroneLogo from "../../Pages/Dashboard/DashboardAssets/citrone logo-new.svg"
import Bell from "../../Pages/Dashboard/DashboardAssets/notification.svg";
import leftChevron from '../../Pages/Dashboard/DashboardAssets/shape4.svg'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }
  return (
    <div className="fixed top-0 bg-[#fbfbfb] shadow border flex z-20" style={{ width: "100%", height: "5.5rem"}}>
      <div className="flex ml-8 mt-2">

        {/* Left chevron icon */}
        {/* HamburgerMenu */}
        <button onClick={toggleMenu} className="md:hidden p-4">
          <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {showMenu ? (
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 4.293a1 1 0 011.414 1.414L13.414 12l6.707 6.707a1 1 0 01-1.414 1.414L12 13.414l-6.707 6.707a1 1 0 01-1.414-1.414L10.586 12 3.88 5.293a1 1 0 011.414-1.414L12 10.586l6.707-6.293z"/>
            ) : (
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/>
            )}
          </svg>
        </button>
        <img src={leftChevron} alt= 'left-chevron' className='h-6 w-6 fill-current text-gray-500 md:hidden mr-4' />

 
        <div className="flex items-center md:mx-auto">
          <img src={CitroneLogo} alt="citrone_logo" className="mr-2 w-12 h-12 md:w-16 md:h-16" />
          <h3 className='font-poppins font-semibold text-2xl md:text-3xl'>Citrone</h3>
        </div>
      <div className= " absolute flex space-x-8 right-12 ">
        <Link to="">
          <img src={Bell} alt="notification" className='  w-6 cursor-pointer mt-4 z-0'/>
          <div className='w-5 h-5 -mt-16 ml-4 z-20 rounded-full text-sm flex justify-center text-center text-white font-normal bg-red-500'>2</div>
        </Link>
        <Link to="/profile-update-page">
          <img src={Ellipse} alt='ellipse' className=' w-14 h-14 mt-3 cursor-pointer'/>
        </Link>
      </div>
      <div className=''></div>
      </div>
    </div>
  )
}

export default Navbar




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Ellipse from '../../Pages/Dashboard/DashboardAssets/Ellipse 136.svg';
// import CitroneLogo from '../../Pages/Dashboard/DashboardAssets/citrone logo-new.svg';
// import Bell from '../../Pages/Dashboard/DashboardAssets/notification.svg';

// const Navbar = () => {
// const [showMenu, setShowMenu] = useState(false);

// const toggleMenu = () => {
// setShowMenu(!showMenu);
// };

// return (
// <div className="fixed top-0 bg-[#fbfbfb] shadow border flex z-20" style={{ width: '100%', height: '5.5rem' }}>
// <div className="flex ml-8 mt-2 flex-wrap">
// <img src={CitroneLogo} alt="citrone_logo" style={{ width: '75px', height: '75px' }} />
// <h3 className="font-poppins font-semibold mt-2 -ml-2 p-2" style={{ fontSize: '30px' }}>
// Citrone
// </h3>
// </div>
// <div className="absolute flex space-x-8 right-12">
// <Link to="">
// <img src={Bell} alt="notification" className="w-6 cursor-pointer mt-4 z-0" />
// <div className="w-6 h-6 -mt-16 ml-4 z-20 rounded-full text-sm flex justify-center items-center text-white font-normal bg-red-500">
// 2
// </div>
// </Link>
// <Link to="/profile-update-page">
// <img src={Ellipse} alt="ellipse" className="w-14 h-14 mt-3 cursor-pointer" />
// </Link>
// </div>
// <button onClick={toggleMenu} className="md:hidden absolute top-0 right-0 p-4">
// <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// {showMenu ? (
// <path
//            fillRule="evenodd"
//            clipRule="evenodd"
//            d="M18.707 4.293a1 1 0 011.414 1.414L13.414 12l6.707 6.707a1 1 0 01-1.414 1.414L12 13.414l-6.707 6.707a1 1 0 01-1.414-1.414L10.586 12 3.88 5.293a1 1 0 011.414-1.414L12 10.586l6.707-6.293z"
//          />
// ) : (
// <path
//            fillRule="evenodd"
//            clipRule="evenodd"
//            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
//          />
// )}
// </svg>
// </button>
// </div>
// );
// };

// export default Navbar;