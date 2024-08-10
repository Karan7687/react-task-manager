import React from "react";

const NewTask = (props) => {
  let enteredtext = "";

  const textChangeHandler = (event) => {
    enteredtext = event.target.value;
    // event.target.value is new value entered bby the user
  };
  const newTaskHandler = (event) => {
    event.preventDefault();

    const newTask = {
      id: Math.random().toString(),
      text: enteredtext,
    };

    props.taskProp(newTask);
  };

  return (
    <form className="form-element" onSubmit={newTaskHandler}>
      <input type="text" onChange={textChangeHandler}></input>
      <button type="submit"> Add</button>
    </form>
  );
};

export default NewTask;
