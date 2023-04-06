


const ActivationModal = () => {
      
    return (
        <div class="bg-black bg-opacity-50 flex items-center justify-center fixed inset-0">
            <div class="bg-white px-36 py-16">
                <div>
                    <h3 class="text-xl font-bold items-center text-center text-stone-800">Activate your account</h3>
                    <p class="text-xs text-center pt-3">We have sent an activation link to email@email.com</p>
                    <button class="bg-[#F64F59] w-80 mb-3 mt-6 rounded-md outline-inherit text-white text-xs py-2">Go to email</button>
                    <p class="text-xs text-center">Did not receive the email? <a class="text-[#F64F59]" href='#'>Send it again</a></p>
                </div>
            </div>
        </div>
    )
}

export default ActivationModal;