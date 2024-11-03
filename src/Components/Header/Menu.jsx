import { NavLink } from "react-router-dom"
import porps from 'prop-types'

const Menu = ({menu}) => {
    const menuArr = ["Home", "Dashboard", "Statistics", "Challenge"]
  return (
    <div className={`font-sora border-2 md:border-0 ${menu === true ? '-translate-y-[500%]' : 'translate-y-[0%]'} absolute top-16 right-7 h-56 w-56 rounded-lg z-20 md:top-0 md:right-0 py-5 md:py-0 md:gap-0 duration-200 ease-in md:relative md:translate-y-0 md:flex md:h-7 md:w-[100%] px-3`}>
        <ul className="flex flex-col md:flex-row md:px-0 gap-2 justify-between md:items-center h-full px-2">
            {menuArr.map(item => (
                <NavLink className="px-6 md:px-2  rounded-lg py-1 hover:bg-purple-400 md:py-1 hover:text-zinc-100 duration-200" key={Math.random()} to={`/${item}`}>{item}</NavLink>
            ))}
        </ul>
    </div>
  )
}
Menu.propTypes = {
    menu: porps.bool
}
export default Menu