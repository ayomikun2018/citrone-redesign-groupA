import React from 'react'
import Navbar from '../../Navigation/Navbar/Navbar'
import Sidebar from '../../Navigation/Sidebar/Sidebar';
import Ellipse from '../Message/MessageAssets/Ellipse 1.svg';
import Timmy from '../Message/MessageAssets/Timmy.svg';
import Debbie from '../Message/MessageAssets/Debbie.svg';
import Femi from '../Message/MessageAssets/Femi.svg';
import Martins from '../Message/MessageAssets/Martins.svg';
import Tolu from '../Message/MessageAssets/Tolu.svg';
import Mary from '../Message/MessageAssets/Mary.svg';
import Doyin from '../Message/MessageAssets/Doyin.svg';
import David from '../Message/MessageAssets/David.svg';
import Group from '../Message/MessageAssets/Group 81.png';
import Group2 from '../Message/MessageAssets/Group 96.png';
import { Link } from "react-router-dom";

const Message = () => (
  <div className="relative font-poppins flex flex-col w-full">
    <Navbar />
    <Sidebar />
    <div className="ml-80 my-32"><Link to="/dashboard"><span> Dashboard</span> &gt; </Link><Link to="/message"><span className="text-[#F64F59]">Message </span></Link></div>
    <div className="h-sceen absolute my-40 ml-80">
      <div className="py-5">
        <div className="flex flex-row">
          <img src={Ellipse}></img>
          <div className="mt-3">
          <h3 className="pl-3 font-bold flex">Adedoyin <h3 class=" ml-3 text-[#F64F59]">(Admin)</h3></h3>
          <div className="flex">
          <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
          <img src={Group} className="w-5 h-5 ml-56"></img>
          </div>
          </div>
        </div>
      </div>
      <hr className="pl-3"></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Timmy}></img>
         <div class="mt-3">
           <h3 className="pl-3 font-bold flex">Timmy<h3 class=" ml-3 text-[#F64F59]">(Tutor)</h3></h3>
           <div className="flex">
           <p class="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
           <img src={Group2} class="w-5 h-5 ml-56"></img>
           </div>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Tolu}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Tolu</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Debbie}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Debbie</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Doyin}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Doyin</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={David}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">David</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Mary}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Mary</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Femi}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Femi</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      <div className="py-5">
      <div className="flex flex-row">
      <img src={Martins}></img>
         <div className="mt-3">
           <h3 className="pl-3 font-bold">Femi</h3>
           <p className="mt-1 pl-3 text-base">Lörem ipsum tempotion sin afurtad i mibening såsom ön. Revis karriärcoach. Befena nyhabyss.............................</p>
         </div>
         </div>
      </div>
      <hr></hr>
      
      
    </div>
  </div>
);

export default Message;