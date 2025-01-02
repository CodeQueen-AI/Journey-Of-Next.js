import React from 'react';

export default function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.greeting}</p>
    </div>
  );
}
