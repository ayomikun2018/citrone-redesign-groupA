import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import computer from '../Courses/Assets/PressingKeyboard.png'
import Notes from './Assets/Notes.png'
import Notes2 from './Assets/Notes2.png'
import Groupwork from './Assets/Groupwork.png'
import DesignBook from './Assets/DesignBook.png'
import YouTube from './Assets/YouTube.png'
import RectangleBox from './Assets/Rectangle.png'
import Overlay from './Assets/Overlay.png'
import { faArrowRight, faBars, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calender from './Calender'
import ProgressBar from "./Assets/Progress Bar@2x.png"
import ProgressBar2 from "./Assets/Progress Bar2.png"
import { Link } from "react-router-dom";


const Courses = () => {
  return (
    <div class="relative font-poppins flex flex-col">
      <Navbar />
      <Sidebar />
      <div class="ml-72 my-36"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/courses"><span className="text-[#F64F59]">Courses </span></Link></div>
      <div class="h-sceen w-1/2 absolute mt-48 ml-72">
        <div>
          <p class="text-lg mb-3 ">Continue from where you stopped</p>
          <img class=' h-64 w-4/5' src={computer}></img>
          <p class="absolute top-16 text-white text-base ml-6 font-meduim">Module 10: Responsive Design</p>
          <img src={ProgressBar} class="absolute top-60 w-4/5 h-3 pl-6 pr-6"></img>
          <div class="absolute top-60 mt-5 ml-6 space-x-96 text-xs text-white flex">
            <p class="text-xs">70% of 100% completed</p>
            <p class="text-xs">Resume</p>
          </div>
        </div>
        <input type='text' placeholder='Search' class='absolute h-12 w-96 top-5 left-3/4 ml-64 index-0 pl-16 pt-1 border border-grey rounded-xl '></input>
        <FontAwesomeIcon icon={faSearch} class='absolute top-9 text-gray-300 left-3/4 ml-72 w-5 h-5' />
        <h1 class="text-base absolute top-14 -right-44 font-extrabold mt-10 mb-10">My schedule</h1>
        <FontAwesomeIcon icon={faPlusCircle} class='absolute ml-96 left-full top-24 text-[#F64F59] w-8 h-5' />


        <div class=" w-40 absolute top-32 index-0 left-3/4 ml-52 mt-3">
          <Calender />
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Course Content</h1>
        <p class="text-base font-extrabold text-gray-500 mt-3">UI/UX Intermediate Level</p>
        <div class="grid grid-cols-3 pt-4">
          <img src={DesignBook} class=" h-32 w-56" alt='Designbook'></img>
          <img src={Notes} alt='Notes' class="h-32 w-56"></img>
          <img src={Groupwork} alt='groupdesign' class="h-32 w-56"></img>
          <p class="text-sm pt-2 font-bold text-gray-500">Module 1: Introduction to<p class="text-sm font-bold">design</p></p>
          <p class="pl-1 text-sm pt-2 font-bold  text-gray-500">Module 2: Sketching</p>
          <p class="pl-2 text-sm pt-2 font-bold text-gray-500">Module 3: Ideation</p>
          <h1 class="text-base absolute top-96 -right-56 font-extrabold mt-32 mb-6">Upcoming Events</h1>

          <a href='#'>
            <FontAwesomeIcon icon={faArrowRight} class="absolute top-96 mt-20 text-[#F64F59] left-3/4 ml-44 w-8 h-5" />
          </a>
        </div>
        <div class='w-96 h-28 bg-pink-100 -right-3/4 mr-32 rounded-md index-0 absolute text-center pt-6 mb-6'>
          <h4>Module 3: Responsive Design </h4>
          <h4>Class resumes: 10am</h4>
          <h4 class="underline font-bold"><a>Join class here</a></h4>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Recorded Live Sessions</h1>
        <div class="grid grid-cols-3 pt-4 relative">
          <img src={DesignBook} class=" h-32 w-56" alt='Designbook'></img>
          <img src={YouTube} alt='youtubelogo' class="absolute top-14 left-20 w-16 h-14"></img>
          <img src={Notes} alt='Notes' class=" h-32 w-56"></img>
          <img src={YouTube} alt='youtubelogo' class="absolute top-14 left-80 ml-6 w-16 h-14"></img>
          <img src={Groupwork} alt='groupdesign' class="h-32 w-56"></img>
          <img src={YouTube} alt='youtubelogo' class="absolute  top-14 left-96 ml-52 w-16 h-14"></img>
          <p class="text-sm pt-2 font-bold  text-gray-500">Module 1: Introduction to<p class="text-sm font-bold">design</p></p>
          <p class="pl-1 text-sm pt-2 font-bold  text-gray-500">Module 2: Sketching</p>
          <p class="pl-2 text-sm pt-2 font-bold  text-gray-500">Module 3: Ideation</p>
          <a href='#'>
            <FontAwesomeIcon icon={faArrowRight} class="absolute top-8 mt-10 text-[#F64F59] left-3/4 ml-44 w-8 h-5" />
          </a>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Quiz</h1>
        <div class="pt-4 relative">
          <img src={RectangleBox} alt='rectangle' class="pb-5 w-4/5"></img>
          <p class="absolute top-9 font-bold ml-4 text-sm">Module 3: Responsive Design</p>
          <a href='#' class="text-[#F64F59] absolute top-9 left-32 ml-96 underline text-sm">Start Quiz</a>
          <img src={RectangleBox} alt='rectangle' class="w-4/5 h-16"></img>
          <p class="absolute bottom-5 ml-4 text-sm font-bold">Module 4: Responsive Design</p>
          <a href='#' class="text-[#F64F59] absolute bottom-5 left-32 ml-96 underline text-sm">Start Quiz</a>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Completed Course</h1>
        <div class="relative">
          <p class='absolute text-white pl-5 pt-3 text-sm'>UI/UX Beginner Level</p>
          <a href="#">
            <FontAwesomeIcon icon={faBars} class='absolute top-20 w-10 h-10  z-20 left-96 ml-36 text-white' />
          </a>
          <img src={Overlay} alt='overlay' class='absolute left-96 ml-14 h-64 w-44 overflow-hidden'></img>
          <img src={Notes2} alt='Notes' class="mt-3 mb-2 h-64 w-4/5"></img>
          <p class="mb-6 text-base font-bold">1.3 UI/UX Beginner Level</p>
          <p class="text-xs absolute top-32 text-white left-96 ml-32">13 Modules</p>
          <img src={ProgressBar2} class="absolute top-52 w-4/5 h-3 pl-6 pr-6"></img>
          <div class="absolute top-52 mt-5 ml-6 space-x-96 text-white">
            <p class="text-xs">100% completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;
