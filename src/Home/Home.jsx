import { useEffect, useState } from "react";
import AllPosts from "../Allposts.jsx/AllPosts"
import { ProductContext } from "../ProductContext"
import axios from "axios";

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchApi = async () => {
        const res = await axios.get("/Api.json");
        setProducts(res.data);
      };
      fetchApi();
    }, []);
    console.log(products)
  return (
    <>
    <ProductContext.Provider value={products}>
        <AllPosts />
    </ProductContext.Provider>
    </>
  )
}

export default Home