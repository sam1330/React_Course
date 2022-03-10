import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter: <Small value={ counter } /> </h1>
      <hr />

      <button className="btn btn-secondary" onClick={increment}>
        increment
      </button>

      <button className="btn btn-outline-success ml-3" onClick={() => setShow(!show)}>
        Show/Hide { JSON.stringify(show) }
      </button>


    </>
  );
};

export default Memorize;