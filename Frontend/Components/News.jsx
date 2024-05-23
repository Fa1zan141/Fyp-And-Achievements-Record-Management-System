import React from 'react';
import { Link } from 'react-router-dom';
import './JobPost.css'

function News({ newsData }) {
  
  return (
    <div className="news-post"> 
      <div className="news-post-icon"> 
        <img src="" alt="News Icon" style={{ width: '100%', height: '100%' }} /> 
      </div>
      <div className="news-post-content"> 
        <Link to={`/news/${newsData.id}`} className="news-post-title"> 
          {newsData.title}
        </Link>
        <div className="news-post-dates"> 
          {new Date(newsData.date).toLocaleDateString()} 
        </div>
        <div className="news-post-description"> 
          {newsData.description}
        </div>
      </div>
    </div>
  );
}

export default News;
