import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar'
import './assets/StudentDashboard.css'
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'
import { useAuth } from './auth/auth';

function AlumniDashboard() {
    const Navigate= useNavigate();
    const {token,user}= useAuth()

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
    <div>
        <>
        <Sidebar></Sidebar>
        <div id="VLine"></div>
        <div id="welcome"><p>WELCOME {user && <h1>{user.FirstName}</h1>}</p></div>
        <div id="myprofilebtn"><button onClick={handleSubmit} ><p> {user && <h1>{user.FirstName} {user.LastName}</h1>}  <div id="Picon"><CgProfile /> </div></p></button></div>
        <div id="VerticalLane"></div>
        <div id="VLine4"></div>
        <div id="VLine2"></div>
         <div id="AddRecord"><p>Add Record</p></div>
         <div id="NewsPostbtn"><button onClick={()=>{Navigate("/addnews")}}><p> Post <div id="achicon"><CiCirclePlus /> </div></p></button></div>
        <div id="Addalumniprofile"><p>Create Alumni Profile</p></div>
        <div id="AlumniProfilebtn"><button  onClick={()=>{Navigate("/createalumniprofile")}}><p>Alumni Profile </p></button></div>
        </>
    </div>
  )
}

export default AlumniDashboard