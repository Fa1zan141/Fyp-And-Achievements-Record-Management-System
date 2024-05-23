import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Alumni from '../Components/Alumni'; 
import { FaSearch } from "react-icons/fa";
import './assets/alumniprofiles.css';
import axios from 'axios';

function AlumniProfiles() {
    const [alumniData, setAlumniData] = useState([]);

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

    return (
        <>
        <Sidebar />
        <div id="ALine"></div>
        <div id="AAR"><p>Alumni Profiles</p></div>
        <div id="forsearch">
            <form action="">
                <input type="search" id="searchbar" name="searchbaralumni" placeholder='Search Profile' />
                <div id="Sicon"><button type="submit"><FaSearch /></button></div>
            </form>
        </div>
        <div id="grid">
            {alumniData.map((item, index) => (
                <Alumni key={index} alumniData={item} />
            ))}
        </div>
    </>
    );
}

export default AlumniProfiles;
