import React from 'react'
import Sidebar from '../Components/Sidebar'
import './StudentDashboard.css'
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'
function AlumniDashboard() {
    const Navigate= useNavigate();
    
  return (
    <div>
        <>
        <Sidebar></Sidebar>
        <div id="VLine"></div>
        <div id="welcome"><p>WELCOME Alumni</p></div>
        <div id="myprofilebtn"><button onClick={()=>{Navigate("/CurrentAlumniProfile")}} ><p> My Profile <div id="Picon"><CgProfile /> </div></p></button></div>
        <div id="VerticalLane"></div>
        <div id="VLine3"></div>
        <div id="VLine2"></div>
         <div id="AddRecord"><p>Add Record</p></div>
         <div id="addrecordbtn"><button onClick={()=>{Navigate("/jobspost")}}><p> Job Post <div id="addicon"><CiCirclePlus /> </div></p></button></div>
         <div id="addachievementbtn"><button onClick={()=>{Navigate("/addnews")}}><p> News Post <div id="achicon"><CiCirclePlus /> </div></p></button></div>
        <div id="Addalumniprofile"><p>Update Alumni Profile</p></div>
        <div id="AlumniProfilebtn"><button  onClick={()=>{Navigate("/createalumniprofile")}}><p>Alumni Profile </p></button></div>
        </>
    </div>
  )
}

export default AlumniDashboard