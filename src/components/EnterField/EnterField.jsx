import React from "react";
import CheckBox from "../checkBox/CheckBox";
import {FaPlus} from "react-icons/fa6";
import {v4} from "uuid";

function EnterField({setter, id}) {
  const [checkStatus, setCheckStatus] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const addTask = () => {
    setter((prev) => [
      ...prev,
      {id: v4(), complete: checkStatus, name: inputValue},
    ]);
    setInputValue("");
    setCheckStatus(false);
  };
  const onPushEnter = (e) => {
    if (e.key === "Enter" && inputValue.trim().length) {
      addTask();
    }
  };

  return (
    <div className="relative h-16 flex items-center bg-customSecBg">
      <CheckBox
        checkStatus={checkStatus}
        onClick={() => setCheckStatus(!checkStatus)}
      />
      <input
        className=" bg-[transparent]  w-full h-full ml-5 placeholder:opacity-[0.7]  mr-0-auto  rounded-md outline-none text-customCl"
        placeholder="Create a new todo..."
        onKeyDown={(e) => onPushEnter(e)}
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
