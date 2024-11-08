import { IoMenuOutline, IoMoonSharp } from "react-icons/io5";
import props from "prop-types";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Header = ({ handleTheme, theme, handleMenu, menu }) => {
  const location = useLocation();
  const getBgColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-transparent";
      case "/Dashboard":
        return "bg-zinc-200";
        case "/Dashboard/Carts":
          return "bg-zinc-200";
      case "/Statistics":
        return "bg-zinc-200";
      default:
        if (location.pathname.startsWith("/Details/")) {
          return "bg-zinc-200";
        }
        return "bg-transparent";
    }
  };
  return (
    <nav
      className={`fixed z-10 top-0 right-0 w-full font-sora ${getBgColor()}`}
    >
      <div
        id="container"
        className="flex items-center justify-between relative py-6 lg:py-6 px-9 md:px-14 lg:px-16"
      >
        <div id="logo">
          <p
            className={`text-xl md:text-2xl font-bold ${
              theme === true && "text-zinc-800"
            }`}
          >
            Gadget<span className="text-purple-400">Heaven</span>
          </p>
        </div>
        <div id="menu">
          <Menu menu={menu} theme={theme} />
        </div>
        <div
          id="btn-container"
          className="flex items-center justify-center gap-3"
        >
          <button
            onClick={handleMenu}
            className={`btn btn-circle btn-sm bg-zinc-300 ${
              theme === true && "text-zinc-800 hover:text-zinc-200"
            } flex items-center justify-center md:hidden`}
          >
            <IoMenuOutline className="text-2xl" />
          </button>
          <button
            className={`btn btn-circle btn-sm bg-zinc-300 ${
              theme === true && "text-zinc-800 hover:text-zinc-200"
            } flex items-center justify-center`}
            onClick={handleTheme}
          >
            <IoMoonSharp className="text-xl" />
          </button>
          <div className="relative">
            <span className="absolute -top-2 -right-1 text-sm bg-red-500 px-[3px] rounded-full">0</span>
          <Link to={"/Dashboard/Carts"}>
          <button  className="btn btn-circle btn-sm text-lg">
            <MdOutlineShoppingCart />
          </button>
          </Link>
          </div>
          <div className="relative">
          <span className="absolute -top-2 -right-1 text-sm bg-red-500 px-[3px] rounded-full">0</span>
          <Link to={"/Dashboard/Wishlist"}>
          <button  className="btn btn-circle btn-sm text-lg">
            <FaRegHeart />
          </button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  handleTheme: props.func,
  theme: props.bool,
  handleMenu: props.func,
  menu: props.bool,
};

export default Header;
