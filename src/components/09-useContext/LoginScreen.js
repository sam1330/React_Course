import React, { useContext } from "react";

import { UserContext } from "./UserContext";

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-outline-primary"
        onClick={() => setUser({
          id: 1,
          name: "Sammy",
          email: "sammy1301@gmail.com"
        })}
      >
        Login
      </button>
    </>
  );
};

export default LoginScreen;