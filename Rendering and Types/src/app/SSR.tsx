export const metadata = {
    title: "SSR Example",
  };
  
  async function getData() {
    return { name: "Code Queen" };
  }
  
  export default async function Page() {
    const data = await getData();
  
    return (
      <div>
        <h1>Hello, {data.name} from SSR in app/!</h1>
      </div>
    );
  }
  
  
  //Output : Hello, Code Queen from SSR in app/!
  