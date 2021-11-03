import React, { useState } from "react";

const ToDoForm = function ({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInput}
          placeholder="Enter the task"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ToDoForm;
