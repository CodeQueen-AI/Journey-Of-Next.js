'use client'
import React, { useState } from 'react';

function InputEventsExample() {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={value} 
        onInput={handleInput} 
        placeholder="Type something"
      />
      <p>You typed: {value}</p>
    </div>
  );
}

export default InputEventsExample;
