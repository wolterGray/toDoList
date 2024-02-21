import React from "react";
import {RxCross1} from "react-icons/rx";
import CheckBox from "../checkBox/CheckBox";

function TaskItem({
  children,
  removeTask,
  setCompleteStatus,
  darkMode,
  complete,
  id,
}) {
  const [crossVisible, setCrossVisible] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setCrossVisible(true)}
      onMouseLeave={() => setCrossVisible(false)}
      className="relative flex items-center border-b-[1px] border-customBorder  h-16">
      <CheckBox
        darkMode={darkMode}
        checkStatus={complete}
        onClick={() => setCompleteStatus(id)}
      />
      <p
        onClick={() => setCompleteStatus(id)}
        className={`${
          complete && "line-through leading-normal opacity-30"
        } flex items-center cursor-pointer placeholder:opacity-[0.7] w-full  rounded-md outline-none pl-5  `}>
        {children}
      </p>
      <RxCross1
        onClick={() => removeTask(id)}
        className={`${
          crossVisible ? "opacity-1" : "opacity-0"
        } text-[1.5em]  mr-5 cursor-pointer text-secondaryTextColor  ${
          darkMode === "dark" ? "hover:text-textHoverD" : "hover:text-textHoverL"
        }`}
      />
    </div>
  );
}

export default TaskItem;
