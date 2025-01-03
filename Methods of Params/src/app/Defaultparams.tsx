export default function Home() {
    const greet = (name: string = "Guest"): string => `Hello, ${name}`;
  
    return (
        <div>
            <h1>{greet()}</h1> {/* Output: Hello, Guest */}
            <h1>{greet("Code Queen")}</h1> {/* Output: Hello, Code Queen */}
        </div>
    );
  }
  
//Explanation: If no value is provided, the default value (Guest) is used