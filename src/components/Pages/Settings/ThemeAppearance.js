import React, { useState } from 'react';
import ThemeCheckbox from './ThemeCheckbox'
// import './AccountLinks.js'

const CheckBoxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', selectedOptions);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>

      <ThemeCheckbox
        name="contact-methods"
        options={[  'System theme (Default)', 
                    'Light theme', 
                    'Dark theme']}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
    </form>
  );
};

export default CheckBoxForm;

