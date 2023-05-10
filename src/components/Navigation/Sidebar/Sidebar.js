import React, { useState } from 'react'
import TopData_ from "../Sidebar/TopData"
import BottomData_ from "../Sidebar/BottomData"
import "./Sidebar.css"

import LogoutModal from '../../Pages/Logout/Logout'


const Sidebar = ({ children }) => {
    const [topSidebar, setTopSidebar] = useState(TopData_)
    const [bottomSidebar, setBottomSidebar] = useState(BottomData_)

    const [showLogoutModal, setShowLogoutModal] = useState(false);



    const handleLogoutClick = (link) => {

        // Handle click event for Logout item
        console.log(`Clicked on ${link}`);
        // Show logout modal...
        setShowLogoutModal(true);
      }

      const handleLogoutModalClose = () => {
        // Handle close event for Logout modal
        setShowLogoutModal(false);
        window.location.pathname = "/dashboard";
      };


      const [isOpen, setIsOpen] = useState(false);
      
      const toggle = () => {
        setIsOpen(!isOpen)
      }

  return (
    <React.Fragment>
        <div className='sidebar bg-[#fbfbfb] w-1/6 h-full fixed border-r-2 z-10 top-12' style={{ }}>
          <div className='mt-12'></div>
            <div className='sidebar-list'>
              {
                topSidebar.map((item, index) => {
                return (
                    <div 
                      className='flex items-center gap-3 hover:bg-red-200 hover:border-r-8 border-[#f64f59] transition duration-500 sidebar-row sidebar-row show'
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
                className='flex items-center gap-3 hover:bg-red-200 hover:border-r-8 border-[#f64f59] transition duration-700 sidebar-row sidebar-row show'
                id={window.location.pathname === element.link ? "active" : ""}
                key={value}
                onClick={element.title === "Logout" ? () => handleLogoutClick(element.link) : () => window.location.pathname = element.link}
              >
                <div className="sidebar-icon bottom-icon">{element.icon}</div>
                <h2 className="sidebar-title">{element.title}</h2>
              </div>
            )
          })
        }
            {/* Logout Modal */}
            {showLogoutModal && (
            <LogoutModal
            handleLogoutModalClose={handleLogoutModalClose}
            setShowLogoutModal={setShowLogoutModal}
            showLogoutModal={showLogoutModal}
            />
        )}
        </div>
        </div>
    </React.Fragment>
  )
}

export default Sidebar