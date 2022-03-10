import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {

  const {counter, increment} = useCounter(5000);
  const [show, setShow] = useState(true);

  const hardProcess = ( iterations ) => {
    for (let i = 0; i < iterations; i++)
      console.log("Keloke");
    
    return `${iterations} iterations made`;
  };

  const hardProcessMemo = useMemo(() => hardProcess(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small> </h3>
      <hr />

      <p>{ hardProcessMemo }</p>

      <button className="btn btn-secondary" onClick={increment}>
        increment
      </button>

      <button className="btn btn-outline-success ml-3" onClick={() => setShow(!show)}>
        Show/Hide { JSON.stringify(show) }
      </button>


    </>
  );
};

export default MemoHook;