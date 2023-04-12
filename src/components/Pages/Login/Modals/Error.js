import ErrorIcon from "../Assets/vector.png"

const Error = () => {

    return (
        <div class="bg-black bg-opacity-50 flex items-center justify-center font-poppins fixed inset-0 h-screen">
            <div class="bg-white px-36 py-8">
                <div>
                    <h3 class="text-3xl font-bold items-center text-center text-stone-800">Error</h3>
                    <div class="flex justify-center items-center">
                    <img src={ErrorIcon} class="pt-3  h-auto w-16 flex justify-center" />
                    </div>
                     <p class="text-sm text-center">Oops!</p>
                    <p class="text-sm text-center"><a class="text-[#F64F59]" href='./login'>Something went wrong. Please try again</a></p>
                </div>
            </div>
        </div>
    )
}

export default Error;