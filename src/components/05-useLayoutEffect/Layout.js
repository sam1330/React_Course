import React, { useLayoutEffect, useRef, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css"

const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

        
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={ pTag }>{ quote }</p>
      </blockquote>
      
      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button className="btn btn-primary" onClick={() => increment()}>
        Next quote 
      </button>
    </>
  );
};

export default Layout;
