import { useEffect, useState } from "react";
import AllPosts from "../Allposts.jsx/AllPosts"
import { ProductContext } from "../ProductContext"
import axios from "axios";
import PropTypes from 'prop-types'

function Home( {handleProductInfo} ) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchApi = async () => {
        const res = await axios.get("/Api.json");
        setProducts(res.data);
      };
      fetchApi();
    }, []);
  return (
    <>
    <ProductContext.Provider value={products}>
        <AllPosts handleProductInfo={handleProductInfo} />
    </ProductContext.Provider>
    </>
  )
}
Home.propTypes = {
  handleProductInfo: PropTypes.func
}
export default Home