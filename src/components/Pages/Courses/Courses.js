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
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calender from './Calender'


const Courses = () => {
  return (
    <div class="relative font-poppins flex flex-col">
      <Navbar />
      <Sidebar />
      
      <div class="w-100 h-sceen absolute my-48 ml-72">
         <div> 
         <p class="text-lg mb-3 ">Continue from where you stopped</p>
          <img src={computer}></img>
          <p class="absolute top-16 text-white text-base ml-6 font-meduim">Module 10: Responsive Design</p>
        </div>
        <input type='text' placeholder='Search' class='absolute h-12 w-80 top-5 -right-1/2 mr-2  pl-14 border border-grey rounded-xl '></input>
        {/* <FontAwesomeIcon icon={faSearch} class='absolute top-5 right-3 w-5 h-5'/> */}
        <h1 class="text-base absolute top-14 -right-36 font-extrabold mt-10 mb-10">My schedule</h1>
        <div  class="absolute top-32 -right-2/4 mt-3">
        <Calender/>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Course Content</h1>
        <p class="text-base font-extrabold text-gray-500 mt-3">UI/UX Intermediate Level</p>
        <div class="grid grid-cols-3 pt-4">
          <img src={DesignBook} alt='Designbook'></img>
          <img src={Notes}  alt='Notes' class="pl-3"></img>
          <img src={Groupwork} alt='groupdesign' class="pl-6"></img>
          <p>Module 1: Introduction to<p>design</p></p>
          <p class="pl-3">Module 2: Sketching</p>
          <p class="pl-6">Module 3: Ideation</p>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Recorded Live Sessions</h1>
        <div class="grid grid-cols-3 pt-4 relative">
          <img src={DesignBook} alt='Designbook'></img> 
          <img src={YouTube} alt='youtubelogo'  class="absolute top-14 left-20 "></img>
          <img src={Notes} alt='Notes' class="pl-3"></img>
          <img src={YouTube} alt='youtubelogo'  class="absolute top-14 left-80 ml-11"></img>
          <img src={Groupwork} alt='groupdesign' class="pl-6"></img>
          <img src={YouTube} alt='youtubelogo' class="absolute  top-14 left-96 ml-64"></img>
          <p>Module 1: Introduction to<p>design</p></p> 
          <p class="pl-3">Module 2: Sketching</p>
          <p class="pl-6">Module 3: Ideation</p>
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Quiz</h1>
        <div class="pt-4 relative">
        <img src={RectangleBox} alt='rectangle' class="pb-5"></img> 
        <p class="absolute top-10 ml-4">Module 3: Responsive Design</p>
        <a href='#' class="text-[#F64F59] absolute top-10 left-32 ml-96 underline">Start Quiz</a>
        <img src={RectangleBox} alt='rectangle'></img>
        <p class="absolute bottom-6 ml-4">Module 4: Responsive Design</p>
        <a href='#' class="text-[#F64F59] absolute bottom-6 left-32 ml-96 underline">Start Quiz</a> 
        </div>
        <h1 class="text-2xl font-extrabold mt-8">Completed Course</h1>
        <div class="relative">
        <p class='absolute text-white pl-5 pt-3'>UI/UX Beginner Level</p>
        <FontAwesomeIcon icon={faBars} class='absolute top-20 w-10 h-10  z-20 left-96 ml-36 text-white'/>
        <img src={Overlay} alt='overlay' class='absolute left-96 ml-16'></img> 
        <img src={Notes2}  alt='Notes' class="mt-3 mb-2"></img>
        <p class="mb-6">1.3 UI/UX Beginner Level</p>
        </div>
      </div>
    </div>
  )
}

export default Courses;