import React, { useState, useEffect } from 'react'
import Smiley from '../DashboardAssets/smiley1.PNG'
import Smiley2 from '../DashboardAssets/smiley2.PNG'
import Ellipse from '../DashboardAssets/Ellipse 131.svg'
import './Modal.css'


  
  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 6000);
  // })
  
  import './Modal.css';
  
  const ModalItem = ({ image, percent, performance, comment, one, two, submitPercent, comment2, number, number2, task }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleMouseEnter = () => {
      setShowModal(true);
    };
  
    const handleMouseLeave = () => {
      setShowModal(false);
    };
  
    return (
     
      <React.Fragment>
      <div>
      </div>
      <div className="flex w-4/5 h-20 -ml-4 mt-4 border border-slate-300 bg-[#f1f1f1] drop-shadow rounded-xl hover:bg-[#f1f1f1] cursor-pointer hover:transition-all hover:duration-700 hover:delay-500" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
        
        <div className=' w-12 h-12 mt-4 ml-10 bg-[#f64f59] rounded-full flex items-center justify-center shadow-sm'>
          <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#f1f1f1] shadow-inner '>
          <p className='text-xs flex items-center'>{percent}</p>
          </div>
        </div>
        <p className='text-base flex items-center ml-10'>{performance}</p>

        {showModal && (
          <div className=" animate-spin transition-all duration-700 delay-500  modal ">
           
            <p className='flex justify-center items-center '>{image}</p>
            <div className='w-18 p-1'>
              <p className='text-sm flex items-center justify-center ml-1o'>{comment}</p>
            </div>
            <div className='p-2 text-sm ml-6 -mt-2'>
              <p className='leading-loose'>{one}<span className='text-[#f64f59]'>{percent}</span></p>
              <p className='leading-loose'>{two}<span className='text-[#f64f59]'>{submitPercent}</span></p>
              <p className='leading-loose'>{task}<span className='text-[#f64f59]'>{number}</span></p>
              <p className='leading-6 mt-4'>{comment2}</p>
            </div>
            
          </div>
        )}
      </div>
      </React.Fragment>
    );
  };
  
  const App = () => {
    return (
      <div className="container">
        <ModalItem
          image={
            <div className='w-12 h-12 mt-4 ml-10 bg-[#f64f59] rounded-full flex items-center justify-center shadow-sm'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full bg-white shadow-inner '>
            <p className='text-xs flex items-center'>100%</p>
            </div>
          </div>

          }


          percent="100%"
          performance= "Average performance"
          comment="You've been doing really great!"
          one="Classes attended: "
          two= "Assignment Submitted: "
          submitPercent= "50%"
          comment2="Keep up the good work Dolamu!"
         

        />
        <ModalItem
          image= {<img src={Smiley} alt="smiley" className="w-16 h-16 " />}
          percent="100%"
          performance= "Class Attendance"
          comment="Yay! You have a perfect attendance record"
          one="Classes attended: "
          two= "Classes missed: "
          submitPercent= "20"
          comment2={<p className='mt-2'>Keep up the good work Dolamu. Remember that good attendance counts for your final assessment.</p>}
        />
        <ModalItem
          image= {<img src={Smiley2} alt="smiley2" className="w-16 h-16 "/>}
          percent="50%"
          performance= "Assignment Submitted"
          comment= {<p className='white-space: nowrap'>You still have some assignment to catch up on</p>}
          one="Total assignment: "
          two= "Total Submitted: "
          submitPercent= "30"
          comment2= {<p className='-mt-2'>Let's get back into Dolamu. You've got this.</p>}
          number="15"
          number2="0"
          task= "Task in progress: "
        />
      </div>
    );
  };
  
  export default App;
  


