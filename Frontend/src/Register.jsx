import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";

function Register() {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/FYP/register', { FirstName, LastName, email, role, password })
      .then(result => {
        console.log(result);
        if (result.data.status === "OK") {
          navigate('/login');
        } else {
          console.log(result.data.message);
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <>
      <div id="main">
        <div id="leftside">
          <motion.div animate={{ x: [100, -55, -55, 100], move: 1 }} transition={{ type: "tween", repeat: Infinity, duration: 3 }} id="imgg"></motion.div>
          <p className="LRp">Welcome to the revolutionized system for <br />FYP & Achievements record of the <br />Department of SE!</p>
          
        </div>

        <div id="rightside">
          <div id="top"> <h1>Register Here!</h1></div>
          <div id="text"><p className="LRT">Register</p></div>
          <form id="Rform" onSubmit={handleSubmit}>
            <label htmlFor="FirstName">FirstName</label><br />
            <input type="text" id="FirstName" name="FirstName" placeholder="FirstName" required onChange={(e) => setFirstName(e.target.value)} /><br />
            <label htmlFor="LastName">LastName</label><br />
            <input type="text" id="LastName" name="LastName" placeholder="LastName" required onChange={(e) => setLastName(e.target.value)} /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" placeholder="Email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor="role">Select A Role</label><br />
            <select name="role" id="role" form="role" required onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Alumni">Alumni</option>
            </select>
            <div>
              <label htmlFor="password">Password</label><br />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password More The 6 Chracters"
                value={password}
                required
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
               <IoEyeOutline onClick={() => setShowPassword(false)} style={{ cursor: 'pointer', color:'black', backgroundColor:'black'}} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
              )}
            </div>
            <button type="submit" id="Rbutton">Register</button>
            <p id="Areadyaccount">You Already have an account? <a href="/login">Login</a> </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;
