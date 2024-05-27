import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import './assets/aprofile.css';

function SingleAlumniProfile() {
    const [alumnidata, setAlumnidata] = useState(null);
    const { id } = useParams();
    const Navigate= useNavigate();

    useEffect(() => {
        const fetchAlumniProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/FYP/profile/${id}`);
                setAlumnidata(response.data);
            } catch (error) {
                console.error('Error fetching alumni profile:', error);
            }
        };

        fetchAlumniProfile();
    }, [id]);

    if (!alumnidata) {
        return <div>Loading...</div>;
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/FYP/deletealumni/${id}`);
            alert('Profile deleted successfully');
            Navigate('/AllAlumniProfiles'); 
        } catch (error) {
            console.error('Error deleting profile:', error);
            alert('Failed to delete profile');
        }
    };


    return (
        <>
            <Sidebar />
            <div id="profile-container">
                <div id="profile-header">
                    <div id="profile-image-container">
                        <img src={`http://localhost:3000/uploads/${alumnidata.Uploadpic}`} alt="Profile" id="profile-image" />
                    </div>
                    <div id="profile-info">
                        <h1 id="alumni-name">{alumnidata.Alumniname}</h1>
                        <p id="alumni-email">{alumnidata.alumniemail}</p>
                    </div>
                    <button id="deleteaccbtn" onClick={() => handleDelete(alumnidata._id)} >Delete Account</button>
                </div>
                <div id="profile-details">
                    <div id="personal-info">
                        <h2>Personal Information</h2>
                        <p><strong>Name:</strong> {alumnidata.Alumniname}</p>
                        <p><strong>Email:</strong> {alumnidata.alumniemail}</p>
                        <p><strong>DOB:</strong> {alumnidata.alumnidob}</p>
                        <p><strong>City:</strong> {alumnidata.alumnicity}</p>
                        <p><strong>Postal Code:</strong> {alumnidata.alumnipostalcode}</p>
                    </div>
                    <div id="position-info">
                        <h2>Current Position</h2>
                        <p><strong>Position:</strong> {alumnidata.alumniposition}</p>
                        <p>{alumnidata.PositionDescription}</p>
                    </div>
                    <div id="success-story">
                        <h2>Success Story</h2>
                        <p>{alumnidata.SuccessStory}</p>
                        <video controls id="success-story-video">
                            <source src={`http://localhost:3000/uploads/${alumnidata.UploadVideo}`} type="video/mp4" />
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

export default SingleAlumniProfile;
