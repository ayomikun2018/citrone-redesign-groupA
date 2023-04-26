import React, { useState } from 'react'
import PronounDropdownList from './PronounDropdown'
import GenderDropdownList from './GenderDropdown'
import TrackDropdownList from './TrackDropdown'

const ProfileInformation = () => {

    const [profileData, setProfileData] = React.useState(
        {firstName: "", lastName: "", gender: "", pronouns: "", }
    )

    const handleChange = (event) => {
        setProfileData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.value] : event.target.value
            }
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setProfileData("") //this clears user info after form is submitted
        console.log("Form Submitted");
    }
  return (
    <div className='' style={{ width: "170vh", height: "170%", marginTop: '105%'}} >
        <p className=' text-2xl font-semibold whitespace-nowrap  '> Profile Information</p>
        <form 
            onSubmit={handleSubmit}
            className=' ' style={{ width: "90%", height: "150%"}}
         >
            <div className='flex flex-wrap -mx-3 mt-8 mb-6 -space-x-32 font-poppins' style={{ marginRight: "calc(-8rem * var(--tw-space-x-reverse))",}}>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                     <label htmlFor="firstName" 
                     className='block  tracking-wide text-base font-medium mb-2" for="grid-first-name text-black' >
                        First name
                    </label>
                    <input
                        id= "fistName"
                        type='text'
                        placeholder= "Wasiu"
                        name='firstName'
                        onChange={handleChange} 
                        // value= {firstName}
                        className=' mt-3 font-poppins appearance-none block w-full bg-transparent text-sm font-normal border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]  placeholder-gray-500"  >' style={{  width: "380px", height: "50px"}}
                    />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                    <label htmlFor="lastName" 
                    className='block  tracking-wide  text-base font-medium mb-2" for="grid-first-name text-black ' >
                        Last name
                    </label>
                    <input
                        id='lastName'
                        type='text'
                        placeholder= "Ogunmekpon"
                        name='lastName'
                        onChange={handleChange}
                        // value= {}
                        className=' mt-3 font-poppins appearance-none block w-full bg-transparent text-sm font-normal border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb] placeholder-gray-500" >' style={{  width: "380px", height: "50px"}}
                    />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 space-x-6">                
                <div>
                    <GenderDropdownList />
                </div>
                <div>
                    <PronounDropdownList />
                </div>

            </div>

            <div>
                <TrackDropdownList />
                
            </div>
            
            <div class="flex flex-wrap mt-2 mb-6">
                <div className=''>
                    <label htmlFor="bio " 
                        className='block  tracking-wide  text-base font-medium  mb-2" text-black' >
                        Bio
                    </label>
                    <textarea
                        id= "bio"
                        name="bio"
                        rows= "5"
                        cols="99"
                        defaultValue="Tell us a little about yourself"
                        className='mt-3 border text-gray-400 border-gray-400 bg-transparent rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]"'
                    /> 
                </div>
            </div>


            <div class="flex flex-wrap -mx-3 mt-2 mb-6">
                <div class="w-full px-3">
                    <label htmlFor="track" 
                    className='block  tracking-wide  text-base font-medium mb-2" text-black' >Portfolio</label>
                    <input
                        id='portfolio'
                        type='text'
                        placeholder= "Add a portfolio"
                        name='portfolio'
                        onChange={handleChange}
                        // value= {}
                        className=' mt-3 font-poppins appearance-none block bg-transparent border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]" >' style={{width: "810px", height: "50px", border: '1px solid grey'}}
                    />
                </div> 
            </div>

             <div className=" flex  mt-10 mb-10 gap-12">
            <button
            type='submit'
                className=" font-poppins w-36 h-14 flex items-center justify-center rounded-xl border border-gray-400  p-2 bg-transparent text-base font-normal text-[#A5A5A5] focus:outline-none " style={{width: "150px", height: "60px"}}
            //   onClick={handleLogoutModalClose}
            >
                Reset
            </button>
            <button
             type='submit'
                className=" font-poppins  w-36 h-14  flex items-center justify-center rounded-xl shadow p-2 bg-[#f64f59] text-base font-normal text-white focus:outline-none focus:ring-2 " style={{width: "150px", height: "60px"}}
                // onClick={() => setShowLogoutModal(false)}
            //   onClick={() => window.location.pathname = "/login"}
            >
                Save changes
            </button>
              </div>
        </form>


    </div>
  )
}

export default ProfileInformation