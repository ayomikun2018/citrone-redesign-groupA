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
    <div className="z-30 fixed -right-2 -bottom-96 w-32  h-fit  bg-white shadow-md rounded-lg font-poppins">
          <div className="flex">
            <span className="close" onClick={handleModalClose}> </span>
     
            
            <div className="">
              {Array.from({ length: 12 }, (_, i) => i).map((hour) => (
                <div key={hour}>
                   <span 
                   className='tracking-wide text-base font-normal leading-loose pl-4 pb-10 pt-4 font-poppins'
                   onClick={() => handleTimeClick(`${hour}:00`)}>
                    {hour}:00
                  </span> 
                  {/* <span 
                  className='text-sm font-medium leading-loose p-6 pt-4'
                  onClick={() => handleTimeClick(`${hour}:30`)}>
                    {hour}:00
                  </span> */}
                  
                </div>
              ))}
              
            </div>
            {/* to set day period */}
            <div className='grid'>
              
              <button 
              className=' z-30 absolute top-1 text-base  right-6 font-medium leading-loose p-4 w-9 h-8 bg-[#f64f59] text-black rounded-md flex items-center justify-center font-poppins'
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
