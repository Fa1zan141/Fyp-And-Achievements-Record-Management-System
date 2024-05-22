import React, { useEffect, useState } from 'react'
import './FYPCard.css';
import axios from 'axios'

function FYPCard({FYP}) {

  return (
    <div className="fyp-card">
      <div className="fyp-content">
        <div className="fyp-title">{FYP.Fyptitle}</div>
        <div className="fyp-student-name">{FYP.Supervisor}</div>
        <div className="fyp-supervisor">{FYP.Domain}</div>
      </div>
      <a href="/fyprecord" className="fyp-button">View More</a>
    </div>
  );
}

export default FYPCard;
