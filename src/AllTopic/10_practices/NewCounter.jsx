import { useState } from "react";

const NewCounter = () => {
  const [product, setProducts] = useState([]);
  const handleFetch = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data.products);
    setProducts(data.products);
  };
  return (
    <div>
      <button onClick={handleFetch}>handleFetch</button>
      {product.length === 0 ? (
        <p>product not available</p>
      ) : (
        <table border="2px" borderPadding="10">
          <thead >
            <tr >
              <th>Title</th>
              <th>Description</th>
              <th>category</th>
              <th>price</th>
              <th>discountPercentage</th>
            </tr>
          </thead>
          <tbody>
            {product.map((ele)=>(
              <tr key={ele.id}>
                <td>{ele.title}</td>
                <td>{ele.description.slice(0,50)}</td>
                <td>{ele.category}</td>
                <td>{ele.price}</td>
                <td>{ele.discountPercentage}</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NewCounter;
