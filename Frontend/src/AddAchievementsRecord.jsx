import React from 'react'
import Sidebar from '../Components/Sidebar'
import './AddAchievementsRecord.css'


function AddAchievementsRecord() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="ALine"></div>
    <div id="AAR"><p>Add Achievements Record</p></div>
    <div id="Arecord"><h1>Add Record</h1></div>
    <div id="RecordForm">
    <form >
    <label id='Label1' htmlFor="AchievementTitle">Achievement Title:</label>
    <input type="text" id="AchievementTitle" name="AchievementTitle" placeholder='Achievement Title'/>
    <label id='Label2' htmlFor="Domain">Domain:</label>
    <input type="text" id="Domain" name="Domain" placeholder='Domain'/>
    <label id='Label3' htmlFor="Date">Date:</label>
    <input type="text" id="Date" name="Date" placeholder='Date'/>
    <label id='Label4' htmlFor="Year">Year:</label>
    <input type="text" id="Year" name="Year" placeholder='Year'/>
    <label id='Label5' htmlFor="Description">Description:</label>
    <input type="text" id="Description" name="Description" placeholder='Description'/>
    <label id='Label6' htmlFor="mediaUpload">Upload Data:</label>
    <input type="file" id="Upload" name="Upload"/>
    <div id="SubmitRecord"><button type="submit">Add Record</button></div>
    </form>
    </div>

    </>
  )
}

export default AddAchievementsRecord