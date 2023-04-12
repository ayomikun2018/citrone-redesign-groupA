import React, { useState } from 'react';
import './RepeatButton.css'
import Marked from '../../DashboardAssets/shape2.svg'


function RepeatButton() {

  const [showModal, setShowModal] = useState(false);
  const [repeatOption, setRepeatOption] = useState('');
  const repeatOptions = [[<img src={Marked} className='gap-6 -ml-6 -pl-12 -mb-4'/>,'Never'], 'Everyday', 'Every week', 'Every two weeks', 'Every month', 'Every year', 'Custom'];

  const handleOptionClick = (option) => {
    setRepeatOption(option);
    setShowModal(false);
  };

  return (
    <div className=" ">
      <button className=' text-gray-400 ml-0' onClick={() => setShowModal(true)}>Never</button>
      {showModal && (
        <div className="repeat-modal z-30">
          <div className="repeat-modal-content">
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
          <div className="repeat-modal-background" onClick={() => setShowModal(false)} />
        </div>
      )}
      {/* <p>You selected: {repeatOption}</p> */}
    </div>
  );
}

export default RepeatButton;
