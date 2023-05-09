import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import { Link } from "react-router-dom";
import Notes2 from './Assets/Notes2.png'
import ProgressBar2 from "./Assets/Progress Bar2.png"
import Overlay from './Assets/Overlay.png'
import { faArrowRight, faBars, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RectangleBox from './Assets/Rectangle.png'
import './CourseList.css'



const CoursesList = () => {
    return (
        <div className="relative font-poppins flex flex-col">
            <Navbar />
            <Sidebar />
            <div className="ml-80 my-36"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/courses"><span className="">Courses </span></Link> &gt;<Link to="./courselist"><span className="text-[#F64F59]">Course List</span></Link></div>
            <div className="h-sceen absolute mt-48 ml-80">
                <p className='absolute text-white pl-5 pt-3 text-sm'>UI/UX Beginner Level</p>
                <a href="#">
                    <FontAwesomeIcon icon={faBars} class='absolute top-20 w-10 h-10  z-20 left-80 ml-36 text-white' />
                </a>
                <img src={Overlay} id="overlay" alt='overlay' className='absolute left-60 mt-3 h-64 w-44 overflow-hidden'></img>
                <img src={Notes2} alt='Notes' id='notes' className="mt-3 mb-2 h-64 w-4/5"></img>
                <p className="mb-6 text-base font-bold">1.3 UI/UX Beginner Level</p>
                <p className="text-xs absolute top-32 text-white left-80 ml-32">13 Modules</p>
                <img src={ProgressBar2} class="absolute top-52  h-3 pl-6 pr-6" id="progressbar"></img>
                <div className="absolute top-52 mt-5 ml-6 space-x-96 text-white">
                    <p className="text-xs">100% completed</p>
                </div>
                <div className="pt-4 relative">
                    <img src={RectangleBox} alt='rectangle' className="width h-16"></img>
                    <p className="absolute top-9 font-bold ml-4 text-base">Module 1: Responsive Design</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' className="width h-16"></img>
                    <p className="absolute top-28 mt-2 ml-4 text-base font-bold">Module 2: Visual Heirarchy</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' className="width h-16"></img>
                    <p className="absolute top-52 ml-4 text-base font-bold">Module 3: Experience Design</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' className="width h-16"></img>
                    <p className="absolute top-72 ml-4 text-base font-bold">Module 4: Alignment</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute top-96 ml-4 text-base font-bold">Module 5: Responsive Design II</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-96 mb-72 ml-4 text-base font-bold">Module 6: Typography</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-96 mb-48 ml-4 text-base font-bold">Module 7: Use of Colours</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute  bottom-96 mb-24 ml-4 text-base font-bold">Module 8: Use of Colours II</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute  bottom-96 mb-4 ml-4 text-base font-bold">Module 9: Layout and Grids</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-72 mb-6 ml-4 text-base font-bold">Module 10: Use of Colours</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-56 ml-4 text-base font-bold">Module 11: Use of Colours II</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-32 ml-4 text-base font-bold">Module 12: Layout and Grids</p>
                    <br></br>
                    <img src={RectangleBox} alt='rectangle' class="width h-16"></img>
                    <p className="absolute bottom-11 ml-4 text-base font-bold">Module 13: Layout and Grids</p>
                    <br></br>
                </div>
            </div>


        </div>

    )
}


export default CoursesList