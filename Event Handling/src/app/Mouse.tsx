'use client'
import React, { useState } from 'react';

function MouseEventsExample() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  const handleMouseEnter = () => {
    setMessage('Mouse entered the button!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the button!');
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        Hover or Click Me
      </button>
      <p>{message}</p>
    </div>
  );
}

export default MouseEventsExample;
