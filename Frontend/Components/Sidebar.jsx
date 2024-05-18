import React from 'react';
import './Sidebar.css';
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../src/auth/auth";

function Sidebar() {
  axios.defaults.withCredentials=true;
  const navigate = useNavigate();
  const {token,user}= useAuth()

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
        navigate('/login');
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
          <button id="Msgbtn" onClick={() => { navigate("/ChatBox") }}><FaRegMessage /></button>
          <button id="username" onClick={() => { navigate("/studentdashboard") }}>{user && <h1>{user.FirstName} {user.LastName}</h1>}</button>
        </div>
      </div>
      <div id="StdDashboardsidebar">
        <div id="leftSide">
          <h1>Main Menu</h1>
          <div id="bar"></div>
          <a href="/home">Home</a>
          <br />
          <a href="/fyprecord">FYP</a>
          <br />
          <a href="/achievementsrecord">Achievements</a>
          <br />
          <a href="/news">News Or Jobs Post</a>
          <br />
          <a href="/alumniprofiles">Alumni Connect</a>
          <br />
          <br />
          <h1>Settings</h1>
          <div id="Sbar"></div>
          <a href="/studentprofile">General</a>
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div id="longline"></div>
        <div id="rightSide"></div>
      </div>
    </>
  );
}

export default Sidebar;
