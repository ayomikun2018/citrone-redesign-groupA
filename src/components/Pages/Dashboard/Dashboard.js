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

  const closeAddEventModal = () => {
    setShowAddEventModal(false)
  }

  return (
    <>
    <div className=' w-full bg-[#fbfbfb]' style={{ }} >
       <Navbar />
       <div className='relative min-h-screen flex'>
        <Sidebar />
        <MainPage />
       </div>
   
      <div className=''>
        <AddEventButton showAddEventModal={toggleModal}/>
        {showAddEventModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
                </div>
                <AddEvents onClick={handleAddEvent} onClose={closeAddEventModal}/> 
                
              </div>
            </div>
          )}

      </div>
    </div>
    </>
  )
}


export default Dashboard