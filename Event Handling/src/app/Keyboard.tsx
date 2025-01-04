'use client'
import React, { useState } from 'react';

function KeyboardEventsExample() {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e) => {
    setMessage(`Key Down: ${e.key}`);
  };

  const handleKeyUp = (e) => {
    setMessage(`Key Up: ${e.key}`);
  };

  return (
    <div>
      <input 
        type="text" 
        onKeyDown={handleKeyDown} 
        onKeyUp={handleKeyUp} 
        placeholder="Press any key"
      />
      <p>{message}</p>
    </div>
  );
}

export default KeyboardEventsExample;
