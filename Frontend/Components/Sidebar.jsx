import React from 'react'
import './Sidebar.css'
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
function Sidebar() {

  const Navigate= useNavigate();
  return (
    <>
    <div id="stddashboardNav">
    <div id="left">
    <div id="Navlogo"></div>
    </div>
    <div id="right">
    <button id="Msgbtn" onClick={()=>{Navigate("/ChatBox")}}><FaRegMessage/></button>
    <button id="username" onClick={()=>{Navigate("/studentdashboard")}}>Muhammad Faizan</button>
    <button id="Prfbtn" onClick={()=>{Navigate("/logout")}}>Logout</button>
    </div>
    </div>
    <div id="StdDashboardsidebar">
        <div id="leftSide">
            <h1>Main Menu</h1>
            <div id="bar"></div>
          <a href="/home">Home</a>
          <br />
          <a href="/fyprecord">FYP</a>
          <br />
          <a href="/achievementsrecord">Achievements</a>
          <br />
          <a href="/newsandjobspost">Jobs Post</a>
          <br />
          <a href="/news">News Post</a>
          <br />
          <a href="/alumniprofiles">Alumni Connect</a>
          <br />
          <br />
          <h1>Settings</h1>
          <div id="Sbar"></div>
            <a href="/studentprofile">General</a>
            <br />
            <a href="/logout">Logout</a>
        </div>
        <div id="longline"></div>
        <div id="rightSide">

        </div>

    </div>
    </>
  )
}

export default Sidebar