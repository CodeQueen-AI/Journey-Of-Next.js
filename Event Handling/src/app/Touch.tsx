'use client'
import React, { useState } from 'react';

function TouchEventsExample() {
  const [message, setMessage] = useState('');

  const handleTouchStart = () => {
    setMessage('Touch started!');
  };

  const handleTouchEnd = () => {
    setMessage('Touch ended!');
  };

  return (
    <div 
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      <p>{message}</p>
    </div>
  );
}

export default TouchEventsExample;
