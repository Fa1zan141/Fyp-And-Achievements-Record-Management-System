import React from 'react';
import { Link } from 'react-router-dom';
import './JobPost.css'

function News({ newsData }) {
  const showMedia = () => {
    const { Upload } = newsData;
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
      return <img src={`http://localhost:3000/uploads/${Upload}`} />;
    } else {
      return "File Not Supported. Upload Supported File";
    }
  };
  
  return (
    <div className="news-post"> 
      <div className="news-post-icon"> 
      {showMedia()}
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
