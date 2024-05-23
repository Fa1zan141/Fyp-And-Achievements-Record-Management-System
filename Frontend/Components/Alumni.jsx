import React from 'react';
import './Alumni.css';

function Alumni({ alumniData }) {
  return (
    <div className="profile-contain">
      {alumniData.Uploadpic && (
        <img
          src={`http://localhost:3000/uploads/${alumniData.Uploadpic}`}
          alt="Profile"
          className="profile"
        />
      )}
      <div className="profile-information">
        <h1 className="profile-Name">{alumniData.Alumniname}</h1>
        <p className="profile-Position">
          {alumniData.alumniposition}
        </p>
        <a href={`/CurrentAlumniProfile/${alumniData._id}`} className="fyp-btn">View Profile</a>
      </div>
    </div>
  );
}

export default Alumni;
