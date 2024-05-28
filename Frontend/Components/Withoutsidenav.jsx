import React from 'react';
import './Withoutside.css';
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../src/auth/auth";

function Withoutsidenav() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const { token, user } = useAuth();

  const handleSubmit = async () => {
    switch (user.role) {
      case "Admin":
        navigate('/adminprofile');
        break;
      case "Student":
        navigate('/studentprofile');
        break;
      case "Teacher":
        navigate('/teachersprofile');
        break;
      default:
        navigate('/alumniprofile');
        break;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/FYP/logout');
      const { status, message } = response.data;

      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        style: {
          background: status === "OK" ? "linear-gradient(to right, blue, green)" : "linear-gradient(to right, red, brown)",
          borderRadius: "10px",
        },
      }).showToast();

      if (status === "OK") {
        navigate('/splash');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      Toastify({
        text: 'An error occurred during logout',
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }
  };

  const profilePictureUrl = user && user.profilePicture ? `http://localhost:3000/uploads/${user.profilePicture}` : '';

  return (
    <>
      <div id="stddashboardNav">
        <div id="left">
          <div id="Navlogo"></div>
        </div>
        <div id="right">
          <button id="Msgbtn" onClick={() => { navigate("/ChatBox") }}><FaRegMessage /></button>
          <button id="usern" onClick={handleSubmit}>{user && <h1>{user.FirstName} {user.LastName}</h1>}</button>
          {user && <img id="navpp" src={profilePictureUrl} alt="Profile" />}
        </div>
      </div>
    </>
  );
}

export default Withoutsidenav;
