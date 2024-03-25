export async function getServerSideProps() {
  // Fetch data from the server or any other data source
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();

  return {
    props: {
      dataFromServer: data,
    },
  };
}
