import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If user is logged in, redirect to profile page
      navigate("/profile");
    }
  }, [navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:3000/register", { username, password })
      .then(() => {
        console.log("User is registered");
        navigate("/login"); // Redirect to login after successful registration
      })
      .catch((error) => {
        console.log(error);
        // Handle registration failure
      });
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
