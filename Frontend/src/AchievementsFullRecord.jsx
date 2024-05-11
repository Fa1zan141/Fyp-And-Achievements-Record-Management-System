import React, { useEffect, useState } from 'react'
import './Fullrecord.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function AchievementsFullRecord() {

  const {id}= useParams()
  const [AchievementRecord, setAchievementRecord]= useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/achievementfullrecord/"+id);
            setAchievementRecord(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);

const showPdf = (Upload) => {
   window.open(`http://localhost:3000/uploads/${Upload}`, "_blank", "noreferrer");
}

const showMedia = () => {
  const { Upload } = AchievementRecord;
  if (!Upload) return null;

  const fileType = Upload.split('.').pop().toLowerCase();

  if (fileType === 'mp4') {
    return (
      <iframe src={`http://localhost:3000/uploads/${Upload}`} frameborder="0" width="800px" height="300px" allowfullscreen="true" allow="autoplay"></iframe>
    );
  } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
    return <img src={`http://localhost:3000/uploads/${Upload}`} alt="Image" width="800px" height="300px" />;
  } else {
    return ("File Not Supported Upload Supported File"); // Return nothing if the file type is not supported
  }
};


  return (
   <>
   <div>
     <div id="fullrecordhead"><h1>Full Detail Record</h1></div>
      <div id="detailsoffyp">
        <h1> Achievement Title</h1>
        <p>{AchievementRecord.Achievementtitle}</p>
        <h1>Domain</h1>
        <p>{AchievementRecord.Domain}</p>
        <h1>Date Of Achievement</h1>
        <p>{AchievementRecord.Date}</p>
        <h1>Year Of Achievement</h1>
        <p>{AchievementRecord.Year}</p>
        <h1>Summary About Achievement</h1>
        <p>{AchievementRecord.Description}</p>
        <h1>Achievement Media </h1>
        <div id="media">{showMedia()}</div>
       
        </div>
    </div>

    
   </>
  )
}

export default AchievementsFullRecord