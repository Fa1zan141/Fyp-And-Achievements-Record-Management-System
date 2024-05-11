import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import './AlumniDashboard.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Addnews() {

  const [newsTitle, setnewsTitle]= useState()
  const [newsdescription, setnewsdescription]= useState()
  const [newsType, setnewsType]= useState()
  const [newsDate, setnewsDate]= useState()
  

  const navigate= useNavigate();

  const newshandleSubmit= async (e) => {
    axios.post('http://localhost:3000/addnews', { newsTitle, newsdescription, newsType, newsDate})
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
        navigate('/news'); 
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
    })
  };



  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>Add Record</p></div>
    <div id="NewsForm">
    <form onSubmit={newshandleSubmit} >
    <label id='NLabel1' htmlFor="newsTitle">News Title:</label>
    <input type="text" id="newsTitle" name="newsTitle" placeholder='News Title' required onChange={(e) => setnewsTitle(e.target.value)}/>
    <label id='NLabel2' htmlFor="newsdescription">Description:</label>
    <input type="text" id="newsdescription" name="newsdescription" placeholder='News Description' required onChange={(e) => setnewsdescription(e.target.value)}/>
    <label id='NLabel3' htmlFor="newsType">News Type:</label>
    <input type="text" id="newsType" name="newsType" placeholder='Type Of New' required onChange={(e) => setnewsType(e.target.value)}/>
    <label id='NLabel4' htmlFor="newsDate">Date Of News:</label>
    <input type="text" id="newsDate" name="newsDate" placeholder='News Date' required onChange={(e) => setnewsDate(e.target.value)}/>
    <div id="newssubmit"><button type="submit">Submit News</button></div>
    
    </form>
    </div>
    
    </>
  )
}

export default Addnews