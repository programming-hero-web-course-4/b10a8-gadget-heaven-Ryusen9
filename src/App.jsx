import { useRoutes } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Statistics from "./Statistics/Statistics";
import ProductInfo from "./Components/Product info/ProductInfo";
import { useState } from "react";
import Hero from './Components/Hero/Hero'
import Cart from './Components/Cart/Cart'
import Wishlist from './Wishlist/Wishlist'

function App() {
  const [product, setProduct] = useState([])
  const handleProductInfo = (selectedProduct) => {
    setProduct(selectedProduct)
  }
  const [carts, setCarts] = useState([])
  const handleCart = (product) => {
    if (!carts.find(item => item.product_id === product.product_id)) {
      setCarts([...carts, product]);
    }
    console.log(product)
  };
  const sortPrice = () => {
    const sortedCarts = [...carts].sort((a, b) => a.price - b.price); // Sorts from low to high
    setCarts(sortedCarts);
  };
  console.log(carts)
  const [wishlists, setWishlists] = useState([]);
  const handleWishlist = (product) => {
    if (!wishlists.find(item => item.product_id === product.product_id)) {
      setWishlists([...wishlists, product]);
    }
  }
  const handleDelete = (product) => {
    const updatedCarts = carts.filter(item => item.product_id!== product.product_id)
    setCarts(updatedCarts)
    setWishlists(updatedCarts)
  }
  const element = useRoutes([
    {
      path: "/",
      element: <Root carts={carts} wishlists={wishlists}/>,
      children: [
        {
          path: "/",
          element: (
            <>
            <Hero/>
            <Home handleProductInfo={handleProductInfo} />
            </>
          )
        },
        {
          path: "/Dashboard",
          element: <Dashboard handleCart={handleCart} handleWishlist={handleWishlist}/>,
          children: [
            {
              path: "Carts",
              element: <Cart carts={carts} handleDelete={handleDelete} sortPrice={sortPrice}/>
            },
            {
              path: "Wishlist",
              element: <Wishlist wishlists={wishlists} handleCart={handleCart} handleDelete={handleDelete}/>
            },
          ]
        },
        {
          path: "/Statistics",
          element: <Statistics/>
        },
        {
          path: "/Details/:productId",
          element: <ProductInfo product={product} handleCart={handleCart} handleWishlist={handleWishlist}/>
        },
      ]
    },
  ]);
  return element;
}

export default App;
