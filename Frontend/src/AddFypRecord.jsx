import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddFypRecord() {

  const [Fyptitle, setFyptitle]= useState()
  const [Supervisor, setSupervisor]= useState()
  const [Domain, setDomain]= useState()
  const [Year, setYear]= useState()
  const [Shortsummary, setShortsummary]= useState()
  const [Upload, setUpload]= useState()

  const Navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Fyptitle", Fyptitle);
    formData.append("Supervisor", Supervisor);
    formData.append("Domain", Domain);
    formData.append("Year", Year);
    formData.append("Shortsummary", Shortsummary);
    formData.append("Upload", Upload);
    console.log(Fyptitle, Supervisor, Domain, Year, Shortsummary, Upload);

    const result = await axios.post(
      'http://localhost:3000/FYP/addfyp',
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    ).then(result => {
      console.log(result);
      if (result.data.status != "ok") {
      Toastify({
        text: result.data.message,
        duration: 3000,
        gravity: "top",
        style: {
          background: "linear-gradient(to right, blue, green)",
          borderRadius: "10px",
        },
      }).showToast();
      Navigate('/fyprecord');
    }else {
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
  };
  /*
    axios.post('http://localhost:3000/addfyp', { Fyptitle, Supervisor, Domain, Year, Shortsummary, Upload })
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
        Navigate('/fyprecord');
      }else {
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

*/

  return (
    <>
    <Sidebar></Sidebar>
    <div id="ALine"></div>
    <div id="AAR"><p>Add Record</p></div>
    <div id="Arecord"><h1>Add Record</h1></div>
    <div id="RecordForm">
    <form onSubmit={handleSubmit} >
    <label id='Label1' htmlFor="Fyptitle">FYP Title:</label>
    <input type="text" id="AchievementTitle" name="Fyptitle" placeholder='Fyp Title' required onChange={(e) => setFyptitle(e.target.value)}/>
    <label id='Label2' htmlFor="Supervisor">Supervisor:</label>
    <input type="text" id="Domain" name="Supervisor" placeholder='Supervisor' required onChange={(e) => setSupervisor(e.target.value)}/>
    <label id='Label3' htmlFor="Domain">Domain:</label>
    <input type="text" id="Date" name="Domain" placeholder='Domain' required onChange={(e) => setDomain(e.target.value)}/>
    <label id='Label4' htmlFor="Year">Year:</label>
    <input type="text" id="Year" name="Year" placeholder='Year' required onChange={(e) => setYear(e.target.value)}/>
    <label id='Label5' htmlFor="Shortsummary">Short Summary:</label>
    <input type="text" id="Description" name="Shortsummary" placeholder='Short summary' required onChange={(e) => setShortsummary(e.target.value)}/>
    <label id='Label6' htmlFor="mediaUpload">Upload Media:</label>
    <input type="file" id="Upload" name="Upload" required accept="application/pdf" onChange={(e) => setUpload(e.target.files[0])}/>
    <div id="SubmitRecord"><button type="submit">Submit Record</button></div>
    </form>
    </div>

    </>
  )
}

export default AddFypRecord