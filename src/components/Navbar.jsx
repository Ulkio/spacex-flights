import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full z-50">
      <div className="font-medium flex flex-row justify-end items-center gap-20 px-32 py-4 dark:text-white">
        <NavLink to="falcon" className="hover:cursor-pointer p-2">
          FALCON 9
        </NavLink>
        <NavLink to="falcon-heavy" className="hover:cursor-pointer p-2">
          FALCON HEAVY
        </NavLink>
        <NavLink to="dragon" className="hover:cursor-pointer p-2">
          DRAGON
        </NavLink>
        <NavLink to="starship" className="hover:cursor-pointer p-2">
          STARSHIP
        </NavLink>
        <NavLink to="starlink" className="hover:cursor-pointer p-2">
          STARLINK
        </NavLink>
        {theme === "dark" ? (
          <MdLightMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
        ) : (
          <MdDarkMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
