import React from 'react'
import Sidebar from '../Components/Sidebar'
function StudentProfile() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="PLine"></div>
    <div id="MP"><p>My Profile</p></div>
    <div id="general"><h1>General</h1></div>
    <div id="Generalform">
    <form >
    <label id='Label1' htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" placeholder='Name'/>
    <label id='Label2' htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" placeholder='Email'/>
    <label id='Label3' htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" placeholder='Password'/>
    <label id='Label4' htmlFor="role">Role:</label>
    <input type="text" id="role" name="role" placeholder='Role'/>
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
    <input type="password" id="changepassword" name="changepassword" placeholder='Change password'/>
    <div id="UA"><button type="submit">Update Account</button></div>
    </form>
    <div id="DA"><button>Delete Account</button></div>
    </div>
    </>
  )
}

export default StudentProfile