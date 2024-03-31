import React from 'react'
import Sidebar from '../Components/Sidebar'
import './AdminDashboard.css'
import { CgProfile } from "react-icons/cg";
function AdminDashboard() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>WELCOME ADMIN</p></div>
    <div id="myprofilebtn"><button><p> My Profile <div id="Picon"><CgProfile /> </div></p></button></div>
    <div id="Approvalbtn"><button><p> Approvals <div id="count">5</div></p></button></div>
    <div id="VerticalLane"></div>
    <div id="VLine2"></div>
    <div id="AddRecord"><p>View Record</p></div>
    <div id="addrecordbtn"><button><p> View FYP </p></button></div>
    <div id="addachievementbtn"><button><p> View Achievement </p></button></div>
    <div id="VLine3"></div>
    <div id="Addalumniprofile"><p>View Profile</p></div>
    <div id="AlumniProfilebtn"><button><p> View Alumni Profile </p></button></div>
    <div id="VLine4"></div>
    <div id="UpdateRecord"><p>Update Record</p></div>
    <div id="updaterecordbtn"><button><p> Update FYP </p></button></div>
    <div id="updateachievementbtn"><button><p> Update Achievement </p></button></div>
    <div id="VLine5"></div>
    <div id="Updatealumniprofile"><p>Update Profile</p></div>
    <div id="EditAlumniProfilebtn"><button><p> Edit Alumni Profile </p></button></div>


    </>
  )
}

export default AdminDashboard