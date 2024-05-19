import React, { useEffect, useState } from 'react'
import './assets/Fullrecord.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function FypFullRecord() {

  const {id}= useParams()
  const [Record, setRecord]= useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/FYP/fullrecord/"+id);
            setRecord(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);

const showPdf = (Upload) => {
   window.open(`http://localhost:3000/uploads/${Upload}`, "_blank", "noreferrer");
}

  return (
   <>
   <div>
     <div id="fullrecordhead"><h1>Full Detail Record</h1></div>
      <div id="detailsoffyp">
        <h1>Title</h1>
        <p>{Record.Fyptitle}</p>
        <h1>Supervisor</h1>
        <p>{Record.Supervisor}</p>
        <h1>Domain</h1>
        <p>{Record.Domain}</p>
        <h1>Year</h1>
        <p>{Record.Year}</p>
        <h1>Summary</h1>
        <p>{Record.Shortsummary}</p>
        <h1>Media</h1>
        <div id="media">{Record.Upload}</div>
        <button id="btnshow" onClick={() => showPdf(Record.Upload)} >Show Pdf</button>
      
        </div>
    </div>

    
   </>
  )
}

export default FypFullRecord