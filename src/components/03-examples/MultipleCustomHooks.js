import React from "react";

import { useFetch } from "../../hooks/useFetch";

import "./effects.css"
const MultipleCustomHooks = () => {

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

  console.log(state);
  return (
    <>
      <h1>Custom Hooks</h1>
    </>
  )
};

export default MultipleCustomHooks;