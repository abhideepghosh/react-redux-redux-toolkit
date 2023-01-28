import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ display: "grid", padding: "5px" }}>
      <label for="username">Username:</label>
      <input
        name="username"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
      <label for="password">Password:</label>
      <input
        name="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <button
        style={{
          color: "white",
          background: "transparent",
          border: "2px white solid",
          borderRadius: "5px",
          padding: "5px",
          margin: "5px",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
