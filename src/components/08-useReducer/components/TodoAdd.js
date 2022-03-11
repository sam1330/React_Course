import React from "react";
import PropTypes from 'prop-types';

import { useForm } from "../../../hooks/useForm";


const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm ({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4 className="font-weight-bold">Add Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Learn..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Add todo
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd;