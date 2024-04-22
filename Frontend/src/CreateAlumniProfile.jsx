import React from 'react'
import Sidebar from '../Components/Sidebar'
import './Alumniprofile.css'
function CreateAlumniProfile() {
  return (
    <>
    <Sidebar></Sidebar> 
    <div id="ALine"></div>
    <div id="AAR"><p>Create Alumni Profile</p></div>
    <div id="Arecord"><h1>Account</h1></div>
    <div id="RecordForm">
    <form >
    <label id='Label1' htmlFor="Alumniname">Enter Name:</label>
    <input type="text" id="Alumniname" name="Alumniname" placeholder='Enter Your Name'/>
    <label id='Label2' htmlFor="alumniemail">Enter Email:</label>
    <input type="email" id="alumniemail" name="alumniemail" placeholder='Enter Your Email'/>
    <label id='Label3' htmlFor="alumnipassword">Password:</label>
    <input type="password" id="alumnipassword" name="alumnipassword" placeholder='Enter Password'/>
    <label id='Label4' htmlFor="alumnipositon">Current Position:</label>
    <input type="text" id="alumnipositon" name="alumnipositon" placeholder='Current Positon'/>
    <label id='Label5' htmlFor="PositionDescription">Position Description:</label>
    <input type="text" id="PositionDescription" name="PositionDescription" placeholder='Description'/>
    <label id='Label6' htmlFor="mediaUpload">Sucess Story:</label>
    <input type="file" id="Upload" name="Upload"/>
    <label id='Label7' htmlFor="mediaUpload">Upload Profie Picture:</label>
    <input type="file" id="Uploadpic" name="Upload"/>
    <div id="SubmitRecord"><button type="submit">Create Account</button></div>
    </form>
    </div>
    </>
  )
}

export default CreateAlumniProfile