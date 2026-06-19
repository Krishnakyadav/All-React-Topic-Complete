import { useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const handleFetch = async () => {
    try {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (err) {
      console.log("error found", err);
    }
  };
  return (
    <>
      <h1>Learn Fetch Api and Display on UI</h1>
      <button onClick={handleFetch}>Fetch APi</button>
      {products.length === 0 ? (
        <p>No product Available</p>
      ) : (
        <section>
          {products.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0,60)}</p>
              </div>
            );
          })};
        </section>
      )}
    </>
  );
};

export default Products;
