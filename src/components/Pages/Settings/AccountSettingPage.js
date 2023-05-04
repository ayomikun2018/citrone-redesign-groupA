import React, { useState } from 'react'
import './AccountLinks.js'
import ContactEdit from '../Dashboard/DashboardAssets/eye-contact.svg'
import ContactEye from '../Dashboard/DashboardAssets/edit-contact.svg'
import CheckBoxForm from './CheckBoxForm.js'

const AccountSettingPage = () => {

    const [contactData, setContactData] = React.useState(
        {email: "", password: "", phoneNumber: ""}
    )

    const handleChange = (event) => {
        setContactData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.value] : event.target.value
            }
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
    }

  return (
        <React.Fragment >
            <div className=' absolute left-10 -top-6 cursor-pointer' style={{ width: '100%', height: '180%'}}>
                <div className=' absolute top-48 w-3/4 h-44 cursor-pointer' style={{left: '5%', top: "4%" }}>
                    <p className=' text-2xl font-medium font-poppins' style={{ lineHeight: '52px'}}>Contact</p>
                    <span className='  text-base mt-3 text-black whitespace-nowrap' >Here you can change your email, edit your password and update your phone number </span>
                </div>  
                <div className=' absolute grid w-3/4 h-full ' style={{left: '5%', top: '5%'}}>
                    <form className='' onSubmit={handleSubmit}>
                        <div className=' contact-input1 absolute top-24 flex h-40 rounded-t-lg  space-x-72 gap-64 font-poppins border border-gray-300' style={{width: '71%', top: '100px'}}>
                            <div className='flex space-x-80 gap-64'>
                                <label className=' ml-8 mt-4 text-[#A5A5A5] text-sm ' >Email</label>
                                <div className='flex mt-5 space-x-6'>
                                    <img src={ContactEdit} alt='edit' className='w-5 h-5' />
                                    <img src={ContactEye} alt='eye' className=' w-5 h-5'/>
                                </div>
                            </div>
                            <input
                                type='text'
                                placeholder='o**********@g****.com'
                                name='email'
                                onChange={handleChange} 
                                // value= {}
                                className=' absolute -left-64 top-12 w-96 h-12 text-xl font-semibold font-poppins cursor-pointer placeholder-black focus:outline-none' 
                            />
                            <span className='absolute top-28 -left-64 text-sm text-[#A5A5A5] font-poppins'>This email is linked to your account.</span>
                        </div>
                        <div className=' contact-input2 absolute flex h-40 space-x-72 gap-56 font-poppins border border-gray-300'  style={{ width: '71%', top: '259px'}}>
                            <div className='flex space-x-80 gap-56'>
                                <label className='ml-8 mt-4 text-[#A5A5A5] text-sm' >Password</label>
                                <div className='flex mt-5 space-x-6'>
                                    <img src={ContactEdit} alt='edit' className='w-5 h-5' />
                                    <img src={ContactEye} alt='eye' className=' w-5 h-5'/>
                                </div>
                            </div>
                            <input
                                type='text'
                                placeholder='**********'
                                name='password'
                                onChange={handleChange}
                                // value= {}
                                className=' absolute -left-64 top-12 w-96 h-12 text-xl font-semibold font-poppins placeholder-black focus:outline-none' 
                            />
                            <span className='absolute top-28 -left-64 text-sm text-[#A5A5A5] font-poppins'>This password improves your security.</span>
                        </div>

                        <div className=' contact-input3 absolute flex h-40  space-x-72 gap-56 font-poppins border border-gray-300' style={{ width: '71%', top: '417px'}}>
                            <div className='flex space-x-80 gap-48'>
                                <label className='ml-8 mt-4 text-[#A5A5A5] text-sm' >Phone number</label>
                                <div className='flex mt-5 space-x-6'>
                                    <img src={ContactEdit} alt='edit' className='w-5 h-5' />
                                    <img src={ContactEye} alt='eye' className=' w-5 h-5'/>
                                </div>
                            </div>
                            <input
                                type='text'
                                placeholder='+23480******10'
                                name='phoneNumber'
                                onChange={handleChange}
                                // value= {}
                                className=' absolute -left-64 top-12 w-96 h-12 text-xl font-semibold font-poppins placeholder-black focus:outline-none' 
                            />
                            <span className='absolute top-28 -left-64 text-sm text-[#A5A5A5] font-poppins'>This phone number is linked to your account</span>
                        </div>
                    </form>

                </div>
            

            </div>
                <CheckBoxForm /> 



        </React.Fragment>
        
    
  )
}

export default AccountSettingPage