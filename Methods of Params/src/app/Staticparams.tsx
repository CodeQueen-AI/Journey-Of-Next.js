export default function Home() {
    const multiply = (a: number, b: number): number => a * b;
  
    return (
        <div>
            <h1>Result: {multiply(4, 5)}</h1> {/* Output: 20 */}
        </div>
    );
  }
  
  //Explanation : Parameters a and b are fixed values and do not change