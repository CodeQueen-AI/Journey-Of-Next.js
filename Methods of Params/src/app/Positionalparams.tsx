export default function Home() {
    const add = (a: number, b: number): number => a + b;
  
return (
        <div>
            <h1>Result: {add(3, 5)}</h1> 
        </div>
    );
}
//Output : 8
//Explanation : Parameters a and b are passed in a fixed order