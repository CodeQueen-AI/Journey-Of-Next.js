'use client'
const HomePage: React.FC = () => {
  const greet = (name: string): void => {
    alert("Hello, " + name);
  };

  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <button onClick={() => greet("Code Queen")}>Greet</button>
    </div>
  );
};

export default HomePage;
