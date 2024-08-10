import React, { useState } from "react";
import "./App.css";
import TaskAdd from "./components/Task/TaskAdd";
import NewTask from "./components/NewTask/NewTask";

const App = () => {
  const NewTaskHandler = (newTask) => {
    // arr.push(newTask);
    // console.log(arr);

    updateFun(arr.concat(newTask));
  };

  const [arr, updateFun] = useState([
    { id: "1", text: "task1" },
    { id: "2", text: "task2" },
  ]);

  return (
    <div className="task-main">
      <h1>Task Adder</h1>
      <NewTask taskProp={NewTaskHandler} />
      <TaskAdd arrProp={arr} />
    </div>
  );
};

export default App;
