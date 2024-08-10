import React from "react";
import "./Task.css"
const TaskAdd = (props) => {
    return (

        <ul className="tasks">
        {props.arrProp.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>

    );
};

export default TaskAdd;
