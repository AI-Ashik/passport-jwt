import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname;

    if (currentPath !== "/register") {
      if (token) {
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
            navigate("/login");
          });
      } else {
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleRegister = () => {
    axios
      .post("http://localhost:3000/register", { username, password })
      .then(() => {
        console.log("User is registered");
        navigate("/login");
      })
      .catch((error) => {
        navigate("/register");
      });
  };

  return (
    <div>
      <h2>Register Page</h2>
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
