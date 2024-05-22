import React from 'react';
import './Alumni.css';

function Alumni({ Alumnidata }) {
  return (
    
        <div className="profile-contain">
          {Alumnidata.img && (
            <img
              src={Alumnidata.img}
              alt="Profile"
              className="profile-image"
            />
          )}
          <div className="profile-information">
            <h1 className="profile-name">{Alumnidata.FirstName} {Alumnidata.LastName}</h1>
            <p className="profile-department">
              {Alumnidata.department}
            </p>
            <a href="/CurrentAlumniProfile" className="fyp-btn">View Profile</a>
          </div>
        </div>
  );
}

export default Alumni;
