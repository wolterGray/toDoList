import React from "react";
import "./App.css";
import {MdLightMode} from "react-icons/md";

function App() {
  const [checked, setChecked] = React.useState(false);
  function handleCheck() {
    setChecked((prev) => !prev);
  }

  return (
    <div className="relative ">
      <img src="/bg-desktop-dark.jpg" alt="background banner" />
      <div className="h-3/5 w-5/12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <header className="mb-10 flex items-center justify-between w-full">
          <a href="#" className="font-[600] tracking-[.40em] text-[2.8em]">
            TODO
          </a>
          <MdLightMode className="text-3xl cursor-pointer" />
        </header>
        <div className="relative h-16 ">
          <input
            className=" placeholder:opacity-[0.7] w-full h-full rounded-md bg-customSecBg text-[1.4em] outline-none  pl-16 text-customCl"
            placeholder="Create a new todo..."
            type="text"
          />
          <span
            onClick={handleCheck}
            className={`checkbox ${checked ? "checked" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
