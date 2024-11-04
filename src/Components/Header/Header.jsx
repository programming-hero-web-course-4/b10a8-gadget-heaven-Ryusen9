import { IoMenuOutline, IoMoonSharp } from "react-icons/io5";
import props from "prop-types";
import Menu from "./Menu";

const Header = ({ handleTheme, theme, handleMenu, menu }) => {
  return (
    <nav className="fixed z-10 top-0 right-0 w-full font-sora">
      <div
        id="container"
        className="flex items-center justify-between relative py-8 lg:py-7 px-9 md:px-14 lg:px-16"
      >
        <div id="logo">
          <p className={`text-xl md:text-2xl font-bold ${theme === true && 'text-zinc-800'}`}>
            Gadget<span className="text-purple-400">Heaven</span>
          </p>
        </div>
        <div id="menu">
            <Menu menu={menu} theme={theme}/>
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
