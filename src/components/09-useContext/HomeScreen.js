import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button
        className="btn btn-outline-danger"
        onClick={() => setUser({})}
      >
        Logout
      </button>
    </>
  );
};

export default HomeScreen;