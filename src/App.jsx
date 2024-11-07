import { useRoutes } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Statistics from "./Statistics/Statistics";
import ProductInfo from "./Components/Product info/ProductInfo";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([])
  const handleProductInfo = (selectedProduct) => {
    setProduct(selectedProduct)
  }
  const element = useRoutes([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home handleProductInfo={handleProductInfo}/>
        },
        {
          path: "/Dashboard",
          element: <Dashboard/>
        },
        {
          path: "/Statistics",
          element: <Statistics/>
        },
        {
          path: "/Details/:productId",
          element: <ProductInfo product={product}/>
        }
      ]
    },
  ]);
  return element;
}

export default App;
