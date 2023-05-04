import React, { useState } from 'react'
import Ellipse from '../DashboardAssets/Ellipse 136.svg'
import Chats from './CommChatData'
import SendVector from '../DashboardAssets/Vector.svg'
import Calender from './Calender/Calender'
import Navbar from '../../../Navigation/Navbar/Navbar'
import './MainPage.css'




const CommunityChat = () => {

  const [chats, setChat] = useState(Chats)
  const [userMessage, setUserMessage] = useState("")
  const [user, setUser] = useState("")

  return (
    <React.Fragment>
      {/* has some css in MainPage.css */}
      <div className='relative community-chat1 list-item min-w-max border-l bg-transparent border-slate-400 font-poppins'>
        <div className=' announce-1 z-10 relative top-30 flex bg-[#fbfbfb] shadow-md p-1 rounded-xl' style={{ marginLeft: '3rem' }}>
          <img src={Ellipse} alt={Ellipse} className='w-16 h-16 mt-0 p-1'/> 
          <p className='text-sm p-1 mt-4 ml-3 italic whitespace-nowrap font-poppins'>Announce something to your class</p>
          <div className='absolute w-24 gap-4 bottom-1 flex left-52'>
            <p className='text-xs p-1 mt-14 ml-20 font-semi-bold'>Cancel</p>
            <button className=' w-28 h-7  p-3 bg-[#f64f59] text-white text-xs rounded-lg mt-14 flex items-center space-x-6 gap-6'>Post</button>
          </div>
        </div>

        <div className=''>
        {
          chats.map((element, value) => {
            return (
              <div 
              className='announce-list grid relative h-52 ml-12 mt-6 mr-12  bg-[#f1f1f1] p-1 rounded-xl border border-slate-300 drop-shadow-md '
              key={value}
              onClick={() => {}}
              >
                <div className="flex">
                  <img src={element.image} alt={element.image} className='w-14 h-14 ml-2 mt-0  p-1'/>
                  <div className='ml-8 mt-1'>
                    <p className=' text-sm font-semibold whitespace-nowrap p-1 font-poppins'>{element.name}</p>
                    <p className='text-sm font-normal whitespace-nowrap leading-1 -mt-1 p-1'>{element.date}</p>
                  </div>
                  <div className='w-96  ml-0 absolute'>
                    <p className='text-xs p-1 mt-14 ml-3 font-semi-bold leading-4 tracking-wide'>{element.Comment}</p>
                    <div className='announce-line border-t-2 border-slate-300 mt-0 -ml-1'></div>

                  </div>
                </div>
                <div className=" top-40  flex absolute">
                  
                    <img src={element.image} alt={element.image} className='w-8 h-8 ml-2 -mt-1 '/>
                    <input 
                      type="text" 
                      value=""
                      onChange={(e) =>  setUserMessage(e.target.value)}
                      className="announce-input  relative ml-3 -mt-2 z-0 pl-3  text-xs bg-transparent rounded-lg border border-gray-400 focus:border-none dark:placeholder-gray-400 dark:text-black " 
                      placeholder="Write a reply here..." 
                     
                  />
                    <button><img src={SendVector} alt={SendVector} className='absolute w-4 h-4 z-20 top-1 right-2' onClick={() => setUser(userMessage) }/> </button>
                    
                </div>
              </div>
            )
          })
        }
        </div>   
        <Calender /> 
      </div>
      
    </React.Fragment>
  )
}

export default CommunityChat