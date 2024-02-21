import React from "react";

import TaskItem from "../TaskItem/TaskItem";

function TasksSection({
  tasksData,
  darkMode,
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
    <div
      className={`${
        darkMode ? "bg-secondaryBgD" : "bg-secondaryBgL"
      } mt-6 rounded-md shadow-xl shadow-[#00000049]`}>
      {filterTasks().length > 0 ? (
        filterTasks().map((task) => (
          <TaskItem
            darkMode={darkMode}
            setCompleteStatus={setCompleteStatus}
            id={task.id}
            complete={task.complete}
            removeTask={removeTask}
            key={task.id}>
            {task.name}
          </TaskItem>
        ))
      ) : (
        <p className="h-16  font-[500] flex items-center justify-center border-b-[1px] border-customBorder text-secondaryTextColor ">
          {activeOption !== "All"
            ? ` No "${activeOption}" tasks.`
            : "No tasks yet..."}
        </p>
      )}
      <div className="h-12 p-5 flex justify-between items-center text-secondaryTextColor text-[.8em] font-bold">
        <div>
          <p>
            {tasksData.filter((e) => e.complete === false).length} items left
          </p>
        </div>
        <div className="flex gap-5">
          {controlsValue.map((element) => (
            <button
              key={element}
              onClick={() => setActiveOption(element)}
              className={`${
                activeOption === element
                  ? "text-blueColor"
                  : darkMode
                  ? "hover:text-textHoverD"
                  : "hover:text-textHoverL"
              }  `}>
              {element}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={clearAllCompleted}
            className={`${
              darkMode
                ? "hover:text-textHoverD"
                : "hover:text-textHoverL"
            } mr-3 `}>
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default TasksSection;
