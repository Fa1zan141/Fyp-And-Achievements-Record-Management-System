import React from 'react';
import Withoutsidenav from '../Components/Withoutsidenav';
import './Alumniprofile.css';

function CreateAlumniProfile() {
    return (
        <>
            <Withoutsidenav />
            <div id="AtagLine"></div>
            <div id="AlumniTag"><p>Create Alumni Profile</p></div>
            <div id="profile-creation-container">
                <form id="profile-form">
                    <div className="form-group">
                        <label htmlFor="Alumniname">Enter Name:</label>
                        <input type="text" id="Alumniname" name="Alumniname" placeholder='Enter Your Name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumniemail">Enter Email:</label>
                        <input type="email" id="alumniemail" name="alumniemail" placeholder='Enter Your Email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnipassword">Password:</label>
                        <input type="password" id="alumnipassword" name="alumnipassword" placeholder='Enter Password' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnidob">DOB:</label>
                        <input type="date" id="alumnidob" name="alumnidob" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnicity">City:</label>
                        <input type="text" id="alumnicity" name="alumnicity" placeholder='Enter City' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumnipostalcode">Postal Code:</label>
                        <input type="text" id="alumnipostalcode" name="alumnipostalcode" placeholder='Enter Postal Code' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alumniposition">Current Position:</label>
                        <input type="text" id="alumniposition" name="alumniposition" placeholder='Current Position' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PositionDescription">Position Description:</label>
                        <textarea id="PositionDescription" name="PositionDescription" placeholder='Description'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SuccessStory">Success Story:</label>
                        <textarea id="SuccessStory" name="SuccessStory" placeholder='Share your success story'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="UploadVideo">Upload Success Story Video:</label>
                        <input type="file" id="UploadVideo" name="UploadVideo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Uploadpic">Upload Profile Picture:</label>
                        <input type="file" id="Uploadpic" name="Uploadpic" />
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
