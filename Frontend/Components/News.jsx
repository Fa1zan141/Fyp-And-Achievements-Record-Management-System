import React from 'react';
import { Link } from 'react-router-dom';
import './JobPost.css';

function News({ newsData }) {
  return (
    <div className="job-post">
      <div className="job-post-icon">
        <img src="" alt="Job Icon" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="job-post-content">
        <Link to="/news" className="job-post-title">
          {newsData.title}
        </Link>
        <div className="job-post-dates">
          {newsData.date} 
        </div>
        <div className="job-post-description">
          {newsData.description}
        </div>
      </div>
    </div>
  );
}

export default News;
