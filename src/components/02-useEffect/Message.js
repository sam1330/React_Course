
import React, { useEffect } from "react";

const Message = () => {

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    }
  }, []);

  return (
    <>
      <h3>Una vainaaa</h3>
    </>
  )
};

export default Message;