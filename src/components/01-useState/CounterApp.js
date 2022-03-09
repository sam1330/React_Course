import React, { useState } from 'react';


function CounterApp() {
  const [state, setState] = useState({ counter1: 10, counter2: 20 });

  const { counter1, counter2 } = state;
  
  const sum = () => {
    setState({ ...state, counter1: counter1 + 1 });
  }
  return (
    <>
      <h1>Counter 1: { counter1 } </h1>
      <h1>Counter 2: { counter2 } </h1>
      <hr />
      <button className="btn btn-primary" onClick={sum}>+1</button>
    </>
   );
}

export default CounterApp;