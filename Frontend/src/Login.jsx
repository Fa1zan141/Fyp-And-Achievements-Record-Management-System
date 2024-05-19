import React, { useState } from 'react';
import './assets/LR.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/auth';

function Login() {
  const { setToken, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3000/FYP/login', { email, role, password });
      console.log('Full response from server:', result);

      if (result.data.status === "OK") {
        console.log('Login successful:', result.data);

        const { token, user } = result.data.data;

        // Store token and user information in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Update the context state
        setToken(token);
        setUser(user);

        // Navigate to appropriate dashboard
        switch (user.role) {
          case "Admin":
            navigate('/admindashboard');
            break;
          case "Student":
            navigate('/studentdashboard');
            break;
          case "Teacher":
            navigate('/teachersdashboard');
            break;
          default:
            navigate('/alumnidashboard');
            break;
        }

        Toastify({
          text: result.data.message,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, blue, green)",
            borderRadius: "10px",
          },
        }).showToast();

      } else {
        Toastify({
          text: result.data.error,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, red, brown)",
            borderRadius: "10px",
          },
        }).showToast();
      }
    } catch (error) {
      console.error('ERROR WHILE LOGIN', error);
      Toastify({
        text: 'An error occurred during login',
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }
  }

  return (
    <div id="main">
      <div id="leftside">

        <motion.div animate={{ x: [100, -55, -55, 100], move: 1 }} transition={{ type: "tween", repeat: Infinity, duration: 3 }} id="imgg"></motion.div>
        <p className="LRp">Welcome to the revolutionized system for <br /> FYP & Achievements record of the <br /> Department of SE!</p>
      </div>
      <div id="rightside">
        <div id="top"> <h1>Login Here!</h1></div>
        <div id="text"><p className="LRT">Login</p></div>
        <form id="Lform" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /><br />
          <label htmlFor="role">Select A Role</label><br />
          <select name="role" id="role" required onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
            <option value="Alumni">Alumni</option>
          </select>
          <button type="submit" id="Lbutton">Login</button>
        </form>
        <p id="AreadyaccountLogin">Don't have an account? <a href="/register">Register</a> </p>
      </div>
    </div>
  );
}

export default Login;
