import React from 'react';
import './Alumni.css';

function User({ userprofile }) {
  return (
    <div className="profile-contain">
      {userprofile.profilePicture && (
        <img
          src={`http://localhost:3000/uploads/${userprofile.profilePicture}`}
          alt="Profile"
          className="profile"
        />
      )}
      <div className="profile-information">
        <h1 className="profile-Name">
          {userprofile.FirstName} {userprofile.LastName}
        </h1>
        <p className="profile-Position">
          {userprofile.email}
        </p>
        <a href={`/CurrentUserProfile/${userprofile._id}`} className="fyp-btn">View Profile</a>
      </div>
    </div>
  );
}

export default User;
