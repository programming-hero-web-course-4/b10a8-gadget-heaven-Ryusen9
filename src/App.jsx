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
  };
  const element = useRoutes([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: (
            <>
            <Hero/>
            <Home handleProductInfo={handleProductInfo}/>
            </>
          )
        },
        {
          path: "/Dashboard",
          element: <Dashboard handleCart={handleCart}/>,
          children: [
            {
              path: "Carts",
              element: <Cart carts={carts}/>
            },
            {
              path: "Wishlist",
              element: <Wishlist/>
            },
          ]
        },
        {
          path: "/Statistics",
          element: <Statistics/>
        },
        {
          path: "/Details/:productId",
          element: <ProductInfo product={product}/>
        },
      ]
    },
  ]);
  return element;
}

export default App;
