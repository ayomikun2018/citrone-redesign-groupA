import React, { useState } from 'react'
import DashImage from "../DashboardAssets/Rectangle 24.svg"
import "./MainPage.css"
import Tracks from './Tracks.js'
import CommunityChat from './CommunityChat'


const MainPage = () => {

  return (
    <React.Fragment >
      <div className='flex space-x-96'>
        <div className='relative dashboard-body-container pl-12 font-poppins'>
        
            <div className='w-60 h-40 ml-60 mt-14  '>
              <h3 className=' text-xl font-semibold'>Hi, Dolamu</h3>
              <p className='text-base font-medium leading-loose mt-5'>Your Recent Activity</p>
            </div>

            <div className='module1'>
              <div className='  z-0 w-2/3 h-60 bg-white drop-shadow-md rounded-l-xl p-7'>
                <h3 className='text-base p-1 font-medium -mt-2 whitespace-nowrap'>Module 12: Prototype Phase 3</h3>
                <p className='text-sm p-1 mt-2 font-normal'>Assignment 1 of 2</p>
                <button className='w-38 h-15 p-1 bg-[#f64f59] hover:bg-red-600 text-white font-semi-bold py-5 px-12 rounded-2xl mt-14'>Resume</button>
              </div>  
              <div className=' z-0 -ml-36'>
                <img src={DashImage} alt='Display Module 12 img' className=' w-fit h-60'/>
              </div>
            </div>
          
            <Tracks />

        </div>
        <div >
              <CommunityChat /> 
        </div>
      </div>
        
     

    </React.Fragment>
  )
}

export default MainPage