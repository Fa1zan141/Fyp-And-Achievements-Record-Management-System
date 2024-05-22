import React from 'react';
import './Alumniprofile.css';

function AlumniProfile({ Alumnidata }) {
  return (
    <div className="profile-page">
        <div className="profile-container">
          {Alumnidata.img && (
            <img
              src={Alumnidata.img}
              alt="Profile"
              className="profile-image"
            />
          )}
          <div className="profile-info">
            <h1 className="profile-name">{Alumnidata.FirstName} {Alumnidata.LastName}</h1>
            <p className="profile-details">
              Email: {Alumnidata.email} <br />
              Role: {Alumnidata.role}
            </p>
            <p className="profile-dob">
              DOB: {Alumnidata.dob}
            </p>
            <p className="profile-location">
              City: {Alumnidata.city} <br />
              Postal Code: {Alumnidata.postalCode}
            </p>
            <p className="profile-department">
              Department: {Alumnidata.department}
            </p>
            <a href="/CurrentAlumniProfile" className="fyp-button">View Profile</a>
          </div>
        </div>
    </div>
  );
}

export default AlumniProfile;
