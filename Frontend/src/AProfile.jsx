import React from 'react';
import Sidebar from '../Components/Sidebar';
import './assets/aprofile.css';

function AProfile() {
    const alumniData = {
      img: 'Std1.jpg',
        firstName: 'Faizan',
        lastName: 'Lastname',
        email: 'faizan@example.com',
        password: 'password123',
        dob: '1990-01-01',
        city: 'CityName',
        postalCode: '123456',
        currentPosition: 'Current Position',
        positionDescription: 'Description about the current position.',
        successStory: 'This is a success story about the alumni.',
        videoUrl: 'https://www.example.com/success_story_video.mp4'
    };

    return (
        <>
            <Sidebar />
            <div id="profile-container">
                <div id="profile-header">
                    <div id="profile-image-container">
                        <img src={alumniData.img} alt="Profile" id="profile-image" />
                    </div>
                    <div id="profile-info">
                        <h1 id="alumni-name">{alumniData.firstName} {alumniData.lastName}</h1>
                        <p id="alumni-email">{alumniData.email}</p>
                    </div>
                </div>
                <div id="profile-details">
                    <div id="personal-info">
                        <h2>Personal Information</h2>
                        <p><strong>Name:</strong> {alumniData.firstName} {alumniData.lastName}</p>
                        <p><strong>Email:</strong> {alumniData.email}</p>
                        <p><strong>DOB:</strong> {alumniData.dob}</p>
                        <p><strong>City:</strong> {alumniData.city}</p>
                        <p><strong>Postal Code:</strong> {alumniData.postalCode}</p>
                    </div>
                    <div id="position-info">
                        <h2>Current Position</h2>
                        <p><strong>Position:</strong> {alumniData.currentPosition}</p>
                        <p>{alumniData.positionDescription}</p>
                    </div>
                    <div id="success-story">
                        <h2>Success Story</h2>
                        <p>{alumniData.successStory}</p>
                        <video controls id="success-story-video">
                            <source src={alumniData.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div id="message-btn-container">
                    <button id="message-btn"><h1>Send Message</h1></button>
                </div>
            </div>
        </>
    );
}

export default AProfile;
