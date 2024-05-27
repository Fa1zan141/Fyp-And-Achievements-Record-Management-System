import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import './assets/AdminDashboard.css';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './auth/auth';

function AdminDashboard() {

  const navigate = useNavigate();
  const [success, setsuccess] = useState();
  const {token,user}= useAuth()

  useEffect(() =>{
    if(!token){
      navigate('/login')
    }
  })

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

  useEffect(() => {
    axios.get("http://localhost:3000/admindashboard")
      .then(result => {
        if (result.data === "Success") {
          setsuccess(true);
        } else {
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Sidebar />
      <div id="VLine"></div>
      <div id="welcome"><p>WELCOME {user && <h1>{user.FirstName}</h1>}</p></div>
      <div id="myprofilebtn"><button onClick={handleSubmit}><p> {user && <h1>{user.FirstName} {user.LastName}</h1>}  <div id="Picon"><CgProfile /></div></p></button></div>
      <div id="VerticalLane"></div>
      <div id="VLine2"></div>
      <div id="AddRecord"><p>View Record</p></div>
      <div id="addrecordbtn"><button onClick={() => { navigate("/fyprecord") }}><p> View FYP </p></button></div>
      <div id="addachievementbtn"><button onClick={() => { navigate("/achievementsrecord") }}><p> View Achievement </p></button></div>
      <div id="VLine3"></div>
      <div id="Addalumniprofile"><p>View Profile</p></div>
      <div id="AlumniProfilebtn"><button onClick={() => { navigate("/AllAlumniProfiles") }}><p> View Alumni Profile </p></button></div>
      <div id="VLine4"></div>
      <div id="UpdateRecord"><p>All User Record</p></div>
      <div id="updaterecordbtn"><button onClick={() => { navigate("/Allusers") }}><p> View All Users </p></button></div>
      <div id="updateachievementbtn"><button><p> Update Achievement </p></button></div>
      <div id="VLine5"></div>
      <div id="Updatealumniprofile"><p>Update Profile</p></div>
      <div id="EditAlumniProfilebtn"><button><p> Edit Alumni Profile </p></button></div>
    </>
  );
}

export default AdminDashboard;
