import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import EnterField from "./components/EnterField/EnterField";

import TasksSection from "./components/TasksSection/TasksSection";

function App() {
  const [tasksData, setTasksData] = React.useState([]);

  function removeTask(id) {
    const newTaskArr = tasksData.filter((t) => t.id !== id);
    setTasksData(newTaskArr);
  }
  function setCompleteStatus(id) {
    const newTaskArr = tasksData.map((e) =>
      e.id === id ? {...e, complete: !e.complete} : e
    );
    setTasksData(newTaskArr);
  }
  function clearAllCompleted() {
    setTasksData(tasksData.filter((e) => e.complete === false));
  }

  return (
    <div className="relative select-none">
      <img
        className="h-full"
        src="/bg-desktop-dark.jpg"
        alt="background banner"
      />
      <div className="h-3/5 w-5/12 text-[18px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Header />
        <EnterField setter={setTasksData} />
        {tasksData && (
          <TasksSection
            removeTask={removeTask}
            setCompleteStatus={setCompleteStatus}
            clearAllCompleted={clearAllCompleted}
            tasksData={tasksData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
