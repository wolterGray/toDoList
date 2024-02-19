import React from "react";
import {RxCross1} from "react-icons/rx";
import CheckBox from "../checkBox/CheckBox";

function TaskItem() {
  const [checkStatus, setCheckStatus] = React.useState(false);

  return (
    <div className="relative border-b-[1px] flex items-center border-customBorder mt-6 h-16">
      <CheckBox checkStatus={checkStatus} setCheckStatus={setCheckStatus} />
      <p
        className={`${
          checkStatus && " line-through text-opacity-25"
        } flex items-center cursor-pointer placeholder:opacity-[0.7] w-full h-full rounded-md text-[1.4em] outline-none  pl-16 text-customCl `}>
        My task
      </p>
      <RxCross1 className="text-[1.5em] mr-5 cursor-pointer  hover:text-customCl" />
    </div>
  );
}

export default TaskItem;
