import React, { useState } from 'react'
import PronounDropdownList from './PronounDropdown'
import GenderDropdownList from './GenderDropdown'
import TrackDropdownList from './TrackDropdown'

const ProfileInformation = () => {

    const [profileData, setProfileData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            selectedGender: "", 
            selectedPronoun: "", 
            selectedTrack: "", 
            bio: "", 
            portfolio: "" }
    )

    
    console.log(profileData)
    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setProfileData((prevProfileData) => ({ ...prevProfileData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setProfileData("") //this clears user info after form is submitted
        console.log("Form Submitted");
    }

    const handleReset = () => {

    }
  return (
    <div className='' style={{ width: "140vh", height: "170%"}} >
        <p className=' text-2xl font-semibold whitespace-nowrap  '> Profile Information</p>
        <form 
            onSubmit={handleSubmit}
            className='' style={{ width: "130vh", height: "150%" }}
         >
            <div className=' relative flex -mx-3 mb-6 mt-8 box-border font-poppins space-x-4' >
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0 ' style={{  width: "415px"}}>
                     <label htmlFor="firstName" 
                     className='block  tracking-wide text-base font-medium mb-2" for="grid-first-name text-black  '>
                        First name
                    </label>
                    <input
                        id= "fistName"
                        type='text'
                        placeholder= "Wasiu"
                        name='firstName'   //name must be exactly the property name in the array that we saved above
                        onChange={handleInputChange} 
                        value= {profileData.firstName}
                        className='    mt-3 font-poppins appearance-none block w-full bg-transparent text-sm font-normal border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]  placeholder-gray-500"  >' style={{  width: "380px", height: "50px"}}
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
                        onChange={handleInputChange}
                        value= {profileData.lastName}
                        className='   mt-3 font-poppins appearance-none block w-full bg-transparent text-sm font-normal border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb] placeholder-gray-500 " >' style={{  width: "380px", height: "50px"}}
                    />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 space-x-6">                
                <div>
                    <GenderDropdownList selectedGender = {profileData.selectedGender} onGenderChange={handleInputChange}/>
                </div>
                <div>
                    <PronounDropdownList selectedPronoun = {profileData.selectedPronoun} onPronounChange={handleInputChange}/>
                </div>

            </div>

            <div>
                <TrackDropdownList SelectedTrack = {profileData.selectedTrack} onTrackChange={handleInputChange}/>
                
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
                        value={profileData.bio}
                        onChange={handleInputChange}
                        rows= "5"
                        cols="99"
                        placeholder="Tell us a little about yourself"
                        className='mt-3 border text-gray-500 border-gray-400 bg-transparent rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]"'
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
                        onChange={handleInputChange}
                        value= {profileData.portfolio}
                        className=' mt-3 font-poppins text-gray-500 appearance-none block bg-transparent border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]" >' style={{width: "810px", height: "50px"}}
                    />
                </div> 
            </div>

             <div className=" flex  mt-10 mb-10 gap-12">
            <button
            type='submit'
            onClick={handleReset}
                className=" font-poppins w-36 h-14 flex items-center justify-center rounded-xl border border-gray-400  p-2 bg-transparent text-base font-normal text-gray-500 focus:outline-none " style={{width: "150px", height: "60px"}}
            >
                Reset
            </button>
            <button
             type='submit'
                className=" font-poppins  w-36 h-14  flex items-center justify-center rounded-xl shadow p-2 bg-[#f64f59] text-base font-normal text-white focus:outline-none focus:ring-2 " style={{width: "150px", height: "60px"}}
                onClick={() => window.location.pathname = "/profile-update-page"}
            >
                Save changes
            </button>
              </div>
        </form>


    </div>
  )
}

export default ProfileInformation