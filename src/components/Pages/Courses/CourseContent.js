
import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import { Link } from "react-router-dom";
import DesignBook from './Assets/Design.png'
import Group from './Assets/Group.png'
import RectangleBox from './Assets/Rectangle.png'


const CoursesContent = () => {
    return (
        <div className="relative font-poppins flex flex-col">
            <Navbar />
            <Sidebar />
            <div className='flex flex-col gap-52'>
            <div className="ml-80 my-36"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/courses"><span className="">Courses </span></Link> &gt;<Link to="/coursescontent"><span className="">Courses Content </span></Link> &gt;<Link to=""><span className="text-[#F64F59]">Module 1</span></Link></div>
            <button className="my-40 ml-60 absolute bg-transparent outline w-52 h-14 left-2/3 ml rounded-md outline-1 outline-[#F64F59] text-base">Mark as complete</button>
            </div>
            <div className="h-sceen absolute mt-48 ml-80">
                <div>
                    <p className="text-lg mb-3 font-bold">Course Content</p>
                    <p className='mb-3 text-base font-bold'>Module 1: Product design and design thinking</p>
                    <div className='flex gap-14'>
                        <img className='h-80 w-96' src={DesignBook}></img>
                        <img className='h-80 w-96' src={Group}></img>
                    </div>
                    <div className='flex gap-44 mt-3'>
                        <p className='text-base font-bold'>Week 1: Using Design Principles</p>
                        <p className='text-base font-bold'>Week 2: Using Visual Heirarchy</p>
                    </div>
                    <div className='flex gap-10 mt-5 mb-5'>
                        <p className='text-base font-medium'>In our previous classes, we defined Product <br></br> Design as the process designers
                            use to blend <br></br>user needs with business goals to help brands <br></br> make consistently successful products.
                            This time <br></br> we are going a step further, we will learn about<br></br> the career landscape,
                            and the foundation of <br></br> great products and revisit the phases of the <br></br> design thinking process.
                            Let's get started with <br></br>
                            the slides <a href="https://drive.google.com/file/d/1UmtgI2ip7QcfG9Vuwnu_nAQf3Gm79CBW/view" className="text-[#F64F59] underline">here.</a></p>
                        <p>
                            <p className='text-base font-medium'>In our previous classes, we defined Product <br></br> Design as the process designers
                                use to blend <br></br>user needs with business goals to help brands <br></br> make consistently successful products.
                                This time <br></br> we are going a step further, we will learn about<br></br> the career landscape,
                                and the foundation of <br></br> great products and revisit the phases of the <br></br> design thinking process.
                                Let's get started with <br></br>
                                the slides <a href="https://drive.google.com/file/d/1UmtgI2ip7QcfG9Vuwnu_nAQf3Gm79CBW/view" className="text-[#F64F59] underline">here.</a></p>
                        </p>
                    </div>
                    <p className='text-lg font-bold mb-2'>Live classes:</p>
                    <p className='text-base mb-5'>Join the class <a className="text-[#F64F59]">here</a></p>
                    <p className='text-lg font-bold mb-2'>Quiz:</p>
                    <p className='text-base mb-5'><a href='https://drive.google.com/file/d/1UmtgI2ip7QcfG9Vuwnu_nAQf3Gm79CBW/view'>https://drive.google.com/file/d/1UmtgI2ip7QcfG9Vuwnu_nAQf3Gm79CBW/view</a></p>
                    <p className='text-lg font-bold'>Assignments:</p>
                    <div className="pt-4 relative">
                        <img src={RectangleBox} alt='rectangle' class="pb-5 w-4/5"></img>
                        <p className="absolute top-9 font-bold ml-4 text-sm">Module 3: Responsive Design</p>
                        <a href='#' class="text-[#F64F59] absolute top-9 left-52 ml-96 underline text-sm">Start</a>
                        <img src={RectangleBox} alt='rectangle' class="w-4/5 h-16"></img>
                        <p className="absolute bottom-11 ml-4 text-sm font-bold">Module 4: Responsive Design</p>
                        <a href='#' class="text-[#F64F59] absolute bottom-11 left-52 ml-96 underline text-sm">Start</a>
                        <br></br>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default CoursesContent;