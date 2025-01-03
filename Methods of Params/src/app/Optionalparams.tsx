export default function Home() {
    const greet = (name: string, age?: number): string => {
        return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}`;
    };
  
    return (
        <div>
            <h1>{greet("Ali")}</h1> {/* Output: Hello, Ali*/}
            <h1>{greet("Ali", 17)}</h1> {/* Output: Hello, ALi You are 17 years old */}
        </div>
    );
  }
  
  //Explanation : age is optional, so the function works even if it's not provided
  