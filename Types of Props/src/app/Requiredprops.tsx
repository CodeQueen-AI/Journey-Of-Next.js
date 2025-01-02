const MyComponent = ({ title }) => {
    return <h1>{title}</h1>;
  };
  
  const App = () => {
    return <MyComponent title="Hello, World!" />;
  };
  
  export default App;
  
  //Output : Hello, World!
  
  //Explanation: The title prop is required, and we are passing "Hello, World!". So, the output will display Hello,
  // World! in an <h1> tag.