'use client'
import React, { useState } from 'react';

function FocusEventsExample() {
  const [message, setMessage] = useState('');

  const handleFocus = () => {
    setMessage('Input is focused!');
  };

  const handleBlur = () => {
    setMessage('Input lost focus!');
  };

  return (
    <div>
      <input 
        type="text" 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        placeholder="Focus or blur this input"
      />
      <p>{message}</p>
    </div>
  );
}

export default FocusEventsExample;
