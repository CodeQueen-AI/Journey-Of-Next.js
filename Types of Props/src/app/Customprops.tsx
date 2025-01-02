const MyComponent = ({ userInfo }) => {
  return <p>{userInfo.name} is {userInfo.age} years old.</p>;
};

const user = { name: "John", age: 30 };

// Usage
const App = () => {
  return <MyComponent userInfo={user} />;
};

export default App;

//Output : John is 30 years old
//Explanation: The userInfo custom prop is passed with name and age, so it displays the user's information.