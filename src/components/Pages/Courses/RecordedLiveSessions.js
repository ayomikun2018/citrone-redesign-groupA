import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import video from "./Assets/myvideo.mp4"



const RecordedLiveSession = () => {
    return (
        <div className="relative font-poppins flex flex-col">
            <Navbar />
            <Sidebar />
            <div className="ml-80 my-36"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/courses"><span className="">Courses </span></Link> &gt;<Link to="./courselist"><span className="text-[#F64F59]">Recorded Live Sessions</span></Link></div>
            <div className="h-sceen absolute mt-48 ml-80">
            <h2 className='font-bold text-xl mb-3'>Module 1: Product design and design thinking</h2>
            <video loop controls className='w-3/5 mb-4'> <source src={video} type='video/webm'></source></video>


            <p className='text-base font-meduim'>In our previous classes, we defined Product Design as the process designers use to blend user needs with business goals
           to help  <br></br> brands make consistently successful products. This time we are going a step further, we will learn about the career landscape, 
            and <br></br> the foundation of great products and revisit the phases of the design thinking process.</p>
            </div>
            
          

            </div>
    )
    }

export default RecordedLiveSession;