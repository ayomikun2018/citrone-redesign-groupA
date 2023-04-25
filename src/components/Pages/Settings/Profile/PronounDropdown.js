import React, { useState } from "react";
import downArrow from '../../Dashboard/DashboardAssets/down-arrow.svg'

const pronounsList = [
  "he/him",
  "she/ser",
  "they/them",
  "Others"
];

function PronounDropdownList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Add your pronoun");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative ">

      <label htmlFor="pronoun" 
        className='block  tracking-wide  text-base px-3  font-medium leading" text-black' >
            Pronouns
      </label>


      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <input
          name="pronoun"
          type="text"
          value={selectedItem}
          readOnly
          className=' mt-3 font-poppins appearance-none block w-full bg-transparent text-sm font-normal text-gray-400  border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#fbfbfb]">' style={{  width: "380px", height: "50px"}}
          />
        <img
          src={downArrow} alt="down arrow"
          className={`${
            isOpen ? "transform rotate-180" : ""
          } text-gray-400 text-lg -top-12 left-80 w-4 h-4 relative`} 
          onClick={handleDropdownClick}
        
        />
      </div>
      {isOpen && (
        <ul className=" font-poppins absolute top-full py-2 mt-1 bg-white rounded-md shadow-md"  style={{  width: "380px", height: "186px"}}>
          {pronounsList.map((item) => (
            <li
              key={item}
              className="px-6 py-2 text-gray-400 cursor-pointer"
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

export default PronounDropdownList;
