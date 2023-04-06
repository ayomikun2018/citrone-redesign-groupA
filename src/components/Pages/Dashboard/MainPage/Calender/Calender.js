import React, { useState } from 'react';
import * as PrevIcon from "react-icons/gr";
import * as NextIcon from "react-icons/gr";
import PrevIcons from "../../DashboardAssets/shape4.svg"
import NextIcons from "../../DashboardAssets/shape3.svg"

import { Link } from 'react-router-dom'
//import { GlobalContext } from 
import eventData from './eventData';



const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('')
  const [events, setEvents] = useState({eventData});  //use local storage for this
  const [selectDate, setSelectDate] = useState()
  
  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setDate(prevDate => new Date(prevDate.getFullYear() - 1, 0, 1));
  };
 
  const handleNextYear = () => {
    setDate(prevDate => new Date(prevDate.getFullYear() + 1, 0, 1));
  };


  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= 7; i++) {
      days.push(i);
    }

    return days;
  };
  const days = getDaysInMonth();


  // Get a day of the week
  const getCurrentDay = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(); 
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }



  //Get every day of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   


  const handleAddEvent = () => {
    // Open modal or navigate to new page to add event information
  };

  return (
    <React.Fragment>
    <div className="w-96 h-fit bg-white left-12 top-8 drop-shadow-md relative rounded-xl">
      <div className="flex justify-between">

        {/*month-year function  */}
        <div className="flex pt-6 pl-2 ">{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}<img src={NextIcons} alt="nextIcon" onClick={handleNextYear} className="w-4 h-4 fill-red-500 mt-1 ml-2"/></div>
        
      
  
        <div className=" left-72 justify-end absolute cursor-pointer pt-5">
          {/* <button onClick={handlePrevYear} ><PrevIcon.GrFormPrevious className="w-8 h-8 text-blue-500 "/></button> */}
          <button onClick={handlePrevMonth}><img src={PrevIcons} alt= 'prevIcon' className=" w-5 h-5 fill-red-500 mt-2 mr-6"/></button>
          <button onClick={handleNextMonth}><img src={NextIcons} alt='nextIcon' className="w-5 h-5 fill-red-500 mt-2"/></button>
          {/* <button onClick={handleNextYear}><NextIcon.GrFormNext className="w-8 h-8 fill-red-500"/></button> */}
        </div>
      </div>

{/* Get days of the week */}
      <div className='w-96 h-96 flex  place-content-center text-xs font-medium'>
      <ul className='flex float-right gap-9 p-3'>
        {
          daysOfWeek.map(day => (
            <li key={day}>{day}</li>
          ))
        }
      </ul>
      </div>

  
      <div className=" absolute w-full grid grid-cols-7 top-36">
        {days.map((day, index) => (
          <div key={index} className="h-4 grid place-content-center text-sm -mt-10">
            <h1 className=" h-6 w-6 mt-16 al rounded-md text-center mb-4 text-black font-bold hover:bg-red-500 hover:text-white transition-all cursor-pointer" 
              onClick={() => {
                setSelectDate(date)
              }}
              >{day}
            </h1>
            
          </div>
        ))} 
      </div>
      <div className="grid">
        <div className=' w-full h-16 top-44 left-5 flex absolute'>
            <div className='grid bg-white mb-2'>
              <p className=" text-lg font-bold text-red-500 ml-3 mt-3 pl-2 -mb-2 pr-4">{date.getDate()}</p>
              <p className=" text-sm text-red-500 ml-2 pl-2 mt-2 pr-4 pb-3">{getCurrentDay()}</p>
              
            </div>
            <div className='absolute w-1 h-16 ml-14 bg-red-500 active:'></div>

            <div className='grid bg-slate-100 w-9/12'>
              <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Live Session</p>
              <p className="text-sm text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00Pm</p>
            </div>
        </div>
          <div className='grid w-9/12 h-16 bg-slate-100 top-64 left-20 absolute'>
            <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Peer to Peer Learning</p>
            <p className="text-sm text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00Pm</p>
          </div>

      </div>

      <div className='w-10/12 h-16 flex items-center top-96 left-20 absolute'>
        <Link to= "/addevents"><button onClick={handleAddEvent} 
          className=" w-72 h-16 bg-red-500 text-white pl-10 pr-10 text-sm text-center hover:bg-red-500 rounded-xl align-center" 
          > Add Event
        </button>
        </Link>
      </div>
      
    
    </div>

    <div>

            
    </div>
    </React.Fragment>
  );
};

export default Calendar;
