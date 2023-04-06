import React from 'react';

function Modal({ onClose, onTimeClick }) {
  const handleTimeClick = (time) => {
    onTimeClick(time);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Choose event time</h2>
        <div className="time-list">
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <div key={hour}>
              <span onClick={() => handleTimeClick(`${hour}:00`)}>
                {hour}:00
              </span>
              <span onClick={() => handleTimeClick(`${hour}:30`)}>
                {hour}:30
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
