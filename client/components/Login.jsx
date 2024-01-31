import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.message);
        navigate("/login"); // Redirect to login page on error
      });
  }, [navigate]); // Ad

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/login ", { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
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

      <div></div>
    </div>
  );
};

export default Login;
