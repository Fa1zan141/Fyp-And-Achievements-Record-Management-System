import React from 'react';
import './Alumni.css';

function SingleAlumniCard({ alumnidata }) {
  return (
    <div className="profile-contain">
      {alumnidata.Uploadpic && (
        <img
          src={`http://localhost:3000/uploads/${alumnidata.Uploadpic}`}
          alt="Profile"
          className="profile"
        />
      )}
      <div className="profile-information">
        <h1 className="profile-Name">{alumnidata.Alumniname}</h1>
        <p className="profile-Position">
          {alumnidata.alumniposition}
        </p>
        <a href={`/singleAlumniProfile/${alumnidata._id}`} className="fyp-btn">View Profile</a>
      </div>
    </div>
  );
}

export default SingleAlumniCard;
