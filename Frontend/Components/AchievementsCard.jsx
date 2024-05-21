import React from 'react';
import './AchievementsCard.css';

function AchievementsCard({ Achievementsdata }) {
  return (
    <div className="achievement-card">
      {Achievementsdata.img && (
        <img src={Achievementsdata.img} alt="Achievement" className="achievement-img" />
      )}
      <div className="achievement-content">
        <div className="achievement-description">{Achievementsdata.description}</div>
        <a href="/achievementsrecord" className="achievement-button">View More</a>
      </div>
    </div>
  );
}

export default AchievementsCard;
