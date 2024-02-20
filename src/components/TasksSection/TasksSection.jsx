import React from "react";

import TaskItem from "../TaskItem/TaskItem";

function TasksSection({
  tasksData,
  setCompleteStatus,
  clearAllCompleted,
  removeTask,
}) {
  const [activeOption, setActiveOption] = React.useState("All");

  const [controlsValue] = React.useState(["All", "Active", "Completed"]);

  function filterTasks() {
    if (activeOption === "Active") {
      return tasksData.filter((e) => e.complete === false);
    } else if (activeOption === "Completed") {
      return tasksData.filter((e) => e.complete === true);
    } else return tasksData;
  }

  return (
    <div className="bg-customSecBg mt-6 ">
      {filterTasks().length > 0 ? (
        filterTasks().map((task) => (
          <TaskItem
            setCompleteStatus={setCompleteStatus}
            id={task.id}
            complete={task.complete}
            removeTask={removeTask}
            key={task.id}>
            {task.name}
          </TaskItem>
        ))
      ) : (
        <p className="h-16  font-[500] flex items-center justify-center border-b-[1px] border-customBorder">
          {activeOption !== "All"
            ? ` No "${activeOption}" tasks.`
            : "No tasks yet..."}
        </p>
      )}
      <div className="h-12 p-5 flex justify-between items-center">
        <div>
          <p>
            {tasksData.filter((e) => e.complete === false).length} items left
          </p>
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
          <button
            onClick={clearAllCompleted}
            className="mr-3 hover:text-customCl">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default TasksSection;
