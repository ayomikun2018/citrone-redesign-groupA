import React from 'react';

function Modal({ onClose, onTimeClick }) {
  const handleTimeClick1 = (time) => {
    onTimeClick(time);
  };

  return (
    <div className="modal">
      <div className="">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* <h2>Choose event time</h2> */}
        <div className="time-list">
          {Array.from({ length: 12 }, (_, i) => i).map((hour) => (
            <div key={hour}>
              <span onClick={() => handleTimeClick1(`${hour}:00`)}>
                {hour}
              </span>
              <span onClick={() => handleTimeClick1(`${hour}:30`)}>
                {hour}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
