
import React from 'react'
import Logo from './Assets/citrone logo 1.png'
import GoogleIcon from './Assets/logos_google-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useForm} from 'react-hook-form'
import { useState } from "react"



const LogIn = () => {


  //Hooks for form validation
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)

  //show/hide passwords
  const [isPasswordShown, setIsPasswordShown] = useState(false)
 const  togglePasswordVisiblility = () => {
     setIsPasswordShown(!isPasswordShown)
  }


 

  return (

    <div className="font-poppins">
      {/* <img src={Logo} class="pl-10 pt-10 w-56 h-32" alt="Citrone Logo"></img> */}
      <div className='flex'>
         <img src={Logo} className="pl-10 pt-10 w-32 h-32" alt="Logo" />
        <h1 class="pt-14" >Citrone</h1>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="h-full pt-24">
          <h1 className="font-bold text-3xl items-center text-center text-stone-800 pb-8">Log In</h1>
          <div>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for='Email' class="text-base font-medium">Email</label>
                <br></br>
                <input type='text' id='email'
                   className="p-2 w-full h-10 text-sm pl-3 outline rounded-md outline-1 outline-gray-300
                      focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]"
                       placeholder="Email@email.com"
                  {...register("email", {
                    required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })} />
                <div className='text-red-400 text-xs'>{errors.email?.type === "required" && "Email is required"}
                  {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                </div>
              </div>
              <div className="mb-1 relative">
                <label for='Password' className="text-base font-medium">Password</label>
                <br></br>
                <input type={(isPasswordShown) ? "text" : "password"} 
                className="p-2 w-full h-10 text-sm pl-3 text-justify outline rounded-md outline-1 outline-gray-300
                focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]"
                 placeholder="*******" id="password" {...register("password", {
                  required: true
                })} />
                <div className='text-red-400 text-xs'>{errors.password?.type === "required" && "password is required"}
                </div>
                <div className="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                {
                  (isPasswordShown === false) ?  <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility}/> :
                  <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} /> 
                }
              </div>
              </div>
              <div className="flex space-x-40">
                <div className="flex flex-row justify-center items-center cursor-pointer relative">
                  <input className="peer w-4 h-4 shrink-0 rounded-sm appearance-none border-2 rounded-2
                  focus:outline-none focus:ring-[#f64F59] 
                  cursor-pointer" type='checkbox' id='check-box-1' />
                  <FontAwesomeIcon icon={faCheck} class="h-4 w-4 text-white  text-sm absolute left-0 text-opacity-0 check-1 transition" />
                  <label for='checkbox' htmlFor='check-box-1' class="text-sm pl-2">Remember me</label>
                </div>
                <div>
                  <a className="text-[#F64F59] text-sm" href='/forgotpassword'>Forgot Password?</a>
                </div>
              </div>
              
              <button className="bg-[#F64F59] w-full mb-3 mt-7 h-10 rounded-md outline-inherit text-white text-base py-2">
              <a href='./dashboard'> Log in</a>
              </button>
            
              <div className="relative">
                <button className="bg-transparent outline mb-8 w-full h-10 rounded-md text-black outline-1 outline-gray-300 text-base py-2">
                  Sign in with Google</button>
                <img src={GoogleIcon} alt="google Icon" class="w-5 h-5 absolute top-2.5 left-20 ml-3" />
              </div>
            </form>
            <p className="text-center text-base ">Don’t have an account? <a className="text-[#F64F59]" href='/signup'>Sign Up</a></p>
          </div>
        </div>
      </div>
      {/* {modal && <Success />} */}
    </div>
  );
}

export default LogIn;