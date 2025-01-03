export const metadata = {
    title: "SSG Example",
  };
  
  export async function getStaticProps() {
    return {
      props: { name: "Code Queen" }, 
    };
  }
  
  const SSGExample = ({ name }: { name: string }) => {
    return <h1>Hello, {name} from SSG!</h1>;
  };
  
  export default SSGExample;
  
  //Output : Hello, Code Queen from SSG!
  