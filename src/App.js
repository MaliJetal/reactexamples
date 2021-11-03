import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodoList(res.data);
      setLoading(false);
    };
    getTodos();
  }, []);

  const handleToggle = (id) => {
    let mappedList = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodoList(mappedList);
  };
  const handleFilter = (id) => {
    let filteredList = todoList.filter((task) => {
      return !task.completed;
    });
    setTodoList(filteredList);
  };
  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, title: userInput, completed: false }
    ];
    setTodoList(copy);
  };
  return (
    <div className="App">
      {/* <Header /> */}
      <ToDoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}
