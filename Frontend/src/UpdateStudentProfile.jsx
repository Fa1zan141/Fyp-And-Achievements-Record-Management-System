import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'

function UpdateStudentProfile() {
  return (
    <div>
        <>
        <Sidebar></Sidebar>
        <div id="PLine"></div>
        <div id="MP"><p>Update User Information</p></div>
        <div id="Generalform">
        <form >
        <label id='Label1' htmlFor="Firstname">First Name:</label>
        <input type="text" id="Firstname" name="Firstname"/>
        <label id='Label2' htmlFor="Lastname">Last Name:</label>
        <input type="text" id="Lastname" name="Lastname"/>
        <label id='Label3' htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  />
        <label id='Label4' htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" />
        <label id='Label5' htmlFor="dob">DOB:</label>
        <input type="date" id="dob" name="dob" />
        <label id='Label6' htmlFor="city">City:</label>
        <input type="text" id="city" name="city" />
        <label id='Label7' htmlFor="pcode">Postal Code:</label>
        <input type="text" id="pcode" name="pcode" />
        <label id='Label8' htmlFor="proflepicture">Profile Picture:</label>
        <input type="File" id="profilepicture" name="proflepicture" />
        <div id="UA"><button type="submit">Update Information</button></div>
        </form>
    </div>
        
        </>
    </div>
  )
}

export default UpdateStudentProfile