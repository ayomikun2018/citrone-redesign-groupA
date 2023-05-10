import React from 'react';



const ThemeCheckbox = ({ name, options, selectedOptions, onChange }) => {

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    onChange(option);
  };

  return (

    <div className=' checkboxes-container absolute grid font-poppins' style={{top: '13%', left: '8%'}}>
      <p className=' text-2xl font-semibold font-poppins -mt-14'>Customize Theme </p>
      <div className='flex ml-3 '>

      {options.map((option) => (
        <label key={option} className="font-poppins text-base font-medium mt-6  inline-flex items-center space-x-8">
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
            className=' -mt-6 ml-10 -mr-5 appearance-none border-2 border-[#F64F59 rounded-full w-5 h-5 checked:bg-[#F64F59] checked:-mt-6 checked:border-transparent focus:ring-2 focus:ring-[#A5A5A5]'
          />
          <p className=' font-poppins text-base font-medium -mt-6'>{option}</p>
        </label>
      ))}
      </div>
    </div>
  );
};

export default ThemeCheckbox;
