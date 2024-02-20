import React from "react";
import {MdLightMode} from "react-icons/md";

function Header() {
  return (
    <header className="text-customCl mb-10 flex items-center justify-between w-full">
      <p href="#" className="font-[600] tracking-[.40em] text-[2.8em]">
        TODO
      </p>
      <MdLightMode className="text-3xl cursor-pointer" />
    </header>
  );
}

export default Header;
