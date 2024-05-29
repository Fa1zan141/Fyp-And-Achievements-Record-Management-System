import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import User from '../Components/User'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';
import axios from 'axios';

const AdminUserManagement = () => {
    const [userprofiles, setUserProfiles] = useState([]);
    const [search, setSearch] = useState('');
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

    const handleSearch = (e) => {
        e.preventDefault();
        // Optionally, you could perform additional actions on form submit
    };

    const filteredProfiles = userprofiles.filter(profile => {
        const searchTerm = search.toLowerCase();
        return (
            profile.FirstName && profile.FirstName.toLowerCase().includes(searchTerm) ||
            profile.LastName && profile.LastName.toLowerCase().includes(searchTerm) ||
            profile.email && profile.email.toLowerCase().includes(searchTerm) ||
            profile.role && profile.role.toLowerCase().includes(searchTerm) ||
            profile.city && profile.city.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <div>
            <Sidebar />
            <div id="ALine"></div>
            <div id="AAR"><p>All User Profiles</p></div>
            <div id="forsearch">
                <form onSubmit={handleSearch}>
                    <input 
                        type="search" 
                        id="searchbar" 
                        name="searchbaralumni" 
                        placeholder='Search Profile' 
                        value={search}  
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                    <div id="Sicon"><button type="submit"><FaSearch /></button></div>
                </form>
            </div>
            <div id="grid">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    filteredProfiles.map((userprofile) => (
                        <User key={userprofile._id} userprofile={userprofile} />
                    ))
                )}
            </div>
        </div>
    );
}

export default AdminUserManagement;
