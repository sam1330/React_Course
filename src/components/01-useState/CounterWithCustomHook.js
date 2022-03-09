import React from 'react';
import { useCounter } from '../../hooks/useCounter';


const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(200);


  return (
    <>
      <h1>Counter with hook: {state}</h1>
      
      <button className='btn' onClick={() => increment(2)}> +1 </button>
      <button className='btn' onClick={() => decrement(2)}> -1 </button>
      <button className='btn' onClick={() => reset()}> reset </button>
    </>
  )
};

export default CounterWithCustomHook;