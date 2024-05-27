import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import User from '../Components/User'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';
import axios from 'axios';

const AdminUserManagement = () => {
    const [userprofiles, setUserProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/FYP/userprofiles'); 
                setUserProfiles(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profiles:', error);
                setError('Error fetching profiles. Please try again later.');
                setLoading(false);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <div>
            <Sidebar />
            <div id="ALine"></div>
            <div id="AAR"><p>All User Profiles</p></div>
            <div id="forsearch">
                <form action="">
                    <input type="search" id="searchbar" name="searchbaralumni" placeholder='Search Profile' />
                    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
                </form>
            </div>
            <div id="grid">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    userprofiles && userprofiles.map((userprofile) => (
                        <User key={userprofile._id} userprofile={userprofile} />
                    ))
                )}
            </div>
        </div>
    );
}

export default AdminUserManagement;
