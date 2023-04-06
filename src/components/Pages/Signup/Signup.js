import React from 'react'
import Logo from './Assets/Citrone Logo.png'
import GoogleIcon from './Assets/logos_google-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ActivationModal from './Modals/ActivationModal'
import { useState } from "react"
import { useForm } from 'react-hook-form'

const SignUp = () => {
    // useState for modal
    const [modal, setModal] = useState(false)
    //setState for modal function
    const isModalOpen = (e) => {
        setModal(true)
        e.preventDefault();
    }
    //Hooks for form validation
    const { register, watch, getValues, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <div >
            <img src={Logo} class="pl-10 pt-10 " alt="Citrone Logo"></img>
            <div class="h-full flex items-center justify-center ">
                <div class="h-full pt-20">

                    <h1 class="font-bold text-3xl items-center text-center text-stone-800 pb-8 font-poppins">Sign Up</h1>

                    <div>
                        <form id='form' onSubmit={handleSubmit(onSubmit && setModal)} >
                            <div class="mb-3 font-poppins">
                                <label for='email' class="text-sm font-normal">Email</label>
                                <br></br>
                                <input type='text' id='email' class="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                outline-1 outline-gray-300" placeholder="Email@email.com"{...register("email", {
                                    required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                })} />
                                <div class='text-red-400 text-xs'>{errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                                </div>
                            </div>
                            <div class="relative font-poppins  mb-3 ">
                                <label for='password' class="text-sm">Password</label>
                                <br></br>
                                <input type='password' id='password' class="p-2 w-full text-sm pl-3 h-10 outline rounded-md outline-1
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                 outline-gray-300" placeholder="At least 8 characters" {...register("password", {
                                    required: true, minLength: 8,
                                })} />
                                <FontAwesomeIcon icon={faEyeSlash} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9" />
                                <FontAwesomeIcon icon={faEye} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9 hidden" />
                                <div class='text-red-400 text-xs'>{errors.password?.type === "required" && "password is required"}{errors.password?.type === "minLength" && "Entered password is less than 8 characters"}

                                </div>
                            </div>
                            <div class="relative font-poppins">
                                <label for='password' class="text-sm font-normal">Confirm Password</label>
                                <br></br>
                                <input type='password' id='password2' class="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                outline-1 outline-gray-300" placeholder="At least 8 characters" {...register("cpassword", {
                                    required: true, validate: (val) => {
                                        const { password } = getValues();
                                        return password === val
                                    }
                                })} />
                                <FontAwesomeIcon icon={faEyeSlash} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9" />
                                <FontAwesomeIcon icon={faEye} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9 hidden" />
                                <div class='text-red-400 text-xs'>{errors.cpassword?.type === "required" && "password is required"}
                                    {errors.cpassword?.type === "validate" && "passwords don't match"}
                                </div>
                            </div>
                            <button type='submit' class="bg-[#F64F59] w-full mb-3 mt-7 h-10 rounded-md outline-inherit text-white text-sm py-2 font-poppins">Sign Up</button>
                            <div class="relative">
                                <button class="bg-transparent outline mb-5 w-full h-10 rounded-md text-black outline-1 outline-gray-300 text-sm py-2 font-poppins">Sign Up with Google</button>
                                <img src={GoogleIcon} alt="google Icon" class="w-5 h-5 absolute top-2.5 left-24" />
                            </div>
                        </form>
                        <p class="text-sm font-poppins w-full">By creating an account, you agree to our <a class="text-[#F64F59]" href='#'>Terms of Service</a></p>
                        <p class="text-sm font-poppins pb-6 "> and <a class="text-[#F64F59]" href='#'>Privacy Policy</a></p>
                        <p class="text-center text-sm font-poppins">Already have an account? <a class="text-[#F64F59]" href='/login'>Log In</a></p>
                    </div>

                </div>

            </div>
            {modal && <ActivationModal />}
        </div>



    );
}

export default SignUp;

