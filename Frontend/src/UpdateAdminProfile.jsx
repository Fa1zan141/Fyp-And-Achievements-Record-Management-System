import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'

function UpdateAdminProfile() {
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
        <label id='Label4' htmlFor="password">Password:</label>
        <input type="password" id="role" name="password" />
        <label id='Label5' htmlFor="proflepicture">Profile Picture:</label>
        <input type="File" id="dob" name="proflepicture" />
        <div id="UA"><button type="submit">Update Information</button></div>
        </form>
    </div>
        
        </>
    </div>
  )
}

export default UpdateAdminProfile