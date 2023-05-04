import React, { useState } from "react";
import downArrow from '../../Dashboard/DashboardAssets/down-arrow.svg'

const trackList = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Data Science",
  "Mobile Development",
  "Software Testing",
  "Blockchain",
  "DevOps",
];

function TrackDropdownList(props, profileData, setProfileData, handleChange) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Pick a track");

  console.log(props)
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <div
        className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <div class="w-full -ml-3">
          <label htmlFor="track" 
            className='block  tracking-wide  text-base font-medium mb-2" text-black' >
                Track
          </label>

          <input
            id=""
            name="track"
            type="text"
            value={selectedItem}
            readOnly
            onChange={handleChange}
            className=' mt-3 font-poppins appearance-none block bg-transparent text-sm font-normal text-gray-400 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]' style={{width: "810px", height: "50px"}}
            />
          <img
            src={downArrow} alt="down arrow"
            className={`${
              isOpen ? "transform rotate-180" : ""
            } text-gray-400 text-lg -top-12  w-4 h-4 relative`} style={{left: "48rem", }} 
            onClick={handleDropdownClick}
          
          />
        </div>
      </div>
        {isOpen && (
        <ul className=" font-poppins absolute top-full py-2 mt-1 bg-white rounded-md shadow-md"  style={{  width: "810px", height: "362px"}}>
          {trackList.map((item) => (
            <li
              key={item}
              className="px-6 py-2 text-gray-500 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default TrackDropdownList;
