import React from 'react';
import Child from './child/page'

export default function Parent() {
  const message = 'Hello from Parent Component!';
  
  return (
    <div>
      <h1>Parent Component</h1>
      <Child greeting={message} />
    </div>
  );
}
