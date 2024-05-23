import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import './assets/aprofile.css';

function AProfile() {
    const [alumniData, setAlumniData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchAlumniProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/FYP/profile/${id}`);
                setAlumniData(response.data);
            } catch (error) {
                console.error('Error fetching alumni profile:', error);
            }
        };

        fetchAlumniProfile();
    }, [id]);

    if (!alumniData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Sidebar />
            <div id="profile-container">
                <div id="profile-header">
                    <div id="profile-image-container">
                        <img src={`http://localhost:3000/uploads/${alumniData.Uploadpic}`} alt="Profile" id="profile-image" />
                    </div>
                    <div id="profile-info">
                        <h1 id="alumni-name">{alumniData.Alumniname}</h1>
                        <p id="alumni-email">{alumniData.alumniemail}</p>
                    </div>
                </div>
                <div id="profile-details">
                    <div id="personal-info">
                        <h2>Personal Information</h2>
                        <p><strong>Name:</strong> {alumniData.Alumniname}</p>
                        <p><strong>Email:</strong> {alumniData.alumniemail}</p>
                        <p><strong>DOB:</strong> {alumniData.alumnidob}</p>
                        <p><strong>City:</strong> {alumniData.alumnicity}</p>
                        <p><strong>Postal Code:</strong> {alumniData.alumnipostalcode}</p>
                    </div>
                    <div id="position-info">
                        <h2>Current Position</h2>
                        <p><strong>Position:</strong> {alumniData.alumniposition}</p>
                        <p>{alumniData.PositionDescription}</p>
                    </div>
                    <div id="success-story">
                        <h2>Success Story</h2>
                        <p>{alumniData.SuccessStory}</p>
                        <video controls id="success-story-video">
                            <source src={`http://localhost:3000/uploads/${alumniData.UploadVideo}`} type="video/mp4" />
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
