import axios from "axios";
import { useEffect, useState } from "react";

const Challenge = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("highRating");
  
    useEffect(() => {
      const fetchApi = async () => {
        const res = await axios.get("/Api.json");
        setProducts(res.data);
      };
      fetchApi();
    }, []);
  
    const filteredProducts = () => {
      switch (filter) {
        case "highRating":
          return products.filter((product) => product.rating >= 4.5);
        case "expensive":
          return products.sort((a, b) => b.price - a.price).slice(0, 5);
        default:
          return products;
      }
    };
  return (
    <>
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Product Explorer</h2>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setFilter("highRating")} className="btn">High Rating</button>
        <button onClick={() => setFilter("expensive")} className="btn">Most Expensive</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts().map((product) => (
          <div key={product.product_id} className="border p-4 rounded-lg">
            <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{product.product_title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Challenge