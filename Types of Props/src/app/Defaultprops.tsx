const MyComponent = ({ title = "Default Title" }) => {
  return <h1>{title}</h1>;
};

const App = () => {
  return <MyComponent />;
};

export default App;


//Output : Default Title
//Explanation: The title prop has a default value of "Default Title", so if it's not passed, it will display the 
// default value.