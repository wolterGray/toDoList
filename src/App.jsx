import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import EnterField from "./components/EnterField/EnterField";

import TasksSection from "./components/TasksSection/TasksSection";

function App() {
  const [tasksData, setTasksData] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);

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
  function darkModeToggle() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      className={`${
        darkMode && "dark:bg-bgDark dark:text-primaryClD"
      } bg-bgLight text-primaryClL h-screen relative text-[18px]  select-none box-border `}>
      <img
        className="min-h-max object-cover absolute "
        src={darkMode ? `/bg-desktop-dark.jpg` : `/bg-desktop-light.jpg`}
        alt="background banner"
      />

      <div className="container md:max-w-xl sm:max-w-lg max-w-[90%] mx-auto pt-20 relative z-auto">
        <Header darkModeToggle={darkModeToggle} darkMode={darkMode} />
        <EnterField darkMode={darkMode} setter={setTasksData} />
        {tasksData && (
          <TasksSection
            darkMode={darkMode}
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
