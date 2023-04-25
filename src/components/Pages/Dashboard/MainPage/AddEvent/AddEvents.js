import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import TimeModal from "./TimeModal"
import CalenderModal from './CalenderModal'
import UpDownBtn from '../../DashboardAssets/shape1.svg'
import RepeatButton from './RepeatButton'
import AlertBtn from './AlertBtn'
import SwitchToggler from './SwitchToggler'
import './AddEvents.css'

const AddEvents = ( props ) => {
    const [formData, setFormData] = React.useState(
        {title: "", location: ""}
    )

    console.log(formData)
// form input starts here
    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.value] : event.target.value
            }
        })
        
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  
}

    // Toggle Button
    const [isToggled, setIsToggled] = useState(false)

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
        setEventDate()
    }

    const handleDateClick = () => {
        setShowCalenderModal(false)
       
        
    }
    const toggleModal = () => {
        setShowCalenderModal(!showCalenderModal);
      };

// Ends Calender date


  return (
    <div className='relative font-poppins top-96'>
        <form 
        onSubmit={handleSubmit}
        className=' flex items-center justify-center h-screen'>

            {/* Form control field */}
            <div className='add-events-container absolute p-2 top-20 items-center place-items-center bg-[#f1f1f1] grid shadow-md font-poppins'>
                <div className='flex -top-14 gap-56 items-center justify-center'>
                    <Link to=''>
                        <p onClick={props.onClose}  className='text-base font-medium text-gray-400 hover:text-[#f64f59]'>Cancel</p>
                    </Link>
                        <p className=' text-lg font-medium text-black whitespace-nowrap'>New Events</p>
                    <Link to=''>
                        <button onClick={props.onClose} className=' w-28 h-12 text-base font-medium border rounded-full border-solid border-red-500 text-red-500'>Add Event</button>
                    </Link>
                </div>

                <div className='grid items-center place-items-center'>
                    <input 
                        onChange= {handleChange} 
                        value={formData.title} 
                        name="title"
                        placeholder='Title' 
                        className='title-input absolute top-44 h-12 drop-shadow-md rounded-t-lg pl-8 focus:outline-none' 
                    />

                    <input 
                        onChange={handleChange} 
                        value={formData.location}
                        name="location" 
                        placeholder='Location' 
                        className='location-input absolute h-12 top-56 border drop-shadow-md rounded-b-lg pl-8 focus:outline-none' 
                    />
                </div>
            
          
                <div className=' relative grid w-full h-80 -top-32 items-center  place-items-center font-poppins'>
                    <div className=' all-day absolute z-10 top-12 flex h-12 rounded-t-lg border bg-white space-x-72 gap-64 drop-shadow-md'>
                        <p className=' p-2 ml-8 whitespace-nowrap text-semibold font-md flex items-center font-poppins'>All-day</p>
                        <SwitchToggler rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
                    </div>
                    <div className='start z-10 absolute flex h-12 bottom-44 bg-white border space-x-64 gap-56 drop-shadow-md'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center font-poppins'>Start</p>
                        <div className='flex items-center justify-center gap-2 ml-8'>
                            <button className='whitespace-nowrap w-24 h-8 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center' onClick={handleEventDateClick}>{eventDate ? eventDate : 'Jan 5, 2023'}</button>
                            {showCalenderModal && <CalenderModal onclose={toggleModal} onTimeClick={handleDateClick}/>}

                            <button className='whitespace-nowrap w-16 h-8 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center' onClick={handleEventTimeClick}> {eventTime ? eventTime : '1.00PM'}</button>
                            {showModal && <TimeModal onClose={handleModalClose} onTimeClick={handleTimeClick} />}
                        </div>
                    </div>
                    <div className='end z-0 absolute flex h-12 p-2 bottom-32 bg-white border space-x-60 gap-64 drop-shadow-md'>
                        <p className='  pl-2  ml-4 text-semibold font-md flex items-center font-poppins'>End</p>
                        <div className='flex items-center justify-center gap-2 '>
                            <div className='whitespace-nowrap w-24 h-8 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center font-poppins ' >Jan 5, 2023</div>
                            <div className='whitespace-nowrap w-16 h-8 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center font-poppins'>1.00PM</div>
                        </div>

                    </div>
                    <div className='repeat z-0 absolute flex h-12 bottom-20 bg-white border space-x-64 gap-x-72 drop-shadow-md font-poppins'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center font-poppins'>Repeat</p>
                        <div className='flex items-center justify-center gap-8'>
                            <RepeatButton />
                            <img src={UpDownBtn} alt="up-down-tn" className='w-5 h-5 -ml-3'/>
                        </div>
                    </div>
                    <div className='alert z-0 absolute flex h-12 bottom-8 bg-white rounded-b-lg border space-x-64 gap-80 drop-shadow-md font-poppins'>
                        <p className='p-2 ml-6 text-semibold font-md flex items-center font-poppins'>Alert</p>
                        <div className='flex items-center ml-20 justify-center gap-4'>
                            <AlertBtn />
                            <img src={UpDownBtn} alt="up-down-tn" className='w-5 h-5'/>
                        </div>
                    </div>

                </div>
            </div>
            
            
        </form>
    </div>
    
  )
}

export default AddEvents