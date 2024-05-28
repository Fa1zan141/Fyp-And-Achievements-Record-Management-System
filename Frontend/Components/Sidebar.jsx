import React from 'react';
import './Sidebar.css';
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../src/auth/auth";

function Sidebar() {
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

  const handleDashboard = async () => {
    switch (user.role) {
      case "Admin":
        navigate('/admindashboard');
        break;
      case "Student":
        navigate('/studentdashboard');
        break;
      case "Teacher":
        navigate('/teachersdashboard');
        break;
      default:
        navigate('/alumnidashboard');
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
          <div id="Navbarlogo"></div>
        </div>
        <div id="right">
          <button id="Msgbtn" onClick={() => { navigate("/ChatDashboard") }}><FaRegMessage /></button>
          <button id="usernamesb" onClick={handleSubmit}>{user && <h1>{user.FirstName} {user.LastName}</h1>}</button>
          {user && <img id="navprofilepic" src={profilePictureUrl} alt="Profile" />}
        </div>
      </div>
      <div id="StdDashboardsidebar">
        <div id="leftSide">
          <h1>Main Menu</h1>
          <div id="bar"></div>
          <a href="/home">Home</a>
          <br />
          <button id="dashboard" onClick={handleDashboard}><h1>Dashboard</h1></button>
          <br />
          <a href="/forallfyprecord">FYP</a>
          <br />
          <a href="/forallachievementrecord">Achievements</a>
          <br />
          <a href="/news">News Or Jobs Post</a>
          <br />
          <a href="/alumniprofiles">Alumni Connect</a>
          <br />
          <br />
          <h1>Settings</h1>
          <div id="Sbar"></div>
          <button onClick={handleLogout} id="Logoutbtn">Logout</button>
        </div>
        <div id="longline"></div>
        <div id="rightSide"></div>
      </div>
    </>
  );
}

export default Sidebar;
