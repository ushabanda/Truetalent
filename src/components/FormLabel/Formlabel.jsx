import React, { useState } from 'react';
import "./formlabel.styles.css"

const FormField = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className={`form-field ${isFocused ? 'focused' : ''}`}>
      <label for="teppur" className='teppur'>{label}</label>
      <input type="text" name='teppur' onFocus={handleFocus} onBlur={handleBlur} className='formlabel-input'/>
    </div>
  );
};

export default FormField;
