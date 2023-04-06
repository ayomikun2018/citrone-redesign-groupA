import React, { useState } from 'react';
import PrevIcons from "../../DashboardAssets/shape4.svg"
import NextIcons from "../../DashboardAssets/shape3.svg"


function EventCalender({ onTimeClick, handleDateModalClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  

  const handleDateClick = (day) => {
    onTimeClick(day);
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      if (direction === 'prev') {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

  const days = [];
  let day = 1;

  // Add padding for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  // Add days of the month
  while (day <= daysInMonth) {
    const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
    const isSelected = day === selectedDate;
    days.push(
      <div key={day} className={`day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}`} onClick={() => handleDateClick(day)}>
        {day}
      </div>
    );
    day++;
  }

  // Add padding for days after the last day of the month
  for (let i = lastDayOfMonth; i < 6; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="calendar-nav">
          <button onClick={() => handleMonthChange('prev')}><img src={PrevIcons} alt= 'prevIcon' className=" w-5 h-5 fill-red-500 mt-2 mr-6"/></button>
          <button onClick={() => handleMonthChange('next')}><img src={NextIcons} alt='nextIcon' className="w-5 h-5 fill-red-500 mt-2"/></button>
        </div>
        <div className="event-editor">
          <h2>{selectedDate ? `${year}-${month + 1 < 10 ? '0' + (month + 1) : month + 1}-${selectedDate < 10 ? '0' + selectedDate : selectedDate}` : 'None'}</h2>
        </div>
        <h1>{`${year}-${month + 1 < 10 ? '0' + (month + 1) : month + 1}`}</h1>
        <div className="calendar">
          <div className="calendar-header">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar-days">{days}</div>
        </div>
        
      </header>
    </div>
  )
  }
export default EventCalender