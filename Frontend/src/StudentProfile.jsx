import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Components/Sidebar';
import { useAuth } from './auth/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './assets/AdminProfile.css';

function StudentProfile() {

    const { token, user } = useAuth();

    const [profilePicture, setProfilePicture] = useState(null);
    const [profileData, setProfileData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        role: '',
        dob: '',
        city: '',
        postalCode: ''
    });
    const profilePictureUrl = useRef(null);
    const fileInputRef = useRef(null); // Ref for the file input

    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            setProfileData({
                FirstName: user.FirstName,
                LastName: user.LastName,
                email: user.email,
                role: user.role,
                dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : '',
                city: user.city || '',
                postalCode: user.postalCode || ''
            });
            if (user.profilePicture) {
                setProfilePicture(user.profilePicture);
            }
        }

        return () => {
            if (profilePictureUrl.current) {
                URL.revokeObjectURL(profilePictureUrl.current);
            }
        };
    }, [user]);


    const handleFileChange = (e) => {
        if (profilePictureUrl.current) {
            URL.revokeObjectURL(profilePictureUrl.current);
        }
        setProfilePicture(e.target.files[0]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setProfileData({ ...profileData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);
        for (const key in profileData) {
            formData.append(key, profileData[key]);
        }

        try {
            const response = await axios.put('http://localhost:3000/FYP/user/update', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('Profile updated successfully');
            navigate('/home'); // Change this to the desired route after update
        } catch (error) {
            console.error('Error updating profile:', error.response ? error.response.data : error.message);
            alert('Failed to update profile');
        }
    };

    const handleProfilePictureClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <Sidebar />
            <div id="PLine"></div>
            <div id="MP"><p>User Information</p></div>
            <div id="ProfilePictureContainer">
                <img
                    id="ProfilePicture"
                    src={
                        profilePicture instanceof File
                            ? (profilePictureUrl.current = URL.createObjectURL(profilePicture))
                            : user && user.profilePicture
                                ? `http://localhost:3000/uploads/${user.profilePicture}`
                                : ''
                    }
                    alt="Profile"
                    onClick={handleProfilePictureClick} // Add onClick handler
                    style={{ cursor: 'pointer' }} // Change cursor to pointer
                />
            </div>
            <div id="name">{user && <h1>{user.FirstName} {user.LastName}</h1>}</div>
            <div id="email1">{user && <h1>{user.email}</h1>}</div>

            <div id="Generalform">
                <form onSubmit={handleUpdate}>
                    <label id='Label1' htmlFor="FirstName">First Name:</label>
                    <input type="text" id="FirstName" name="FirstName" value={profileData.FirstName} onChange={handleChange} />
                    <label id='Label2' htmlFor="LastName">Last Name:</label>
                    <input type="text" id="LastName" name="LastName" value={profileData.LastName} onChange={handleChange} />
                    <label id='Label3' htmlFor="email">Email:</label>
                    <input type="email" id="accemail" name="email" value={profileData.email} onChange={handleChange} />
                    <label id='Label4' htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" value={profileData.role} onChange={handleChange} readOnly />
                    <label id='Label5' htmlFor="dob">DOB:</label>
                    <input type="date" id="dob" name="dob" value={profileData.dob} onChange={handleChange} />
                    <label id='Label6' htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={profileData.city} onChange={handleChange} />
                    <label id='Label7' htmlFor="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" name="postalCode" value={profileData.postalCode} onChange={handleChange} />
                    <input type="file" id="profilePicture" name="profilePicture" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} /> {/* Hidden file input */}
                    <button id="UA" type="submit">Update Information</button>
                </form>
            </div>
        </>
    );
}

export default StudentProfile;
