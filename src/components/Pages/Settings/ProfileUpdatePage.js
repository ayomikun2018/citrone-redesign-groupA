import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar'
import ProfileUpdateBanner from "../Dashboard/DashboardAssets/profile-page-banner.svg"
import ProfileUpdateUpload from "../Dashboard/DashboardAssets/profile-update-page-image.svg"
import editVector from "../Dashboard/DashboardAssets/edit-vector.svg"

import NextIconBlk from "../Dashboard/DashboardAssets/next-blk.svg"



const ProfileUpdatePage = () => {
  return (
    <React.Fragment>
    
      <Navbar className=""/>
      <Sidebar />
      <div>
        <div className='fixed h-24 mt-20 bg-white' style={{ width: "100%"}}>
            
            <div className='flex ml-80 mt-12 gap-1'>
                <Link to='/dashboard'>
                <p className=' text-sm font-medium font-poppins text-black hover:text-[#f64f59] cursor-pointer'>Dashboard</p>
                </Link>
                <img src={NextIconBlk} alt='next-icon' className=' w-3 h-3 mt-1'/>
                
            
                <Link to='/settings'>
                <p className=' text-sm font-medium font-poppins text-black hover:text-[#f64f59]  cursor-pointer'>Profile</p>
                </Link>
            </div>
     
        </div>
        <div className="">
            <div className= " w-full h-screen inline-block mt-44 " style={{ marginLeft: "16rem"}}>
                <img src={ProfileUpdateBanner}  alt="" className=""  style={{width: "1300px", height: "268px" }}/>
                <img src={ProfileUpdateUpload}  alt="" className=" -mt-44"  style={{width: "250px", height: "248px", marginLeft: "83px"}}/>
                
                <Link to="/settings">
                    <div className='relative w-10 h-10 rounded-full bg-[#f64f59] -mt-12 flex items-center justify-center  cursor-pointer' style={{ marginLeft: "260px"}}>
                        <img src={editVector} alt='' className='w-4 h-4'/>
                    </div> 
                </Link>
            </div>
            <div className='' style={{ marginTop: "-21rem", marginLeft: "21rem"}}>
                <div className=" flex space-x-3">
                    <h2 className=' font-poppins text-2xl font-semibold p-1' style={{ fontSize: "26px"}}>Jane Micheal</h2>
                    <span className=' font-poppins text-base font-normal p-1 mt-1'>(She/Her)</span>
                </div>
                
                <div className='grid'>
                <p className='font-poppins text-base font-normal p-1 mt-2'>(UI/UX Designer)</p>
                {/* <span className='font-poppins italic text-base font-normal leading-loose p-1 mt-0'>“Lörem ipsum vulkanresa egorat”</span> */}
                </div>

                <div className='mt-7 ml-' style={{ width: "79%"}}>
                    <p className='p-1 font-poppins font-semibold ' style={{ fontSize: "18px"}}>About</p>
                    {/* <p className=' font-poppins text-base font mt-1 p-1 leading-relaxed'>
                        Lörem ipsum vulkanresa egorat. Trepura ner, bongen ingen krongar. Trafikmaktordning heteroitet, är senist. Lörem ipsum vulkanresa egorat. Trepura ner, bongen ingen krongar. Trafikmaktordning heteroitet, är senist. Lörem ipsum vulkanresa egorat. Trepura ner, bongen ingen krongar. Trafikmaktordning heteroitet, är senist. Lörem ipsum vulkanresa egorat. Trepura ner, bongen ingen krongar. Trafikmaktordning heteroitet, är senist. 
                    </p> */}
                </div>

                <div className='grid mt-8 mb-28'>
                <span className=' p-1 font-poppins text-lg font-semibold'>Links</span>
                <span className=' p-1 font-poppins mt-1 text-base font-normal text-[#f64f59] leading-loose'>ogunmeks.webflow.io</span>
                </div>
            </div>
        </div>
      
        </div>
    </React.Fragment>
  )
}

export default ProfileUpdatePage