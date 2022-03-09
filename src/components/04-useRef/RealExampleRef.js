import React, { useRef, useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  const inputRef = useRef();

  return (
    <>
      <h1>Real Example Ref</h1>
      
      {show && <MultipleCustomHooks />}
      
      <button
        className="btn btn-success mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </>
  )
};

export default RealExampleRef;