'use client'
import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in</h2>
      )}
      
      <button
        onClick={toggleLogin}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}
