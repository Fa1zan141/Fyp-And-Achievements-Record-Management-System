import React, { useState } from 'react';
import './LR.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  axios.defaults.withCredentials=true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', { email, role, password })
      .then(result => {
        console.log(result);
        if (result.data.status === "OK") {

          if(result.data.role === "Admin"){
            navigate('/admindashboard');
          } else if (result.data.role === "Student"){
            navigate('/studentdashboard');
          }else if (result.data.role === "Teacher"){
            navigate('/teachersdashboard');
          }
          else{
            navigate('/alumnidashboard');
          }

          Toastify({
            text: "Login Successfully",
            duration: 3000,
            gravity: "top",
            style: {
              background: "linear-gradient(to right, blue, green)",
              borderRadius: "10px",
            },
          }).showToast();
         
        } else {  Toastify({
          text: "Error During Login",
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
        text: 'An error occurred during login',
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
          <motion.div animate={{ x: [100, -55, -55, 100], move: 1 }} transition={{ type: "tween", repeat: Infinity, duration: 3 }} id="imgg"></motion.div>
          <p class="LRp">Welcome to the revolutionized system for <br /> FYP & Achievements record of the <br /> Department of SE!
          </p>
        </div>
        <div id="rightside">
          <div id="top"> Login Here! </div>
          <div id="text"><p class="LRT">Login</p></div>
          <form id="Lform" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label><br></br>
            <input type="email" id="email" name="email" placeholder="Email"  required onChange={(e) => setEmail(e.target.value)} /><br></br>
            <label htmlFor="password">Password</label><br></br>
            <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /><br></br>
            <label htmlFor="role">Select A Role</label><br></br>
            <select name="role" id="role" form="role" required onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
              <option value="Alumni">Alumni</option>
            </select>
            <button type="submit" id="Lbutton">Login</button>
          </form>

          <button id="btn" onClick={() => { navigate("/register") }}>Create Account</button>
        </div>
      </div>
    </>
  )
}

export default Login;
