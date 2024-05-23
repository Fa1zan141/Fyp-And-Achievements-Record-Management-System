import React from 'react';
import './Sidebar.css';
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../src/auth/auth";

function Withoutsidenav() {
  axios.defaults.withCredentials=true;
  const Navigate = useNavigate();
  const {token,user}= useAuth()

  const handleSubmit = async () => {
    switch (user.role) {
      case "Admin":
        Navigate('/adminprofile');
        break;
      case "Student":
        Navigate('/studentprofile');
        break;
      case "Teacher":
        Navigate('/teachersprofile');
        break;
      default:
        Navigate('/alumniprofile');
        break;
    }
  };
  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      const response = await axios.post('http://localhost:3000/FYP/logout');
      const { status, message } = response.data;

      // Show toast message based on response status
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        style: {
          background: status === "OK" ? "linear-gradient(to right, blue, green)" : "linear-gradient(to right, red, brown)",
          borderRadius: "10px",
        },
      }).showToast();

      // If logout was successful, navigate to login page
      if (status === "OK") {
        Navigate('/splash');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle errors, e.g., display an error message
      Toastify({
        text: 'An error occurred during logout',
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }
  };

  return (
    <>
      <div id="stddashboardNav">
        <div id="left">
          <div id="Navlogo"></div>
        </div>
        <div id="right">
          <button id="Msgbtn" onClick={() => { Navigate("/ChatBox") }}><FaRegMessage /></button>
          <button id="usernamesb" onClick={handleSubmit}>{user && <h1>{user.FirstName} {user.LastName}</h1>}</button>
          <img id="navpfrofilepic" src="" alt="" />

        </div>
      </div>
    </>
  );
}

export default Withoutsidenav;
