export default function Home() {
    const display = ({ name, age }: { name: string; age: number }): string => `${name} is ${age} years old`;
  
    return (
        <div>
            <h1>{display({ name: "Ali", age: 17 })}</h1>
        </div>
    );
  }
  
  //Explanation : Extracts name and age from the object passed as an argument