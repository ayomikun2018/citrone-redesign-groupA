// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import DashImage from "../DashboardAssets/Rectangle 24.svg"
// import "./MainPage.css"
// import Tracks from './Tracks.js'
// import CommunityChat from './CommunityChat'


// const MainPage = () => {

//   return (
//     <React.Fragment >

//       <div className='flex p-10 mt-10 bg-slate-300 flex-1  ml-52' style={{ width: 'calc(100% - 16.66667%)', height: '' }}>
//         <div className=' ' style={{ width: '50rem'}}>
          
//           {/* first div */}
//           <div className=' pl-4 font-poppins mt-10 ml-14 ' style={{}}> 
          
//               <div className='w-60 h-40  ' style={{ }}>
//                 <h3 className=' font-semibold' style={{ fontSize: '22px'}}>Hi, Dolamu</h3>
//                 <p className=' font-medium leading-loose mt-5' style={{ fontSize: '18px'}}>Your Recent Activity</p>
//               </div> 

//               <div className='flex flex-wrap -mt-14'>
//                 <div className='  z-0 bg-white drop-shadow-md rounded-l-xl p-7' style={{ width: "45.625rem", height: " 17.125rem"}}>
//                   <h3 className=' p-1 font-medium -mt-2 whitespace-nowrap' style={{ fontSize: '18px'}}>Module 12: Prototype Phase 3</h3>
//                   <p className='text-base p-1 mt-2' style={{ fontWeight: '400'}}>Assignment 1 of 2</p>
//                   <Link to='/assignments'>
//                     <button className='w-38 h-15 p-1 bg-[#f64f59] hover:bg-red-600 text-white font-semi-bold py-5 px-12 rounded-2xl mt-14'style={{ fontSize: '18px'}}>Resume</button>
//                   </Link>
//                 </div>  
//                 <div className=' z-0 -ml-36'>
//                   <img src={DashImage} alt='Display Module 12 img' className='' style={{ width: "22.8125rem", height: " 17.125rem", marginLeft: "141%", marginTop: "-274px"}}/>
//                 </div>
//               </div>
            
//               <Tracks />

//           </div>

//           {/* second div */}
         
//         </div>

//           <div className=' w-full p-10 mt-0 h-screen bg-[#fbfbfb]'>
//                 <CommunityChat /> 
//           </div>
//       </div>  
     

//     </React.Fragment>
//   )
// }

// export default MainPage



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashImage from "../DashboardAssets/Rectangle 24.svg"
import "./MainPage.css"
import Tracks from './Tracks.js'
import CommunityChat from './CommunityChat'


const MainPage = () => {

  return (
    <React.Fragment >

      <div className='flex flex-row p-10 mt-10 flex-1' style={{ width: 'calc(100% - 16.66667%)', height: '', marginLeft: '16rem' }}>
        <div className='flex-1' style={{}}>
          
          {/* first div */}
          <div className='pl-4 font-poppins  mt-10 ml-0' style={{ width: '40rem' }}> 
          
            <div className='w-60 h-40' style={{}}>
              <h3 className='font-semibold' style={{ fontSize: '22px' }}>Hi, Dolamu</h3>
              <p className='font-medium leading-loose mt-5' style={{ fontSize: '18px' }}>Your Recent Activity</p>
            </div> 

            <div className='flex flex-wrap -mt-14'>
              <div className='z-0 bg-white drop-shadow-md rounded-l-xl p-7' style={{ width: "45.625rem", height: "17.125rem" }}>
                <h3 className='p-1 font-medium -mt-2 whitespace-nowrap' style={{ fontSize: '18px' }}>Module 12: Prototype Phase 3</h3>
                <p className='text-base p-1 mt-2' style={{ fontWeight: '400' }}>Assignment 1 of 2</p>
                <Link to='/assignments'>
                  <button className='w-38 h-15 p-1 bg-[#f64f59] hover:bg-red-600 text-white font-semi-bold py-5 px-12 rounded-2xl mt-14' style={{ fontSize: '18px' }}>Resume</button>
                </Link>
              </div>  
              <div className='-ml-36 z-30'>
                <img src={DashImage} alt='Display Module 12 img' className='' style={{ width: "22.8125rem", height: "17.125rem", marginLeft: "141%", marginTop: "-274px" }} />
              </div>
            </div>
            
            <Tracks />

          </div>

        </div>

        {/* second div */}
        <div className='flex-1'>
          <div className='w-full p-10 mt-0 h-screen bg-pink-300 ml-28' style={{}}>
            <CommunityChat /> 
          </div>
        </div>

      </div>  
     

    </React.Fragment>
  )
}

export default MainPage
