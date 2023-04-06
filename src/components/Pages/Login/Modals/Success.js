import SuccessIcon from "../Assets/vector (1).png"

const Success = () => {

    return (
        <div class="bg-black bg-opacity-50 flex items-center font-poppins justify-center fixed inset-0 h-screen">
            <div class="bg-white px-52 py-20">
                <div>
                    <h3 class="text-3xl font-bold items-center text-center text-stone-800">Success</h3>
                    <div class="flex justify-center items-center">
                    <img src={SuccessIcon} class="pt-3 h-auto w-10 flex justify-center pb-6" />
                    </div>
                     <p class="text-sm text-center">Login Successful</p>
                </div>
            </div>
        </div>
    )
}

export default Success;