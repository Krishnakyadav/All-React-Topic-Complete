// import { useEffect, useState } from "react";

// const ProductListing = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Product Listing App</h1>

//       <input
//         type="text"
//         placeholder="Search Product..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredProducts.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//           <h3>{product.title}</h3>
//           <p>Price: ${product.price}</p>
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             width="150"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductListing;

import { useState } from "react";

const ProductListing = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const FetchingData = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      console.log(data);
      setProduct(data.products);
    } catch (err) {
      console.log("backedn error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={FetchingData}>Fetching Data</button> <br />
      <br />
      <input
        type="search"
        id="search"
        placeholder="Search here.........."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading......</p>
      ) : (
        <section>
          {product
            .filter((ele) =>
              ele.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((ele) => {
              return (
                <div key={ele.id}>
                  <h4>{ele.title}</h4>
                  <img
                    src={ele.thumbnail}
                    alt={ele.title}
                    height={200}
                    width={300}
                  />
                </div>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default ProductListing;
