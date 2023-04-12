const CheckPasswordReset = () => {

    return (
        <div class="bg-black bg-opacity-50 flex items-center font-poppins justify-center fixed inset-0">
            <div class="bg-white px-44 py-12">
                <div>
                    <h3 class="text-3xl font-bold items-center text-center text-stone-800">Check your mail</h3>
                    <p class="text-sm text-center pt-3">We have sent password recovery instructions to your email.</p>
                    <button class="bg-[#F64F59] w-full h-10 mb-3 mt-6 rounded-md outline-inherit text-white text-sm py-2"><a href="./resetpassword">Go to email</a></button>
                    <p class="text-sm text-center pb-2">Did not receive the email? <a class="text-[#F64F59]" href='#'>Send it again</a></p>
                    <p class="text-sm text-center">Wrong email address? <a class="text-[#F64F59]" href='#'>Change it</a></p>
                </div>
            </div>
        </div>
    )
}

export default CheckPasswordReset;