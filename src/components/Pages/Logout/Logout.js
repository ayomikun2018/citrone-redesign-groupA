import React from 'react';
import './Logout.css'

function LogoutModal({ handleLogoutModalClose, showLogoutModal, setShowLogoutModal }) {


  return (
    <>
      
      {showLogoutModal && (
        <div className="fixed z-10 top-96 ">
            <div className="logout-modal-container bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 ">
              <div className=" flex justify-center items-center mt- logout-modal-container px-4 pt-5 pb-4 mb-14 ">
                <p className=" w-52 text-base leading-6 text-center font-normal text-black mt-14 font-poppins overflow-hidden">Are you sure you want to logout?</p>
              </div>
              <div className=" flex items-center justify-center -mt-10 mb-10 gap-12">
                <button
                  className=" font-poppins w-36 h-14 flex items-center justify-center rounded-xl border border-transparent shadow p-2 bg-[#f6f6f6] text-base font-normal text-[#A5A5A5] focus:outline-none "
                  onClick={handleLogoutModalClose}
                >
                  Cancel
                </button>
                <button
                  className=" font-poppins  w-36 h-14  flex items-center justify-center rounded-xl border border-gray-300 shadow p-2 bg-[#f64f59] text-base font-normal text-white focus:outline-none focus:ring-2 "
                  onClick={() => window.location.pathname = "/login"}
                >
                  Yes
                </button>
              </div>
            </div>
         
        </div>
      )}
    </>
  );
}

export default LogoutModal;
