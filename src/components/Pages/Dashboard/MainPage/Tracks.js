import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data_ from "./TracksData"
import Modal from './Modal'


const Tracks = () => {

    const [TracksData, setTracksData] = useState(Data_)


  return (
    <React.Fragment>
        <div className='flex'>
            <div className='ml-64'>
                <div className='flex space-x-66 gap-96 mt-10'>
                    <p className=' -ml-5 p-1 text-base font-medium'>Course You’re Taking</p>
                    <Link to="/"><p className=' pb-3 text-sm font-semi-bold text-red-500 ml-7' >View All <span>&#62;</span> </p></Link>
                </div>
                <div className=" -ml-4 mt-4 flex space-x-2 ">
                    {
                        Data_.map((value, index) => {
                            return (
                                <div className='w-80 h-64 bg-[#ffffff] drop-shadow-md rounded-xl mr-6'
                                key={index}
                                >
                                <img src={value.img} alt='Course Image' className=" w-fit h-fit"/>
                                
                                <div className='flex space-x-30 gap-14' >
                                    <div className='' >
                                        <p className='text-lg font-medium ml-4 mt-2 p-1 '>{value.course}</p> 
                                        <p className='ml-4 -mt-1 p-1 text-base font-semi-bold'>{value.level}</p>
                                    </div>
                                    <div className='absolute bottom-12 left-72'>{value.icon}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                 {/* Pop-up area or modal side */}
                 <p className=' -ml-4 mt-10 text-base font-medium'>Course Progress</p>
                 <Modal /> 
            </div>
                   
            
        </div>
    </React.Fragment>
  )
}

export default Tracks
