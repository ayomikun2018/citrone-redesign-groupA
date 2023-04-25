import Logo from './Assets/citrone logo 1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import ResetPasswordConfirmation from './Modals/ResetPasswordConfirmation.';


const ResetPassword = () => {
    const [modal, setModal] = useState(false)
    const isModalOpen = (e) => {
        setModal(true)
        e.preventDefault();
    }

    //show/hide passwords
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const  togglePasswordVisiblility = () => {
      setIsPasswordShown(!isPasswordShown)
   }
    return (
        <div class="font-poppins">
            <img src={Logo} class="pl-10 pt-10  w-56 h-32" alt="Citrone Logo"></img>
            <div class="h-screen flex items-center justify-center">
                <div class="h-full w-1/4 pt-24">
                    <h1 class="text-3xl font-bold items-center text-center text-stone-800 pb-4">Reset password</h1>
                    <br></br>
                    <form>
                        <div class="relative">
                            <label for='Password' class="text-sm font-normal">New Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"}  class="p-2 w-full h-10 text-xs pl-3 mb-3 outline rounded-md outline-1 outline-gray-300
                             focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="********"></input>
                            <div class="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                        </div>
                        <div class="relative">
                            <label for='Password' class="text-sm font-normal">Confirm new Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"}  class="p-2 w-full h-10 text-xs pl-3 outline rounded-md outline-1 outline-gray-300
                             focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="********"></input>
                            <div class="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                        </div>
                        <br></br>
                        <button class="bg-[#F64F59] w-full h-10 mb-3 rounded-md outline-inherit text-white text-sm py-2" onClick={isModalOpen}>Reset Password</button>
                    </form>
                </div>
            </div>
            {modal && <ResetPasswordConfirmation />}
        </div>
    )
};

export default ResetPassword;