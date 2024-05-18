import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useAuth } from './auth/auth';

function StudentProfile() {

  const { token, user } = useAuth();

  return (
    <>
    <Sidebar></Sidebar>
    <div id="PLine"></div>
    <div id="MP"><p>User Information</p></div>
    <img id="ProfilePicture" src="" alt="" />
    <div id="name"> {user && <h1>{user.FirstName} {user.LastName}</h1>} </div>
    <div id="email1">{user && <h1>{user.email}</h1>}</div>
    
    <div id="Generalform">
    <form >
    <label id='Label1' htmlFor="Firstname">First Name:</label>
    <input type="text" id="Firstname" name="Firstname" value={user.FirstName}/>
    <label id='Label2' htmlFor="Lastname">Last Name:</label>
    <input type="text" id="Lastname" name="Lastname" value={user.LastName}/>
    <label id='Label3' htmlFor="email">Email:</label>
    <input type="email" id="accemail" name="email" value={user.email} />
    <label id='Label4' htmlFor="role">Role:</label>
    <input type="text" id="role" name="role" value={user.role} />
    <label id='Label5' htmlFor="dob">DOB:</label>
    <input type="date" id="dob" name="dob" />
    <label id='Label6' htmlFor="city">City:</label>
    <input type="text" id="city" name="city" />
    <label id='Label7' htmlFor="pcode">Postal Code:</label>
    <input type="text" id="pcode" name="pcode" />
    </form>
    </div>
    <div id="updaterecord"><button >Update Information</button></div>
    <div id="DA"><button>Delete Account</button></div>
    </>

  )
}

export default StudentProfile