import React, { useState } from 'react';
import PrevIcons from "../../DashboardAssets/shape4.svg"
import NextIcons from "../../DashboardAssets/shape3.svg"
import './Calender.css'
import { Link } from 'react-router-dom'
//import { GlobalContext } from 
import eventData from './eventData'
import AddEvents from '../AddEvent/AddEvents'


const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('')
  const [selectDate, setSelectDate] = useState()


  

  // Calender starts here
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
   
  

  return (
    <React.Fragment>
    <div className=" bg-[#fbfbfb] left-12 top-8 drop-shadow-md relative rounded-xl" style={{width: "26rem", height: "40rem"}}>
      <div className="flex mt-4 place-content-center justify-between">

        {/*month-year function  */}
        <div className="flex pt-6 pl-5 ml-4 text-sm font-medium ">{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}<img src={NextIcons} alt="nextIcon" onClick={handleNextYear} className="w-4 h-4 mt-0 ml-1"/></div>
        
      
  
        <div className=" left-80 justify-end absolute cursor-pointer pt-4">
          {/* <button onClick={handlePrevYear} ><PrevIcon.GrFormPrevious className="w-8 h-8 text-blue-500 "/></button> */}
          <button onClick={handlePrevMonth}><img src={PrevIcons} alt= 'prevIcon' className=" w-5 h-5 fill-red-500 mt-2 mr-6"/></button>
          <button onClick={handleNextMonth}><img src={NextIcons} alt='nextIcon' className="w-5 h-5 fill-red-500 mt-2"/></button>
          {/* <button onClick={handleNextYear}><NextIcon.GrFormNext className="w-8 h-8 fill-red-500"/></button> */}
        </div>
      </div>

        {/* Get days of the week */}
      <div className=' flex mt-4 place-content-center text-xs font-medium'>
        <ul className='flex float-right gap-8 p-3'>
          {
            daysOfWeek.map(day => (
              <li key={day}>{day}</li>
            ))
          }
        </ul>
      </div>

  
      <div className=" absolute place-content-center text-sm left-8 gap-8 grid grid-cols-7 top-32">
        {days.map((day, index) => (
          <div key={index} className="h-4 grid place-content-center text-sm -mt-10">
            <h1 className="h-6 w-6 mt-16 rounded-md text-center text-sm mb-4 text-black font-semibold  hover:bg-red-500 hover:text-white transition-all cursor-pointer" 
              onClick={() => {
                setSelectDate(date)
              }}
              >{day}
            </h1>
            
          </div>
        ))} 
      </div>
      <div className="grid">
        <div className=' w-full h-16 top-44 flex absolute'>
          <div className='grid mb-2  ml-3 '>
            <p className=" text-lg font-bold text-[#f64f59] ml-3 mt-3 pl-2 -mb-3 pr-4">{date.getDate()}</p>
            <p className=" text-xs text-[#f64f59] ml-2 pl-2 mt-2 pr-4 pb-3">{getCurrentDay()}</p>
            
          </div>

          <div className='grid bg-[#f6f6f6] w-9/12 h-16 absolute gap-2 left-20 border-l-4 border-[#f64f59] rounded-r-lg'>
            <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Live Session</p>
            <p className="text-xs text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00PM</p>
          </div>
        </div>
          <div className=' grid bg-[#f6f6f6] w-9/12 h-16 absolute gap-2 left-20 top-64'>
            <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Peer to Peer Learning</p>
            <p className="text-xs text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00PM</p>
          </div>

          <div className='live-session flex w-full h-16 absolute '>
            <div className='grid  ml-3 -gap-1 '>
              <p className=" text-lg font-bold text-black ml-3 mt-3 pl-2 -mb-2 pr-6">{date.getDate()}</p>
              <p className=" text-xs text-black ml-2 pl-2 mt-2 pr-6 pb-3">{getCurrentDay()}</p>
            </div>

            <div className='grid bg-[#f6f6f6] w-9/12 h-16 absolute gap-3 left-20  '>
              <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Live Session</p>
              <p className="text-xs text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00PM</p>
            </div>
          </div>
          <div className='peer-learning grid bg-[#f6f6f6] w-9/12 h-16 absolute gap-2 left-20'>
            <p className=" text-sm font-medium text-black mt-3 ml-4 pl-2 pr-4">Peer to Peer Learning</p>
            <p className="text-xs text-black ml-4 pl-2 pr-4 pb-3">{date.getHours()}: 00PM</p>
          </div>
        </div>
            {/*  */}
        
      </div>

    <div>
            
    </div>
    </React.Fragment>
  );
};

 
    
  export const AddEventButton = (props) => {
    
      return (
        <div style={{ position: "absolute", bottom: "4rem", right: "-12rem", width: "fit-content" }}>
        
          {/* <Link to= "/dashboard"> */}
            <button  
              onClick={props.showAddEventModal} 
              className=" w-80 add-event-btn flex h-16 justify-center items-center bg-[#f64f59] text-white pl-8 pr-8  text-sm text-center hover:bg-red-500 rounded-xl align-center"
              style={{ }}
            > Add Event
            </button>
        </div>

        
       
      )
    }
    
export default Calendar;
