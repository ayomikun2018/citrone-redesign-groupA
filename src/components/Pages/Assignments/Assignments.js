import React, { useState } from 'react';
import Modal from './Modal';

function EventPlanner() {
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

  return (
    <div>
      <p>Event time: {eventTime ? eventTime : 'Not set'}</p>
      <button onClick={handleEventTimeClick}>Set event time</button>
      {showModal && <Modal onClose={handleModalClose} onTimeClick={handleTimeClick} />}
    </div>
  );
}

export default EventPlanner;
