import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import ToggleBtn from '../../DashboardAssets/Toggles1.svg'
import TimeModal from "./TimeModal"
import CalenderModal from './CalenderModal'

const AddEvents = () => {
    const [description, setDescription] = useState(false)
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')


    //Time-Set-Modal
    const [eventTime, setEventTime] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleEventTimeClick = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleTimeClick = (time) => {
      setEventTime(time);
      setShowModal(false);
    };
  
    
     

    //Calender Modal
    const [eventDate, setEventDate] = useState(null)
    const [showCalenderModal, setShowCalenderModal ] = useState(false)

    const handleEventDateClick = () => {
        setShowCalenderModal(true)

    }
    const handleDateModalClose = () => {
        setShowCalenderModal(true)
    }

    const handleDateClick = (day) => {
        setShowCalenderModal()
        setEventDate(day)
        
    }

// Ends Calender date

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
      
    }
  return (
    <div className='relative '>
        <form 
        onSubmit={handleSubmit}
        className=' flex items-center justify-center h-screen'>

            {/* Form control field */}
            <div className=' w-8/12 h-fit p-8 mt-20 mb-20 items-center place-items-center bg[#f64f59] grid shadow-md'>
                <div className='flex mb-14 space gap-72 items-center justify-center'>
                    <p className='text-base font-medium text-gray-400'>Cancel</p>
                    <p className=' text-lg font-medium text-black'>New Events</p>
                    <Link to='/dashboard'><button className=' w-24 h-10 text-base font-medium border rounded-full border-solid border-red-500 text-red-500'>Add Event</button></Link>
                </div>

            
                <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    placeholder='Title' 
                    className=' w-10/12 h-10 drop-shadow-md rounded-t-lg pl-8' 
                />

                <input 
                    onChange={(e) => setLocation(e.target.value)} 
                    value={location} 
                    placeholder='Location' 
                    className='w-10/12 h-10 mt-18 border drop-shadow-md rounded-b-lg pl-8' 
                />
           
            
            
          
                <div className=' relative grid w-full h-80 top-18 items-center  place-items-center'>
                    <div className='absolute z-10 top-12 flex w-10/12 h-12 rounded-t-lg border bg-white space-x-72 gap-64 drop-shadow-md'>
                        <p className=' p-2 ml-6 whitespace-nowrap text-semibold font-md flex items-center'>All-day</p>
                        <div className=''><img src={ToggleBtn} alt="toggle" className='mt-2 ml-4 flex items-center'/></div>

                    </div>
                    <div className=' z-10 absolute flex w-10/12 h-12 bottom-44 bg-white border space-x-64 gap-56 drop-shadow-md'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center'>Start</p>
                        <div className='flex items-center justify-center gap-2'>
                            <button className='whitespace-nowrap w-20 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center' onClick={handleEventDateClick}>{eventDate ? eventDate : 'Jan 5, 2023'} </button>
                            {showCalenderModal && <CalenderModal onclose={handleDateModalClose} onTimeClick={handleDateClick}/>}

                            <button className='whitespace-nowrap w-16 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center' onClick={handleEventTimeClick}> {eventTime ? eventTime : '1.00PM'}</button>
                            {showModal && <TimeModal onClose={handleModalClose} onTimeClick={handleTimeClick} />}
                        </div>
                    </div>
                    <div className=' absolute flex w-10/12 h-12 p-2 bottom-32 bg-white border space-x-60 gap-64 drop-shadow-md'>
                        <p className='  pl-2  ml-4 text-semibold font-md flex items-center'>End</p>
                        <div className='flex items-center justify-center gap-2 '>
                            <div className='whitespace-nowrap w-20 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center ' >Jan 5, 2023</div>
                            <div className='whitespace-nowrap w-16 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center'>1.00PM</div>
                            
                        </div>

                    </div>
                    <div className='  absolute flex w-10/12 h-12 bottom-20 bg-white border space-x-64 gap-56 drop-shadow-md'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center'>Repeat</p>
                        <div className='flex'>
                            <p className='flex items-center' >Never</p>
                            <div className='flex items-center'>1.00PM</div>
                        </div>
                    </div>
                    <div className=' absolute flex w-10/12 h-12 bottom-8 bg-white rounded-b-lg border space-x-64 gap-56 drop-shadow-md'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center'>Alert</p>
                        <div className='flex'>
                            <p className='flex items-center' >Never</p>
                            <div className='flex items-center'>1.00PM</div>
                        </div>
                    </div>

                </div>
            </div>
            
            
        </form>
    </div>
    
  )
}

export default AddEvents