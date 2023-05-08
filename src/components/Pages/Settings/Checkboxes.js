import React from 'react';



const ProfileCheckboxes = ({ name, options, selectedOptions, onChange }) => {

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    onChange(option);
  };

  return (

    <div className=' checkboxes-container absolute grid font-poppins' style={{top: '100%', left: '8%'}}>
      <span className=' text-2xl font-semibold font-poppins '>Notification Preference </span>
      <div className='grid ml-3 '>

      {options.map((option) => (
        <label key={option} className="font-poppins text-base font-medium mt-6  inline-flex items-center space-x-8">
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
            className=' p-2 appearance-none border-2 border-[#A5A5A5] rounded w-5 h-5 checked:bg-[#A5A5A5] checked:border-transparent focus:ring-2 focus:ring-[#A5A5A5]'
          />
          <span className='font-poppins'>{option}</span>
        </label>
      ))}
      </div>
    </div>
  );
};

export default ProfileCheckboxes;
