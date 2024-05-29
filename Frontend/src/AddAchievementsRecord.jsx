import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './assets/AddAchievementsRecord.css'


function AddAchievementsRecord() {

  const [AchievementTitle, setAchievementTitle]= useState()
  const [Name, setName]= useState()
  const [Date, setDate]= useState()
  const [Catagory, setCatagory]= useState()
  const [Description, setDescription]= useState()
  const [Upload, setUpload]= useState()

  const Navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("AchievementTitle", AchievementTitle);
    formData.append("Name", Name);
    formData.append("Date", Date);
    formData.append("Catagory", Catagory);
    formData.append("Description", Description);
    formData.append("Upload", Upload);
    console.log(AchievementTitle, Name, Date, Catagory, Description, Upload);

    const result = await axios.post(
      'http://localhost:3000/FYP/addachievement',
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
      Navigate('/studentachievementrecord');
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


  return (
    <>
    <Sidebar></Sidebar>
    <div id="ALine"></div>
    <div id="AAR"><p>Add Achievements Record</p></div>
    <div id="RecordForm">
    <form onSubmit={handleSubmit} >
    <label id='Label1' htmlFor="AchievementTitle">Achievement Title:</label>
    <input type="text" id="AchievementTitle" name="AchievementTitle" placeholder='Achievement Title'  required onChange={(e) => setAchievementTitle(e.target.value)}/>
    <label id='Label2' htmlFor="Name">Achievement Holder:</label>
    <input type="text" id="Domain" name="Name" placeholder='Name Of The Holder'  required onChange={(e) => setName(e.target.value)}/>
    <label id='Label3' htmlFor="Date">Date:</label>
    <input type="date" id="Date" name="Date" placeholder='Date'  required onChange={(e) => setDate(e.target.value)}/>
    <label id='Label4' htmlFor="Catagory">Catagory :</label>
    <input type="text" id="Year" name="Catagory" placeholder='In Which Catagory Achievement '  required onChange={(e) => setCatagory(e.target.value)}/>
    <label id='Label5' htmlFor="Description">Description:</label>
    <textarea id="Description" name="Description" placeholder='Description'required onChange={(e) => setDescription(e.target.value)}></textarea>
    <label id='Label6' htmlFor="mediaUpload">Upload Media:</label>
    <input type="file" id="Upload" name="Upload" required accept="image/*,video/*" onChange={(e) => setUpload(e.target.files[0])}/>
    <div id="SubmitRecord"><button type="submit">Add Record</button></div>
    </form>
    </div>

    </>
  )
}

export default AddAchievementsRecord