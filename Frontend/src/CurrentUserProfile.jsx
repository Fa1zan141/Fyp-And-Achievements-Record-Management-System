import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import './assets/aprofile.css';

function CurrentUserProfile() {
    const [userprofile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/FYP/userprofile/${id}`);
                setUserProfile(response.data);
            } catch (error) {
                setError('Error fetching user profile');
                console.error('Error fetching user profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!userprofile) {
        return <div>No profile found</div>;
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/FYP/deleteuser/${id}`);
            alert('Profile deleted successfully');
            navigate('/Allusers'); 
        } catch (error) {
            console.error('Error deleting profile:', error);
            alert('Failed to delete profile');
        }
    };

    const handleSendMessage = () => {
        // Logic to handle sending a message
    };

    return (
        <>
            <Sidebar />
            <div id="profile-container">
                <div id="profile-header">
                    <div id="profile-image-container">
                        {userprofile.profilePicture && (
                            <img src={`http://localhost:3000/uploads/${userprofile.profilePicture}`} alt="Profile" id="profile-image" />
                        )}
                    </div>
                    <div id="profile-info">
                        <h1 id="user-name">{`${userprofile.FirstName} ${userprofile.LastName}`}</h1>
                        <p id="user-email">{userprofile.email}</p>
                    </div>
                    <button id="deleteaccbtn" onClick={() => handleDelete(userprofile._id)} >Delete Account</button>
                </div>
                <div id="profile-details">
                    <div id="personal-info">
                        <h2>Personal Information</h2>
                        <p><strong>Name:</strong> {`${userprofile.FirstName} ${userprofile.LastName}`}</p>
                        <p><strong>Email:</strong> {userprofile.email}</p>
                        <p><strong>DOB:</strong> {userprofile.dob}</p>
                        <p><strong>City:</strong> {userprofile.city}</p>
                        <p><strong>Postal Code:</strong> {userprofile.postalCode}</p>
                    </div>
                    <div id="position-info">
                        <h2>Role</h2>
                        <p><strong>Role:</strong> {userprofile.role}</p>
                    </div>
                </div>
                <div id="message-btn-container">
                    <button id="message-btn" onClick={handleSendMessage}><h1>Send Message</h1></button>
                </div>
            </div>
            
        </>
    );
}

export default CurrentUserProfile;
