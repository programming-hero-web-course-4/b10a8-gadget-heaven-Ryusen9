import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { useState } from "react";

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
            <Outlet/>
            <Footer theme={theme} />
    </>
  )
}

export default Root