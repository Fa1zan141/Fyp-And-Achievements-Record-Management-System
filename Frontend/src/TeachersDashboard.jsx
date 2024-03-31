import React from 'react'
import Sidebar from '../Components/Sidebar'
import { CgProfile } from "react-icons/cg";
function TeachersDashboard() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME ADEEL SHAHZAD</p></div>
    <div id="myprofilebtn"><button><p> My Profile <div id="Picon"><CgProfile /> </div></p></button></div>
    <div id="VerticalLane"></div>
    <div id="VLine2"></div>
    <div id="AddRecord"><p>View Record</p></div>
    <div id="addrecordbtn"><button><p> View FYP </p></button></div>
    <div id="addachievementbtn"><button><p> View Achievement </p></button></div>
    <div id="VLine3"></div>
    <div id="Addalumniprofile"><p>View Profile</p></div>
    <div id="AlumniProfilebtn"><button><p> View Alumni Profile </p></button></div>
    </>
  )
}

export default TeachersDashboard