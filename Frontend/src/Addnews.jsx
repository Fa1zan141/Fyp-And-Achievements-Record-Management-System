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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const result = await axios.post('http://localhost:3000/addnews', { newsTitle, newsdescription, newsType, newsDate });

        if (result.data.status !== "fail") {
            showToast(result.data.message, "linear-gradient(to right, blue, green)");
            navigate('/news');
        } else {
            showToast(result.data.message, "linear-gradient(to right, yellow, blue)");
        }
    } catch (error) {
        console.error('ERROR WHILE Adding Record', error);
        showToast('An error occurred during Adding Record', "red");
    }
};

const showToast = (text, background) => {
    Toastify({
        text,
        duration: 3000,
        gravity: "top",
        style: {
            background,
            borderRadius: "10px",
        },
    }).showToast();
};



  return (
    <>
    <Sidebar></Sidebar>
    <div id="VLine"></div>
    <div id="welcome"><p>Add Record</p></div>
    <div id="NewsForm">
    <form onSubmit={handleSubmit} >
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