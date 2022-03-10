import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Mostrando...");

  return (
    <small>{ value }</small>
  );
});

export default Small;