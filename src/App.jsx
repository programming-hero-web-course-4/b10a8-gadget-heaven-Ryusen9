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
import { toast } from 'react-toastify';
import Challenge from "./Challenge/Challenge";

function App() {
  const [product, setProduct] = useState([])
  const handleProductInfo = (selectedProduct) => {
    setProduct(selectedProduct)
  }
  const [carts, setCarts] = useState([])
  const handleCart = (product) => {
    if (!carts.find(item => item.product_id === product.product_id)) {
      setCarts([...carts, product]);
      toast.success('Added to cart, Successfully!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    console.log(product)
  };
  const sortPrice = () => {
    const sortedCarts = [...carts].sort((a, b) => a.price - b.price); // Sorts from low to high
    setCarts(sortedCarts);
    toast.success('Price has been sorted!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  console.log(carts)
  const [wishlists, setWishlists] = useState([]);
  const handleWishlist = (product) => {
    if (!wishlists.find(item => item.product_id === product.product_id)) {
      toast.success('Added to Wishlist, Successfully!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setWishlists([...wishlists, product]);
    }
  }
  const handleDelete = (product) => {
    const updatedCarts = carts.filter(item => item.product_id!== product.product_id)
    setCarts(updatedCarts)
    toast.error('Item Removed, Add some new?', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleDelete2 = (product) => {
    const updatedCarts2 = wishlists.filter(item => item.product_id!== product.product_id) 
    setWishlists(updatedCarts2)
    toast.error('Item Removed, Add some new?', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
              element: <Wishlist wishlists={wishlists} handleCart={handleCart} handleDelete2={handleDelete2}/>
            },
          ]
        },
        {
          path: "/Statistics",
          element: <Statistics/>
        },
        {
          path: "/Challenge",
          element: <Challenge/>
        },
        {
          path: "/Details/:productId",
          element: <ProductInfo product={product} handleCart={handleCart} handleWishlist={handleWishlist}/>
        }
      ]
    },
  ]);
  return element;
}

export default App;
