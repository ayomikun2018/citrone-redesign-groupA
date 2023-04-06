import SuccessIcon from "../Assets/shape.png"

const ResetPasswordConfirmation = () => {

    return (
        <div class="bg-black bg-opacity-50 flex items-center justify-center fixed inset-0 font-poppins h-screen">
            <div class="bg-white px-36 py-8">
                <div>
                    <h3 class="text-xl font-bold items-center text-center text-stone-800">Password Updated</h3>
                    <div class="flex justify-center items-center">
                    <img src={SuccessIcon} class="pt-5 flex h-auto w-16 justify-center" />
                    </div>
                    <p class="text-sm text-center mb-3 mt-6 ">Your password has been successfully reset!</p>
                    <button class="bg-[#F64F59] w-80 h-10 rounded-md outline-inherit text-white text-xs py-2"><a href='./login'>Login</a></button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordConfirmation;