import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopData_ from "../Sidebar/TopData"
import BottomData_ from "../Sidebar/BottomData"
import "./Sidebar.css"

const Sidebar = () => {
    const [topSidebar, setTopSidebar] = useState(TopData_)
    const [bottomSidebar, setBottomSidebar] = useState(BottomData_)
    const [onHovering, setOnHovering] = useState(false)


  return (
    <React.Fragment>
        <div className='sidebar' class="w-1/6 h-full fixed border-r-2 z-10 top-12 ">
        <div className='mt-12'></div>
        <div className='sidebar-list'>
        {
            topSidebar.map((item, index) => {
            return (
                <div 
                    className='flex items-center gap-3 hover:bg-red-200 hover:border-r-8 border-red-500 hover:rounded-l-lg sidebar-row sidebar-row show'
                    id={window.location.pathname === item.link ? "active" : ""}
                    key={index}
                    onClick={() => {window.location.pathname = item.link}}
                >
                <div className="sidebar-icon ">{item.icon}</div>
                <h2 className="sidebar-title">{item.title}</h2>
                </div>
            )
            })
        }
        </div>

        <div className='sidebar-list bottom'>
         
        {
            bottomSidebar.map((element, value) => {
            return (
                <div 
                    className='flex items-center gap-3 hover:bg-red-200 hover:border-r-8 border-red-500 rounded-s-lg sidebar-row'
                    id={window.location.pathname === element.link ? "active" : ""}
                    key={value}
                    onClick={() => {window.location.pathname = element.link}}
                    >
                    <div className="sidebar-icon bottom-icon">{element.icon}</div>
                    <h2 className="sidebar-title">{element.title}</h2>
                </div>
            )
            })
        }
        </div>
        </div>
    </React.Fragment>
  )
}

export default Sidebar








