const MyComponent = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

const App = () => {
  return <MyComponent title="Hello" subtitle="World" />;
};

export default App;

//Output : Hello
//World
//Explanation: Both title and subtitle props are passed and destructured, so both are displayed.