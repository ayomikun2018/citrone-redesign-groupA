import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Logo from './Assets/citrone logo 1.png'
import GoogleIcon from './Assets/logos_google-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ActivationModal from './Modals/ActivationModal'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    // useState for modal
    const [modal, setModal] = useState(false)
    //setState for modal function
    const isModalOpen = (e) => {
        setModal(true)
        e.preventDefault();
    }
    //Hooks for form validation
    // const { register, getValues, formState: { errors }, handleSubmit} = useForm();
    // const onSubmit = (data) => console.log(data)

//show/hide passwords
    const [isPasswordShown, setIsPasswordShown] = useState(false)
 const  togglePasswordVisiblility = () => {
     setIsPasswordShown(!isPasswordShown)
  }

    //Hooks for integrating API for backend server
const[mail, setMail]= useState("");
const[pass, setPass]= useState("");
const[confirmPass, setConfirmPass]= useState("");
// const [info, setInfo] = useState([]);
const [error, setError] = useState(null);

const navigate = useNavigate()

// const postAnyData = async (e) => {
//     e.preventDefault()
//        let data = {email: mail, password: pass, confirmPassword: confirmPass}
//        console.log(data)
//     const res = await fetch('https://stutern-citrone-app.onrender.com/api/v1/users/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         }).then((res)=>{
//             toast.success("Registered Successfully")
//         }).then((err) =>{
//             toast.error("Failed:")
//         })
//         console.log(res.json())
//     return res.json()


// };
//   console.log(postAnyData())


   
   
   const postAnyData = async (e) =>{
    e.preventDefault()
    const data = {email: mail, password: pass, confirmPassword: confirmPass}
    // console.log(data, '1')
    setError(null)
    
      const url = "https://stutern-citrone-app.onrender.com/api/v1/users/register"
     
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        //   Authorization:
            // "Bearer " +
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQxM2JmNDQ3YWU4Y2UzZGE1NGRhZjYiLCJlbWFpbCI6ImF5b0BtYWlsLmNvbSIsImlhdCI6MTY4Mjk0NzI5MCwiZXhwIjoxNjgzMDMzNjkwfQ.SGpIpOoSg1n2S5d0bn06FdxKtlVWPP_ON4TbXXKbJwk",
        },
          body: JSON.stringify(data)
        
      });
      const result = await response.json();
     
      localStorage.setItem('token', result.token)
      console.log(result, '2')
      if (result.message === 'User successfully created' ){
        navigate('/dashboard')
      }
    else{
       setError(result.message) 
      
    } 
    
    return result;
   
   }
//    setError(null);
//    setMail('')
//    setPass('')
//    setConfirmPass('')

return (
    <div >
         <div className='flex'>
         <img src={Logo} className="pl-10 pt-10 w-32 h-32" alt="Logo" />
        <h1 class="pt-14" >Citrone</h1>
      </div>
        <div className="h-full flex items-center justify-center ">
            <div className="h-full pt-20">

                <h1 className="font-bold text-3xl items-center text-center text-stone-800 pb-8 font-poppins">Sign Up</h1>

                <div>
                {}
                    <form id='form' onSubmit={postAnyData} >
                        <div className="NameclassNamemb-3 font-poppins mb-3">
                            <label htmlFor='email' className="text-base font-medium">Email</label>
                            <br></br>
                            <input type='text' id='emailaddress' className="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                outline-1 outline-gray-300" placeholder="Email@email.com" value={mail} onChange={e=>setMail(e.target.value)} />
                                {/* // {...register("email", {
                                // required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })} */}
                           
                            {/* <div className='text-red-400 text-xs'>{errors.email?.type === "required" && "Email is required"}
                                {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                            </div> */}
                        </div>
                        <div className="relative font-poppins mb-3 ">
                            <label htmlFor='password' className="text-base font-medium">Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"} id='passwordinput' value={pass} onChange={e=>setPass(e.target.value)}className="p-2 w-full text-sm pl-3 h-10 outline rounded-md outline-1
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]
                                 outline-gray-300" placeholder="At least 8 characters"  />
                                {/* //   {...register("password", { */}
                                {/* // required: true, minLength: 8, maxLength: 12, */}
                           
                          <div className="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                            {/* <div className='text-red-400 text-xs'>{errors.password?.type === "required" && "password is required"}{errors.password?.type === "minLength" && "Entered password is less than 8 characters"}
                                {errors.password?.type === "maxLength" && "Entered password is more than 12 characters"}

                            </div> */}
                        </div>
                        <div className="relative font-poppins">
                            <label htmlFor='password' className="text-base font-medium">Confirm Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"} id='password2'value={confirmPass} onChange={e=>setConfirmPass(e.target.value)}className="p-2 w-full h-10 text-sm pl-3 outline rounded-md 
                                 focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59] outline-1 outline-gray-300" placeholder="At least 8 characters" />
                            {/* //     //  {...register("cpassword", {
                            //     // required: true, validate: (val) => {
                            //     //     const { password } = getValues();
                            //     //     return password === val
                            //     // }
                            // })} */}
                            <div className="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                        </div>
                            {/* <div className='text-red-400 text-xs'>{errors.cpassword?.type === "required" && "password is required"}
                                {errors.cpassword?.type === "validate" && "passwords don't match"}
                            </div> */}
                       
                        <button type='submit' className="bg-[#F64F59] w-full mb-3 mt-7 h-10 rounded-md outline-inherit text-white text-base py-2 font-poppins" >Sign Up</button>
                        <div className="relative">
                            <button className="bg-transparent outline mb-5 w-full h-10 rounded-md text-black outline-1 outline-gray-300 text-base py-2 font-poppins">Sign Up with Google</button>
                            <img src={GoogleIcon} alt="google Icon" className="w-5 h-5 absolute top-2.5 left-28" />
                        </div>
                    </form>
                    {error && <span style= {{textAlign: 'center',color: 'red', fontSize: '16px',width:'10%',height:'10%', marginLeft: '8rem', fontWeight: 'bold'}}>{error}</span>}

                    <p className="text-base font-poppins w-full">By creating an account, you agree to our <a className="text-[#F64F59]" href='#'>Terms of Service</a></p>
                    <p className="text-base font-poppins pb-6 "> and <a className="text-[#F64F59]" href='#'>Privacy Policy</a></p>
                    <p className="text-center text-base font-poppins">Already have an account? <a className="text-[#F64F59]" href='/login'>Log In</a></p>

                </div>

            </div>

        </div>
        {modal && <ActivationModal />}

    </div>



);
}


export default SignUp;

