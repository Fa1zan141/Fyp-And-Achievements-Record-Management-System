import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../src/auth/auth";
import { FaCaretDown } from 'react-icons/fa';

function Navbar() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const profilePictureUrl = user && user.profilePicture ? `http://localhost:3000/uploads/${user.profilePicture}` : '';

  return (
    <nav id="Hnav">
      <div id="Hnavl">
        <div id="navlogo"></div>
      </div>
      <div id="Hnavr">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/forallfyprecord">FYP</Link>
          </li>
          <li>
            <Link to="/forallachievementrecord">Achievements</Link>
          </li>
          <li>
            <Link to="/news">News & Jobs</Link>
          </li>
          <li>
            <Link to="/alumniprofiles">Alumni</Link>
          </li>
        </ul>
        <div className="profile-dropdown">
          <button id="usernamenav" onClick={handleSubmit}>
            {user && <h1>{user.FirstName} {user.LastName}</h1>}
          </button>
          <div onClick={toggleDropdown}>
            <FaCaretDown className="dropdown-icon" />
          </div>
          {user && (
            <>
              <img id="navpff" src={profilePictureUrl} alt="Profile" />
              {isDropdownOpen && (
                <div className="dropdown-cont">
                  <button id="Hpbtn" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
