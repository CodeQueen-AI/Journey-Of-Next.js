'use client'
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    return () => {
      clearInterval(timer); 
    };
  }, []); 

  return <h1>Timer: {count} seconds</h1>;
};

export default Timer;
