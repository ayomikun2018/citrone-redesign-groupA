import SuccessIcon from "../Assets/vector (1).png"

const Success = () => {

    return (
        <div class="bg-black bg-opacity-50 flex items-center justify-center fixed inset-0 h-screen">
            <div class="bg-white px-36 py-8">
                <div>
                    <h3 class="text-xl font-bold items-center text-center text-stone-800">Success</h3>
                    <div class="flex justify-center items-center">
                    <img src={SuccessIcon} class="pt-3 flex justify-center" />
                    </div>
                     <p class="text-xs text-center">Account created successfully</p>
                </div>
            </div>
        </div>
    )
}

export default Success;