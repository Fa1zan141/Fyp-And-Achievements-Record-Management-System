import React, { useEffect, useState } from 'react'
import './Fullrecord.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Jobpostfullrecord() {


  const {id}= useParams()
  const [JobRecord, setJobRecord]= useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/jobsrecord/"+id);
            setJobRecord(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);


  return (
    <div>
    <>
      <div>
     <div id="fullrecordhead"><h1>Full Detail Record</h1></div>
      <div id="detailsoffyp">
        <h1>Job Title</h1>
        <p>{JobRecord.jobTitle}</p>
        <h1>Job Location</h1>
        <p>{JobRecord.joblocation}</p>
        <h1>Link Of The Job</h1>
        <p>{JobRecord.joblink}</p>
        <h1>Required Skills</h1>
        <p>{JobRecord.skill}</p>
        <h1>Required Experience</h1>
        <p>{JobRecord.experience}</p>
      
        </div>
    </div>
    </>
    </div>
  )
}

export default Jobpostfullrecord