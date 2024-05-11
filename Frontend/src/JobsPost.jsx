import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import './AlumniDashboard.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function JobsPost() {

    const [jobTitle, setjobTitle]= useState()
    const [joblocation, setjoblocation]= useState()
    const [joblink, setjoblink]= useState()
    const [skill, setskill]= useState()
    const [experience, setexperience]= useState()
    const Navigate= useNavigate();

    const handleSubmit = async (e) => {
    
    axios.post('http://localhost:3000/jobpost', { jobTitle, joblocation, joblink, skill, experience})
    .then(result => {
      console.log(result);
      if (result.data.status != "fail"){
        Toastify({
          text: result.data.message,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, blue, green)",
            borderRadius: "10px",
          },     
        }).showToast();
        Navigate('/newsandjobspost'); 
      }
      else {
        Toastify({
          text: result.data.message,
          duration: 3000,
          gravity: "top",
          style: {
            background: "linear-gradient(to right, yellow, blue)",
            borderRadius: "10px",
          },
        }).showToast();
      }
    })
    .catch(error => {
      console.error('ERROR WHILE Adding Record', error);
      // Handle the error, e.g., display an error message to the user
      Toastify({
        text: 'An error occurred during Adding Record',
        duration: 3000,
        gravity: "top",
        backgroundColor: "red",
      }).showToast();
    }); 
    
    
}


  return (
    <div>
        <>
        <Sidebar></Sidebar>
        <div id="VLine"></div>
        <div id="welcome"><p>Add Record </p></div>
        <div id="job"><h1>Job Post</h1></div>
        <div id="JobForm">
        <form onSubmit={handleSubmit} >
        <label id='Label1' htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" placeholder='Job Title' required onChange={(e) => setjobTitle(e.target.value)}/>
        <label id='Label2' htmlFor="joblocation">Job Location:</label>
        <input type="text" id="joblocation" name="joblocation" placeholder='Job Location' required onChange={(e) => setjoblocation(e.target.value)}/>
        <label id='Label3' htmlFor="joblink">Job Link:</label>
        <input type="text" id="joblink" name="joblink" placeholder='Paste Job Link' required onChange={(e) => setjoblink(e.target.value)}/>
        <label id='Label4' htmlFor="skill">Skill Required:</label>
        <input type="text" id="skill" name="skill" placeholder='Add skill' required onChange={(e) => setskill(e.target.value)}/>
        <label id='Label5' htmlFor="experience">Experience :</label>
        <input type="text" id="experience" name="experience" placeholder='Add experience' required onChange={(e) => setexperience(e.target.value)}/>
        <div id="jobsubmit"><button type="submit">Submit Job</button></div>
        </form>
        </div>
        </>
    </div>
  )
}

export default JobsPost