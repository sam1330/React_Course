import React, { useRef } from "react";

const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        className="form-control my-3"
        placeholder="Nombre"
      />

      <button
        className="btn btn-success"
        onClick={ handleClick }
      >
        Focus
      </button>
    </>
  )
};

export default FocusScreen;