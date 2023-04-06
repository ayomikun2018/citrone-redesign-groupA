import React, { useState } from 'react'
import Ellipse from '../DashboardAssets/Ellipse 136.svg'
import Chats from './CommChatData'
import SendVector from '../DashboardAssets/Vector.svg'
import Calender from './Calender/Calender'
import Navbar from '../../../Navigation/Navbar/Navbar'



const CommunityChat = () => {

  const [chats, setChat] = useState(Chats)
  const [userMessage, setUserMessage] = useState("")
  const [user, setUser] = useState("")

  return (
    <React.Fragment>
      <div className='-mt-60 ml-4 list-item w-2/3 min-w-max h-auto border-l bg-transparent border-slate-300 '>
        <div className=' z-0 flex w-96 h-24 ml-12 -mt-10 bg-white drop-shadow-md p-1 rounded-xl '>
          <img src={Ellipse} alt={Ellipse} className='w-14 h-14 mt-2 p-1'/>
          <p className='text-base p-1 mt-6 ml-6 italic whitespace-nowrap'>Announce something to your class</p>
          <div className='absolute w-24 flex left-52'>
            <p className='text-xs p-1 mt-14 ml-12 font-semi-bold'>Cancel</p>
            <button className=' w-28 h-6 p-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg mt-14 flex items-center space-x-6'>Post</button>
          </div>
        </div>

        <div className=''>
        {
          chats.map((element, value) => {
            return (
              <div 
              className='grid w-96 h-52 ml-12 mt-6 mr-12  bg-white p-1 rounded-xl border border-slate-300 drop-shadow-md'
              key={value}
              onClick={() => {}}
              >
                <div className="flex">
                  <img src={element.image} alt={element.image} className='w-14 h-14 mt-1  p-1'/>
                  <div className='ml-10 mt-1'>
                    <p className='text-medium font-semi-bold whitespace-nowrap p-1'>{element.name}</p>
                    <p className='text-sm font-semi-bold whitespace-nowrap leading-1 p-1'>{element.date}</p>
                  </div>
                  <div className='w-96 mt-2 ml-0 absolute'>
                    <p className='text-xs p-4 mt-12 font-semi-bold leading-4'>{element.Comment}</p>
                    <div className='w-96 border-t-2 border-slate-300 -mt-2 -ml-1'></div>

                  </div>
                </div>
                <div className=" mt-40  flex absolute">
                  
                    <img src={element.image} alt={element.image} className='w-8 h-8 ml-2 '/>
                    <input 
                      type="text" 
                      value=""
                      onChange={(e) =>  setUserMessage(e.target.value)}
                      className="  relative ml-3 z-0 p-2 w-80 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " 
                      placeholder="Write a reply here..." 
                     
                  />
                    <button><img src={SendVector} alt={SendVector} className='absolute z-20 top-3 right-2' onClick={() => setUser(userMessage) }/> </button>
                    
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