import React from 'react';
import './Alumniprofile.css';

function AlumniProfile({ alumniData }) {
  return (
    <div className="profile-page">
        <div className="profile-container">
          {alumniData.Uploadpic && (
            <img
              src={`http://localhost:3000/uploads/${alumniData.Uploadpic}`}
              alt="Profile"
              className="profile-image"
            />
          )}
          <div className="profile-info">
            <h1 className="profile-name">{alumniData.Alumniname}</h1>
            <p className="profile-details">
              Email: {alumniData.alumniemail} <br />
              Role: {alumniData.alumniposition}
            </p>
            <p className="profile-dob">
              DOB: {alumniData.alumnidob}
            </p>
            <p className="profile-location">
              City: {alumniData.alumnicity} <br />
              Postal Code: {alumniData.alumnipostalcode}
            </p>
            <p className="profile-department">
              Department: {alumniData.alumniposition}
            </p>
            <a href="/CurrentAlumniProfile" className="fyp-button">View Profile</a>
          </div>
        </div>
    </div>
  );
}

export default AlumniProfile;
