
import React from 'react'
import Logo from './Assets/citrone logo 1.svg'
import GoogleIcon from './Assets/logos_google-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useForm} from 'react-hook-form'
import { useState } from "react"
import Success from './Modals/Success'
import Togglepassword from './TogglePasswordIcon'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const LogIn = () => {

  // useState for modal
  const [modal, setModal] = useState(false)
  //setState for modal function
  const isModalOpen = (e) => {
      setModal(true)
      e.preventDefault();
  }
  //Hooks for form validation
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)

  //show/hide passwords
  const [isPasswordShown, setIsPasswordShown] = useState(false)
 const  togglePasswordVisiblility = () => {
     setIsPasswordShown(!isPasswordShown)
  }

  
  

  //Hooks for integrating API for backend server
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
     e.preventDefault();
     fetch ("https://stutern-citrone-app.onrender.com/api/v1/users/login"+email).then((res) => {
          return res.json();
     }).then((resp) =>{
      //console.log(resp)
      if(Object.keys(resp).length === 0){
        toast.error('Please enter valid email');
      }else if (resp.password === password){
        toast.sucess("sucess");
        usenavigate('/Dashboard')
      }
      else{
        toast.error('Please enter valid credentials');
      }
     }).catch((err) =>{
      toast.error("Login failed due to :" + err.message);
     });
  }

  return (

    <div class="font-poppins">
      <img src={Logo} class="pl-10 pt-10 w-56 h-32" alt="Citrone Logo"></img>
      <div class="h-screen flex items-center justify-center">
        <div class="h-full pt-24">
          <h1 class="font-bold text-3xl items-center text-center text-stone-800 pb-8">Log In</h1>
          <div class="">
            <form id='form' onSubmit={handleSubmit(onSubmit && setModal && ProceedLogin)}>
              <div class="mb-3">
                <label for='Email' class="text-sm font-medium">Email</label>
                <br></br>
                <input type='text' id='email' value={email} onChange={e=>setEmail(e.target.value)} class="p-2 w-full h-10 text-sm pl-3 outline rounded-md outline-1 outline-gray-300
                      focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="Email@email.com"
                  {...register("email", {
                    required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })} />
                <div class='text-red-400 text-xs'>{errors.email?.type === "required" && "Email is required"}
                  {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                </div>
              </div>
              <div class="mb-1 relative">
                <label for='Password' class="text-sm font-medium">Password</label>
                <br></br>
                <input type={(isPasswordShown) ? "text" : "password"}  class="p-2 w-full h-10 text-sm pl-3 text-justify outline rounded-md outline-1 outline-gray-300
                focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="*******" id="password" {...register("password", {
                  required: true
                })} />
                <div class='text-red-400 text-xs'>{errors.password?.type === "required" && "password is required"}
                </div>
                <div class="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                {
                  (isPasswordShown === false) ?  <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility}/> :
                  <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} /> 
                }
              </div>
              </div>
              <div class="flex space-x-40">
                <div class="flex flex-row justify-center items-center cursor-pointer relative">
                  <input class="peer w-4 h-4 shrink-0 rounded-sm appearance-none border-2 rounded-2
                  focus:outline-none focus:ring-[#f64F59] 
                  cursor-pointer" type='checkbox' id='check-box-1' />
                  <FontAwesomeIcon icon={faCheck} class="h-4 w-4 text-white  text-sm absolute left-0 text-opacity-0 check-1 transition" />
                  <label for='checkbox' htmlFor='check-box-1' class="text-xs pl-2">Remember me</label>
                </div>
                <div>
                  <a class="text-[#F64F59] text-xs" href='/forgotpassword'>Forgot Password?</a>
                </div>
              </div>
              <button class="bg-[#F64F59] w-full mb-3 mt-7 h-10 rounded-md outline-inherit text-white text-sm py-2">
                Log in
              </button>
              <div class="relative">
                <button class="bg-transparent outline mb-8 w-full h-10 rounded-md text-black outline-1 outline-gray-300 text-sm py-2">
                  Sign in with Google</button>
                <img src={GoogleIcon} alt="google Icon" class="w-4 h-4 absolute top-3 left-24 " />
              </div>
            </form>
            <p class="text-center text-sm ">Don’t have an account? <a class="text-[#F64F59]" href='/signup'>Sign Up</a></p>
          </div>
        </div>
      </div>
      {modal && <Success />}
    </div>
  );
}

export default LogIn;