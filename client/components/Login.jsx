import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/login ", { username, password })
      .then(() => {
        console.log("User is logged in");
        navigate("/profile");
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form action="">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={username}
          required
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
