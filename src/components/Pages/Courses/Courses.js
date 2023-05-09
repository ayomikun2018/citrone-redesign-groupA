import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import computer from '../Courses/Assets/PressingKeyboard.png'
import Notes from './Assets/Notes.png'
import Notes2 from './Assets/Notes2.png'
import ProgressBar from "./Assets/Progress Bar@2x.png"
import ProgressBar2 from "./Assets/Progress Bar2.png"
import { Link } from "react-router-dom";
import Groupwork from './Assets/Groupwork.png'
import DesignBook from './Assets/DesignBook.png'
import YouTube from './Assets/YouTube.png'
import RectangleBox from './Assets/Rectangle.png'
import Overlay from './Assets/Overlay.png'
import { faArrowRight, faBars, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calender from './Calender'
import './CourseList.css'



const Courses = () => {
  return (
    <div className="relative font-poppins flex flex-col">
      <Navbar />
      <Sidebar />
      <div className="ml-80 my-36"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/courses"><span className="text-[#F64F59]">Courses </span></Link></div>
      <div className="h-sceen absolute mt-48 ml-80">
        <div>
          <p className="text-lg mb-3 ">Continue from where you stopped</p>
          <a href='./coursecontent'>
            <img className=' h-64 w-4/5' src={computer}></img>
          </a>
          <p className="absolute top-16 text-white text-base ml-6 font-meduim">Module 10: Responsive Design</p>
          <img src={ProgressBar} class="absolute top-60 w-4/5 h-3 pl-6 pr-6"></img>
          <div className="absolute top-60 mt-5 ml-6 space-x-80 text-xs text-white flex">
            <p className="text-xs">70% of 100% completed</p>
            <p className="text-xs">Resume</p>
          </div>
        </div>
        <input type='text' placeholder='Search' className='absolute h-12 w-96 top-5 left-3/4 ml-64 index-0 pl-16 pt-1 border border-grey rounded-xl '></input>
        <FontAwesomeIcon icon={faSearch} className='absolute top-9 text-gray-300 left-3/4 ml-72 w-5 h-5' />
        <h1 className="text-base absolute top-14 -right-48 font-extrabold mt-10 mb-10">My schedule</h1>
        <a h>
        <FontAwesomeIcon icon={faPlusCircle} id="plus" className='absolute ml-96 left-full top-24 text-[#F64F59] w-8 h-5' />
        </a>
        <div class="absolute top-32 index-0 left-3/4 ml-52 mt-3">

          <Calender />
        </div>
        <h1 className="text-2xl font-extrabold mt-8">Course Content</h1>
        <p className="text-base font-extrabold text-gray-500 mt-3">UI/UX Intermediate Level</p>
        <div className="grid grid-cols-3 pt-4">
          <a href='./coursecontent'>
            <img src={DesignBook} className="h-32 w-56" alt='Designbook'></img>
          </a>
          <a href='./coursecontent'>
            <img src={Groupwork} alt='groupdesign' className="h-32 w-56 ml-2"></img>
          </a>
          <a href='./coursecontent'>
            <img src={Notes} alt='Notes' className="h-32 w-56 ml-1"></img>
          </a>
          <p className="text-sm pt-2 font-bold text-gray-500">Module 1: Introduction to<p className="text-sm font-bold">design</p></p>
          <p className="pl-1 text-sm pt-2 font-bold  text-gray-500">Module 2: Sketching</p>
          <p className="pl-2 text-sm pt-2 font-bold text-gray-500">Module 3: Ideation</p>
          <h1 className="text-base absolute top-96 -right-56 font-extrabold mt-32 mb-6">Upcoming Events</h1>

          <a href='#'>
            <FontAwesomeIcon icon={faArrowRight} class="absolute top-96 mt-20 text-[#F64F59] left-3/4 ml-44 w-8 h-5" />
          </a>
        </div>
        <div className='h-28 bg-pink-100 w-96 -right-3/4 mr-16 rounded-md index-0 absolute text-center pt-6 mb-14'>
          <h4>Module 3: Responsive Design </h4>
          <h4>Class resumes: 10am</h4>
          <h4 className="underline font-bold"><a>Join class here</a></h4>
        </div>
        <h1 className="text-2xl font-extrabold mt-8">Recorded Live Sessions</h1>
        <div className="grid grid-cols-3 pt-4 relative">
          <a href='./recordedlivesessions'>
          <img src={DesignBook} className=" h-32 w-56 " alt='Designbook'></img>
          <img src={YouTube} alt='youtubelogo' className="absolute top-14 left-20 w-16 h-14"></img>
          </a>
          <a href='./recordedlivesessions'>
          <img src={Notes} alt='Notes' className=" h-32 w-56 ml-2"></img>
          <img src={YouTube} alt='youtubelogo' className="absolute top-14 left-80 ml-6 w-16 h-14"></img>
          </a>
          <a href='./recordedlivesessions'>
          <img src={Groupwork} alt='groupdesign' className="h-32 w-56 ml-3"></img>
          <img src={YouTube} alt='youtubelogo' className="absolute  top-14 left-96 ml-52 w-16 h-14"></img>
          </a>
          <p className="text-sm pt-2 font-bold  text-gray-500">Module 1: Introduction to<p class="text-sm font-bold">design</p></p>
          <p className="pl-1 text-sm pt-2 font-bold  text-gray-500">Module 2: Sketching</p>
          <p className="pl-2 text-sm pt-2 font-bold  text-gray-500">Module 3: Ideation</p>
          <a href='#'>
            <FontAwesomeIcon icon={faArrowRight} class="absolute top-8 mt-10 text-[#F64F59] left-3/4 ml-44 w-8 h-5" />
          </a>
        </div>
        <h1 className="text-2xl font-extrabold mt-8">Quiz</h1>
        <div className="pt-4 relative">
          <img src={RectangleBox} alt='rectangle' class="pb-5 w-4/5"></img>
          <p className="absolute top-9 font-bold ml-4 text-sm">Module 3: Responsive Design</p>
          <a href='#' class="text-[#F64F59] absolute top-9 left-40 ml-80 underline text-sm">Start Quiz</a>
          <img src={RectangleBox} alt='rectangle' class="w-4/5 h-16"></img>
          <p className="absolute bottom-5 ml-4 text-sm font-bold">Module 4: Responsive Design</p>
          <a href='#' class="text-[#F64F59] absolute bottom-5 left-40 ml-80 underline text-sm">Start Quiz</a>
        </div>
        <h1 className="text-2xl font-extrabold mt-8">Completed Course</h1>
        <div className="relative">
          <p className='absolute text-white pl-5 pt-3 text-sm'>UI/UX Beginner Level</p>
          <a href="/courselist">
            <FontAwesomeIcon icon={faBars} class='absolute top-20 w-10 h-10  z-20 left-80 ml-36 text-white' />
          </a>
          <img src={Overlay} id="overlay2" alt='overlay' className='absolute left-60 h-64 w-44 overflow-hidden'></img>
          <a href="/courselist">
          <img src={Notes2} alt='Notes' class="mt-3 mb-2 h-64 w-4/5"></img>
          </a>
          <p className="mb-6 text-base font-bold">1.3 UI/UX Beginner Level</p>
          <p className="text-xs absolute top-32 text-white left-80 ml-32">13 Modules</p>
          <img src={ProgressBar2} class="absolute top-52 w-4/5 h-3 pl-6 pr-6"></img>
          <div className="absolute top-52 mt-5 ml-6 space-x-96 text-white">
            <p className="text-xs">100% completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;
