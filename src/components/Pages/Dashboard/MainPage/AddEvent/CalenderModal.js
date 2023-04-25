import React, { useState } from 'react';
import moment from 'moment'
import './CalenderModal.css'
import PrevIcon from "../../DashboardAssets/shape4.svg"
import NextIcon from "../../DashboardAssets/shape3.svg"

function CalenderModal({eventDate}) {
  const [showCalenderModal, setShowCalenderModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());

  const handlePrevMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };

  const toggleModal = () => {
    setShowCalenderModal(!showCalenderModal);
  };

  const handleEventDateClick = () => {
    setShowCalenderModal(true)
  }

  const renderCalendar = () => {
    const daysOfWeek = moment.weekdaysShort();
    const firstDayOfMonth = selectedDate.clone().startOf('month');
    const lastDayOfMonth = selectedDate.clone().endOf('month');
    const daysInMonth = lastDayOfMonth.date();
    const startingWeekday = firstDayOfMonth.weekday();
    const weeksInMonth = Math.ceil((daysInMonth + startingWeekday) / 7);

    const days = [];

    for (let i = 0; i < weeksInMonth; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        const day = i * 7 + j + 1 - startingWeekday;
        const date = selectedDate.clone().date(day);

        if (day > 0 && day <= daysInMonth) {
          week.push(
            <div
              className={`day ${date.isSame(moment(), 'day') ? 'today' : ''}`}
              key={day}
              onClick={() => console.log(`Clicked on ${date.format('YYYY-MM-DD')}`)}
            >
              {day}
            </div>
          );
        } else {
          week.push(<div className="empty" key={`${i}-${j}`} />);
        }
      }

      days.push(<div className="week" key={i}>{week}</div>);
    }

    return (
      <div className="start-calendar-modal bg-white font-poppins rounded-xl">
        <div className="flex space-x-20 items-center justify-center p-6 ">
          <div className="flex whitespace-nowrap gap-3 text-lg font-medium font-poppins ">{selectedDate.format('MMMM YYYY')} <img src={NextIcon} alt='next' className='w-3 h-3 mt-2 ml-2"'/> </div>
          <div className=' w-fit  cursor-pointer flex flex-wrap mt-3'>
            <button onClick={handlePrevMonth}><img src={PrevIcon} alt='prev' className=' w-6 h-6 -mt-5'/></button>
            <button onClick={handleNextMonth}><img src={NextIcon} alt='next' className=' w-6 h-6 -mt-6 ml-10'/></button>
          </div>
        </div>
        {/* Days of the week */}
        <div className=" start-calendar-days items-center justify-center grid grid-cols-7 font-poppins"
        onClick={handleEventDateClick}>
          {daysOfWeek.map((day) => (
            <div 
            className=" w-28 text-sm day-of-week flex justify-center text-gray-500" 
            key={day}>{day}</div>
          ))}
          <div className=' grid grid-cols-8 gap-12'>   {/* Days in the month */}
          {days}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div onClick={toggleModal} className=" grid">
      <button className='whitespace-nowrap w-20 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex items-center' 
      >{eventDate ? eventDate : 'Jan 5, 2023'}</button>
      {showCalenderModal && (
        <div className="start-modal">
          <div className="justify-between">
            {renderCalendar()}
            {/* <button onClick={toggleModal} >Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalenderModal;
