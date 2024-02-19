import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import EnterField from "./components/EnterField/EnterField";

import TasksSection from "./components/TasksSection/TasksSection";

function App() {
  const [tasksData, setTasksData] = React.useState([])
  return (
    <div className="relative select-none">
      <img src="/bg-desktop-dark.jpg" alt="background banner" />
      <div className="h-3/5 w-5/12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Header />
        <EnterField setter={setTasksData}/>
        <TasksSection tasksData={tasksData}/>
      </div>
    </div>
  );
}

export default App;
