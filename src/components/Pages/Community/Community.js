import React from 'react';
import './Repeat.css';

function Cal() {
  // Define an array of days in the custom order
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  // Define a function to get the current day of the week and map it to the custom order
  const getCurrentDay = () => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const customDayIndex = (dayOfWeek + 5) % 7;
    return daysOfWeek[customDayIndex];
  };

  // Get the current day of the week
  const currentDay = getCurrentDay();

  // Render the calendar with the custom order of days
  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Render the current day of the week in bold */}
            {daysOfWeek.map(day => (
              <td key={day} className={day === currentDay ? 'bold' : ''}>
                {day}
              </td>
            ))}
          </tr>
          <tr>
            {daysOfWeek.map(day => (
              <td key={day}>2</td>
            ))}
          </tr>
          <tr>
            {daysOfWeek.map(day => (
              <td key={day}>3</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cal;
