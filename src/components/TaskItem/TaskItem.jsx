import React from "react";
import {RxCross1} from "react-icons/rx";
import CheckBox from "../checkBox/CheckBox";

function TaskItem({children, removeTask, setCompleteStatus, complete, id}) {
  const [crossVisible, setCrossVisible] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setCrossVisible(true)}
      onMouseLeave={() => setCrossVisible(false)}
      className="relative  flex items-center border-b-[1px] border-customBorder  h-16">
      <CheckBox checkStatus={complete} onClick={() => setCompleteStatus(id)} />
      <p
        onClick={() => setCompleteStatus(id)}
        className={`${
          complete && "line-through leading-normal text-opacity-25"
        } flex items-center cursor-pointer placeholder:opacity-[0.7] w-full  rounded-md outline-none pl-5 text-customCl `}>
        {children}
      </p>
      <RxCross1
        onClick={() => removeTask(id)}
        className={`${
          crossVisible ? "opacity-1" : "opacity-0"
        } text-[1.5em]  mr-5 cursor-pointer  hover:text-customCl`}
      />
    </div>
  );
}

export default TaskItem;
