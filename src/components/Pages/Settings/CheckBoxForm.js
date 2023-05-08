import React, { useState } from 'react';
import Checkboxes from './Checkboxes'
import './AccountLinks.js'

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
    <form onSubmit={handleFormSubmit} className= ' mt-24'
    >

      <Checkboxes
        name="contact-methods"
        options={[  'Send me all notifications (Assignments, Grading, Feedback, Comments, Replies) by email', 
                    'Allow desktop notifications', 
                    'Send updates & community news by email']}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
    </form>
  );
};

export default CheckBoxForm;

