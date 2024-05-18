import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function StudentProfile() {


  return (
    <>
    <Sidebar></Sidebar>
    <div id="PLine"></div>
    <div id="MP"><p>My Profile</p></div>
    <div id="general"><h1>General</h1></div>
    <div id="Generalform">
    <form >
    <label id='Label1' htmlFor="Firstname">First Name:</label>
    <input type="text" id="name" name="Firstname" value={FirstName}/>
    <label id='Label2' htmlFor="Lastname">Last Name:</label>
    <input type="text" id="name" name="Lastname" value={LastName}/>
    <label id='Label3' htmlFor="email">Email:</label>
    <input type="email" id="email" name="email"  value={email}/>
    <label id='Label4' htmlFor="role">Role:</label>
    <input type="text" id="role" name="role" value={role}/>
    </form>
    </div>
    <div id="updateacc"><h1>Update Account</h1></div>
    <div id="UpdateaccForm">
    <form >
    <label id='NLabel1' htmlFor="Changename">Change Name:</label>
    <input type="text" id="Changename" name="Changename" placeholder='Change Name'/>
    <label id='NLabel2' htmlFor="changeemail">Change Email:</label>
    <input type="email" id="changeemail" name="changeemail" placeholder='Change Email'/>
    <label id='NLabel3' htmlFor="changepassword">Change password:</label>
    <div id="UA"><button type="submit">Update Account</button></div>
    </form>
    <div id="DA"><button>Delete Account</button></div>
    </div>
    </>
  )
}

export default StudentProfile