const MyComponent = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

const App = () => {
  return <MyComponent title="Hello!" />;
};

export default App;

//Output : Hello!
//Explanation: The subtitle prop is optional, so when not passed, it won't render. Only the title prop is displayed
