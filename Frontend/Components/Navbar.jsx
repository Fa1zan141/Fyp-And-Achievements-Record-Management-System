import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../src/auth/auth";
function Navbar() {

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
    <nav id="Hnav">
      <div id="Hnavl">
        <div id="Hlogo"></div>
      </div>
      <div id="Hnavr">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/fyprecord">FYP</Link>
          </li>
          <li>
            <Link to="/achievementsrecord">Achievements</Link>
          </li>
          <li>
            <Link to="/news">News & Jobs</Link>
          </li>
          <li>
            <Link to="/alumniprofiles">Alumni</Link>
          </li>
        </ul>
        <button id="username" onClick={handleSubmit}>{user && <h1>{user.FirstName} {user.LastName}</h1>}</button>
        <button id="Hpbtn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
