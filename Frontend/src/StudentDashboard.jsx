import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import './StudentDashboard.css'
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './auth/auth';

function StudentDashboard() {
  const Navigate= useNavigate();
  const {token,user}= useAuth()
  
  return (
    <>
     <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME {user && <h1>{user.FirstName}</h1>}</p></div>
    <div id="myprofilebtn"><button onClick={()=>{Navigate("/studentprofile")}} ><p> {user && <h1>{user.FirstName} {user.LastName}</h1>} <div id="Picon"><CgProfile /> </div></p></button></div>
    <div id="VerticalLane"></div>
    <div id="VLine2"></div>
    <div id="AddRecord"><p>Add Record</p></div>
    <div id="addrecordbtn"><button onClick={()=>{Navigate("/addfyp")}}><p> FYP  <div id="addicon"><CiCirclePlus /> </div></p></button></div>
    <div id="addachievementbtn"><button onClick={()=>{Navigate("/addachievement")}}><p> Achievement <div id="achicon"><CiCirclePlus /> </div></p></button></div>
    
    
    </>
   
  )
}

export default StudentDashboard