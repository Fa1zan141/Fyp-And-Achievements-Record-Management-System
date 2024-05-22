import React from 'react';
import { Link } from 'react-router-dom';
import './JobPost.css';

function News({ Newsjobs }) {
  return (
    <div className="job-post">
      <div className="job-post-icon">
        <img src={Newsjobs.icon} alt="Job Icon" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="job-post-content">
        <Link to="/news" className="job-post-title">
          {Newsjobs.title}
        </Link>
        <div className="job-post-dates">
          {Newsjobs.startDate} - {Newsjobs.endDate}
        </div>
        <div className="job-post-description">
          {Newsjobs.description}
        </div>
      </div>
    </div>
  );
}

export default News;
