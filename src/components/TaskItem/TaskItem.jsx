import React from "react";
import {RxCross1} from "react-icons/rx";
import CheckBox from "../checkBox/CheckBox";

function TaskItem({children, removeTask, setCompleteStatus, complete, id}) {
  const [crossVisible, setCrossVisible] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setCrossVisible(true)}
      onMouseLeave={() => setCrossVisible(false)}
      className="relative border-b-[1px] flex items-center border-customBorder  h-16">
      <CheckBox checkStatus={complete} />
      <p
        onClick={() => setCompleteStatus(id)}
        className={`${
          complete && " line-through text-opacity-25"
        } flex items-center cursor-pointer placeholder:opacity-[0.7] w-full h-full rounded-md text-[1.4em] outline-none  pl-16 text-customCl `}>
        {children}
      </p>
      <RxCross1
        onClick={() => removeTask(id)}
        className={`${
          crossVisible ? "visible" : "hidden"
        } text-[1.5em]  mr-5 cursor-pointer  hover:text-customCl`}
      />
    </div>
  );
}

export default TaskItem;
