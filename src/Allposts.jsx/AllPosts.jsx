import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import PropTypes from "prop-types";

const AllPosts = ({ handleProductInfo }) => {
  const categories = [
    "Phones",
    "Computers",
    "Smart Watches",
    "Chargers",
    "Accessories",
  ];
  const products = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="mb-9 font-sora">
      <h1 className="text-center text-2xl font-sora font-semibold mb-4">
        Explore Cutting-Edge Gadgets
      </h1>
      <div
        id="post-container"
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:w-[90%] mx-auto"
      >
        <div id="category" className="flex md:col-span-2">
          <div className="grid grid-cols-2 gap-4 mx-auto md:h-[30vh]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className="btn rounded-lg"
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setFilteredProducts(products)}
              className="btn rounded-lg"
            >
              All
            </button>
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(filteredProducts.length > 0 ? filteredProducts : products).map(
            (product) => (
              <div key={product.product_id}>
                <div className="border-2 p-3 rounded-xl h-[60vh]">
                  <div className="flex items-center justify-center">
                    <img
                      src={product.product_image}
                      alt=""
                      className="rounded-xl h-[30vh] object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-col justify-between w-full h-[20vh]">
                    <p className="text-xl font-medium">
                      Name:{" "}
                      <span className="font-bold">{product.product_title}</span>
                    </p>
                    <p>
                      Price:{" "}
                      <span className="font-medium">{product.price}</span>$
                    </p>
                    <div className="flex items-center justify-center">
                      <Link to={`Details/${product.product_id}`}>
                        <button
                          onClick={() => handleProductInfo(product)}
                          className="btn bg-transparent border-2 border-purple-300 text-purple-400 hover:bg-purple-400 rounded-2xl hover:text-zinc-100 duration-200 mt-4"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

AllPosts.propTypes = {
  handleProductInfo: PropTypes.func,
};

export default AllPosts;
