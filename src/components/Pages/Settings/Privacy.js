import React, { useState } from 'react';
import PrivacyCheckbox from './PrivacyCheckbox';
// import './AccountLinks.js'

const PrivacyCheckBoxForm = () => {
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

      <PrivacyCheckbox
        name="contact-methods"
        options={[  'Online', 
                    'Offline', 
                    'On vacation']}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
    </form>
  );
};

export default PrivacyCheckBoxForm;

