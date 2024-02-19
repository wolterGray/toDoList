import React from "react";

import TaskItem from "../TaskItem/TaskItem";

function TasksSection({tasksData, removeTask}) {
  const [activeOption, setActiveOption] = React.useState("All");
  const [controlsValue] = React.useState(["All", "Active", "Completed"]);
  
  return (
    tasksData.length && (
      <div className="bg-customSecBg mt-6">
        {tasksData.map((task) => (
          <TaskItem id={task.id} removeTask={removeTask}  key={task.id}>{task.name}</TaskItem>
        ))}
        <div className="h-12 p-5  flex justify-between items-center">
          <div>
            <p>5 items left</p>
          </div>
          <div>
            {controlsValue.map((element) => (
              <button
                key={element}
                onClick={() => setActiveOption(element)}
                className={`mr-3 ${
                  activeOption === element
                    ? "text-[#3078d6]"
                    : "hover:text-customCl"
                }  `}>
                {element}
              </button>
            ))}
          </div>
          <div>
            <button className="mr-3 hover:text-customCl">Clear</button>
            <button className=" hover:text-customCl">Completed All</button>
          </div>
        </div>
      </div>
    )
  );
}

export default TasksSection;
