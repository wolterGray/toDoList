import React from "react";
import {MdLightMode, MdDarkMode} from "react-icons/md";

function Header({darkModeToggle, darkMode}) {
  return (
    <header className="text-bgLight sm:mb-6 mb-4 flex items-center justify-between w-full">
      <p
        href="#"
        className=" font-bold tracking-[.30em] sm:text-[2em] text-[1.5em]">
        TODO
      </p>
      <div
        className="sm:text-3xl text-2xl cursor-pointer"
        onClick={darkModeToggle}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </div>
    </header>
  );
}

export default Header;
