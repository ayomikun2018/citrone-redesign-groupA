import React from 'react'
import Logo from './Assets/citrone logo 1.svg'
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
    const { register, getValues, formState: { errors }, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data)

//show/hide passwords
    const [isPasswordShown, setIsPasswordShown] = useState(false)
 const  togglePasswordVisiblility = () => {
     setIsPasswordShown(!isPasswordShown)
  }

    //Hooks for integrating API for backend server
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const change = (e) => {
        setEmail(e.target.value);
         e.preventDefault();
    }

  

//   const ProceedLogin = (e) => {
//      e.preventDefault();
//      fetch ("https://stutern-citrone-app.onrender.com/api/v1/users/register"+email).then((res) => {
//           return res.json();
//      }).then((resp) =>{
//       //console.log(resp)
//   })
// }


return (
    <div >
        <img src={Logo} className="pl-10 pt-10  w-56 h-32 " alt="Citrone Logo"></img>
        <div className="h-full flex items-center justify-center ">
            <div className="h-full pt-20">

                <h1 className="font-bold text-3xl items-center text-center text-stone-800 pb-8 font-poppins">Sign Up</h1>

                <div>
                    <form id='form' onSubmit={handleSubmit(onSubmit && setModal)} >
                        <div className="NameclassNamemb-3 font-poppins">
                            <label htmlFor='email' className="text-sm font-normal">Email</label>
                            <br></br>
                            <input type='text' id='emailaddress'  value={email} onChange={change}  className="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                outline-1 outline-gray-300" placeholder="Email@email.com" {...register("email", {
                                required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })}/>
                           
                            <div className='text-red-400 text-xs'>{errors.email?.type === "required" && "Email is required"}
                                {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                            </div>
                        </div>
                        <div className="relative font-poppins  mb-3 ">
                            <label htmlFor='password' className="text-sm">Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"} id='passwordinput' value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full text-sm pl-3 h-10 outline rounded-md outline-1
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                 outline-gray-300" placeholder="At least 8 characters" {...register("password", {
                                required: true, minLength: 8, maxLength: 12,
                            })} />
                          <div class="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                            <div className='text-red-400 text-xs'>{errors.password?.type === "required" && "password is required"}{errors.password?.type === "minLength" && "Entered password is less than 8 characters"}
                                {errors.password?.type === "maxLength" && "Entered password is more than 12 characters"}

                            </div>
                        </div>
                        <div className="relative font-poppins">
                            <label htmlFor='password' className="text-sm font-normal">Confirm Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"} id='password2' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59] outline-1 outline-gray-300" placeholder="At least 8 characters" {...register("cpassword", {
                                required: true, validate: (val) => {
                                    const { password } = getValues();
                                    return password === val
                                }
                            })} />
                            <div class="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                            <div className='text-red-400 text-xs'>{errors.cpassword?.type === "required" && "password is required"}
                                {errors.cpassword?.type === "validate" && "passwords don't match"}
                            </div>
                        </div>
                        <button type='submit' className="bg-[#F64F59] w-full mb-3 mt-7 h-10 rounded-md outline-inherit text-white text-sm py-2 font-poppins">Sign Up</button>
                        <div className="relative">
                            <button className="bg-transparent outline mb-5 w-full h-10 rounded-md text-black outline-1 outline-gray-300 text-sm py-2 font-poppins">Sign Up with Google</button>
                            <img src={GoogleIcon} alt="google Icon" className="w-5 h-5 absolute top-2.5 left-24" />
                        </div>
                    </form>
                    <p className="text-sm font-poppins w-full">By creating an account, you agree to our <a className="text-[#F64F59]" href='#'>Terms of Service</a></p>
                    <p className="text-sm font-poppins pb-6 "> and <a className="text-[#F64F59]" href='#'>Privacy Policy</a></p>
                    <p className="text-center text-sm font-poppins">Already have an account? <a className="text-[#F64F59]" href='/login'>Log In</a></p>
                </div>

            </div>

        </div>
        {modal && <ActivationModal />}
    </div>



);
}


export default SignUp;

