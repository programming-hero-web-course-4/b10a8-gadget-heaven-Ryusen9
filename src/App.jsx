import { useState } from "react"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { useRoutes } from "react-router-dom"
import Hero from "./Components/Hero/Hero"


function App() {
  const [theme, setTheme] = useState(true)
  const handleTheme = () => {
    setTheme(!theme)
    const html = document.getElementById('html');
    theme === true ? html.setAttribute('data-theme', 'light') : html.setAttribute('data-theme', 'business')
  }
const [menu, setMenu] = useState(true);
const handleMenu = () => {
  setMenu(!menu)
}

const element = useRoutes([
  {
    path: '/',
    element : (
      <>
      <Header handleTheme={handleTheme} handleMenu={handleMenu} menu={menu}  theme={theme}/>
      <Hero/>
      <Footer theme={theme} />
      </>
    )
  }
])
  return element;
}

export default App
