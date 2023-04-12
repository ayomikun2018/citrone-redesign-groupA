// import React, { useState } from 'react'
// import { Link } from 'react-router-dom' 
// import ToggleBtn from '../DashboardAssets/Toggles1.svg'

// const AddEvents = () => {
//     const [description, setDescription] = useState(false)
//     const [title, setTitle] = useState('')
//     const [location, setLocation] = useState('')

//     const [alert, setAlert] = useState({show: false, msg: '', type: ''})
//     const [isEditing, setIsEditing] = useState(false)

//     // const { addEvent } = useContext(GlobalContext);
//     // const { events } = useContext(GlobalContext);



//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log();
//         // if(!title) {
            
//         // }
//         // else if (title && location) {

//         // }
//         // else{
//         //     const newItem ={id: new Date().getTime().toString(), title:title}
//         // }
//     }
//   return (
//     <div className='relative '>
//         <form 
//         onSubmit={handleSubmit}
//         className=' flex items-center justify-center h-screen'>

//             {/* Form control field */}
//             <div className=' w-8/12 h-fit p-8 mt-20 items-center place-items-center bg-red-50 grid'>
//                 <div className='flex mb-14 space gap-72 items-center justify-center'>
//                     <p className='text-base font-medium text-gray-400'>Cancel</p>
//                     <p className=' text-lg font-medium text-black'>New Events</p>
//                     <Link to='/dashboard'><button className=' w-24 h-10 text-base font-medium border rounded-full border-solid border-red-500 text-red-500'>Add Event</button></Link>
//                 </div>

//                 <input 
//                     onChange={(e) => setTitle(e.target.value)} 
//                     value={title} 
//                     placeholder='Title' 
//                     className=' w-10/12 h-10 drop-shadow-md rounded-t-lg pl-8' 
//                 />

//                 <input 
//                     onChange={(e) => setLocation(e.target.value)} 
//                     value={location} 
//                     placeholder='Location' 
//                     className='w-10/12 h-10 mt-18 border drop-shadow-md rounded-b-lg pl-8' 
//                 />
           
            
            
          
//                 <div className='grid w-full h-72 mt-18 items-center  place-items-center'>
//                     <div className='flex w-10/12 h-10 rounded-t-lg border bg-white space-x-80 gap-80 drop-shadow-md'>
//                         <p className=' p-2 ml-6 whitespace-nowrap text-semibold font-md'>All-day</p>
//                         <div className=''><img src={ToggleBtn} alt="toggle" className='mt-2 ml-4'/></div>

//                     </div>
//                     <div className='flex w-10/12 h-10 -mt-14 mb-1 bg-white border space-x-80 gap-64 drop-shadow-md'>
//                         <p className='p-2 ml-6 text-semibold font-md'>Start</p>
//                         <div className='flex items-center justify-center gap-2'>
//                             <div className='whitespace-nowrap w-20 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex text-center' >Jan 5, 2023 </div>
//                             <div className='whitespace-nowrap w-16 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 text-center'>2.00PM</div>
//                         </div>
//                     </div>
//                     <div className='flex w-10/12 h-10 p-2 -mt-20 bg-white border space-x-80 gap-64 drop-shadow-md'>
//                         <p className=' pb-4 pl-2  ml-4 text-semibold font-md'>End</p>
//                         <div className='flex items-center justify-center gap-2 '>
//                             <div className='whitespace-nowrap w-20 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 flex text-center ' >Jan 5, 2023</div>
//                             <div className='whitespace-nowrap w-16 h-7 bg-zinc-300 text-sm font-md rounded-md p-2 text-center'>1.00PM</div>
//                         </div>

//                     </div>
//                     <div className='flex w-10/12 h-10 -mt-24 mb-1 bg-white border space-x-80 gap-64 drop-shadow-md'>
//                         <p className='p-2 ml-6 text-semibold font-md'>Repeat</p>
//                         <div className='flex'>
//                             <p className='' >Never</p>
//                             <div className=''>1.00PM</div>
//                         </div>
//                     </div>
//                     <div className='flex w-10/12 h-10 -mt-28 mb-2 bg-white rounded-b-lg border space-x-80 gap-64 drop-shadow-md'>
//                         <p className='p-2 ml-6 text-semibold font-md'>Alert</p>
//                         <div className='flex'>
//                             <p className='' >Never</p>
//                             <div className=''>1.00PM</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
            
            
//         </form>
//     </div>
    
//   )
// }

// export default AddEvents