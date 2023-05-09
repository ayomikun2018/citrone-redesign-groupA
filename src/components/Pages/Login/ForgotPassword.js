
import Logo from './Assets/citrone logo 1.png'
import CheckPasswordReset from './Modals/CheckPasswordReset'
import { useState } from "react";


const ForgotPassword = () => {
    const [modal, setModal] = useState(false)

    const isModalOpen = (e) => {
        setModal(true)
        e.preventDefault();
    }
    return (
        <div className="font-poppins">
            <div className='flex'>
                <img src={Logo} className="pl-10 pt-10 w-32 h-32" alt="Logo" />
                <h1 class="pt-14" >Citrone</h1>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="h-full pt-24">
                    <h1 className="text-3xl font-bold items-center text-center text-stone-800 pb-4">Forgot password?</h1>
                    <p className="text-center text-sm">An instruction to reset your password will be sent to the </p>
                    <p className="text-center text-sm">email associated with your account.</p>
                    <br></br>
                    <form>
                        <div>
                            <label className="text-base font-medium">Email</label>
                            <br></br>
                            <input type='text' className="p-2 w-full h-10 text-sm pl-3 outline rounded-md outline-1 outline-gray-300
                             focus:outline-none focus:border-[#F64F59] focus:ring-1 focus:ring-[#F64F59]" placeholder='Email@email.com'></input>
                        </div>
                        <br></br>
                        <button className="bg-[#F64F59] w-full mb-3 h-10 rounded-md outline-inherit text-white text-sm py-2" onClick={isModalOpen}><a href='#'>Send instructions</a></button>
                    </form>
                </div>
            </div>
            {modal && <CheckPasswordReset />}
        </div>
    )
};

export default ForgotPassword;