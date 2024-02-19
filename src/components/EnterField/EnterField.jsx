import React from "react";
import CheckBox from "../checkBox/CheckBox";

function EnterField() {
  const [checkStatus, setCheckStatus] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  console.log(inputValue);
  return (
    <div className="relative h-16 ">
      <CheckBox checkStatus={checkStatus} setCheckStatus={setCheckStatus} />
      <input
        className=" placeholder:opacity-[0.7] w-full h-full rounded-md bg-customSecBg text-[1.4em] outline-none  pl-16 text-customCl"
        placeholder="Create a new todo..."
        onChange={(el) => setInputValue(el.target.value)}
        value={inputValue}
        type="text"
      />
    </div>
  );
}

export default EnterField;
