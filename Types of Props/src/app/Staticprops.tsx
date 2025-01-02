const MyComponent = ({ data }) => {
  return <div>{data}</div>;
};

export default async function Page() {
  const data = "This is Static data."; 

  return <MyComponent data={data} />;
}


//Output : This is static data
//Explanation: The getStaticProps method is used to fetch data at build time. This data is passed as a prop to the
//  component

