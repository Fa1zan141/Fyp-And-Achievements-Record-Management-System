import React from 'react'
import Sidebar from '../Components/Sidebar'
import './aprofile.css'
function AProfile() {

  return (
   <>
   <Sidebar></Sidebar>
   <div id="ALine"></div>
   <div id="AAR"><p>Profile</p></div>
    <div id="alumniprofilepicture">
    </div>
    <div id="alumniname">Faizan</div>
    <div id="alumnidetails">
        <div id="currentposition">Current Positon:</div>
       <div id="sucessst"> Sucess Story:</div>
    </div>
    <div id="details">
        All Details Here
    </div>
    <div id="Messagebtn"><button><h1>Send Message</h1></button></div>
   </>
  )
}

export default AProfile