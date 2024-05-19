import React, { useState } from 'react'
import './assets/LR.css'
import axios from 'axios'
import { motion } from "framer-motion"
import {useNavigate} from 'react-router-dom'

function Register() { 

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('Student');
  const [password, setpassword] = useState('');
  
  const navigate= useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/FYP/register', { FirstName, LastName, email, role, password })
      .then(result => {
        console.log(result);
        if (result.data.status === "OK") {
          Toastify({
            text: result.data.message,
            duration: 3000,
            gravity: "top",
            style: {
              background: "linear-gradient(to right, blue, green)",
              borderRadius: "10px",
            },
          }).showToast();
          navigate('/login');
        } else {  Toastify({
          text: result.data.message,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, red, brown)",
            borderRadius: "10px",
          },
        }).showToast();
      }
    })
    .catch(error => {
      console.error('ERROR WHILE LOGIN', error);
      // Handle the error, e.g., display an error message to the user
      Toastify({
        text: "Error occur during login",
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }); 
    }
  return (
    <>
    <div id="main">
        <div id="leftside">
            <motion.div animate={{x:[100,-55,-55,100], move:1}}transition={{type:"tween", repeat: Infinity, duration:3}} id="imgg"></motion.div>
            <p class="LRp">Welcome to the revolutionized system for <br></br>FYP & Achievements record of the <br></br> Department of SE! </p>
        </div>

        <div id="rightside">
            <div id="top"> <h1>Register Here!</h1></div>
            <div id="text"><p class="LRT">Register</p></div>
            <form id="Rform" onSubmit={handleSubmit}>
            <label htmlFor="FirstName">FirstName</label><br></br>
                <input type="text" id="FirstName" name="FirstName" placeholder="FirstName" required onChange={(e) => setFirstName(e.target.value)} /><br></br>
                <label htmlFor="LastName">LastName</label><br></br>
                <input type="text" id="LastName" name="LastName" placeholder="LastName" required
                onChange={(e) => setLastName(e.target.value)}/><br></br>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" id="email" name="email" placeholder="Email" unique required 
                onChange={(e) => setemail(e.target.value)}/><br></br>
                <label htmlFor="role">Select A Role</label><br></br>
                <select name="role" id="role" form="role" required onChange={(e) => setrole(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="Password " required onChange={(e) => setpassword(e.target.value)}/><br></br>
                <button type="submit" id="Rbutton">Register</button>
                <p id="Areadyaccount">You Already have an account? <a href="/login">Login</a> </p>
            </form>
        </div>
    </div>
    
    </>
  )
  }

export default Register