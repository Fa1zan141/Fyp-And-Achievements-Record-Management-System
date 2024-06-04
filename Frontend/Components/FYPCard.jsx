import React, { useEffect, useState } from 'react'
import './FYPCard.css';
import axios from 'axios'

function FYPCard({FYP}) {

  return (
    <div className="fyp-card">
      <div className="fyp-content">
      <img src={`http://localhost:3000/uploads/${FYP.Logo}`} alt="Profile" id="Fypimage" />
        <div className="fyp-title"> {FYP.Fyptitle} </div>
        <div className="fyp-student-name">{FYP.Supervisor}</div>
      </div>
      <a href="/fyprecord" className="fyp-button">View More</a>
    </div>
  );
}

export default FYPCard;
