import React from "react";

const ShowIncrement = React.memo(({ increment }) => {

  console.log("Me genere wey");

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
    </>
  );
});

export default ShowIncrement;