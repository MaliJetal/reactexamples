import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };
  return (
    <>
      <div
        id={todo.id}
        key={todo.id + todo.title}
        name="todo"
        value={todo.title}
        onClick={handleClick}
        className={todo.completed ? "todo Strike" : "todo"}
      >
        {todo.title}
      </div>
    </>
  );
};
export default ToDo;
