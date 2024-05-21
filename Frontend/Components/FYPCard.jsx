import React from 'react';
import './FYPCard.css';

function FYPCard({ Fypdata }) {
  return (
    <div className="fyp-card">
      <div className="fyp-content">
        <div className="fyp-title">{Fypdata.title}</div>
        <div className="fyp-student-name">{Fypdata.studentname}</div>
        <div className="fyp-supervisor">{Fypdata.supervisor}</div>
      </div>
      <a href="/fyprecord" className="fyp-button">View More</a>
    </div>
  );
}

export default FYPCard;
