'use client'

const MyComponent = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const handleClick = () => {
  alert("Button Clicked!");
};

const App = () => {
  return <MyComponent onClick={handleClick} />;
};

export default App;


//Output : When you click the button, it will show an alert: "Button Clicked!"
//Explanation: The onClick function is passed as a prop, and it triggers the handleClick function when the button 
// is clicked.