import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashImage from "../DashboardAssets/Rectangle 24.svg"
import "./MainPage.css"
import Tracks from './Tracks.js'
import CommunityChat from './CommunityChat'


const MainPage = () => {

  return (
    <React.Fragment >
      <div className='flex space-x-96'>
        <div className='relative dashboard-body-container pl-16 font-poppins' style={{}}>
        
            <div className='w-60 h-40  mt-12 ' style={{ marginLeft: "17rem"}}>
              <h3 className=' font-semibold' style={{ fontSize: '22px'}}>Hi, Dolamu</h3>
              <p className=' font-medium leading-loose mt-5' style={{ fontSize: '18px'}}>Your Recent Activity</p>
            </div> 

            <div className='module1'>
              <div className='  z-0 bg-white drop-shadow-md rounded-l-xl p-7' style={{ width: "730px", height: "274px"}}>
                <h3 className=' p-1 font-medium -mt-2 whitespace-nowrap' style={{ fontSize: '18px'}}>Module 12: Prototype Phase 3</h3>
                <p className='text-base p-1 mt-2' style={{ fontWeight: '400'}}>Assignment 1 of 2</p>
                <Link to='/assignments'>
                  <button className='w-38 h-15 p-1 bg-[#f64f59] hover:bg-red-600 text-white font-semi-bold py-5 px-12 rounded-2xl mt-14'style={{ fontSize: '18px'}}>Resume</button>
                </Link>
              </div>  
              <div className=' z-0 -ml-36'>
                <img src={DashImage} alt='Display Module 12 img' className='' style={{ width: "365px", height: "274px", marginLeft: "141%", marginTop: "-316px"}}/>
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