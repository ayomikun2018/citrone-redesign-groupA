import React from 'react';

const PrivacyCheckbox = ({ name, options, selectedOptions, onChange }) => {

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    onChange(option);
  };

  return (

    <div className=' checkboxes-container absolute grid font-poppins' style={{ top: '4%', left: '7%'}}>
      <p className=' text-2xl font-semibold font-poppins '>Status </p>
      <span className=' text-base font-poppins mt-2'>Allows you let everyone know you're available or unavailable</span>
      <div className='grid ml-3 '>

      {options.map((option) => (
        <label key={option} className="font-poppins text-base font-medium mt-6  inline-flex items-center space-x-8">
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
            className='  p-2 -mr-5 appearance-none border-2 border-[#A5A5A5] rounded-full w-4 h-4 checked:bg-red-400 checked:border-transparent focus:ring-2 focus:ring-red-400'
            style={{ borderColor: selectedOptions.includes(option) ? 'bg-red-400' : '' }}

          />
          <span className='font-poppins text-base'> {option}</span>
        </label>
      ))}
      </div>
    </div>
  );
};

export default PrivacyCheckbox;
