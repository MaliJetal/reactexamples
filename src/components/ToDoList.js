import React, { useState } from "react";
import ToDo from "./ToDo";
const ToDoList = ({ todoList, handleToggle, handleFilter }) => {
  return (
    <>
      {todoList.map((task) => {
        return <ToDo todo={task} handleToggle={handleToggle} />;
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </>
  );
};

export default ToDoList;
