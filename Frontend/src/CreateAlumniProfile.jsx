import React, { useState } from 'react';
import Withoutsidenav from '../Components/Withoutsidenav';
import './Alumniprofile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function CreateAlumniProfile() {
    
    const [formData, setFormData] = useState({
        Alumniname: '',
        alumniemail: '',
        alumnidob: '',
        alumnicity: '',
        alumnipostalcode: '',
        alumniposition: '',
        PositionDescription: '',
        SuccessStory: '',
        UploadVideo: null,
        Uploadpic: null
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataObj = new FormData();
            for (const key in formData) {
                formDataObj.append(key, formData[key]);
            }
            const result = await axios.post('http://localhost:3000/FYP/addprofile', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (result.data.status !== 'ok') {
                Toastify({
                    text: result.data.message,
                    duration: 3000,
                    gravity: "top",
                    style: {
                        background: "linear-gradient(to right, blue, green)",
                        borderRadius: "10px",
                    },
                }).showToast();
                navigate('/alumniprofiles');
            } else {
                Toastify({
                    text: result.data.message,
                    duration: 3000,
                    gravity: "top",
                    style: {
                        background: "linear-gradient(to right, yellow, blue)",
                        borderRadius: "10px",
                    },
                }).showToast();
            }
        } catch (error) {
            console.error('Error creating alumni profile:', error);
            Toastify({
                text: 'An error occurred during profile creation',
                duration: 3000,
                gravity: "top",
                backgroundColor: "red",
            }).showToast();
        }
    };

    return (
        <>
            <Withoutsidenav />
            <div id="AtagLine"></div>
            <div id="AlumniTag"><p>Create Alumni Profile</p></div>
            <div id="profile-creation-container">
                <form id="profile-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Alumniname">Enter Name:</label>
                        <input type="text" id="Alumniname" name="Alumniname" placeholder='Enter Your Name' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumniemail">Enter Email:</label>
                        <input type="email" id="alumniemail" name="alumniemail" placeholder='Enter Your Email' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnidob">DOB:</label>
                        <input type="date" id="alumnidob" name="alumnidob" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnicity">City:</label>
                        <input type="text" id="alumnicity" name="alumnicity" placeholder='Enter City' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnipostalcode">Postal Code:</label>
                        <input type="text" id="alumnipostalcode" name="alumnipostalcode" placeholder='Enter Postal Code' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumniposition">Current Position:</label>
                        <input type="text" id="alumniposition" name="alumniposition" placeholder='Current Position' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PositionDescription">Position Description:</label>
                        <textarea id="PositionDescription" name="PositionDescription" placeholder='Description' onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SuccessStory">Success Story:</label>
                        <textarea id="SuccessStory" name="SuccessStory" placeholder='Share your success story' onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="UploadVideo">Upload Success Story Video:</label>
                        <input type="file" id="UploadVideo" name="UploadVideo" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Uploadpic">Upload Profile Picture:</label>
                        <input type="file" id="Uploadpic" name="Uploadpic" onChange={handleChange} />
                    </div>
                    <div id="Submitrcd">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateAlumniProfile;
