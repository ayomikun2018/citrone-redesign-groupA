import React, { useState } from 'react'
import DashImage from "../DashboardAssets/Rectangle 24.svg"
import "./MainPage.css"
import Tracks from './Tracks.js'

const MainPage = () => {

  return (
    <React.Fragment >
      <div className='relative dashboard-body-container pl-12'>
      
          <div className='w-60 h-40 ml-64 mt-12  '>
            <h3 className='text-2xl font-semibold'>Hi, Dolamu</h3>
            <p className='text-base leading-loose'>Your Recent Activity</p>
          </div>

          <div className='flex w-1/4 h-60 ml-64 -mt-14 bg-white drop-shadow-md rounded-xl'>
            <div className='ml-8 mt-8'>
              <h3 className='text-base p-1 font-medium whitespace-nowrap'>Module 12: Prototype Phase 3</h3>
              <p className='text-sm p-1 font-normal'>Assignment 1 of 2</p>
              <button className='w-38 h-15 p-1 bg-red-500 hover:bg-red-600 text-white font-semi-bold py-4 px-12 rounded-2xl mt-14'>Resume</button>
            </div>
            <img src={DashImage} alt='Display Module 12 img' className='ml-20'/>
          </div>
         
          <Tracks />

      </div>
        
     

    </React.Fragment>
  )
}

export default MainPage