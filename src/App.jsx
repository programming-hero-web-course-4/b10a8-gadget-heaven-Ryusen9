import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Body from "./Components/Body/Body";
// import axios from "axios";
import { ProductContext } from "./ProductContext";

function App() {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
    const html = document.getElementById("html");
    theme === true
      ? html.setAttribute("data-theme", "light")
      : html.setAttribute("data-theme", "business");
  };
  const [menu, setMenu] = useState(true)
  const handleMenu = () => {
    setMenu(!menu);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("/Api.json");
      const data =  await res.json();
      setProducts(data);
    };
    fetchApi();
  }, []);
  console.log(products)
  const element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <ProductContext.Provider value={products}>
            <Header
              handleTheme={handleTheme}
              handleMenu={handleMenu}
              menu={menu}
              theme={theme}
            />
            <Hero />
            <Body />
            <Footer theme={theme} />
          </ProductContext.Provider>
        </>
      ),
    },
  ]);
  return element;
}

export default App;
