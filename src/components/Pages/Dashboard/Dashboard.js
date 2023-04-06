import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import MainPage from './MainPage/MainPage'


const Dashboard = () => {
  return (
    <div className=''>
       <Navbar />
       <Sidebar />
       <MainPage />
    </div>
  )
}

export default Dashboard