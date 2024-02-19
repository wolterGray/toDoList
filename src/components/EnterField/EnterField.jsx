import React from "react";
import CheckBox from "../checkBox/CheckBox";
import {FaPlus} from "react-icons/fa6";
import {v4} from "uuid";

function EnterField({setter, id}) {
  const [checkStatus, setCheckStatus] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const addTask = () => {
    setter((prev) => [...prev, {id: v4(), name: inputValue}]);
    setInputValue("");
  };
  return (
    <div className="relative h-16 bg-customSecBg">
      <CheckBox checkStatus={checkStatus} setCheckStatus={setCheckStatus} />
      <input
        className=" bg-[transparent] w-[80%] placeholder:opacity-[0.7]  mr-0-auto h-full rounded-md  text-[1.4em] outline-none  pl-16 text-customCl"
        placeholder="Create a new todo..."
        onChange={(el) => setInputValue(el.target.value)}
        value={inputValue}
        type="text"
      />
      {inputValue && (
        <FaPlus
          onClick={addTask}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-[1.5em] h-full  mr-5 cursor-pointer  hover:text-customCl"
        />
      )}
    </div>
  );
}

export default EnterField;
