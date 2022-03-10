import React, { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment}/>
    </>
  );
};

export default CallbackHook;