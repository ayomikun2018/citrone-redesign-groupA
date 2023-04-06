import Logo from './Assets/Citrone Logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import ResetPasswordConfirmation from './Modals/ResetPasswordConfirmation.';


const ResetPassword = () => {
    const [modal, setModal] = useState(false) 
    const isModalOpen = (e) => {
        setModal(true)
        e.preventDefault();
     }
    return (
        <div class="font-poppins">
            <img src={Logo} class="pl-10 pt-10" alt="Citrone Logo"></img>
            <div class="h-screen flex items-center justify-center">
                <div class="h-full w-1/4 pt-24">
                    <h1 class="text-3xl font-bold items-center text-center text-stone-800 pb-4">Reset password</h1>
                    <br></br>
                    <form>
                        <div class="relative">
                            <label for='Password' class="text-sm font-normal">New Password</label>
                            <br></br>
                            <input type='password' class="p-2 w-full h-10 text-xs pl-3 mb-3 outline rounded-md outline-1 outline-gray-300" placeholder="********"></input>
                            <FontAwesomeIcon icon={faEyeSlash} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9"/>  
                            <FontAwesomeIcon icon={faEye} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9 hidden" /> 
                        </div>
                        <div class="relative">
                            <label for='Password' class="text-sm font-normal">Confirm new Password</label>
                            <br></br>
                            <input type='password' class="p-2 w-full h-10 text-xs pl-3 outline rounded-md outline-1 outline-gray-300" placeholder="********"></input>
                            <FontAwesomeIcon icon={faEyeSlash} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9"/>  
                            <FontAwesomeIcon icon={faEye} class="h-4 w-4 text-gray-300 text-sm absolute right-4 top-9 hidden" /> 
                        </div>
                        <br></br>
                        <button class="bg-[#F64F59] w-full h-10 mb-3 rounded-md outline-inherit text-white text-sm py-2" onClick={isModalOpen}>Reset Password</button>
                    </form>
                </div>
            </div>
            {modal && <ResetPasswordConfirmation/>}
        </div>
    )
};

export default ResetPassword;