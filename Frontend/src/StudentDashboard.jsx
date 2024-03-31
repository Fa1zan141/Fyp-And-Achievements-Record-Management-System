import React from 'react'
import Sidebar from '../Components/Sidebar'
import './StudentDashboard.css'
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
function StudentDashboard() {
  return (
    <>
     <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME FAIZAN</p></div>
    <div id="myprofilebtn"><button><p> My Profile <div id="Picon"><CgProfile /> </div></p></button></div>
    <div id="VerticalLane"></div>
    <div id="VLine2"></div>
    <div id="AddRecord"><p>Add Record</p></div>
    <div id="addrecordbtn"><button><p> Add Record <div id="addicon"><CiCirclePlus /> </div></p></button></div>
    <div id="addachievementbtn"><button><p> Add Achievement <div id="achicon"><CiCirclePlus /> </div></p></button></div>
    <div id="VLine3"></div>
    <div id="Addalumniprofile"><p>Add Alumni Profile</p></div>
    <div id="AlumniProfilebtn"><button><p> Register Alumni Profile </p></button></div>
    
    </>
   
  )
}

export default StudentDashboard