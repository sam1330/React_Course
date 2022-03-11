import React from "react";
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

  return (
    <li
      key={todo.id}
      className={ todo.done ? 'done' : 'pending' }
    >
      <p
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-outline-danger ml-3"
        onClick={ () => handleDelete(todo.id) }
      >
        Delete
      </button>
    </li>
  )
};


TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func
};

export default TodoListItem;