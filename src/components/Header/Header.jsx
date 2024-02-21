import React from "react";
import {MdLightMode, MdDarkMode} from "react-icons/md";

function Header({darkModeToggle, darkMode}) {
  return (
    <header className="text-primaryClD mb-10 flex items-center justify-between w-full">
      <p href="#" className="font-[700] tracking-[.30em] text-[2.8em]">
        TODO
      </p>
      <div className="text-3xl cursor-pointer" onClick={darkModeToggle}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </div>
    </header>
  );
}

export default Header;
