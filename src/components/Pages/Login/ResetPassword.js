import Logo from './Assets/citrone logo 1.png'
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
        <div className="font-poppins">
             <div className='flex'>
         <img src={Logo} className="pl-10 pt-10 w-32 h-32" alt="Logo" />
        <h1 class="pt-14" >Citrone</h1>
      </div>
            <div className="h-screen flex items-center justify-center">
                <div className="h-full w-1/4 pt-24">
                    <h1 className="text-3xl font-bold items-center text-center text-stone-800 pb-4">Reset password</h1>
                    <br></br>
                    <form>
                        <div className="relative">
                            <label for='Password' class="text-base font-medium ">New Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"}  className="p-2 w-full h-10 text-sm pl-3 mb-3 outline rounded-md outline-1 outline-gray-300
                             focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="********"></input>
                            <div className="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                        </div>
                        <div className="relative">
                            <label for='Password' class="text-base font-medium ">Confirm new Password</label>
                            <br></br>
                            <input type={(isPasswordShown) ? "text" : "password"}  className="p-2 w-full h-10 text-sm pl-3 outline rounded-md outline-1 outline-gray-300
                             focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder="********"></input>
                            <div className="h-4 w-4 text-gray-400 text-sm absolute right-6 top-9 " >
                                {
                                    (isPasswordShown === false) ? <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisiblility} /> :
                                        <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblility} />
                                }
                            </div>
                        </div>
                        <br></br>
                        <button className="bg-[#F64F59] w-full h-10 mb-3 rounded-md outline-inherit text-white text-sm py-2" onClick={isModalOpen}>Reset Password</button>
                    </form>
                </div>
            </div>
            {modal && <ResetPasswordConfirmation />}
        </div>
    )
};

export default ResetPassword;