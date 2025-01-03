export default function Home() {
    const greet = (name: string, ...otherNames: string[]): string => {
        let greeting = `Hello, ${name}`;
        otherNames.forEach(n => {
            greeting += `\nHello, ${n}`;
        });
        return greeting;
    };
  
    return (
        <div>
            <h1>{greet("Code Queen", "Anusha", "Ali")}</h1>
            {/* Output: 
                Hello, Code Queen
                Hello, Anusha
                Hello, Ali
            */}
        </div>
    );
  }
  
  //Explanation : Flexible parameters ...otherNames that accept multiple arguments at runtime