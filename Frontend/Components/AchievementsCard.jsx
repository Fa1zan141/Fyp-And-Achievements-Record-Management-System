import React from 'react';
import './AchievementsCard.css';

function AchievementsCard({ Achievement }) {
  return (
    <div className="achievement-card">
      {Achievement.Upload && (
        <img src={Achievement.Upload} alt="Achievement" className="achievement-img" />
      )}
      <div className="achievement-content">
        <div className="achievement-description">{Achievement.Description}</div>
        <a href="/achievementsrecord" className="achievement-button">View More</a>
      </div>
    </div>
  );
}

export default AchievementsCard;
