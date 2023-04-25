import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import PrevIcons from "./Assets/shape4.svg"
import NextIcons from "./Assets/shape3.svg"
import './Calender.css'


    const Calender = () => {
        const [date, setDate] = useState(new Date());
        const [time, setTime] = useState('')
        const [selectDate, setSelectDate] = useState()




        // Calender starts here
        const handlePrevMonth = () => {
            setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
        };

        const handleNextMonth = () => {
            setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
        };

        const handlePrevYear = () => {
            setDate(prevDate => new Date(prevDate.getFullYear() - 1, 0, 1));
        };

        const handleNextYear = () => {
            setDate(prevDate => new Date(prevDate.getFullYear() + 1, 0, 1));
        };


        const getDaysInMonth = () => {
            const year = date.getFullYear();
            const month = date.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const days = [];

            for (let i = 1; i <= daysInMonth; i++) {
                days.push(i);
            }

            return days;
        };
        const days = getDaysInMonth();


        // Get a day of the week
        const getCurrentDay = () => {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const date = new Date();
            const dayOfWeek = daysOfWeek[date.getDay()];
            return dayOfWeek;
        }



        //Get every day of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



        return (
                    <div className="calender h-72 bg-[#ffffff] right-14 -top-8 ml-28 mt-10 drop-shadow-md relative rounded-xl">
                        <div className="flex mt-4 place-content-center justify-between">

                            {/*month-year function  */}
                            <div className="flex pt-6 pl-5 ml-1 text-sm font-medium ">{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}<img src={NextIcons} alt="nextIcon" onClick={handleNextYear} className="w-4 h-4 mt-0 ml-1" /></div>



                            <div className=" left-72 justify-end absolute cursor-pointer pt-4">
                                {/* <button onClick={handlePrevYear} ><PrevIcon.GrFormPrevious className="w-8 h-8 text-blue-500 "/></button> */}
                                <button onClick={handlePrevMonth}><img src={PrevIcons} alt='prevIcon' className=" w-5 h-5 fill-red-500 mt-2 mr-6" /></button>
                                <button onClick={handleNextMonth}><img src={NextIcons} alt='nextIcon' className="w-5 h-5 fill-red-500 mt-2" /></button>
                                {/* <button onClick={handleNextYear}><NextIcon.GrFormNext className="w-8 h-8 fill-red-500"/></button> */}
                            </div>
                        </div>

                        {/* Get days of the week */}
                        <div className=' flex mt-4 place-content-center text-xs font-medium'>
                            <ul className='flex float-right gap-7 pt-2'>
                                {
                                    daysOfWeek.map(day => (
                                        <li key={day}>{day}</li>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className=" absolute text-sm left-8 gap-8 grid grid-cols-7 top-32 pr-8">
                            {days.map((day, index) => (
                                <div key={index} className="h-4 grid place-content-center text-sm -mt-10">
                                    <h1 className="h-6 w-6 mt-16 rounded-md text-center text-sm mb-4 text-black font-semibold  hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                                        onClick={() => {
                                            setSelectDate(date)
                                        }}
                                    >{day}
                                    </h1>

                                </div>
                            ))}
                        </div>

                    </div>
             );
            }

                    export default Calender;




               