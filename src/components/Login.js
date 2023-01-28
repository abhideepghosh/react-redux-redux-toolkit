import React from "react";

const Login = () => {
  return (
    <div style={{ display: "grid", padding: "5px" }}>
      <label for="username">Username:</label>
      <input name="username" id="username" type="text" />
      <label for="password">Password:</label>
      <input name="password" id="password" type="password" />
    </div>
  );
};

export default Login;
