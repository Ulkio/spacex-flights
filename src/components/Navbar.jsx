import React, { useState } from "react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { theme, toggleTheme } = useContext(ThemeContext);
  const loc = useLocation().pathname.split("/").pop();
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      {!isTabletOrMobile ? (
        <div className="font-medium flex flex-row justify-end items-center lg:gap-20 px-32 py-4 dark:text-white">
          <NavLink
            to="falcon"
            className={`hover:cursor-pointer p-2 ${loc === "falcon" && "border-b-2 border-black dark:border-white"}`}>
            FALCON 9
          </NavLink>
          <NavLink
            to="falcon-heavy"
            className={`hover:cursor-pointer p-2 ${
              loc === "falcon-heavy" && "border-b-2 border-black dark:border-white"
            }`}>
            FALCON HEAVY
          </NavLink>
          <NavLink
            to="dragon"
            className={`hover:cursor-pointer p-2 ${loc === "dragon" && "border-b-2 border-black dark:border-white"}`}>
            DRAGON
          </NavLink>
          <NavLink
            to="starship"
            className={`hover:cursor-pointer p-2 ${loc === "starship" && "border-b-2 border-black dark:border-white"}`}>
            STARSHIP
          </NavLink>
          <NavLink
            to="starlink"
            className={`hover:cursor-pointer p-2 ${loc === "starlink" && "border-b-2 border-black dark:border-white"}`}>
            STARLINK
          </NavLink>
          {theme === "dark" ? (
            <MdLightMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
          ) : (
            <MdDarkMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-end items-center  p-4 dark:text-white">
          <MdMenu className="z-50" onClick={() => setIsMenuToggled(!isMenuToggled)} size={"2rem"} />
          <div
            className={`fixed right-0 bottom-0 h-full bg-white dark:bg-dark-mode w-[300px] ease-in-out duration-100 ${
              isMenuToggled ? "translate-x-0 " : "translate-x-full "
            }`}>
            <div className="flex flex-col justify-center h-full gap-10 ml-[33%] text-lg ">
              <NavLink
                to="falcon"
                className={`hover:cursor-pointer p-2 ${
                  loc === "falcon" && "border-b-2 border-black dark:border-white"
                }`}>
                FALCON 9
              </NavLink>
              <NavLink
                to="falcon-heavy"
                className={`hover:cursor-pointer p-2 ${
                  loc === "falcon-heavy" && "border-b-2 border-black dark:border-white"
                }`}>
                FALCON HEAVY
              </NavLink>
              <NavLink
                to="dragon"
                className={`hover:cursor-pointer p-2 ${
                  loc === "dragon" && "border-b-2 border-black dark:border-white"
                }`}>
                DRAGON
              </NavLink>
              <NavLink
                to="starship"
                className={`hover:cursor-pointer p-2 ${
                  loc === "starship" && "border-b-2 border-black dark:border-white"
                }`}>
                STARSHIP
              </NavLink>
              <NavLink
                to="starlink"
                className={`hover:cursor-pointer p-2 ${
                  loc === "starlink" && "border-b-2 border-black dark:border-white"
                }`}>
                STARLINK
              </NavLink>
              {theme === "dark" ? (
                <MdLightMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
              ) : (
                <MdDarkMode className="hover:cursor-pointer" onClick={() => toggleTheme()} size={"2rem"} />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
