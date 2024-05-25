import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './auth/auth';

function TeachersDashboard() {
  const {token,user}= useAuth()
  const Navigate = useNavigate();
  
  useEffect(() =>{
    if(!token){
      Navigate('/login')
    }
  })

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
  

  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME {user && <h1>{user.FirstName}</h1>}</p></div>
    <div id="myprofilebtn" ><button onClick={handleSubmit}><p> {user && <h1>{user.FirstName} {user.LastName}</h1>}  <div id="Picon"><CgProfile /> </div></p></button></div>
    </>
  )
}

export default TeachersDashboard