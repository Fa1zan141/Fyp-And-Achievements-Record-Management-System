import React from 'react';
import './AchievementsCard.css';

function AchievementsCard({ Achievement }) {
  const showMedia = () => {
    const { Upload } = Achievement;
    if (!Upload) return null;
  
    const fileType = Upload.split('.').pop().toLowerCase();
  
    if (fileType === 'mp4') {
      return (
        <iframe
          src={`http://localhost:3000/uploads/${Upload}`}
          frameBorder="0"
          width="800px"
          height="300px"
          allowFullScreen
          allow="autoplay"
        ></iframe>
      );
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
      return <img src={`http://localhost:3000/uploads/${Upload}`} id="image" />
    } else {
      return "File Not Supported. Upload Supported File";
    }
  };

  return (
    <div className="achievement-card">
      <div className="achievement-media">
        {showMedia()}
      </div>
      <div className="achievement-content">
        <div className="achievement-description">Title: {Achievement.AchievementTitle}</div>
        <div className="achievement-name"> {Achievement.Name}</div>
        <div className="achievement-catagory">{Achievement.Catagory}</div>
        <a href="/forallachievementrecord" className="achievement-button">View More</a>
      </div>
    </div>
  );
}

export default AchievementsCard;
