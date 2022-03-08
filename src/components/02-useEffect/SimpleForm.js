import React from "react";
import { useEffect, useState } from "react";

import "./effects.css"
import Message from "./Message";

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  // We use useEffect Like a watch on vue, but this is more intuitive. if we dont pass any params, it will execute no matter what changes on the app. and it has a return function that is fired when the component is unmounted. like the hook on Vue.
  useEffect(() => {
    // console.log("form");
  }, [name, email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  };


  return (
    <>
      <h1>Use effect</h1>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      { (name === '123') && <Message /> }
    </>
  )
};

export default SimpleForm;