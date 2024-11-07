import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Hero from "../Components/Hero/Hero"
import Footer from "../Components/Footer/Footer"
import axios from "axios";
import { ProductContext } from "../ProductContext";
import { useEffect, useState } from "react";

function Root() {
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
  return (
    <>
            <Header
              handleTheme={handleTheme}
              handleMenu={handleMenu}
              menu={menu}
              theme={theme}
            />
            <Hero />
            <Outlet/>
            <Footer theme={theme} />
    </>
  )
}

export default Root