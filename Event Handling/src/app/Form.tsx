'use client'
import React, { useState } from 'react';

function FormEventsExample() {
  const [formData, setFormData] = useState({ name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    alert('Input field focused!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        onFocus={handleFocus} 
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormEventsExample;
