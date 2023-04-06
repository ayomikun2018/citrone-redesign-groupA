 import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
 import TopData_ from "./TopData"
 import BottomData_ from "./BottomData"
 import "./Sidebar.css"

 const Sidebar = () => {
     const [topSidebar, setTopSidebar] = useState(TopData_)
     const [bottomSidebar, setBottomSidebar] = useState(BottomData_)
     const [onHovering, setOnHovering] = useState(false)



   return (
     <React.Fragment>
         <div className='sidebar'>
         <div className='mt-12'></div>
         <div className='sidebar-list'>
         {
             topSidebar.map((item, index) => {
             return (
                 <div 
                     className='sidebar-row show'
                     id={window.location.pathname === item.link ? "active" : ""}
                     key={index}
                     onClick={() => {window.location.pathname = item.link}}
                 >
                 <div className="sidebar-icon ">{item.icon}</div>
                 <h2 className="sidebar-title">{item.title}</h2>
                 </div>
             )
             })
         }
         </div>

         <div className='sidebar-list bottom'>
          
         {
             bottomSidebar.map((element, value) => {
             return (
                 <div 
                 className='sidebar-row'
                 id={window.location.pathname === element.link ? "active" : ""}
                 key={value}
                 onClick={() => {window.location.pathname = element.link}}
                 >
                 <div className="sidebar-icon bottom-icon">{element.icon}</div>
                 <h2 className="sidebar-title">{element.title}</h2>
                 </div>
             )
             })
         }
         </div>
         </div>
     </React.Fragment>
   )
 }

 export default Sidebar






 //const Sidebar = () => {

//     const activeMenu =  true
//    return (
//     <div className='ml-3 h-screen  
//     md:overflow-hidden overflow-auto
//     md:hover:overflow-auto pb-10'>
//         {
//             activeMenu && (<>
//             <div className='flex justify-between items-center'>
//                 <Link to='/' onClick={() => {}} 
//                 className="items-center gap-3 ml-3 mt-4 
//                 flex-text-xl font-extrabold tracking-tight
//                 ">

//                 </Link>
                
//             </div>
//             </>)
//         }

//     </div>
//   )
// }

// export default Sidebar