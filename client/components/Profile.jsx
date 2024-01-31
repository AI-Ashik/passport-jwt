import axios from "axios"; // Import axios
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate(); // Moved useNavigate outside useEffect

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if token is not available
      navigate("/login");
    } else {
      axios
        .get("http://localhost:3000/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.message);
          navigate("/login"); // Redirect to login page on error
        });
    }
  }, [navigate]); // Added navigate to the dependency array

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
