import React from 'react'
import Sidebar from '../Components/Sidebar'

function AddFypRecord() {
  return (
    <>
    <Sidebar></Sidebar>
    <div id="ALine"></div>
    <div id="AAR"><p>Add Record</p></div>
    <div id="Arecord"><h1>Add Record</h1></div>
    <div id="RecordForm">
    <form >
    <label id='Label1' htmlFor="Fyptitle">FYP Title:</label>
    <input type="text" id="AchievementTitle" name="Fyptitle" placeholder='Fyp Title'/>
    <label id='Label2' htmlFor="Supervisor">Supervisor:</label>
    <input type="text" id="Domain" name="Supervisor" placeholder='Supervisor'/>
    <label id='Label3' htmlFor="Domain">Domain:</label>
    <input type="text" id="Date" name="Domain" placeholder='Domain'/>
    <label id='Label4' htmlFor="Year">Year:</label>
    <input type="text" id="Year" name="Year" placeholder='Year'/>
    <label id='Label5' htmlFor="Shortsummary">Short Summary:</label>
    <input type="text" id="Description" name="Shortsummary" placeholder='Short summary'/>
    <label id='Label6' htmlFor="mediaUpload">Upload Media:</label>
    <input type="file" id="Upload" name="Upload"/>
    <div id="SubmitRecord"><button type="submit">Add Record</button></div>
    </form>
    </div>

    </>
  )
}

export default AddFypRecord