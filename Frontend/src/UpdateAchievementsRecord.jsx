import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function UpdateAchievementsRecord() {

  const {id}= useParams()

  const [AchievementTitle, setAchievementTitle]= useState()
  const [Domain, setDomain]= useState()
  const [Date, setDate]= useState()
  const [Year, setYear]= useState()
  const [Description, setDescription]= useState()
  const [Upload, setUpload]= useState()

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/FYP/updateachievement/"+id);
            setAchievementTitle(result.data.AchievementTitle);
            setDomain(result.data.Domain);
            setDate(result.data.Date);
            setYear(result.data.Year);
            setDescription(result.data.Description);
            setUpload(result.data.Upload);

        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);


const Navigate= useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("AchievementTitle", AchievementTitle);
  formData.append("Domain", Domain);
  formData.append("Date", Date);
  formData.append("Year", Year);
  formData.append("Description", Description);
  formData.append("Upload", Upload);
  console.log(AchievementTitle, Domain, Date, Year, Description, Upload);

  const result = await axios.put(
    'http://localhost:3000/FYP/updateachievement/'+id,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  ).then(result => {
    console.log(result);
    if (result.data.status != "ok") {
    Toastify({
      text:"Record Updated Sucessfully",
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
    <div id="AAR"><p>Update Achievements Record</p></div>
    <div id="RecordForm">
    <form  onSubmit={handleSubmit}>
    <label id='Label1' htmlFor="AchievementTitle">Achievement Title:</label>
    <input type="text" id="AchievementTitle" name="AchievementTitle" placeholder='Achievement Title' value={AchievementTitle}  required onChange={(e) => setAchievementTitle(e.target.value)}/>
    <label id='Label2' htmlFor="Domain">Achievement Holder:</label>
    <input type="text" id="Domain" name="Domain" placeholder='Holder Name' value={Domain} required onChange={(e) => setDomain(e.target.value)}/>
    <label id='Label3' htmlFor="Date">Date:</label>
    <input type="date" id="Date" name="Date" placeholder='Date' value={Date} required onChange={(e) => setDate(e.target.value)}/>
    <label id='Label4' htmlFor="Year">Catagory:</label>
    <input type="text" id="Year" name="Year" placeholder='Catagory Of The Achievement' value={Year} onChange={(e) => setYear(e.target.value)}/>
    <label id='Label5' htmlFor="Description">Description:</label>
    <input type="text" id="Description" name="Description" placeholder='Description' value={Description} required onChange={(e) => setDescription(e.target.value)}/>
    <label id='Label6' htmlFor="mediaUpload">Upload Media:</label>
    <input type="file" id="Upload" name="Upload" required accept="image/*,video/*" onChange={(e) => setUpload(e.target.files[0])}/>
    <div id="SubmitRecord"><button type="submit">Update Record</button></div>
    </form>
    </div>

    </>
  )
}

export default UpdateAchievementsRecord