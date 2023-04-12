import React, { useState } from 'react';
import './AlertBtn.css'
import Marked from '../../DashboardAssets/shape2.svg'


function AlertButton() {

  const [showModal, setShowModal] = useState(false);
  const [repeatOption, setRepeatOption] = useState('');
  const repeatOptions = [[<img src={Marked} className='gap-6 -ml-6 -pl-12 -mb-4'/>,'None'], 'At time of event', '5 minutes before', '10 minutes before', '15 minutes before', '30 minutes before', '1 hour before', '1 day before'];

  const handleOptionClick = (option) => {
    setRepeatOption(option);
    setShowModal(false);
  };

  return (
    <div className="">
      <button className=' text-gray-400 -ml-2 ' onClick={() => setShowModal(true)}>None</button>
      {showModal && (
        <div className="alert-modal z-30">
          <div className="alert-modal-content">
            <ul className=''>
              {repeatOptions.map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}
                className='pl-8 font-normal shadow-md whitespace-nowrap font-poppins'
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="alert-modal-background" onClick={() => setShowModal(false)} />
        </div>
      )}
      {/* <p>You selected: {repeatOption}</p> */}
    </div>
  );
}

export default AlertButton;
