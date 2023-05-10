import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'

import '../../Navigation/Sidebar/Sidebar.css'
import NextIconBlk from "../Dashboard/DashboardAssets/next-blk.svg"
// import ContactPage from './ContactPage';
import  AccountSettingPage from './AccountSettingPage'
import ThemeCheckBoxForm from './ThemeAppearance'
import Privacy from './Privacy'
import Profile from './Profile/Profile';

import ProfilePictureForm from './Profile/ProfilePictureForm'


const Settings = ({setSelectedFile}) => {
  
  const [selectedOption, setSelectedOption] = useState("");

  const [isProfileClicked, setIsProfileClicked] = useState(false);  //for the profile picture


  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const anchors = document.querySelectorAll("a");
    anchors.forEach((a) => {
      if (a.innerHTML === option) {
        a.style.color = "#f64f59";
        a.style.textDecoration = "none";
        a.style.textDecorationColor = "#f64f59";
        a.style.textDecorationThickness = "2px";
        a.style.lineHeight = "2rem";
        a.style.paddingBottom = "10px";

      } else {
        a.style.color = "grey";
        a.style.textDecoration = "none";
        a.style.lineHeight = "1.5em";
        a.style.paddingBottom = "0"; 
      }
    });
  };

  const toggleProfile = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  const profileClassName = isProfileClicked ? "text-gray-400" : "text-[#f64f59]";

  const settingsOptions = [
    { id: 1, name: <span className={profileClassName} onClick={toggleProfile}>My Profile</span>  },
    { id: 2, name: "Theme & Appearance" },
    { id: 3, name: "Account Settings" },
    { id: 4, name: "Privacy" },
  ];



  // const toggleProfile = () => {
  //   setIsProfileClicked(true);
  // };

  // const profileClassName = isProfileClicked ? "text-[#f64f59]" : "text-gray-500";
  // const otherOptionClassName = isProfileClicked ? "text-gray-500" : "";

  // const settingsOptions = [
  //   { id: 1, name: <span className={profileClassName} onClick={toggleProfile}>My Profile</span>  },
  //   { id: 2, name: <span className={otherOptionClassName} onClick={() => setIsProfileClicked(false)}>Theme & Appearance</span> },
  //   { id: 3, name: <span className={otherOptionClassName} onClick={() => setIsProfileClicked(false)}>Account Settings</span> },
  //   { id: 4, name: <span className={otherOptionClassName} onClick={() => setIsProfileClicked(false)}>Privacy</span> },
  // ];

  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>
        <a href="#" onClick={() => handleOptionClick(option.name)}>
          {option.name}
        </a>
      </li>
    ));
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "My Profile":
        return <Profile />;
      case "Theme & Appearance":
        return <ThemeCheckBoxForm />;
      case "Account Settings":
        return (
        <AccountSettingPage />
        );
      case "Privacy":
        return <Privacy />;
      default:
        return <Profile />;
    }
  };



  return (
    <div className=''> 
      <Navbar />
      <Sidebar />
      <div className=' z-30 grid fixed left-64 font-poppins' style={{width: '80%', maxWidth: '100%', height: '30%', top: '98px'}}>
        <div className='absolute top-10 left-16 flex'>
          <div className='flex gap-1'>
            <Link to='/dashboard'>
              <p className=' text-sm font-medium font-poppins text-black hover:text-[#f64f59]'>Dashboard</p>
            </Link>
            <img src={NextIconBlk} alt='next-icon' className=' w-3 h-3 mt-1'/>
          </div>
          <div className='flex gap-1 ml-1'>
            <Link to='/settings'>
              <p className=' text-sm font-medium font-poppins text-black hover:text-[#f64f59]'>Settings</p>
            </Link>
            <img src={NextIconBlk} alt='next-icon' className=' w-3 h-3 mt-1 text-black'/>
          </div>
          <div className='flex gap-1 ml-1'>
            <Link to='/settings'>
              <p className=' text-sm font-medium font-poppins text-black hover:text-[#f64f59]'>Account Settings</p>
            </Link>
            <img src={NextIconBlk} alt='next-icon' className=' w-3 h-3 mt-1 text-black'/>
          </div>
        </div>

        <div className=' mt-24 ml-16'>
          <p className=' text-2xl font-semibold'>Settings</p>
        </div>

        
        {/* Items Tab */}
  
        <div className=" z-10 flex relative top-10" style={{ left: '6%',}}>
            <div className="">
              <ul className='flex absolute font-poppins text-[#A5A5A5] font-normal space-x-8 whitespace-nowrap ' style={{ fontSize: '18px'}} >{renderSettingsOptions()}</ul>
              <div className=' absolute contact-underline top-10 -left-4 border border-gray-300' style={{ width: '90%'}}></div>

            </div>
          
        </div>
        <div className=" relative -left-10 overflow-auto" style={{ width: '110%', minHeight: '100vh', top: '5rem'}}>
         {renderSelectedOption()}
        </div> 
      </div>
    </div>
  )
}

export default Settings