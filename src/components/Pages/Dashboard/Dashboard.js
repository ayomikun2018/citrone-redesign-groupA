import React, { useState } from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import MainPage from './MainPage/MainPage'
import AddEvents from './MainPage/AddEvent/AddEvents'
import { AddEventButton } from './MainPage/Calender/Calender'


const Dashboard = (props) => {

  const [showAddEventModal, setShowAddEventModal] = useState(false);
  
  const handleAddEvent = () => {
    // Open modal or navigate to new page to add event information
  };

  const toggleModal = () => {
    setShowAddEventModal(!showAddEventModal)

  }
  return (
    <>
    <div className=''>
       <Navbar />
       <Sidebar />
       <MainPage />
    </div>
    <div className=''>
      <AddEventButton showAddEventModal={toggleModal}/>
    {showAddEventModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <AddEvents onClick={handleAddEvent}/> 
            
          </div>
        </div>
      )}
  

    </div>
    </>
  )
}


export default Dashboard