import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import "./styles.css"

function Rangeslider() {
    const [value, setValue] = useState({ min: 0, max: 100 });
    const handleRangeChange = (value) => {
        setValue(value);
      };
      
  return (
    <div>
      <InputRange
  maxValue={20}
  minValue={0}
  value={value}
  onChange={handleRangeChange}
  // formatLabel={(value, type) => {
  //   if (type === 'min' || type === 'max') {
  //     return <span className="input-range__label--value">{value}</span>;
  //   }
  // }}
/>
    </div>
  )
}

export default Rangeslider
