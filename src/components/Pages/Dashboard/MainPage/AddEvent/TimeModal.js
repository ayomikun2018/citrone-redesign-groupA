import React, { useState } from 'react';

function Modal({ onTimeClick, showModal, handleModalClose }) {
  
  const [isAm, setIsAm] = useState(true)

  
  const handleTimeClick = (time) => {
    onTimeClick(time);
  };

  const handlePeriod = () => {
    setIsAm(!isAm);
    
  }

  return (
    <div className="z-30 fixed -right-2 -bottom-80 w-28 h-fit  bg-white shadow-md rounded-lg">
          <div className="flex">
            <span className="close" onClick={handleModalClose}>
              
            </span>
            
            <div className="">
              {Array.from({ length: 12 }, (_, i) => i).map((hour) => (
                <div key={hour}>
                   {/* <span onClick={() => handleTimeClick(`${hour}:00`)}>
                    {hour}
                  </span>  */}
                  <span 
                  className='text-sm font-medium leading-loose p-6 pt-4'
                  onClick={() => handleTimeClick(`${hour}:30`)}>
                    {hour}:00
                  </span>
                  
                </div>
              ))}
              
            </div>
            {/* to set day period */}
            <div className='grid'>
              
              <button 
              className=' absolute top-2 text-sm right-4 font-medium leading-loose p-4 w-8 h-8 bg-red-400 text-black rounded-lg flex items-center justify-center'
                onClick={ handlePeriod}>{isAm ? "AM" : "PM"}
               
              </button>
              {
                showModal && (
                  <span className=''>PM</span>

                )

                }
              
            </div>
          </div>
        </div>
  );
}

export default Modal;
