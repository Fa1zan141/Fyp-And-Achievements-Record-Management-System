import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Alumni from '../Components/Alumni'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';
import axios from 'axios';

function AlumniProfiles() {
    const [alumniData, setAlumniData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Fetch all profiles from the server when the component mounts
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/FYP/profiles'); 
                setAlumniData(response.data.data);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Optionally, you could perform additional actions on form submit
    };

    const filteredAlumni = alumniData.filter(record => {
        const searchTerm = search.toLowerCase();
        return (record.Alumniname && record.Alumniname.toLowerCase().includes(searchTerm)) ||
            (record.alumniposition && record.alumniposition.toLowerCase().includes(searchTerm));
    });

    return (
        <>
            <Sidebar />
            <div id="ALine"></div>
            <div id="AAR"><p>Alumni Profiles</p></div>
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
                    <div id="Sicon">
                        <button type="submit"><FaSearch /></button>
                    </div>
                </form>
            </div>
            <div id="grid">
                {filteredAlumni.map((item, index) => (
                    <Alumni key={index} alumniData={item} />
                ))}
            </div>
        </>
    );
}

export default AlumniProfiles;
