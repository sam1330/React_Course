import React, { useReducer, useEffect } from "react";

import { todoReducer } from "./todoReducer";

import "./styles.css";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId
    });
  };


  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId
    });
  };

  return (
    <div className="container">
      <h1 className="font-weight-bold">Todo App ( {todos.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4 className="font-weight-bold">Todos</h4>
          <hr />
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-6">
          <TodoAdd handleAddTodo={ handleAddTodo } />
        </div>
      </div>
    </div>
  )
};

export default TodoApp;