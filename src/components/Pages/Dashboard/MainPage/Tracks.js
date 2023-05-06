import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data_ from "./TracksData"
import Modal from './Modal'


const Tracks = () => {

    const [TracksData, setTracksData] = useState(Data_)


  return (
    <React.Fragment>
        <div className='flex'>
            <div className='ml-4'>
                <div className='flex space-x-66 gap-96 mt-16'>
                    <p className=' -ml-5 p-1 font-medium' style={{ fontSize: '18px'}}>Course You’re Taking</p>
                    <Link to="/"><p className=' pb-2 text-sm font-semi-bold text-red-500 ml-16' >View All <span>&#62;</span> </p></Link>
                </div>
                <div className=" -ml-4 mt-4 flex space-x-1 ">
                    {
                        Data_.map((value, index) => {
                            return (
                                <div className='w-80 h-64 bg-[#ffffff] drop-shadow-md rounded-xl mr-6 'style={{ height: "18rem", width: "22rem"}}
                                key={index}
                                >
                                <img src={value.img} alt='Course Image' className=" h-fit" style={{  width: "22rem"}}/>
                                
                                <div className='flex space-x-30 gap-14' >
                                    <div className='' >
                                        <p className='font-medium ml-4 mt-2 p-1 font-poppins' style={{ fontSize: "20px"}}>{value.course}</p> 
                                        <p className='ml-4 mt-0 p-1 font-semi-bold font-poppins' style={{ fontSize: "18px"}}>{value.level}</p>
                                    </div>
                                    <span className=' text-xls absolute bottom-12 ml-72'>{value.icon}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                 {/* Pop-up area or modal side */}
                 <p className=' -ml-4 mt-10  font-medium' style={{ fontSize: '18px'}}>Course Progress</p>
                 <Modal /> 
            </div>
                   
            
        </div>
    </React.Fragment>
  )
}

export default Tracks
