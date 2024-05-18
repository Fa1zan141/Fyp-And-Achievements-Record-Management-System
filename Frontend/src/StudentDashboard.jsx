import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import './StudentDashboard.css'
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function StudentDashboard() {
  const Navigate= useNavigate();

  
  return (
    <>
     <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME Faizan</p></div>
    <div id="myprofilebtn"><button onClick={()=>{Navigate("/studentprofile")}} ><p> My Profile <div id="Picon"><CgProfile /> </div></p></button></div>
    <div id="VerticalLane"></div>
    <div id="VLine2"></div>
    <div id="AddRecord"><p>Add Record</p></div>
    <div id="addrecordbtn"><button onClick={()=>{Navigate("/addfyp")}}><p> FYP  <div id="addicon"><CiCirclePlus /> </div></p></button></div>
    <div id="addachievementbtn"><button onClick={()=>{Navigate("/addachievement")}}><p> Achievement <div id="achicon"><CiCirclePlus /> </div></p></button></div>
    
    
    </>
   
  )
}

export default StudentDashboard