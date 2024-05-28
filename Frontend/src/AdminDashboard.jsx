import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import './assets/AdminDashboard.css';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './auth/auth';

function AdminDashboard() {

  const navigate = useNavigate();
  const [totalUsers, setTotalUsers] = useState(0);
  const [alumniUsers, setAlumniUsers] = useState(0);
  const { token, user } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    const fetchCounts = async () => {
      try {
        const totalUsersRes = await axios.get('http://localhost:3000/FYP/count/all-users');
        setTotalUsers(totalUsersRes.data.totalUsers);

        const alumniUsersRes = await axios.get('http://localhost:3000/FYP/count/alumni-users');
        setAlumniUsers(alumniUsersRes.data.alumniUsers);
      } catch (error) {
        console.error('Error fetching user counts:', error);
      }
    };

    fetchCounts();
  }, [token, navigate]);

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

  return (
    <>
      <Sidebar />
      <div id="VLine"></div>
      <div id="welcome"><p>WELCOME {user && <h1>{user.FirstName}</h1>}</p></div>
      <div id="myprofilebtn">
        <button onClick={handleSubmit}>
          <p> {user && <h1>{user.FirstName} {user.LastName}</h1>} <div id="Picon"><CgProfile /></div></p>
        </button>
        <div id="userCounts">
        <p> Users<h1>{totalUsers}</h1> </p>
      </div>
      <div id="AlumniCounts">
      <p>Alumni Users<h1>{alumniUsers}</h1> </p>
      </div>
      
      </div>
      <div id="VerticalLane"></div>
      <div id="VLine2"></div>
      <div id="AddRecord"><p>View Record</p></div>
      <div id="addrecordbtn"><button onClick={() => { navigate("/fyprecord") }}><p> FYP </p></button></div>
      <div id="addachievementbtn"><button onClick={() => { navigate("/achievementsrecord") }}><p> Achievement </p></button></div>
      <div id="VLine3"></div>
      <div id="Addalumniprofile"><p>View Profile</p></div>
      <div id="AlumniProfilebtn"><button onClick={() => { navigate("/AllAlumniProfiles") }}><p> Alumni Profile </p></button></div>
      <div id="VLine4"></div>
      <div id="UpdateRecord"><p>All User Record</p></div>
      <div id="updaterecordbtn"><button onClick={() => { navigate("/Allusers") }}><p> All Users </p></button></div>
      

    </>
  );
}

export default AdminDashboard;
